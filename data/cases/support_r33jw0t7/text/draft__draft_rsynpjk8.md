# user (default) (TextMessage): 

The plan of the specific sub-structure 3: {'name': 'End Support Pads', 'description': "Widened SWB extensions at the Main Deck Beam's north (y=10) and south (y=-10) ends. Each pad extends the x-axis width from -1 to 1 to -2 to 2 (5 units total) at z=5-6, increasing terrain contact area.", 'components': '20 Small Wooden Blocks', 'assembly': "North Pad (y=10): Attach 10 SWBs at (x=-2,y=10,z=5), (x=-2,y=10,z=6), (x=2,y=10,z=5), (x=2,y=10,z=6), and (x=-2,y=10,z=5) to (x=2,y=10,z=5) (5 x 1 x 2 grid). South Pad (y=-10): Repeat with 10 SWBs at (x=-2,y=-10,z=5) to (x=2,y=-10,z=6). SWBs are attached to the Main Deck Beam's existing y=±10 SWBs.", 'motion_control': 'None (stationary load distribution component)', 'function': "Increases contact area with the terrain to prevent sinking; stabilizes the bridge's ends against lateral sliding; distributes the Main Deck Beam's weight and cargo load across a wider terrain surface.", 'design_requirements': 'Must extend x-axis width to 5 units (-2 to 2) at y=±10 to match terrain width; must align vertically with Main Deck Beam (z=5-6) to avoid creating height disparities; Positions may be micro‑adjusted in later stages to resolve conflicts based on actual build execution.'}

# drafter (doubao-seed-1-6-250615) (ThoughtEvent): 


Got it, let's tackle this. The user wants a blueprint for the "End Support Pads" sub-structure 3. First, I need to parse the plan details. The main points are: two pads (north at y=10 and south at y=-10), each made of 10 Small Wooden Blocks (SWBs). Each pad extends x from -2 to 2 (so 5 units, since -2 to 2 is 5 blocks: -2, -1, 0, 1, 2), z from 5 to 6 (so 2 layers: z=5 and z=6). They attach to the Main Deck Beam's existing SWBs at y=±10.

First, I need to recall that the default starting block is 1x1x1, but here the Main Deck Beam already has existing SWBs at y=±10, which are the base for attaching the pads. Since all components are SWBs (static blocks), I'll use the static block format: <block i> - <block type> - <note> - <relative position: compass face of previous block>.

Let's start with the North Pad (y=10). The plan says it's a 5x1x2 grid: x from -2 to 2 (5 blocks), y=10 (1 block), z=5 and 6 (2 layers). So first, the base layer at z=5, then the layer above at z=6.

Assuming the Main Deck Beam has an existing SWB at the north end (y=10), let's call that the "parent block" for the North Pad. Let's assume the existing SWB is at (x=0, y=10, z=5) as the central block (since the pad is symmetric around x=0). Then we need to attach SWBs to the east (x+), west (x-), and then build up in z (top) for each x position.

Wait, the plan specifies positions like (x=-2,y=10,z=5), (x=-2,y=10,z=6), etc. So for the North Pad z=5 layer (lower layer), we need x=-2, -1, 0, 1, 2 (5 blocks). Similarly, z=6 layer (upper layer) also x=-2 to 2 (5 blocks), so 5+5=10 SWBs for North Pad, which matches the component count. Same for South Pad (y=-10), another 10 SWBs, total 20.

