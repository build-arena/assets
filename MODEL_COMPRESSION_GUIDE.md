# Web Model Compression Guide

本文档给渲染/资产团队复用，用于把大量 `.glb` 模型压缩成适合纯静态网页部署的格式。当前站点没有后端服务器，所有资源都由 GitHub Pages / 静态文件服务器直接提供。

## 目标

- 输出仍然是单文件 `.glb`，便于静态托管和前端直接加载。
- 使用 `EXT_meshopt_compression` 压缩几何数据。
- 使用 `EXT_texture_webp` 把内嵌贴图转成 WebP。
- 使用 `KHR_mesh_quantization` 量化顶点属性。
- 移除网页不需要的源文件，例如 `.blend`、`.blend1`。

当前项目实测结果：

```text
原始 GLB 总大小: 5285.47 MB
常规压缩后 GLB 总大小: 284.82 MB
激进压缩后 GLB 总大小: 180.18 MB

完整部署目录:
5.83 GB -> 356.99 MB
```

## 前端要求

压缩后的模型会包含 `EXT_meshopt_compression`，Three.js 的 `GLTFLoader` 必须启用 `MeshoptDecoder`。

```ts
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";

const loader = new GLTFLoader();
loader.setMeshoptDecoder(MeshoptDecoder);
```

如果不加 decoder，浏览器会报错：

```text
THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files
```

## 工具安装

建议在临时工具目录安装，不要污染部署仓库。

```powershell
mkdir C:\Users\123\AppData\Local\Temp\gltf-compression-tools
cd C:\Users\123\AppData\Local\Temp\gltf-compression-tools
npm init -y
npm install @gltf-transform/cli
```

本项目使用的是：

```text
glTF-Transform CLI 4.4.0
```

## 单文件压缩

常规压缩参数，适合先做默认方案：

```powershell
node C:\Users\123\AppData\Local\Temp\gltf-compression-tools\node_modules\@gltf-transform\cli\bin\cli.js optimize input.glb output.glb --compress meshopt --simplify true --simplify-ratio 0.25 --simplify-error 0.01 --texture-compress webp --texture-size 1024
```

激进压缩参数，适合网页展示优先、可接受细节降低：

```powershell
node C:\Users\123\AppData\Local\Temp\gltf-compression-tools\node_modules\@gltf-transform\cli\bin\cli.js optimize input.glb output.glb --compress meshopt --simplify true --simplify-ratio 0.1 --simplify-error 0.03 --texture-compress webp --texture-size 512
```

参数含义：

- `--compress meshopt`: 使用 Meshopt 压缩几何数据，浏览器加载快，适合 Web。
- `--simplify true`: 开启网格简化。
- `--simplify-ratio 0.1`: 保留约 10% 几何细节。数值越小，模型越轻，细节越少。
- `--simplify-error 0.03`: 允许更高简化误差。数值越大，压缩越狠，形状越可能变化。
- `--texture-compress webp`: 内嵌贴图转 WebP。
- `--texture-size 512`: 贴图最大边长限制到 512px。

## 批量压缩脚本

下面脚本会递归处理目录下所有 `.glb`，输出仍覆盖为 `.glb`，不会生成外部 `.bin`。

重要：从原始未压缩模型开始跑，不要在已经压缩过的 `.glb` 上反复压缩。