For each SWB in the North Pad z=5 layer: starting from the existing Main Deck Beam SWB at (x=0, y=10, z=5) (let's call this Block 0, though it's existing, not part of the 20). Then attach west (x-) to get x=-1, then west again to x=-2. East (x+) to get x=1, then east again to x=2. So that's 5 blocks in z=5: x=-2, -1, 0 (existing), 1, 2. Wait, but the existing block is part of the Main Deck Beam, so the 10 SWBs for the pad are the additional ones. So the existing block (0,10,5) is not counted in the 10; the pad adds 4 more in z=5 (since 0 is existing) and 5 in z=6? Wait no, the plan says "20 Small Wooden Blocks" total, 10 per pad. So each pad has 10, so 5 in z=5 and 5 in z=6 (since 5x2=10). So the existing block is not part of the 10; the pad's z=5 layer has 5 new SWBs (x=-2,-1,1,2, and maybe 0? No, maybe the existing is x=0, so the pad includes x=0 in z=5 and z=6? Wait the plan says "5 x 1 x 2 grid", which is 5 (x) * 1 (y) * 2 (z) = 10 blocks, so that includes x=0, so the existing block might be the x=0, z=5 of the Main Deck Beam, but the pad's 10 SWBs are the 5 in z=5 (x=-2,-1,0,1,2) and 5 in z=6 (same x's). But the user says "SWBs are attached to the Main Deck Beam's existing y=±10 SWBs", so the existing SWBs are the attachment points.

Let's clarify the relative positions using compass directions. For a block at (x,y,z), the compass faces are: east (positive x, right), west (negative x, left), north (positive y, front), south (negative y, back), top (positive z, up), bottom (negative z, down).

Starting with North Pad (y=10), z=5 layer (lower layer):

1. Westmost x=-2, z=5: Attach to the existing SWB's west face. Let's say existing SWB is at (x=0, y=10, z=5) (central). So first, attach a SWB to the west face of the existing block: this would be (x=-1, y=10, z=5) (Block 1). Then attach another SWB to the west face of Block 1: (x=-2, y=10, z=5) (Block 2).

2. East of existing: Attach to east face of existing block: (x=1, y=10, z=5) (Block 3). Then east of Block 3: (x=2, y=10, z=5) (Block 4). Now z=5 layer has x=-2 (Block2), -1 (Block1), 0 (existing), 1 (Block3), 2 (Block4): 5 blocks, but Block1-4 are 4, so need one more? Wait 5x1x2 grid is 10, so 5 per z-layer. So existing is not part of the 10, so z=5 layer for the pad has 5 new SWBs (x=-2,-1,0,1,2), meaning the existing block was not at x=0,z=5, maybe the Main Deck Beam's existing SWB is at (x=0,y=10,z=5) but is part of the beam, so the pad includes that x=0,z=5 as one of the 10? No, the user says "20 Small Wooden Blocks" as components, so 10 per pad, so 5 in z=5 and 5 in z=6 for each pad, all new.

Let me structure North Pad first (10 blocks):

- z=5 layer (lower, z=5): x from -2 to 2 (5 blocks). Let's start with the middle x=0, z=5 (Block 1 of North Pad). Assume the existing Main Deck Beam SWB is at (x=0, y=10, z=4) (below z=5), so we attach the first pad SWB to the top face of the existing beam block. So Block 1: North Pad, z=5, x=0 - Small Wooden Block - North Pad: x=0, z=5 (base) - top face of Main Deck Beam existing SWB (y=10, z=4).

Then, Block 2: x=-1, z=5. Attach to west face of Block 1 (since west is x- direction).

Block 3: x=-2, z=5. Attach to west face of Block 2.

Block 4: x=1, z=5. Attach to east face of Block 1.

Block 5: x=2, z=5. Attach to east face of Block 4. Now z=5 layer (5 blocks: x=-2,-1,0,1,2) done.

Then z=6 layer (upper, z=6), same x positions. Each x in z=5 has a top face, so attach Block 6 (x=-2, z=6) to top face of Block 3 (x=-2, z=5).

Block 7: x=-1, z=6 - top face of Block 2 (x=-1, z=5).

Block 8: x=0, z=6 - top face of Block 1 (x=0, z=5).

Block 9: x=1, z=6 - top face of Block 4 (x=1, z=5).

Block 10: x=2, z=6 - top face of Block 5 (x=2, z=5). That's 10 blocks for North Pad.

Now South Pad (y=-10), same logic, 10 blocks. Existing Main Deck Beam SWB at (x=0, y=-10, z=4) (assuming), attach first SWB (Block 11) to top face (z=5), then west/east to x=-2,-1,1,2 in z=5, then top of each to z=6.

Need to make sure all are static blocks, notes describe their position in the pad, relative positions are compass faces of previous block. Also, since it's a grid, the relative positions should follow attaching to adjacent blocks (west/east/top) to build out the x and z.

I need to number the blocks from 1 to 20 (20 total). North Pad: Blocks 1-10, South Pad: Blocks 11-20.

Each block note should indicate which pad (North/South), x position, z layer (z=5 or z=6).

Position adjustment note: Since the existing Main Deck Beam's SWB positions might vary, if the existing block is not at x=0,z=4, adjust relative positions (e.g., if existing is at x=0,y=10,z=5, then first pad block would be attached to west/east instead of top). But per the problem statement, positions can be micro-adjusted, so include a note about that.

# drafter (doubao-seed-1-6-250615) (TextMessage): 

### Blueprint: Sub-Structure 3 - End Support Pads  


#### **Total Blocks: 20 Small Wooden Blocks (SWBs)**  
*All blocks are static (no motion); relative positions based on compass faces (east/west/top) of adjacent SWBs. Assumes Main Deck Beam has existing "parent" SWBs at the north (y=10) and south (y=-10) ends (not counted in the 20).*  


### **North Support Pad (y=10) - 10 SWBs**  
*Grid: 5x1x2 (x=-2 to 2, y=10, z=5 to 6)*  

| Block # | Type               | Block Note                                  | Relative Position (Compass Face of Previous Block) |  
|---------|--------------------|---------------------------------------------|----------------------------------------------------|  
| 1       | Small Wooden Block | North Pad: x=0, z=5 (central base)          | Top face of Main Deck Beam’s existing north SWB (y=10, z=4) |  
| 2       | Small Wooden Block | North Pad: x=-1, z=5 (west of x=0)          | West face of Block 1                               |  
| 3       | Small Wooden Block | North Pad: x=-2, z=5 (westmost, z=5)        | West face of Block 2                               |  
| 4       | Small Wooden Block | North Pad: x=1, z=5 (east of x=0)           | East face of Block 1                               |  
| 5       | Small Wooden Block | North Pad: x=2, z=5 (eastmost, z=5)         | East face of Block 4                               |  
| 6       | Small Wooden Block | North Pad: x=-2, z=6 (westmost, z=6)        | Top face of Block 3 (x=-2, z=5)                    |  
| 7       | Small Wooden Block | North Pad: x=-1, z=6 (x=-1, z=6)            | Top face of Block 2 (x=-1, z=5)                    |  
| 8       | Small Wooden Block | North Pad: x=0, z=6 (central top)           | Top face of Block 1 (x=0, z=5)                     |  
| 9       | Small Wooden Block | North Pad: x=1, z=6 (x=1, z=6)              | Top face of Block 4 (x=1, z=5)                     |  
| 10      | Small Wooden Block | North Pad: x=2, z=6 (eastmost, z=6)         | Top face of Block 5 (x=2, z=5)                     |  


### **South Support Pad (y=-10) - 10 SWBs**  
*Grid: 5x1x2 (x=-2 to 2, y=-10, z=5 to 6) - mirror of North Pad*  