```powershell
$root = "C:\path\to\data"
$cli = "C:\Users\123\AppData\Local\Temp\gltf-compression-tools\node_modules\@gltf-transform\cli\bin\cli.js"
$listRoot = "C:\Users\123\AppData\Local\Temp\gltf-compression-tools\lists"

Remove-Item -Recurse -Force $listRoot -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force $listRoot | Out-Null

$paths = @(Get-ChildItem -Path $root -Recurse -Filter "*.glb" -File | Sort-Object FullName | Select-Object -ExpandProperty FullName)
$workerCount = 4

for ($workerIndex = 0; $workerIndex -lt $workerCount; $workerIndex++) {
  $chunk = for ($fileIndex = $workerIndex; $fileIndex -lt $paths.Count; $fileIndex += $workerCount) {
    $paths[$fileIndex]
  }
  Set-Content -Path (Join-Path $listRoot "worker_$workerIndex.txt") -Value $chunk -Encoding UTF8
}

$jobs = for ($workerIndex = 0; $workerIndex -lt $workerCount; $workerIndex++) {
  $listPath = Join-Path $listRoot "worker_$workerIndex.txt"
  Start-Job -ArgumentList $listPath, $workerIndex, $cli, $root -ScriptBlock {
    param($listPath, $workerIndex, $cli, $root)

    $paths = @(Get-Content -Path $listPath)
    $processed = 0

    foreach ($path in $paths) {
      $before = (Get-Item $path).Length
      $out = $path -replace '\.glb$', '.compressed.glb'

      $commandOutput = & node $cli optimize $path $out `
        --compress meshopt `
        --simplify true `
        --simplify-ratio 0.1 `
        --simplify-error 0.03 `
        --texture-compress webp `
        --texture-size 512 2>&1

      if ($LASTEXITCODE -ne 0) {
        throw "Compression failed for $path`n$commandOutput"
      }

      Move-Item -Force $out $path
      $after = (Get-Item $path).Length
      $processed += 1
      $saved = [math]::Round((1 - ($after / $before)) * 100, 1)
      $relative = $path.Substring($root.Length + 1)
      "worker=$workerIndex processed=$processed/$($paths.Count) saved=$saved% $relative"
    }
  }
}

Wait-Job $jobs
Receive-Job $jobs
$failed = @($jobs | Where-Object { $_.State -ne 'Completed' })
Remove-Job $jobs

if ($failed.Count -gt 0) {
  exit 1
}
```

## 部署目录清理

网页运行通常不需要 Blender 源文件，可以从部署目录删除：

```powershell
$data = "C:\path\to\data"
Get-ChildItem -Path $data -Recurse -File -Include "*.blend", "*.blend1" | Remove-Item -Force
```

不要删除 `.bsg`，如果页面上有下载按钮引用它们。

## 验证压缩结果

统计总体积：

```powershell
$repo = "C:\path\to\site"
$files = Get-ChildItem -Path $repo -Recurse -File -Force | Where-Object { $_.FullName -notlike "*\.git\*" }
"total_mb=$([math]::Round((($files | Measure-Object -Property Length -Sum).Sum)/1MB, 2))"

$files | Group-Object Extension | ForEach-Object {
  [pscustomobject]@{
    Ext = if ($_.Name) { $_.Name } else { "<none>" }
    Files = $_.Count
    MB = [math]::Round((($_.Group | Measure-Object -Property Length -Sum).Sum)/1MB, 2)
  }
} | Sort-Object MB -Descending | Format-Table -AutoSize
```

检查单个 GLB 是否真的压缩：

```powershell
node C:\Users\123\AppData\Local\Temp\gltf-compression-tools\node_modules\@gltf-transform\cli\bin\cli.js inspect path\to\model.glb
```

期望看到：

```text
extensionsUsed:
EXT_mesh_gpu_instancing
EXT_meshopt_compression
EXT_texture_webp
KHR_mesh_quantization

extensionsRequired:
EXT_meshopt_compression
EXT_texture_webp
KHR_mesh_quantization
```

## 质量验收

压缩后必须人工检查：

- 模型轮廓是否明显变形。
- 细长结构、连接件、轮子、曲面是否被简化坏。
- 贴图是否糊到不可接受。
- 每个步骤播放时是否有明显跳变。
- 浏览器控制台是否有 GLB/decoder 加载错误。

如果质量不够，优先调大：

```text
--simplify-ratio 0.1 -> 0.2 或 0.25
--simplify-error 0.03 -> 0.01
--texture-size 512 -> 1024
```

## 推荐交付规范

渲染团队后续交付 Web 模型时，建议直接交付两份：

- `source/`: 原始高质量 `.blend`、未压缩 `.glb`，用于归档和重新生成。
- `web/`: 压缩后的 `.glb`，只用于网页部署。

不要只保留压缩版。压缩是有损过程，后续需要调整质量时应从原始模型重新生成。