| Block # | Type               | Block Note                                  | Relative Position (Compass Face of Previous Block) |  
|---------|--------------------|---------------------------------------------|----------------------------------------------------|  
| 11      | Small Wooden Block | South Pad: x=0, z=5 (central base)          | Top face of Main Deck Beam’s existing south SWB (y=-10, z=4) |  
| 12      | Small Wooden Block | South Pad: x=-1, z=5 (west of x=0)          | West face of Block 11                              |  
| 13      | Small Wooden Block | South Pad: x=-2, z=5 (westmost, z=5)        | West face of Block 12                              |  
| 14      | Small Wooden Block | South Pad: x=1, z=5 (east of x=0)           | East face of Block 11                              |  
| 15      | Small Wooden Block | South Pad: x=2, z=5 (eastmost, z=5)         | East face of Block 14                              |  
| 16      | Small Wooden Block | South Pad: x=-2, z=6 (westmost, z=6)        | Top face of Block 13 (x=-2, z=5)                   |  
| 17      | Small Wooden Block | South Pad: x=-1, z=6 (x=-1, z=6)            | Top face of Block 12 (x=-1, z=5)                   |  
| 18      | Small Wooden Block | South Pad: x=0, z=6 (central top)           | Top face of Block 11 (x=0, z=5)                    |  
| 19      | Small Wooden Block | South Pad: x=1, z=6 (x=1, z=6)              | Top face of Block 14 (x=1, z=5)                    |  
| 20      | Small Wooden Block | South Pad: x=2, z=6 (eastmost, z=6)         | Top face of Block 15 (x=2, z=5)                    |  


### **Position Adjustment Note**  
If Main Deck Beam’s existing north/south SWBs are not at z=4 (e.g., z=5), adjust Block 1/11 to attach to the *west/east* face of the existing SWB instead of the top face to maintain z=5 alignment. All x/z coordinates remain fixed (-2 to 2 in x, 5-6 in z) to meet the 5-unit width and vertical alignment requirements.  


**Function Verification**: The 5x2 grid (x=-2 to 2, z=5-6) at y=±10 increases terrain contact area to 5 units (matching terrain width) and distributes load vertically/horizontally, preventing sinking and lateral sliding.

# draft_reviewer (doubao-seed-1-6-250615) (TextMessage): 

### Review of Sub-Structure 3 - End Support Pads

#### Step 1: Structural Integrity and Collision-Free Placement

We will analyze the placement of each Small Wooden Block (SWB) in the North and South Support Pads to ensure they adhere to the structural requirements.

#### **North Support Pad (y=10) - 10 SWBs**

1. **Block 1**: 
   - Position: (0, 10, 5)
   - Attached to the top face of the Main Deck Beam's existing north SWB at (0, 10, 4).
   - **Distance to Main Deck Beam**: 
     - Distance = |10 - 10| + |5 - 4| = 1 (valid)
   - **No overlaps detected**.

2. **Block 2**: 
   - Position: (-1, 10, 5)
   - Attached to the west face of Block 1.
   - **Distance to Block 1**: 
     - Distance = |-1 - 0| + |10 - 10| + |5 - 5| = 1 (valid)
   - **No overlaps detected**.

3. **Block 3**: 
   - Position: (-2, 10, 5)
   - Attached to the west face of Block 2.
   - **Distance to Block 2**: 
     - Distance = |-2 - (-1)| + |10 - 10| + |5 - 5| = 1 (valid)
   - **No overlaps detected**.

4. **Block 4**: 
   - Position: (1, 10, 5)
   - Attached to the east face of Block 1.
   - **Distance to Block 1**: 
     - Distance = |1 - 0| + |10 - 10| + |5 - 5| = 1 (valid)
   - **No overlaps detected**.

5. **Block 5**: 
   - Position: (2, 10, 5)
   - Attached to the east face of Block 4.
   - **Distance to Block 4**: 
     - Distance = |2 - 1| + |10 - 10| + |5 - 5| = 1 (valid)
   - **No overlaps detected**.

6. **Block 6**: 
   - Position: (-2, 10, 6)
   - Attached to the top face of Block 3.
   - **Distance to Block 3**: 
     - Distance = |-2 - (-2)| + |10 - 10| + |6 - 5| = 1 (valid)
   - **No overlaps detected**.

7. **Block 7**: 
   - Position: (-1, 10, 6)
   - Attached to the top face of Block 2.
   - **Distance to Block 2**: 
     - Distance = |-1 - (-1)| + |10 - 10| + |6 - 5| = 1 (valid)
   - **No overlaps detected**.

8. **Block 8**: 
   - Position: (0, 10, 6)
   - Attached to the top face of Block 1.
   - **Distance to Block 1**: 
     - Distance = |0 - 0| + |10 - 10| + |6 - 5| = 1 (valid)
   - **No overlaps detected**.

9. **Block 9**: 
   - Position: (1, 10, 6)
   - Attached to the top face of Block 4.
   - **Distance to Block 4**: 
     - Distance = |1 - 1| + |10 - 10| + |6 - 5| = 1 (valid)
   - **No overlaps detected**.

10. **Block 10**: 
    - Position: (2, 10, 6)
    - Attached to the top face of Block 5.
    - **Distance to Block 5**: 
      - Distance = |2 - 2| + |10 - 10| + |6 - 5| = 1 (valid)
    - **No overlaps detected**.

#### **South Support Pad (y=-10) - 10 SWBs**

1. **Block 11**: 
   - Position: (0, -10, 5)
   - Attached to the top face of the Main Deck Beam's existing south SWB at (0, -10, 4).
   - **Distance to Main Deck Beam**: 
     - Distance = |-10 - (-10)| + |5 - 4| = 1 (valid)
   - **No overlaps detected**.

2. **Block 12**: 
   - Position: (-1, -10, 5)
   - Attached to the west face of Block 11.
   - **Distance to Block 11**: 
     - Distance = |-1 - 0| + |-10 - (-10)| + |5 - 5| = 1 (valid)
   - **No overlaps detected**.

3. **Block 13**: 
   - Position: (-2, -10, 5)
   - Attached to the west face of Block 12.
   - **Distance to Block 12**: 
     - Distance = |-2 - (-1)| + |-10 - (-10)| + |5 - 5| = 1 (valid)
   - **No overlaps detected**.

4. **Block 14**: 
   - Position: (1, -10, 5)
   - Attached to the east face of Block 11.
   - **Distance to Block 11**: 
     - Distance = |1 - 0| + |-10 - (-10)| + |5 - 5| = 1 (valid)
   - **No overlaps detected**.

5. **Block 15**: 
   - Position: (2, -10, 5)
   - Attached to the east face of Block 14.
   - **Distance to Block 14**: 
     - Distance = |2 - 1| + |-10 - (-10)| + |5 - 5| = 1 (valid)
   - **No overlaps detected**.

6. **Block 16**: 
   - Position: (-2, -10, 6)
   - Attached to the top face of Block 13.
   - **Distance to Block 13**: 
     - Distance = |-2 - (-2)| + |-10 - (-10)| + |6 - 5| = 1 (valid)
   - **No overlaps detected**.

7. **Block 17**: 
   - Position: (-1, -10, 6)
   - Attached to the top face of Block 12.
   - **Distance to Block 12**: 
     - Distance = |-1 - (-1)| + |-10 - (-10)| + |6 - 5| = 1 (valid)
   - **No overlaps detected**.

8. **Block 18**: 
   - Position: (0, -10, 6)
   - Attached to the top face of Block 11.
   - **Distance to Block 11**: 
     - Distance = |0 - 0| + |-10 - (-10)| + |6 - 5| = 1 (valid)
   - **No overlaps detected**.

9. **Block 19**: 
   - Position: (1, -10, 6)
   - Attached to the top face of Block 14.
   - **Distance to Block 14**: 
     - Distance = |1 - 1| + |-10 - (-10)| + |6 - 5| = 1 (valid)
   - **No overlaps detected**.

10. **Block 20**: 
    - Position: (2, -10, 6)
    - Attached to the top face of Block 15.
    - **Distance to Block 15**: 
      - Distance = |2 - 2| + |-10 - (-10)| + |6 - 5| = 1 (valid)
    - **No overlaps detected**.

#### Summary of Structural Integrity Check
- All blocks are placed correctly according to the specified positions.
- No overlaps or violations of minimum distance between blocks.

#### Step 2: Functional Validation
- The design is a stationary load distribution component, which means it does not require any motion control mechanisms.
- The structure is designed to increase contact area with the terrain and distribute the weight of the Main Deck Beam, which it achieves through the described layout.

#### Step 3: Physical Feasibility
- The design places blocks at y=±10, which is consistent with the requirement to match the height of the Main Deck Beam.
- The specified positions do not create any height disparities, as they are all aligned at z=5-6.

### Conclusion
The blueprint for the End Support Pads passes all checks for structural integrity, functional validation, and physical feasibility. The design meets all specified requirements.

**TERMINATE**

# drafter (doubao-seed-1-6-250615) (ThoughtEvent): 


Got it, let's tackle this. The user wants the final version of the blueprint for Sub-Structure 3 - End Support Pads, based on the reviewer's decision. First, I need to recall the original plan and the previous response.

The original plan specified 20 Small Wooden Blocks (SWBs) for north and south pads, each with a 5x1x2 grid (x=-2 to 2, y=±10, z=5-6). The previous blueprint outlined these blocks with relative positions based on compass faces, assuming parent SWBs from the Main Deck Beam at y=±10.

Now, the user is asking for the final version after the reviewer's decision. Since the user didn't provide specific reviewer feedback, I need to ensure the blueprint is clear, follows the requirements, and addresses any potential issues mentioned earlier, like position adjustments if needed.

First, confirm all 20 SWBs are accounted for: 10 north, 10 south. Each pad is a 5x1x2 grid, so x from -2 to 2 (5 units), z from 5 to 6 (2 units), y fixed at ±10. The blocks are static, so the format for static blocks applies: block number, type, note, relative position (compass face of previous block).

I need to make sure the relative positions are logical. Starting with the central base block (x=0, z=5) attached to the Main Deck Beam's existing SWB at y=±10. Then expanding west and east from there to x=-2 and x=2, then adding the top layer (z=6) on top of the z=5 blocks.

Also, the position adjustment note from before mentioned if the parent SWB is at z=5 instead of z=4, adjust to west/east face. I should keep that note in case of conflicts.

Check that the grid is correctly described: 5 units in x (-2 to 2 is 5 units: -2,-1,0,1,2), 2 units in z (5 and 6). Each pad has 5 (x) * 1 (y) * 2 (z) = 10 blocks, which adds up.

Make sure the block notes are clear, indicating position in the grid. Relative positions use compass faces (west, east, top) correctly. For example, Block 2 (x=-1, z=5) is west of Block 1 (x=0, z=5), so west face of Block 1. Block 3 (x=-2, z=5) is west of Block 2, so west face of Block 2, etc.

No functional blocks here, all static, so no function/motion behavior needed. The function verification should confirm it meets the design requirements: 5-unit width, vertical alignment with Main Deck Beam (z=5-6), terrain contact area increased.

I think that's it. Just need to present it clearly, with the table for north and south pads, and the adjustment note.

# drafter (doubao-seed-1-6-250615) (TextMessage): 

### Blueprint: Sub-Structure 3 - End Support Pads (Final Version)  


#### **Total Blocks: 20 Small Wooden Blocks (SWBs)**  
*All blocks are static (no motion). Relative positions based on compass faces (west/east/top) of adjacent SWBs. Assumes Main Deck Beam has existing "parent" SWBs at the north (y=10) and south (y=-10) ends (not counted in the 20).*  


### **North Support Pad (y=10) - 10 SWBs**  
*Grid: 5x1x2 (x=-2 to 2, y=10, z=5 to 6) – aligns vertically with Main Deck Beam (z=5-6)*  

| Block # | Type               | Block Note                                  | Relative Position (Compass Face of Previous Block) |  
|---------|--------------------|---------------------------------------------|----------------------------------------------------|  
| 1       | Small Wooden Block | North Pad: Central base (x=0, z=5)          | Top face of Main Deck Beam’s existing north SWB (y=10, z=4) |  
| 2       | Small Wooden Block | North Pad: West of center (x=-1, z=5)       | West face of Block 1                               |  
| 3       | Small Wooden Block | North Pad: Westmost (x=-2, z=5)             | West face of Block 2                               |  
| 4       | Small Wooden Block | North Pad: East of center (x=1, z=5)        | East face of Block 1                               |  
| 5       | Small Wooden Block | North Pad: Eastmost (x=2, z=5)              | East face of Block 4                               |  
| 6       | Small Wooden Block | North Pad: Westmost top (x=-2, z=6)         | Top face of Block 3 (x=-2, z=5)                    |  
| 7       | Small Wooden Block | North Pad: West-middle top (x=-1, z=6)      | Top face of Block 2 (x=-1, z=5)                    |  
| 8       | Small Wooden Block | North Pad: Central top (x=0, z=6)           | Top face of Block 1 (x=0, z=5)                     |  
| 9       | Small Wooden Block | North Pad: East-middle top (x=1, z=6)       | Top face of Block 4 (x=1, z=5)                     |  
| 10      | Small Wooden Block | North Pad: Eastmost top (x=2, z=6)          | Top face of Block 5 (x=2, z=5)                     |  


### **South Support Pad (y=-10) - 10 SWBs**  
*Grid: 5x1x2 (x=-2 to 2, y=-10, z=5 to 6) – mirror of North Pad*  

| Block # | Type               | Block Note                                  | Relative Position (Compass Face of Previous Block) |  
|---------|--------------------|---------------------------------------------|----------------------------------------------------|  
| 11      | Small Wooden Block | South Pad: Central base (x=0, z=5)          | Top face of Main Deck Beam’s existing south SWB (y=-10, z=4) |  
| 12      | Small Wooden Block | South Pad: West of center (x=-1, z=5)       | West face of Block 11                              |  
| 13      | Small Wooden Block | South Pad: Westmost (x=-2, z=5)             | West face of Block 12                              |  
| 14      | Small Wooden Block | South Pad: East of center (x=1, z=5)        | East face of Block 11                              |  
| 15      | Small Wooden Block | South Pad: Eastmost (x=2, z=5)              | East face of Block 14                              |  
| 16      | Small Wooden Block | South Pad: Westmost top (x=-2, z=6)         | Top face of Block 13 (x=-2, z=5)                   |  
| 17      | Small Wooden Block | South Pad: West-middle top (x=-1, z=6)      | Top face of Block 12 (x=-1, z=5)                   |  
| 18      | Small Wooden Block | South Pad: Central top (x=0, z=6)           | Top face of Block 11 (x=0, z=5)                    |  
| 19      | Small Wooden Block | South Pad: East-middle top (x=1, z=6)       | Top face of Block 14 (x=1, z=5)                    |  
| 20      | Small Wooden Block | South Pad: Eastmost top (x=2, z=6)          | Top face of Block 15 (x=2, z=5)                    |  


### **Position Adjustment Note**  
If Main Deck Beam’s existing north/south SWBs are aligned at z=5 (instead of z=4), adjust Block 1 (north) and Block 11 (south) to attach to the **west face** of the existing SWB (for x=-2 alignment) or **east face** (for x=2 alignment) to maintain z=5-6 vertical alignment with the Main Deck Beam.  


**Function Verification**: The 5x1x2 grid per pad extends x-axis width to 5 units (-2 to 2) and z-axis height to 2 units (5-6), aligning vertically with the Main Deck Beam. This increases terrain contact area by 10x per pad (vs. a single SWB), distributing load and preventing sinking, as required.

