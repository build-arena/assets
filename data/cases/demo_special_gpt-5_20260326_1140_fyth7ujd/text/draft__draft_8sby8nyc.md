# user (default) (TextMessage): 

The plan of the specific sub-structure 1: {'name': 'Grand Ornate Arch–Truss Bridge (single-piece)', 'description': 'A single integrated, highly ornamented bridge spanning 13 units along y, 3 units wide along x, with end piers 5 units below the deck ends for elevation. It features:\n        - 13×3 deck grid.\n        - Four 5‑unit‑tall end piers at the deck’s outer corners (y=±6, x=±1).\n        - Side vertical posts (varying heights to form a stepped arch), side lattice Braces, and transverse Braces.\n        - Under‑deck king‑post/fan truss using bottom nodes and diagonal Braces.\n        - Winch “suspension” cables from arch tops to deck edges.\n        - Four powered wheels (ornamental rosettes) set into side panels.\n        - Four outward‑facing water cannons with paired, outward/upward torches on separate tabs (for visual flair).', 'components': '- Default Stone Base: 1 (center of deck).\n        - Small Wooden Block: approximately 180–200 units total, broken down as:\n          • Deck centerline: 12 (north/south from the stone base).\n          • Deck lateral panels: 26 (east and west across each of 13 positions).\n          • End piers: 4 piers × 5 blocks each = 20.\n          • Side posts: about 56 total (both sides, stepped heights along y).\n          • Gusset/tabs (brace and cable anchors): about 52 (26 per side; outward tabs near post tops and deck edges).\n          • Under‑deck bottom nodes and stiffeners: about 10.\n          • Finials/spires and decorative caps: about 6.\n        - Brace: approximately 120–160 units (side lattices, under‑deck truss diagonals, transverse ties across the deck between east and west posts, and ornamental arch connectors).\n        - Winch: 12–16 units (decorative “suspension” cables from arch apexes down to deck edge tabs).\n        - Powered Wheel: 4 units (ornamental rosettes at y=±3 on both sides).\n        - Water Cannon: 4 units (two per side near midspan, outward‑facing).\n        - Torch: 4 units (one paired with each water cannon, mounted on a separate outward tab so heat sphere is clear of wood).', 'assembly': 'Orientation reference: x east (+x), y north (+y), z up (+z). Attachments occur at the center of an unoccupied face.\n\n        1) Centerline and deck slab (length×width = 13×3):\n        - Start with the default Stone Base as the midspan center at y=0, x=0.\n        - Build the centerline: attach 6 Small Wooden Blocks sequentially to the north (+y) face of the base (yielding y=+1…+6) and 6 sequentially to the south (−y) face (y=−1…−6). This creates a 13‑block centerline (wood×12 + stone×1).\n        - Deck width: at each of the 13 centerline blocks (including the stone base), attach one Small Wooden Block to the east (+x) face and one to the west (−x) face. Result: a continuous 3‑wide deck.\n\n        2) End piers (“stilted shoes”) for elevation:\n        - At y=+6 and y=−6, under each outer deck corner block (x=+1 and x=−1), build vertical piers by attaching a stack of 5 Small Wooden Blocks downward (−z) from the bottom face of each corner block. Total 4 piers × 5 = 20 blocks. These piers will be the feet that contact the terrain edges and raise the deck; deck top ≈ 6 units above the terrain contact, guaranteeing the ≥5‑unit deck‑height requirement.\n\n        3) Side posts and stepped arch silhouette:\n        - Along both deck edges (x=+1 and x=−1) at every y position (−6…+6), build vertical posts upward (+z) from the top face of the edge deck blocks. Heights (per post) to form a symmetric arch:\n          • y=0: height 4 (four blocks stacked above the edge deck block).\n          • y=±1 and ±2: height 3.\n          • y=±3 and ±4: height 2.\n          • y=±5 and ±6: height 1.\n        - Add finials: add one extra Small Wooden Block atop the y=0 and y=±2 posts on both sides as decorative caps.\n\n        4) Gusset/tabs for connections (to avoid face conflicts):\n        - At the top of every side post, attach a Small Wooden Block to the outward face (±x outward) as a “top gusset/tab” for Braces/winches.\n        - At every edge deck block (x=±1), attach one Small Wooden Block to the outward face (±x) at deck level as a “deck gusset/tab” for Braces/winches.\n        - Reserve these gusset faces for connectors and decorative mounts.\n\n        5) Side lattice trusses (visual X‑bracing):\n        - For each span between y=k and y=k+1 along each side (x=±1):\n          • Connect a Brace from the outward face of the upper gusset at y=k to the outward face of the deck gusset at y=k+1 (descending diagonal).\n          • Connect a Brace from the outward face of the upper gusset at y=k+1 to the outward face of the deck gusset at y=k (ascending diagonal).\n        - Repeat for k from −6 to +5 on both east and west sides to form continuous X‑lattices.\n\n        6) Transverse stiffening:\n        - At y positions every 2 units (e.g., y=−6, −4, −2, 0, +2, +4, +6), connect Braces between the top gussets of east and west posts across the deck (forming transverse ties).\n        - Optionally, add a second brace lower down between the east and west deck gussets at the same y to create a rectangular frame with a diagonal, improving torsional stability.\n\n        7) Under‑deck king‑post/fan truss:\n        - Bottom nodes: beneath the centerline blocks, attach Small Wooden Blocks downward as follows:\n          • y=0: stack 2 blocks downward (drop 2).\n          • y=±1 and ±2 and ±3: attach 1 block downward (drop 1) beneath each corresponding centerline block.\n        - Diagonal bracing:\n          • Connect Braces from the deck centerline block at y=0 to the bottom nodes at y=±1, ±2.\n          • Connect Braces forming a fan: from the y=±1 deck centerline blocks down to the bottom node at y=0.\n          • Continue with shorter diagonals from y=±2 deck centerline blocks to bottom nodes at y=±1 and y=±3, forming overlapping triangles. Keep all under‑deck elements within a 2‑unit drop so they clear the terrain when the 5‑unit piers take the load.\n\n        8) Winch “suspension” cables (decorative):\n        - At y = 0, ±1, ±2, ±3, ±4, ±5 on each side, connect a Winch from the outward face of the top gusset of the side post (highest available anchor) down to the outward face of the deck gusset at the same y. Set moderate rope length to produce a slight catenary sag for visual effect (variable length is allowed). Ensure cables do not contact torches or wheels.\n\n        9) Powered wheel rosettes (ornamental only):\n        - At y=+3 and y=−3, on both sides, attach one Powered Wheel to the outward face of the deck gusset/tab. The face is vertical; the wheel plane will be vertical and sit proud of the side lattice, purely decorative. Do not place them where they could contact the terrain edges (they are midspan and elevated).\n\n        10) Gargoyle water cannons and lantern torches:\n        - Water Cannons: Attach two Water Cannons on the east side (x=+ side) to the outward faces of the deck gussets at y=+2 and y=−2, oriented to spray directly outward (+x). Attach two on the west side (x=−) at y=+2 and y=−2, oriented to spray outward (−x). Keep them level so jets are horizontal. These contribute mass and ornamentation; keep off during evaluation.\n        - Torches: For each cannon, attach a Torch to a separate outward‑facing tab block located one unit above the cannon’s mounting point (use an additional outward gusset atop the post at that y if needed). Orient each Torch upward and slightly outward so its 0.3‑radius heating sphere sits outboard of the woodwork but near the cannon’s outer shell. This avoids heating wood while aesthetically “heating” the cannon body for optional steam mode.\n\n        11) Final decorative touches:\n        - Add small diagonal Braces from arch finials (y=0 and y=±2) back down to adjacent top gussets to suggest flying buttresses.\n        - Verify that all connector attachments use free faces (primarily the gusset/tab blocks) to avoid blocking primary structural joints.', 'motion_control': '- Keep all Powered Wheels unactuated (no forward/reverse input) so they serve as static ornaments with auto‑brake engaged.\n        - Keep all Water Cannons unfired during placement and evaluation. Optionally, after the bridge settles and evaluation completes, fire east and west cannons in simultaneous opposing pairs for a fountain/steam show; torches will heat the cannon housings if their flame intersects, enabling steam mode. Avoid asymmetric firing to prevent lateral drift.', 'function': '- Primary structure: The 13×3 deck with 5‑unit end piers passively spans the 10‑unit gap. The deck top sits ≈6 units above the terrain contact, thus ≥5 above the gap bottom.\n        - Stiffening system: Side lattice Braces and under‑deck king‑post truss distribute loads and resist sag/twist. Transverse Braces tie both sides to resist torsion. \n        - Aesthetic system: Overhead stepped posts and winch cables create a high, ornate profile. Wheels become visual rosettes; water cannons act as gargoyle pods; torches provide lantern/steam accents. All enhance visual complexity and block variety without compromising passive stability.', 'design_requirements': '- Only one sub-structure is used; all elements remain connected through blocks and connectors grown from the single stone base.\n        - Maintain at least 5 units of pier height beneath the deck corners at y=±6 so the finished deck top is ≥6 units above the terrain contact, guaranteeing ≥5 units above the gap bottom.\n        - Ensure torches’ 0.3-unit heating spheres do not intersect any wood. Mount torches on outward tabs and orient upward/outboard so the nearest wooden face remains ≥0.35 units outside the heating sphere; allow optional intersection with water cannon shells (non-flammable) if steam mode is desired after evaluation.\n        - Do not mount anything to Water Cannons or Torches (they have no attachable faces for further attachment). Use adjacent gusset/tabs for braces and torches.\n        - Keep under‑deck truss depth ≤2 units so it clears the edges; the 5‑unit piers must be the first points of contact with terrain during settling.\n        - During evaluation, do not press any control keys for wheels or cannons; the bridge must settle as a passive rigid body.\n        - Verify that each connector (Brace/Winch) anchors to an available face on two existing blocks; avoid attaching multiple blocks to the same face.\n        - Positions may be micro‑adjusted in later stages to resolve conflicts based on actual build execution.'}

# drafter (gpt-5) (TextMessage): 

Build-order and face-usage notes (read first)
- Global axes: +x east, +y north, +z up. Every new block is attached at the center of an unoccupied face of an existing block. To avoid face-conflict, each edge post gets two dedicated “gusset/tab” blocks: one at deck level (used for decorative modules like wheels/cannons) and one at post top (used for cables and transverse ties). Side lattice braces are anchored to the north/south faces of those gusset blocks so the outward faces remain free for decorations and cables.
- Face reservation policy (per side and y):
  • Deck edge gusset at y: outward face reserved for wheels/cannons; north and south faces used for side lattice braces; top face optionally for lower transverse braces.
  • Top gusset at y: outward face reserved for winches; north and south faces used for side lattice braces when needed; top face for small decorative buttress braces.
  • Additional “torch tab” at y=±2: outward face carries the Torch; no other connection on that tab.
- Position adjustment note: To prevent “multiple-to-one face” conflicts, diagonals are distributed across N/S faces of gussets (rather than all outward as in the initial plan). This preserves the functional intent while freeing outward faces for wheels/cannons/winches. No changes to the geometry or span were made.
- Build order: Blocks are grouped logically. Where a line references a specific anchor (e.g., “deck edge at y=+3 east”), attachment is onto that existing block’s stated face even if it is not the immediately prior line. All placements honor “attach to an existing block’s free face.”

Block declarations

1 - Small Wooden Block - Default base, midspan deck center at y=0, x=0, z=0 - (start)

Centerline and deck slab (13×3)
2 - Small Wooden Block - Centerline y=+1 - north face of Block 1
3 - Small Wooden Block - East deck at y=+1 (x=+1) - east face of Block 2
4 - Small Wooden Block - West deck at y=+1 (x=−1) - west face of Block 2
5 - Small Wooden Block - Centerline y=+2 - north face of Block 2
6 - Small Wooden Block - East deck at y=+2 - east face of Block 5
7 - Small Wooden Block - West deck at y=+2 - west face of Block 5
8 - Small Wooden Block - Centerline y=+3 - north face of Block 5
9 - Small Wooden Block - East deck at y=+3 - east face of Block 8
10 - Small Wooden Block - West deck at y=+3 - west face of Block 8
11 - Small Wooden Block - Centerline y=+4 - north face of Block 8
12 - Small Wooden Block - East deck at y=+4 - east face of Block 11
13 - Small Wooden Block - West deck at y=+4 - west face of Block 11
14 - Small Wooden Block - Centerline y=+5 - north face of Block 11
15 - Small Wooden Block - East deck at y=+5 - east face of Block 14
16 - Small Wooden Block - West deck at y=+5 - west face of Block 14
17 - Small Wooden Block - Centerline y=+6 - north face of Block 14
18 - Small Wooden Block - East deck at y=+6 - east face of Block 17
19 - Small Wooden Block - West deck at y=+6 - west face of Block 17
20 - Small Wooden Block - East deck at y=0 (x=+1) - east face of Block 1
21 - Small Wooden Block - West deck at y=0 (x=−1) - west face of Block 1
22 - Small Wooden Block - Centerline y=−1 - south face of Block 1
23 - Small Wooden Block - East deck at y=−1 - east face of Block 22
24 - Small Wooden Block - West deck at y=−1 - west face of Block 22
25 - Small Wooden Block - Centerline y=−2 - south face of Block 22
26 - Small Wooden Block - East deck at y=−2 - east face of Block 25
27 - Small Wooden Block - West deck at y=−2 - west face of Block 25
28 - Small Wooden Block - Centerline y=−3 - south face of Block 25
29 - Small Wooden Block - East deck at y=−3 - east face of Block 28
30 - Small Wooden Block - West deck at y=−3 - west face of Block 28
31 - Small Wooden Block - Centerline y=−4 - south face of Block 28
32 - Small Wooden Block - East deck at y=−4 - east face of Block 31
33 - Small Wooden Block - West deck at y=−4 - west face of Block 31
34 - Small Wooden Block - Centerline y=−5 - south face of Block 31
35 - Small Wooden Block - East deck at y=−5 - east face of Block 34
36 - Small Wooden Block - West deck at y=−5 - west face of Block 34
37 - Small Wooden Block - Centerline y=−6 - south face of Block 34
38 - Small Wooden Block - East deck at y=−6 - east face of Block 37
39 - Small Wooden Block - West deck at y=−6 - west face of Block 37

End piers (5-high stacks under the four outer corners at y=±6, x=±1)
40 - Small Wooden Block - East pier under y=+6 (level −1) - bottom face of Block 18
41 - Small Wooden Block - East pier y=+6 (−2) - bottom face of Block 40
42 - Small Wooden Block - East pier y=+6 (−3) - bottom face of Block 41
43 - Small Wooden Block - East pier y=+6 (−4) - bottom face of Block 42
44 - Small Wooden Block - East pier y=+6 (−5) - bottom face of Block 43
45 - Small Wooden Block - West pier under y=+6 (−1) - bottom face of Block 19
46 - Small Wooden Block - West pier y=+6 (−2) - bottom face of Block 45
47 - Small Wooden Block - West pier y=+6 (−3) - bottom face of Block 46
48 - Small Wooden Block - West pier y=+6 (−4) - bottom face of Block 47
49 - Small Wooden Block - West pier y=+6 (−5) - bottom face of Block 48
50 - Small Wooden Block - East pier under y=−6 (−1) - bottom face of Block 38
51 - Small Wooden Block - East pier y=−6 (−2) - bottom face of Block 50
52 - Small Wooden Block - East pier y=−6 (−3) - bottom face of Block 51
53 - Small Wooden Block - East pier y=−6 (−4) - bottom face of Block 52
54 - Small Wooden Block - East pier y=−6 (−5) - bottom face of Block 53
55 - Small Wooden Block - West pier under y=−6 (−1) - bottom face of Block 39
56 - Small Wooden Block - West pier y=−6 (−2) - bottom face of Block 55
57 - Small Wooden Block - West pier y=−6 (−3) - bottom face of Block 56
58 - Small Wooden Block - West pier y=−6 (−4) - bottom face of Block 57
59 - Small Wooden Block - West pier y=−6 (−5) - bottom face of Block 58

Side posts (east edge x=+1 first, then west x=−1). Heights form stepped arch: y=0:4; ±1/±2:3; ±3/±4:2; ±5/±6:1. Each post stacks upward from the top face of the edge deck block.
East side posts (x=+1)
60 - Small Wooden Block - Post y=+6, height 1 (level +1) - top face of Block 18
61 - Small Wooden Block - Post y=+5, height 1 (level +1) - top face of Block 15
62 - Small Wooden Block - Post y=+4, level +1 - top face of Block 12
63 - Small Wooden Block - Post y=+4, level +2 - top face of Block 63 (stacked one more to make height 2) - top face of Block 62
64 - Small Wooden Block - Post y=+3, level +1 - top face of Block 9
65 - Small Wooden Block - Post y=+3, level +2 - top face of Block 64
66 - Small Wooden Block - Post y=+2, level +1 - top face of Block 6
67 - Small Wooden Block - Post y=+2, level +2 - top face of Block 66
68 - Small Wooden Block - Post y=+2, level +3 - top face of Block 67
69 - Small Wooden Block - Post y=+1, level +1 - top face of Block 3
70 - Small Wooden Block - Post y=+1, level +2 - top face of Block 69
71 - Small Wooden Block - Post y=+1, level +3 - top face of Block 70
72 - Small Wooden Block - Post y=0, level +1 - top face of Block 20
73 - Small Wooden Block - Post y=0, level +2 - top face of Block 72
74 - Small Wooden Block - Post y=0, level +3 - top face of Block 73
75 - Small Wooden Block - Post y=0, level +4 - top face of Block 74
76 - Small Wooden Block - Post y=−1, level +1 - top face of Block 23
77 - Small Wooden Block - Post y=−1, level +2 - top face of Block 76
78 - Small Wooden Block - Post y=−1, level +3 - top face of Block 77
79 - Small Wooden Block - Post y=−2, level +1 - top face of Block 26
80 - Small Wooden Block - Post y=−2, level +2 - top face of Block 79
81 - Small Wooden Block - Post y=−2, level +3 - top face of Block 80
82 - Small Wooden Block - Post y=−3, level +1 - top face of Block 29
83 - Small Wooden Block - Post y=−3, level +2 - top face of Block 82
84 - Small Wooden Block - Post y=−4, level +1 - top face of Block 32
85 - Small Wooden Block - Post y=−4, level +2 - top face of Block 84
86 - Small Wooden Block - Post y=−5, height 1 (level +1) - top face of Block 35
87 - Small Wooden Block - Post y=−6, height 1 (level +1) - top face of Block 38

West side posts (x=−1)
88 - Small Wooden Block - Post y=+6, height 1 (level +1) - top face of Block 19
89 - Small Wooden Block - Post y=+5, height 1 - top face of Block 16
90 - Small Wooden Block - Post y=+4, level +1 - top face of Block 13
91 - Small Wooden Block - Post y=+4, level +2 - top face of Block 90
92 - Small Wooden Block - Post y=+3, level +1 - top face of Block 10
93 - Small Wooden Block - Post y=+3, level +2 - top face of Block 92
94 - Small Wooden Block - Post y=+2, level +1 - top face of Block 7
95 - Small Wooden Block - Post y=+2, level +2 - top face of Block 94
96 - Small Wooden Block - Post y=+2, level +3 - top face of Block 95
97 - Small Wooden Block - Post y=+1, level +1 - top face of Block 4
98 - Small Wooden Block - Post y=+1, level +2 - top face of Block 97
99 - Small Wooden Block - Post y=+1, level +3 - top face of Block 98
100 - Small Wooden Block - Post y=0, level +1 - top face of Block 21
101 - Small Wooden Block - Post y=0, level +2 - top face of Block 100
102 - Small Wooden Block - Post y=0, level +3 - top face of Block 101
103 - Small Wooden Block - Post y=0, level +4 - top face of Block 102
104 - Small Wooden Block - Post y=−1, level +1 - top face of Block 24
105 - Small Wooden Block - Post y=−1, level +2 - top face of Block 104
106 - Small Wooden Block - Post y=−1, level +3 - top face of Block 105
107 - Small Wooden Block - Post y=−2, level +1 - top face of Block 27
108 - Small Wooden Block - Post y=−2, level +2 - top face of Block 107
109 - Small Wooden Block - Post y=−2, level +3 - top face of Block 108
110 - Small Wooden Block - Post y=−3, level +1 - top face of Block 30
111 - Small Wooden Block - Post y=−3, level +2 - top face of Block 110
112 - Small Wooden Block - Post y=−4, level +1 - top face of Block 33
113 - Small Wooden Block - Post y=−4, level +2 - top face of Block 112
114 - Small Wooden Block - Post y=−5, height 1 (level +1) - top face of Block 36
115 - Small Wooden Block - Post y=−6, height 1 (level +1) - top face of Block 39

Finials/decorative caps (add one extra block atop y=0 and y=±2 posts on both sides)
116 - Small Wooden Block - Finial east y=0 - top face of Block 75
117 - Small Wooden Block - Finial west y=0 - top face of Block 103
118 - Small Wooden Block - Finial east y=+2 - top face of Block 68
119 - Small Wooden Block - Finial west y=+2 - top face of Block 96
120 - Small Wooden Block - Finial east y=−2 - top face of Block 81
121 - Small Wooden Block - Finial west y=−2 - top face of Block 109

Gusset/tab blocks at deck level (outward from edge deck blocks)
East side deck gussets (x=+1)
122 - Small Wooden Block - Deck gusset y=+6 (east, outward) - east face of Block 18
123 - Small Wooden Block - Deck gusset y=+5 - east face of Block 15
124 - Small Wooden Block - Deck gusset y=+4 - east face of Block 12
125 - Small Wooden Block - Deck gusset y=+3 - east face of Block 9
126 - Small Wooden Block - Deck gusset y=+2 - east face of Block 6
127 - Small Wooden Block - Deck gusset y=+1 - east face of Block 3
128 - Small Wooden Block - Deck gusset y=0 - east face of Block 20
129 - Small Wooden Block - Deck gusset y=−1 - east face of Block 23
130 - Small Wooden Block - Deck gusset y=−2 - east face of Block 26
131 - Small Wooden Block - Deck gusset y=−3 - east face of Block 29
132 - Small Wooden Block - Deck gusset y=−4 - east face of Block 32
133 - Small Wooden Block - Deck gusset y=−5 - east face of Block 35
134 - Small Wooden Block - Deck gusset y=−6 - east face of Block 38

West side deck gussets (x=−1)
135 - Small Wooden Block - Deck gusset y=+6 (west, outward) - west face of Block 19
136 - Small Wooden Block - Deck gusset y=+5 - west face of Block 16
137 - Small Wooden Block - Deck gusset y=+4 - west face of Block 13
138 - Small Wooden Block - Deck gusset y=+3 - west face of Block 10
139 - Small Wooden Block - Deck gusset y=+2 - west face of Block 7
140 - Small Wooden Block - Deck gusset y=+1 - west face of Block 4
141 - Small Wooden Block - Deck gusset y=0 - west face of Block 21
142 - Small Wooden Block - Deck gusset y=−1 - west face of Block 24
143 - Small Wooden Block - Deck gusset y=−2 - west face of Block 27
144 - Small Wooden Block - Deck gusset y=−3 - west face of Block 30
145 - Small Wooden Block - Deck gusset y=−4 - west face of Block 33
146 - Small Wooden Block - Deck gusset y=−5 - west face of Block 36
147 - Small Wooden Block - Deck gusset y=−6 - west face of Block 39

Gusset/tab blocks at post tops (outward from the top post blocks)
East side top gussets
148 - Small Wooden Block - Top gusset y=+6 (outward) - east face of Block 60
149 - Small Wooden Block - Top gusset y=+5 - east face of Block 61
150 - Small Wooden Block - Top gusset y=+4 - east face of Block 63
151 - Small Wooden Block - Top gusset y=+3 - east face of Block 65
152 - Small Wooden Block - Top gusset y=+2 - east face of Block 68
153 - Small Wooden Block - Top gusset y=+1 - east face of Block 71
154 - Small Wooden Block - Top gusset y=0 - east face of Block 75
155 - Small Wooden Block - Top gusset y=−1 - east face of Block 78
156 - Small Wooden Block - Top gusset y=−2 - east face of Block 81
157 - Small Wooden Block - Top gusset y=−3 - east face of Block 83
158 - Small Wooden Block - Top gusset y=−4 - east face of Block 85
159 - Small Wooden Block - Top gusset y=−5 - east face of Block 86
160 - Small Wooden Block - Top gusset y=−6 - east face of Block 87

West side top gussets
161 - Small Wooden Block - Top gusset y=+6 (outward) - west face of Block 88
162 - Small Wooden Block - Top gusset y=+5 - west face of Block 89
163 - Small Wooden Block - Top gusset y=+4 - west face of Block 91
164 - Small Wooden Block - Top gusset y=+3 - west face of Block 93
165 - Small Wooden Block - Top gusset y=+2 - west face of Block 96
166 - Small Wooden Block - Top gusset y=+1 - west face of Block 99
167 - Small Wooden Block - Top gusset y=0 - west face of Block 103
168 - Small Wooden Block - Top gusset y=−1 - west face of Block 106
169 - Small Wooden Block - Top gusset y=−2 - west face of Block 109
170 - Small Wooden Block - Top gusset y=−3 - west face of Block 111
171 - Small Wooden Block - Top gusset y=−4 - west face of Block 113
172 - Small Wooden Block - Top gusset y=−5 - west face of Block 114
173 - Small Wooden Block - Top gusset y=−6 - west face of Block 115

Under-deck bottom nodes below centerline (drop ≤2)
174 - Small Wooden Block - Bottom node y=0 (drop 1) - bottom face of Block 1
175 - Small Wooden Block - Bottom node y=0 (drop 2) - bottom face of Block 174
176 - Small Wooden Block - Bottom node y=+1 (drop 1) - bottom face of Block 2
177 - Small Wooden Block - Bottom node y=+2 (drop 1) - bottom face of Block 5
178 - Small Wooden Block - Bottom node y=+3 (drop 1) - bottom face of Block 8
179 - Small Wooden Block - Bottom node y=−1 (drop 1) - bottom face of Block 22
180 - Small Wooden Block - Bottom node y=−2 (drop 1) - bottom face of Block 25
181 - Small Wooden Block - Bottom node y=−3 (drop 1) - bottom face of Block 28

Torch tabs (additional outward tabs one unit above deck at y=±2 for torch mounting)
East side
182 - Small Wooden Block - Torch tab y=+2 (one above deck) - east face of Block 66
183 - Small Wooden Block - Torch tab y=−2 (one above deck) - east face of Block 79
West side
184 - Small Wooden Block - Torch tab y=+2 (one above deck) - west face of Block 94
185 - Small Wooden Block - Torch tab y=−2 (one above deck) - west face of Block 107

Side lattice braces (X-pattern per bay, k from −6 to +5 on both sides). Note: to avoid face conflicts, we use top gusset north face to deck gusset south face for one diagonal, and the opposite faces for the other.
186 - Brace - East side bay k=−6: descending diagonal from top gusset y=−6 (north face of Block 160) to deck gusset y=−5 (south face of Block 133)
187 - Brace - East side bay k=−6: ascending diagonal from top gusset y=−5 (south face of Block 159) to deck gusset y=−6 (north face of Block 134)
188 - Brace - East side k=−5: descending top y=−5 (north face of Block 159) to deck y=−4 (south face of Block 132)
189 - Brace - East side k=−5: ascending top y=−4 (south face of Block 158) to deck y=−5 (north face of Block 133)
190 - Brace - East side k=−4: descending top y=−4 (north face of Block 158) to deck y=−3 (south face of Block 131)
191 - Brace - East side k=−4: ascending top y=−3 (south face of Block 157) to deck y=−4 (north face of Block 132)
192 - Brace - East side k=−3: descending top y=−3 (north face of Block 157) to deck y=−2 (south face of Block 130)
193 - Brace - East side k=−3: ascending top y=−2 (south face of Block 156) to deck y=−3 (north face of Block 131)
194 - Brace - East side k=−2: descending top y=−2 (north face of Block 156) to deck y=−1 (south face of Block 129)
195 - Brace - East side k=−2: ascending top y=−1 (south face of Block 155) to deck y=−2 (north face of Block 130)
196 - Brace - East side k=−1: descending top y=−1 (north face of Block 155) to deck y=0 (south face of Block 128)
197 - Brace - East side k=−1: ascending top y=0 (south face of Block 154) to deck y=−1 (north face of Block 129)
198 - Brace - East side k=0: descending top y=0 (north face of Block 154) to deck y=+1 (south face of Block 127)
199 - Brace - East side k=0: ascending top y=+1 (south face of Block 153) to deck y=0 (north face of Block 128)
200 - Brace - East side k=+1: descending top y=+1 (north face of Block 153) to deck y=+2 (south face of Block 126)
201 - Brace - East side k=+1: ascending top y=+2 (south face of Block 152) to deck y=+1 (north face of Block 127)
202 - Brace - East side k=+2: descending top y=+2 (north face of Block 152) to deck y=+3 (south face of Block 125)
203 - Brace - East side k=+2: ascending top y=+3 (south face of Block 151) to deck y=+2 (north face of Block 126)
204 - Brace - East side k=+3: descending top y=+3 (north face of Block 151) to deck y=+4 (south face of Block 124)
205 - Brace - East side k=+3: ascending top y=+4 (south face of Block 150) to deck y=+3 (north face of Block 125)
206 - Brace - East side k=+4: descending top y=+4 (north face of Block 150) to deck y=+5 (south face of Block 123)
207 - Brace - East side k=+4: ascending top y=+5 (south face of Block 149) to deck y=+4 (north face of Block 124)
208 - Brace - East side k=+5: descending top y=+5 (north face of Block 149) to deck y=+6 (south face of Block 122)
209 - Brace - East side k=+5: ascending top y=+6 (south face of Block 148) to deck y=+5 (north face of Block 123)

210 - Brace - West side bay k=−6: descending top y=−6 (north face of Block 173) to deck y=−5 (south face of Block 146)
211 - Brace - West side bay k=−6: ascending top y=−5 (south face of Block 172) to deck y=−6 (north face of Block 147)
212 - Brace - West side k=−5: descending top y=−5 (north face of Block 172) to deck y=−4 (south face of Block 145)
213 - Brace - West side k=−5: ascending top y=−4 (south face of Block 171) to deck y=−5 (north face of Block 146)
214 - Brace - West side k=−4: descending top y=−4 (north face of Block 171) to deck y=−3 (south face of Block 144)
215 - Brace - West side k=−4: ascending top y=−3 (south face of Block 170) to deck y=−4 (north face of Block 145)
216 - Brace - West side k=−3: descending top y=−3 (north face of Block 170) to deck y=−2 (south face of Block 143)
217 - Brace - West side k=−3: ascending top y=−2 (south face of Block 169) to deck y=−3 (north face of Block 144)
218 - Brace - West side k=−2: descending top y=−2 (north face of Block 169) to deck y=−1 (south face of Block 142)
219 - Brace - West side k=−2: ascending top y=−1 (south face of Block 168) to deck y=−2 (north face of Block 143)
220 - Brace - West side k=−1: descending top y=−1 (north face of Block 168) to deck y=0 (south face of Block 141)
221 - Brace - West side k=−1: ascending top y=0 (south face of Block 167) to deck y=−1 (north face of Block 142)
222 - Brace - West side k=0: descending top y=0 (north face of Block 167) to deck y=+1 (south face of Block 140)
223 - Brace - West side k=0: ascending top y=+1 (south face of Block 166) to deck y=0 (north face of Block 141)
224 - Brace - West side k=+1: descending top y=+1 (north face of Block 166) to deck y=+2 (south face of Block 139)
225 - Brace - West side k=+1: ascending top y=+2 (south face of Block 165) to deck y=+1 (north face of Block 140)
226 - Brace - West side k=+2: descending top y=+2 (north face of Block 165) to deck y=+3 (south face of Block 138)
227 - Brace - West side k=+2: ascending top y=+3 (south face of Block 164) to deck y=+2 (north face of Block 139)
228 - Brace - West side k=+3: descending top y=+3 (north face of Block 164) to deck y=+4 (south face of Block 137)
229 - Brace - West side k=+3: ascending top y=+4 (south face of Block 163) to deck y=+3 (north face of Block 138)
230 - Brace - West side k=+4: descending top y=+4 (north face of Block 163) to deck y=+5 (south face of Block 136)
231 - Brace - West side k=+4: ascending top y=+5 (south face of Block 162) to deck y=+4 (north face of Block 137)
232 - Brace - West side k=+5: descending top y=+5 (north face of Block 162) to deck y=+6 (south face of Block 135)
233 - Brace - West side k=+5: ascending top y=+6 (south face of Block 161) to deck y=+5 (north face of Block 136)

Transverse stiffening (top ties at y=−6,−4,−2,0,+2,+4,+6). Ties connect between east and west top gussets. Lower ties (optional) connect between east and west deck gussets at same y.
234 - Brace - Transverse top tie y=−6: east top gusset Block 160 to west top gusset Block 173
235 - Brace - Transverse lower tie y=−6: east deck gusset Block 134 to west deck gusset Block 147
236 - Brace - Transverse top tie y=−4: Block 158 to Block 171
237 - Brace - Transverse lower tie y=−4: Block 132 to Block 145
238 - Brace - Transverse top tie y=−2: Block 156 to Block 169
239 - Brace - Transverse lower tie y=−2: Block 130 to Block 143
240 - Brace - Transverse top tie y=0: Block 154 to Block 167
241 - Brace - Transverse lower tie y=0: Block 128 to Block 141
242 - Brace - Transverse top tie y=+2: Block 152 to Block 165
243 - Brace - Transverse lower tie y=+2: Block 126 to Block 139
244 - Brace - Transverse top tie y=+4: Block 150 to Block 163
245 - Brace - Transverse lower tie y=+4: Block 124 to Block 137
246 - Brace - Transverse top tie y=+6: Block 148 to Block 161
247 - Brace - Transverse lower tie y=+6: Block 122 to Block 135

Under-deck king-post/fan truss braces
248 - Brace - From deck centerline y=0 (Block 1) to bottom node y=+1 (Block 176)
249 - Brace - From deck centerline y=0 (Block 1) to bottom node y=−1 (Block 179)
250 - Brace - From deck centerline y=0 (Block 1) to bottom node y=+2 (Block 177)
251 - Brace - From deck centerline y=0 (Block 1) to bottom node y=−2 (Block 180)
252 - Brace - Fan: from deck centerline y=+1 (Block 2) to bottom node y=0 (Block 175)
253 - Brace - Fan: from deck centerline y=−1 (Block 22) to bottom node y=0 (Block 175)
254 - Brace - From deck centerline y=+2 (Block 5) to bottom node y=+1 (Block 176)
255 - Brace - From deck centerline y=+2 (Block 5) to bottom node y=+3 (Block 178)
256 - Brace - From deck centerline y=−2 (Block 25) to bottom node y=−1 (Block 179)
257 - Brace - From deck centerline y=−2 (Block 25) to bottom node y=−3 (Block 181)

Winch “suspension” cables (decorative, set moderate rope length for slight sag). Anchors: top gusset outward face to deck gusset outward face at same y. East side x=+1:
258 - Winch - East y=+5: Block 149 outward to Block 123 outward
259 - Winch - East y=+4: Block 150 outward to Block 124 outward
260 - Winch - East y=+3: Block 151 outward to Block 125 outward
261 - Winch - East y=+2: Block 152 outward to Block 126 outward
262 - Winch - East y=+1: Block 153 outward to Block 127 outward
263 - Winch - East y=0: Block 154 outward to Block 128 outward
264 - Winch - East y=−1: Block 155 outward to Block 129 outward
265 - Winch - East y=−2: Block 156 outward to Block 130 outward
266 - Winch - East y=−3: Block 157 outward to Block 131 outward
267 - Winch - East y=−4: Block 158 outward to Block 132 outward
268 - Winch - East y=−5: Block 159 outward to Block 133 outward

West side x=−1:
269 - Winch - West y=+5: Block 162 outward to Block 136 outward
270 - Winch - West y=+4: Block 163 outward to Block 137 outward
271 - Winch - West y=+3: Block 164 outward to Block 138 outward
272 - Winch - West y=+2: Block 165 outward to Block 139 outward
273 - Winch - West y=+1: Block 166 outward to Block 140 outward
274 - Winch - West y=0: Block 167 outward to Block 141 outward
275 - Winch - West y=−1: Block 168 outward to Block 142 outward
276 - Winch - West y=−2: Block 169 outward to Block 143 outward
277 - Winch - West y=−3: Block 170 outward to Block 144 outward
278 - Winch - West y=−4: Block 171 outward to Block 145 outward
279 - Winch - West y=−5: Block 172 outward to Block 146 outward

Powered wheel rosettes (ornamental only; do not actuate)
280 - Powered Wheel - East side y=+3 rosette - outward face of Block 125 - ornamental; wheel plane is vertical, auto-brake; no rotation input
281 - Powered Wheel - East side y=−3 rosette - outward face of Block 131 - ornamental; wheel plane is vertical, auto-brake; no rotation input
282 - Powered Wheel - West side y=+3 rosette - outward face of Block 138 - ornamental; wheel plane is vertical, auto-brake; no rotation input
283 - Powered Wheel - West side y=−3 rosette - outward face of Block 144 - ornamental; wheel plane is vertical, auto-brake; no rotation input

Water cannons (outward, level). Keep off during evaluation.
284 - Water Cannon - East side y=+2 gargoyle - outward face of Block 126 - function: shoots directly outward (+x), level; recoil ignored during evaluation (off)
285 - Water Cannon - East side y=−2 gargoyle - outward face of Block 130 - function: shoots directly outward (+x), level; recoil ignored during evaluation (off)
286 - Water Cannon - West side y=+2 gargoyle - outward face of Block 139 - function: shoots directly outward (−x), level; recoil ignored during evaluation (off)
287 - Water Cannon - West side y=−2 gargoyle - outward face of Block 143 - function: shoots directly outward (−x), level; recoil ignored during evaluation (off)

Torches (mounted one unit above deck on dedicated torch tabs; oriented up/outward so 0.3 heating sphere is clear of wood but near cannon shell)
Position adjustment note: Torch tabs (Blocks 182–185) place torch bodies 0.5 outward from post at z≈+1, with flame sphere centered ~1 unit above the torch body. This keeps nearest wood ≥0.35 away while allowing optional heating of cannon shells for steam mode.
288 - Torch - East y=+2 lantern - outward face of Block 182 - function: oriented upward (shaft) and slightly outward; heating sphere in front at ~+x and +z; clear of wood; can warm cannon 284
289 - Torch - East y=−2 lantern - outward face of Block 183 - function: oriented upward and slightly outward; heating sphere clear of wood; can warm cannon 285
290 - Torch - West y=+2 lantern - outward face of Block 184 - function: oriented upward and slightly outward; heating sphere clear of wood; can warm cannon 286
291 - Torch - West y=−2 lantern - outward face of Block 185 - function: oriented upward and slightly outward; heating sphere clear of wood; can warm cannon 287

Final decorative buttresses (small diagonals from finials to adjacent top gussets)
292 - Brace - East finial y=0 (Block 116 top face) down to top gusset y=+1 (north face of Block 153)
293 - Brace - East finial y=0 (Block 116 top face) down to top gusset y=−1 (south face of Block 155)
294 - Brace - West finial y=0 (Block 117 top face) down to top gusset y=+1 (north face of Block 166)
295 - Brace - West finial y=0 (Block 117 top face) down to top gusset y=−1 (south face of Block 168)
296 - Brace - East finial y=+2 (Block 118 top face) down to top gusset y=+3 (north face of Block 151)
297 - Brace - West finial y=+2 (Block 119 top face) down to top gusset y=+3 (north face of Block 164)
298 - Brace - East finial y=−2 (Block 120 top face) down to top gusset y=−3 (south face of Block 157)
299 - Brace - West finial y=−2 (Block 121 top face) down to top gusset y=−3 (south face of Block 170)

Motion control and functional behavior settings
- Powered Wheels (Blocks 280–283): Do not actuate. Leave controls unbound or leave input neutral so auto-brake keeps them static as ornamental rosettes.
- Water Cannons (Blocks 284–287): Keep off during placement and evaluation. Optional after-settle show: fire opposing east/west cannons in pairs to balance recoil; torches will heat cannon shells and enable steam mode if flame intersects outer housing.
- Winches (Blocks 258–279): Set moderate rope lengths to introduce slight catenary sag; purely decorative; no active reeling.
- Torches (Blocks 288–291): Oriented upward and slightly outward; 0.3-radius heating sphere purposely sits outboard of wood; OK to warm cannon bodies.

Verification checklist
- Span: 13×3 deck built (Blocks 2–39), with four 5-unit piers (Blocks 40–59). Deck top is ≥6 above pier feet; under-deck truss drop is ≤2 (Blocks 174–181 and Braces 248–257), ensuring piers are first terrain contacts.
- Arch/posts: Stepped heights as specified on both sides (Blocks 60–87 and 88–115) plus finials (116–121).
- Gussets/tabs: Dedicated deck and top gussets at every y on both sides (Blocks 122–147 and 148–173). Torch tabs added at y=±2 (Blocks 182–185).
- Face conflicts avoided by distributing connections across different faces per gusset (N/S for lattice; outward for winch/decor).
- Side lattices complete for k=−6…+5 both sides (Braces 186–233). Transverse ties at the seven y-stations (Braces 234–247). Decorative buttresses installed (Braces 292–299).
- Ornaments: Wheels at y=±3 (Blocks 280–283); cannons at y=±2 (Blocks 284–287); torches mounted one unit above deck at y=±2 (Blocks 288–291) with safe heating spheres.

If any face-occupancy conflict is observed during build execution, we will split a gusset into a two-block “T” (adding a north or south extension tab) and shift the affected brace to the new tab. Position adjustment note will be added at that time (e.g., “added N tab on deck gusset y=+2 to host ascending diagonal”).

# draft_reviewer (gpt-5) (TextMessage): 

Reviewer summary of approach
- I model all Small Wooden Blocks as axis-aligned 1×1×1 cubes whose centers lie on the unit lattice. Attaching to a face shifts the new center by exactly ±1 along that axis. Deck, posts, piers, gussets, and tabs therefore all sit at integer coordinates.
- Functional blocks: Powered Wheel shape 2×2×0.5 with axis perpendicular to the host face; Water Cannon 1×1.75×1 with center offset 0.5 outward from the host face along firing axis; Torch body center offset 0.5 outward from the host face, with its 1.0‑long vertical shaft defining the flame direction; flame heating sphere center = torch body center + orientation unit vector, radius 0.3.
- Connectors (Braces/Winches) have no physical volume but must each claim a free, attachable face at both ends, with no “multiple‑to‑one face” conflicts.

Part A — Structural placement: coordinates and neighbor checks
I define the global coordinate system as given: +x east, +y north, +z up; the default Stone Base (Block 1) center is at (0, 0, 0). Below I provide (1) closed-form coordinate rules that apply to every group, (2) explicit checks for representative instances in each group, and (3) a proof‑by‑pattern that the remainder follow identically without collisions unless otherwise flagged.

A.1 Coordinate rules (apply to all repeated items)
- Centerline deck blocks y = k ∈ [−6..+6]: center at (0, k, 0). The Small Wooden Blocks at east and west edges at each y are at (±1, k, 0).
- Piers (5‑high stacks) under the four outer corners at y = ±6:
  • East corner: (1, ±6, −n), west corner: (−1, ±6, −n), n = 1..5.
- Posts at edges (x = ±1): for each edge deck block at (±1, y, 0), stack H(y) blocks upward at z = 1..H(y); H(y) = 4 at y=0; 3 at y=±1,±2; 2 at y=±3,±4; 1 at y=±5,±6. Top of each post: z = H(y).
- Finials: add one extra block at the post top where specified (y=0 and y=±2): positions at (±1, y, H(y)+1).
- Deck gussets (outward tabs at deck level): east side (x=+1) to east face → (2, y, 0); west side (x=−1) to west face → (−2, y, 0).
- Top gussets (outward tabs at post tops): east side → (2, y, H(y)); west side → (−2, y, H(y)).
- Under‑deck bottom nodes: (0, 0, −1), (0, 0, −2), and (0, ±1, −1), (0, ±2, −1), (0, ±3, −1).
- Torch tabs (added one unit above deck at y=±2): East tabs at (2, ±2, 1); West tabs at (−2, ±2, 1).

Functional block center rules
- Water Cannon attached to outward face of east deck gusset at (2, y, 0) and pointing +x:
  • East face plane at x = 2.5; cannon center at (3.0, y, 0).
  • (Symmetrically, west side cannons at (−3.0, y, 0), pointing −x.)
- Torch attached to outward face of east torch tab at (2, y, 1), pointing mostly +z with slight +x:
  • East face plane at x = 2.5; torch body center at (3.0, y, 1).
  • Heating sphere center = torch body center + unit orientation vector u; if pure up, u=(0,0,1) → sphere center (3.0, y, 2.0). If tilted outward by angle α, u=(sinα,0,cosα) → sphere center (3.0+sinα, y, 1+cosα).
- Powered Wheel on outward face of east deck gusset at (2, y, 0):
  • Wheel axis ⟂ face (≈ +x/−x); thickness 0.5 along axis. Practical hub center must be ≥0.25 outward from the host face plane (x≥2.75 on east) to avoid embedding the 0.5 thickness. I conservatively take wheel center at (2.75..3.0, y, 0), plane vertical.

A.2 Representative block placement checks (coordinates and neighbor distances)
Note: For a 1×1×1 Small Wooden Block attached face‑to‑face, center‑to‑center spacing along the attachment axis is exactly 1. The minimum required distance along that axis is sum of half‑extents: 0.5 + 0.5 = 1. So face‑to‑face contact is valid and non‑overlapping. I provide explicit calculations for a sample from each class; the rest follow identically.

Deck grid (Blocks 1–39)
- Block 1 (base): (0, 0, 0).
- Block 2 at (0, +1, 0): neighbor to Block 1 at distance |Δy|=1. Required ≥1 (0.5+0.5) → OK. No other near neighbors initially.
- Block 3 at ( +1, +1, 0): neighbor to Block 2 at |Δx|=1 → OK. Distance to Block 1: sqrt(1²+1²)=√2>1 → no overlap. Similar checks pass for Blocks 4–39 by symmetry.

Piers (Blocks 40–59)
- Block 40 at ( +1, +6, −1) attached to Block 18 at ( +1, +6, 0): |Δz|=1 → OK.
  • Stack Blocks 41..44 at z=−2..−5 under same x,y with |Δz|=1 between successive blocks → OK.
- Identical pattern for (−1, ±6, −1..−5) → OK.

Posts (east shown; west symmetric) (Blocks 60–87 and 88–115)
- East post y=+2: Blocks 66,67,68 centers at ( +1, +2, 1),( +1, +2, 2),( +1, +2, 3).
  • Successive spacing |Δz|=1 → OK face‑to‑face.
  • Lateral to deck gusset (2,+2,0) separation is ≥1 along x and ≥1 along z, so no overlap.
- East post y=0: Blocks 72..75 at ( +1, 0, 1..4) → OK. West posts identical logic.

Deck gussets and top gussets (Blocks 122–147; 148–173)
- Deck gusset Block 126 at ( +2, +2, 0), attached to Block 6 at ( +1, +2, 0): |Δx|=1 → OK.
- Top gusset Block 152 at ( +2, +2, 3), attached to Block 68 at ( +1, +2, 3): |Δx|=1 → OK.
- Vertical clearance: Block 126 z=0 vs Block 152 z=3 → |Δz|=3 ≥ 1 → no contact.

Under‑deck nodes (Blocks 174–181)
- Block 174 at (0,0,−1) under Block 1: |Δz|=1 → OK; Block 175 at (0,0,−2) under Block 174: |Δz|=1 → OK.
- Blocks 176..181 at (0,±1/±2/±3,−1): each has |Δz|=1 from its deck centerline parent → OK. All are ≥1 from the nearest pier feet (|y|<6 or x=0 vs x=±1) → no overlap.

Torch tabs (Blocks 182–185)
- East y=+2 tab Block 182 at ( +2, +2, +1), attached to Block 66 ( +1, +2, +1): |Δx|=1 → OK.
- Tab 182 vs deck gusset 126 at ( +2, +2, 0): |Δz|=1 → face‑to‑face adjacency OK.

Powered wheels (Blocks 280–283) — mounting distance checks
- East y=+3 wheel (Block 280), attached to outward face of Block 125 at ( +2, +3, 0):
  • Host face plane at x=+2.5. Taking wheel center x≈+2.75 (at least +0.25 out): separation to host center (2,3,0) along x is 0.75; to face plane at 2.5 is 0.25 (no embedding). Because wheel thickness=0.5, half‑thickness=0.25, so inner rim sits flush at x=2.5 → OK.

Water cannons (Blocks 284–287)
- East y=+2 cannon (Block 284) center at ( +3.0, +2, 0). Minimum separation to host deck gusset center ( +2, +2, 0) along x is 1.0 ≥ 0.5 (sum of half‑widths along x for two cubes, but cannon is attached to face by definition) → Attachment valid by spec. The cannon’s near end is clear of the host surface per the cannon example offset.

Torches (Blocks 288–291)
- East y=+2 torch (Block 288) on tab 182: torch body center ( +3.0, +2, +1).
  • If axis purely upward (u=(0,0,1)): sphere center ( +3.0, +2, +2). Distance from sphere center to the nearest wooden plane (tab’s east face at x=+2.5) is 0.5. Clearance to sphere surface is 0.5−0.3=0.2, which is less than the design requirement of ≥0.35 beyond the sphere boundary. If tilted outward by α, sphere center x = 3.0+sinα. Required center‑to‑plane distance ≥ (0.3+0.35)=0.65 ⇒ 0.5 + sinα ≥ 0.65 ⇒ sinα ≥ 0.15 ⇒ α ≥ 8.63°. So a slight outward tilt ≥9° satisfies the specified clearance. West side identical.

A.3 Global non‑overlap proof for the lattice blocks
- All wooden blocks in the slab, piers, posts, gussets and tabs are placed by unit face attachments, so any two blocks that touch do so on exactly one face with center‑to‑center separation 1 along that axis, equaling the sum of half‑extents (1), hence non‑overlapping. Non‑adjacent neighbors differ by at least one unit in at least two axes, guaranteeing separation.
- Braces/Winches have no volume so do not cause collisions, but still require face availability (addressed below).
- The only potential geometric overlaps arise between functional modules (wheels, cannons, torches) mounted on adjacent gussets; these are checked explicitly in Part C.

Part B — Connector face usage and attachment validity
The build explicitly assigns faces for each side lattice brace to avoid outward‑face conflicts. I checked consistency at several y:
- East deck gusset y=0 (Block 128): used by Brace 196 (south face) and Brace 199 (north face) → each face used once.
- East top gusset y=0 (Block 154): Brace 198 on north face, Brace 197 on south face → valid.
This pattern appears consistently for k=−6..+5 on both sides, so side lattices are correctly face‑distributed.

However, I found three systematic face‑usage issues:
1) Winches anchored to deck gusset outward faces at y=±2 and ±3
- You specified winches 258–279 as “outward to outward,” i.e., top gusset outward face to deck gusset outward face at the same y. At y=±2 and ±3, the deck gusset outward faces are already occupied by:
  • y=±3: Powered Wheels (Blocks 280–283).
  • y=±2: Water Cannons (Blocks 284–287).
- A single face cannot host both a module and a connector. Therefore, the following winches conflict with occupied outward faces and are invalid as written:
  • East: 260 (y=+3), 261 (y=+2), 265 (y=−2), 266 (y=−3).
  • West: 271 (y=+3), 272 (y=+2), 276 (y=−2), 277 (y=−3).
- Resolution options (any one per affected y):
  a) Reanchor the lower end of the winch to the deck gusset’s inward face (west face on east side, east face on west side), or to the deck gusset top face (reserved optional) instead of the outward face.
  b) Add a dedicated one‑block “winch tab” outward from the deck gusset at z=+1 (or z=−1), and attach the winch to that new tab’s outward face, leaving the deck gusset outward free for the ornament. This preserves your face reservation policy.

2) Decorative buttress braces 292–299 reuse already‑occupied N/S faces of top gussets
- Example (east, y=+1): top gusset Block 153 already hosts Brace 200 on its north face and Brace 199 on its south face. Brace 292 attempts to attach to the same north face (conflict). Similar conflicts occur at 293 (south face of Block 155), 296 (north face of Block 151), 298 (south face of Block 157), and their west‑side counterparts 294, 295, 297, 299.
- Resolution: Attach these decorative buttresses to the top faces of the top gussets (as permitted by your face reservation notes) and to the top faces of the finials, or add a tiny auxiliary “cap tab” if you prefer angled geometry while keeping N/S faces free for the lattice.

3) Transverse braces 234–247 omit face specification
- To remain consistent with the reservation policy (outward faces reserved for winches and ornaments; N/S already used by side lattices), the structurally clean choice is:
  • Top ties: connect from the west face of each east top gusset to the east face of the matching west top gusset.
  • Lower ties: connect from the west face of each east deck gusset to the east face of the matching west deck gusset.
- Please add these face designations explicitly to avoid ambiguity.

Part C — Functional checks
C.1 Geometry of moving elements and alignment
- Powered Wheels (Blocks 280–283): Mounted on vertical side faces; axis perpendicular to the side, wheel plane vertical. As ornaments kept unactuated, auto‑brake engaged. Mounting face and axis satisfy provided constraints. No terrain contact at midspan heights → OK.
- Water Cannons (Blocks 284–287): Correctly oriented outward (+x on east, −x on west), horizontally level. Control kept off during evaluation → recoil inactive → OK.
- Winches (Blocks 258–279): Decorative only; variable length allowed. Provided anchor face conflicts (Part B) are resolved, their catenary sag is acceptable.
- Torches (Blocks 288–291): On dedicated tabs one unit above deck; the heating sphere must not intersect wood. With pure “up” orientation, the sphere center is at (±3.0, y, 2.0) or its west counterpart; plane‑to‑sphere center distance to the tab’s face is 0.5, giving only 0.2 clearance to the sphere surface (short of the ≥0.35 required). A small outward tilt ≥9° (sinα≥0.15) increases that distance to ≥0.65 and satisfies the clearance rule. This must be explicitly specified.

C.2 Critical physical overlap: wheel vs. cannon at adjacent y
- East side near midspan:
  • Wheel 280 at y=+3, z=0, thickness 0.5 along x; extents ≈ |Δy|≤1 and |Δz|≤1 around its center.
  • Cannon 284 at y=+2, z=0; half‑widths (y,z) = (0.5, 0.5).
- Center separations: |Δy|=1, |Δz|=0, |Δx|≈0–0.25 (depending on wheel center at ~2.75–3.0). For two convex bodies to be non‑overlapping, separation must exceed the sum of half‑extents along at least one axis. Here:
  • Along y: required ≥1.5 (1 + 0.5), actual = 1 → overlap.
  • Along x: required ≥1.125 (0.25 + 0.875), actual ≤0.25 → overlap.
  • Along z: required ≥1.5 (1 + 0.5), actual = 0 → overlap.
- Therefore the wheel at y=±3 and cannon at y=±2 on the same side collide in volume. This is a hard geometric conflict independent of face occupancy.
- Resolutions (pick one consistent approach for both sides):
  a) Longitudinal separation: move wheels to y=±4 (or cannons to y=±1/±4), yielding |Δy|=2 ≥1.5 → no overlap.
  b) Vertical separation: relocate cannons to outward tabs ≥1.5 units above/below the wheel centers (e.g., mount on dedicated tabs at z≥+2 for those y), but ensure the revised faces are free and that torches still meet the heating clearance.
  c) Cross‑face reallocation: mount the wheels on one side and cannons on the opposite, avoiding same‑side adjacency; this changes the aesthetic but resolves volume overlap.

C.3 Under‑deck truss and ground clearance
- Deepest under‑deck node at z = −2 (Block 175). Pier feet at z = −5 (Blocks 44,49,54,59). Therefore, piers contact terrain first by ≥3 units. The under‑deck truss depth ≤2 meets the clearance requirement.

C.4 Connectivity and single‑piece criterion
- All elements are grown from the initial base via blocks and connectors. Winches and braces connect existing blocks; no unattached components. The single‑piece requirement is met structurally (pending connector face corrections).

Part D — Approval checklist status
- Span and deck: PASS — 13×3 deck realized; piers satisfy the ≥5‑unit elevation; under‑deck truss ≤2.
- Side posts, arch silhouette, finials: PASS — heights and placements consistent with the stepped profile.
- Side lattices and under‑deck braces: PASS structurally and face‑usage for the lattice; PASS with the caveat that transverse and under‑deck brace face usage should be specified as inward faces to avoid ambiguity.
- Ornaments (wheels, cannons, torches): FAIL on two counts:
  1) Face‑occupancy conflicts for winches vs. wheels/cannons at y=±2, ±3.
  2) Physical volume overlap between wheels at y=±3 and cannons at y=±2 on the same side.
  3) Torch clearance: needs explicit ≥9° outward tilt (or equivalent relocation) to achieve ≥0.35 clearance beyond the 0.3‑radius sphere.

Required corrections before approval
1) Resolve winch anchor conflicts at y=±2 and ±3:
   - Reanchor the deck‑end of each affected winch to the deck gusset’s inward or top face; or add a dedicated winch tab and use its outward face. Update items 260–266 (east) and 271–277 (west) accordingly.
2) Eliminate wheel–cannon overlap:
   - Move wheels to y=±4 (Blocks 280–283 → attach to outward faces of Blocks 124/132 and 137/145), OR move cannons to y=±1 or y=±4, OR elevate cannons on high tabs so |Δz|≥1.5 to wheels. Please pick one configuration and update the corresponding block numbers.
3) Decorative buttresses (292–299):
   - Reattach to top faces of the top gussets (and finials) instead of N/S faces already used by the lattice; or add tiny “cap tabs” dedicated for these braces.
4) Transverse ties (234–247):
   - Add explicit face usage: west face of east gusset to east face of west gusset for both top and lower ties.
5) Torch orientation:
   - Specify a minimum outward tilt ≥9° (e.g., α≈10–15°) so the heating sphere’s center‑to‑nearest‑wood plane distance ≥0.65 and the sphere does not intersect any wood.

Conclusion
The structural lattice (deck, piers, posts, gussets, under‑deck truss, side lattices) is coherent and collision‑free given the unit‑lattice attachment rule. However, I cannot approve the current blueprint due to:
- Face occupancy conflicts (winches vs. ornaments) at y=±2, ±3.
- Hard geometric overlaps between water cannons and adjacent powered wheels.
- Decorative buttress braces attempting to reuse occupied faces.
- Missing face designations for transverse ties.
- Torch clearance not guaranteed without an explicit minimum outward tilt.

Please implement the corrections above or provide revised face assignments and placements; I will then re‑verify all distances and confirm compliance.

# drafter (gpt-5) (TextMessage): 

Position adjustment notes (summary of changes)
- Moved powered wheel “rosettes” from y=±3 to y=±4 to eliminate physical overlap with the midspan cannons. Note: wheels now mount on the outward faces of the y=±4 deck gussets.
- Re-anchored all winches so their lower ends attach to the TOP faces of the deck gussets (instead of the outward faces) to avoid face conflicts with wheels/cannons and to standardize anchors.
- Reattached decorative buttress braces to TOP faces of finials and TOP faces of the adjacent top gussets, freeing the N/S faces for the side lattice and preventing face re-use conflicts.
- Added explicit face usage for all transverse ties: west face of EAST gusset to east face of WEST gusset (for both top and lower ties).
- Set all torches to be tilted 12° outward relative to vertical so the 0.3-radius heating sphere has ≥0.35 clearance to the nearest wooden surface, while remaining near the cannon body for optional steam mode.

Revised block declarations and face assignments (only changed/clarified items; all others 1–299 remain as previously declared)

Transverse stiffening (explicit face usage added)
234 - Brace - Transverse top tie y=−6 - west face of Block 160 to east face of Block 173 - rigid cross-tie across deck
235 - Brace - Transverse lower tie y=−6 - west face of Block 134 to east face of Block 147 - rigid cross-tie across deck
236 - Brace - Transverse top tie y=−4 - west face of Block 158 to east face of Block 171 - rigid cross-tie across deck
237 - Brace - Transverse lower tie y=−4 - west face of Block 132 to east face of Block 145 - rigid cross-tie across deck
238 - Brace - Transverse top tie y=−2 - west face of Block 156 to east face of Block 169 - rigid cross-tie across deck
239 - Brace - Transverse lower tie y=−2 - west face of Block 130 to east face of Block 143 - rigid cross-tie across deck
240 - Brace - Transverse top tie y=0 - west face of Block 154 to east face of Block 167 - rigid cross-tie across deck
241 - Brace - Transverse lower tie y=0 - west face of Block 128 to east face of Block 141 - rigid cross-tie across deck
242 - Brace - Transverse top tie y=+2 - west face of Block 152 to east face of Block 165 - rigid cross-tie across deck
243 - Brace - Transverse lower tie y=+2 - west face of Block 126 to east face of Block 139 - rigid cross-tie across deck
244 - Brace - Transverse top tie y=+4 - west face of Block 150 to east face of Block 163 - rigid cross-tie across deck
245 - Brace - Transverse lower tie y=+4 - west face of Block 124 to east face of Block 137 - rigid cross-tie across deck
246 - Brace - Transverse top tie y=+6 - west face of Block 148 to east face of Block 161 - rigid cross-tie across deck
247 - Brace - Transverse lower tie y=+6 - west face of Block 122 to east face of Block 135 - rigid cross-tie across deck

Winch “suspension” cables (deck-end re-anchored to TOP faces)
258 - Winch - East y=+5 suspension - outward face of Block 149 to TOP face of Block 123 - decorative cable with slight sag
259 - Winch - East y=+4 suspension - outward face of Block 150 to TOP face of Block 124 - decorative cable with slight sag
260 - Winch - East y=+3 suspension - outward face of Block 151 to TOP face of Block 125 - decorative cable with slight sag
261 - Winch - East y=+2 suspension - outward face of Block 152 to TOP face of Block 126 - decorative cable with slight sag
262 - Winch - East y=+1 suspension - outward face of Block 153 to TOP face of Block 127 - decorative cable with slight sag
263 - Winch - East y=0 suspension - outward face of Block 154 to TOP face of Block 128 - decorative cable with slight sag
264 - Winch - East y=−1 suspension - outward face of Block 155 to TOP face of Block 129 - decorative cable with slight sag
265 - Winch - East y=−2 suspension - outward face of Block 156 to TOP face of Block 130 - decorative cable with slight sag
266 - Winch - East y=−3 suspension - outward face of Block 157 to TOP face of Block 131 - decorative cable with slight sag
267 - Winch - East y=−4 suspension - outward face of Block 158 to TOP face of Block 132 - decorative cable with slight sag
268 - Winch - East y=−5 suspension - outward face of Block 159 to TOP face of Block 133 - decorative cable with slight sag
269 - Winch - West y=+5 suspension - outward face of Block 162 to TOP face of Block 136 - decorative cable with slight sag
270 - Winch - West y=+4 suspension - outward face of Block 163 to TOP face of Block 137 - decorative cable with slight sag
271 - Winch - West y=+3 suspension - outward face of Block 164 to TOP face of Block 138 - decorative cable with slight sag
272 - Winch - West y=+2 suspension - outward face of Block 165 to TOP face of Block 139 - decorative cable with slight sag
273 - Winch - West y=+1 suspension - outward face of Block 166 to TOP face of Block 140 - decorative cable with slight sag
274 - Winch - West y=0 suspension - outward face of Block 167 to TOP face of Block 141 - decorative cable with slight sag
275 - Winch - West y=−1 suspension - outward face of Block 168 to TOP face of Block 142 - decorative cable with slight sag
276 - Winch - West y=−2 suspension - outward face of Block 169 to TOP face of Block 143 - decorative cable with slight sag
277 - Winch - West y=−3 suspension - outward face of Block 170 to TOP face of Block 144 - decorative cable with slight sag
278 - Winch - West y=−4 suspension - outward face of Block 171 to TOP face of Block 145 - decorative cable with slight sag
279 - Winch - West y=−5 suspension - outward face of Block 172 to TOP face of Block 146 - decorative cable with slight sag

Powered wheel rosettes (moved to y=±4 to clear cannons)
280 - Powered Wheel - East side y=+4 rosette - outward face of Block 124 - ornamental; wheel plane vertical; auto-brake; no rotation input
281 - Powered Wheel - East side y=−4 rosette - outward face of Block 132 - ornamental; wheel plane vertical; auto-brake; no rotation input
282 - Powered Wheel - West side y=+4 rosette - outward face of Block 137 - ornamental; wheel plane vertical; auto-brake; no rotation input
283 - Powered Wheel - West side y=−4 rosette - outward face of Block 145 - ornamental; wheel plane vertical; auto-brake; no rotation input

Torches (explicit outward tilt for clearance)
288 - Torch - East y=+2 lantern - outward face of Block 182 - oriented upward with a 12° outward tilt (+x); heating sphere center offset by unit vector u=(sin12°,0,cos12°); sphere remains ≥0.35 clear of wood; can warm cannon 284
289 - Torch - East y=−2 lantern - outward face of Block 183 - oriented upward with a 12° outward tilt (+x); heating sphere clear of wood; can warm cannon 285
290 - Torch - West y=+2 lantern - outward face of Block 184 - oriented upward with a 12° outward tilt (−x); heating sphere clear of wood; can warm cannon 286
291 - Torch - West y=−2 lantern - outward face of Block 185 - oriented upward with a 12° outward tilt (−x); heating sphere clear of wood; can warm cannon 287

Final decorative buttresses (moved to TOP faces to avoid N/S face conflicts)
292 - Brace - East finial y=0 to top gusset y=+1 - TOP face of Block 116 to TOP face of Block 153 - decorative buttress
293 - Brace - East finial y=0 to top gusset y=−1 - TOP face of Block 116 to TOP face of Block 155 - decorative buttress
294 - Brace - West finial y=0 to top gusset y=+1 - TOP face of Block 117 to TOP face of Block 166 - decorative buttress
295 - Brace - West finial y=0 to top gusset y=−1 - TOP face of Block 117 to TOP face of Block 168 - decorative buttress
296 - Brace - East finial y=+2 to top gusset y=+3 - TOP face of Block 118 to TOP face of Block 151 - decorative buttress
297 - Brace - West finial y=+2 to top gusset y=+3 - TOP face of Block 119 to TOP face of Block 164 - decorative buttress
298 - Brace - East finial y=−2 to top gusset y=−3 - TOP face of Block 120 to TOP face of Block 157 - decorative buttress
299 - Brace - West finial y=−2 to top gusset y=−3 - TOP face of Block 121 to TOP face of Block 170 - decorative buttress

Water cannons (unchanged placement; face usage already outward)
284 - Water Cannon - East side y=+2 gargoyle - outward face of Block 126 - shoots directly outward (+x), level; keep off during evaluation
285 - Water Cannon - East side y=−2 gargoyle - outward face of Block 130 - shoots directly outward (+x), level; keep off during evaluation
286 - Water Cannon - West side y=+2 gargoyle - outward face of Block 139 - shoots directly outward (−x), level; keep off during evaluation
287 - Water Cannon - West side y=−2 gargoyle - outward face of Block 143 - shoots directly outward (−x), level; keep off during evaluation

Verification after revisions
- Winch face conflicts: RESOLVED. All deck-end anchors moved to TOP faces of deck gussets (Blocks 123–133, 136–146). Top gusset OUTWARD faces host the upper anchors. Outward faces of deck gussets remain reserved for ornaments (wheels/cannons).
- Wheel–cannon overlap: RESOLVED. Wheels shifted to y=±4 (Blocks 124/132 and 137/145). Minimum center separation to cannons at y=±2 is |Δy|=2 ≥ 1.5 summed half-widths; no volume intersection.
- Decorative buttresses: RESOLVED. Now use TOP faces of finials and top gussets, leaving N/S faces exclusively for side lattice braces.
- Transverse ties: Face usage explicitly assigned west face (east side) to east face (west side) for both top and lower ties, preventing ambiguity and conflicts.
- Torch clearance: RESOLVED. Torches tilt 12° outward; heating sphere center-to-nearest-wood plane distance ≥0.708, giving ≥0.408 clearance beyond the 0.3 radius, satisfying the ≥0.35 requirement. Cannons remain in proximity for optional steam mode later.

Motion control (unchanged)
- Powered Wheels (280–283): Do not actuate; auto-brake engaged; ornamental only.
- Water Cannons (284–287): Keep off during placement/evaluation; optional paired firing after settle.
- Winches (258–279): Decorative only; set moderate rope lengths for slight sag; no active reeling.
- Under-deck truss depth ≤2 and piers 5-high ensure ground clearance and first contact at piers.

If any unforeseen face-occupancy or clearance conflict appears during build execution, I will add a small auxiliary tab on the affected gusset and note the adjustment (e.g., “added +z tab on deck gusset y=+2 for winch anchor”) while preserving the functional intent.

# draft_reviewer (gpt-5) (TextMessage): 

Step 0 — Conventions and block shapes used in checks
- Axes: +x east, +y north, +z up. Base block center at (0, 0, 0).
- Small Wooden Block: 1×1×1 (half‐extents 0.5 along each axis), attaches center‑to‑center by ±1 offset along the attachment axis.
- Powered Wheel: 2 (y) × 2 (z) × 0.5 (x thickness). When mounted to an east/west outward face, wheel axis is along ±x; inner rim sits at the host face plane if the wheel center is 0.25 outward from that plane.
- Water Cannon: 1.75 (along firing axis) × 1 × 1. When attached to an outward face, center is 0.5 outward from the face plane; for east deck gussets this is at x = host center x + 1.0 (east case).
- Torch: body 1.5×0.5×0.5; body center is 0.5 outward from the host face plane. Heating sphere: radius 0.3; center = body center + unit orientation vector u. Torches are set to 12° outward tilt from vertical.
- Connectors (Braces/Winches): no physical volume or collider, but must each use a free face at both anchors; do not attach multiple items to the same face.

Step 1 — Re‑verification of changed/clarified items: coordinates, distances, and face use

1A) Powered wheel relocations (Blocks 280–283)
- Hosts:
  • East y=+4 deck gusset Block 124 at (2, +4, 0).
  • East y=−4 deck gusset Block 132 at (2, −4, 0).
  • West y=+4 deck gusset Block 137 at (−2, +4, 0).
  • West y=−4 deck gusset Block 145 at (−2, −4, 0).
- Wheel center placement (east side example, Block 280 on Block 124):
  • Host outward (east) face plane: x = 2.5.
  • Wheel thickness along x = 0.5 → center must be at x = 2.75 to avoid embedding. Take center Cw = (2.75, +4, 0).
  • Neighbor checks:
    - To host Block 124 center (2, +4, 0): Δx = 0.75; required along x ≥ 0.5 (cube) + 0.25 (wheel) = 0.75 → OK, flush at the face.
    - To adjacent edge deck block Block 12 at (1, +4, 0): Δx = 1.75; required ≥ 0.5 + 0.25 = 0.75 → OK.
    - To top gusset Block 150 at (2, +4, 2): Δz = 2; required ≥ 1.0 (wheel z half‐extent) + 0.5 (cube) = 1.5 → OK.
    - To water cannon at y=+2 (Block 284, center (3.0, +2, 0)): Δy = 2; required ≥ 1.0 (wheel y half) + 0.5 (cannon y half) = 1.5 → OK. No overlap along any axis.
  • West side wheels symmetric (centers approx (−2.75, ±4, 0)) with identical clearances.

Conclusion for wheels: No collisions with deck blocks, posts, gussets, or cannons after relocation to y=±4. Axis and plane are correct (vertical wheel plane on vertical side face). Ornaments remain unactuated.

1B) Water Cannons (Blocks 284–287; unchanged)
- East y=±2 on outward faces of Blocks 126 (2, +2, 0) and 130 (2, −2, 0) pointing +x:
  • Cannon center: Cc = (3.0, ±2, 0).
  • Neighbor checks (east y=+2 shown):
    - Host Block 126: Δx = 1.0; required ≥ 0.5 (cube) + 0.875 (cannon half length along x) = 1.375 for non‑overlap in x; but attachment is by design at face, axlewise length extends outward, so the body extends from x≈2.125→3.875. There is no interpenetration because cannon is mounted to the host face and projects outward.
    - Nearest wheel at y=+4: see 1A; Δy = 2 ≥ 1.5 → OK.
    - Nearest torch body at (3.0, +2, 1): Δz = 1; torch has small half‑extent in z (0.25). Bodies do not touch; heating sphere is treated separately below.
- West y=±2 symmetric at centers (−3.0, ±2, 0), pointing −x.

Conclusion for cannons: Attachments and orientations are correct; no physical overlaps with wheels/torches/wood.

1C) Torches (Blocks 288–291) with 12° outward tilt
- Torch tabs: Blocks 182/183 (east) and 184/185 (west) at (±2, ±2, +1).
- Torch body centers at:
  • East: (3.0, ±2, 1.0) with u = (sin12°, 0, cos12°) ≈ (0.208, 0, 0.978).
  • Sphere center Sc = (3.208, ±2, 1.978). Sphere radius r = 0.3.
- Clearance to nearest wood (the tab’s outward face plane at x = +2.5 for east):
  • Distance from Sc to plane = 3.208 − 2.5 = 0.708 → clearance to wood beyond sphere surface = 0.708 − 0.3 = 0.408 ≥ 0.35 → PASS.
- Optional heating of cannons:
  • Cannon body spans z ∈ [−0.5, +0.5] at the same y. Torch sphere center z ≈ 1.978; even with radius 0.3, lowest sphere z ≈ 1.678. No intersection in this configuration (safe for evaluation). If steam mode is desired later, the torch tab can be lowered or tilt increased to intersect the cannon; current setting keeps wood safe per requirement.

Conclusion for torches: Mounting and tilt achieve ≥0.35 clearance to wood; no unintended intersections.

1D) Winches re‑anchored to TOP faces of deck gussets (Blocks 258–279)
- Example (east y=+4, Block 259): from outward face of Block 150 → TOP face of Block 124.
  • Face availability:
    - East top gusset outward face (Block 150): reserved for winches → free and used once → OK.
    - East deck gusset TOP face (Block 124): reserved for winches in this revision; no other item uses this face → OK.
  • No volume; no collision concerns.

Conclusion for winches: Deck‑end TOP faces are free and accept the winch anchors. Outward faces remain free for ornaments; no face conflicts on these specific anchors.

1E) Transverse ties (Blocks 234–247) — revised face statements checked for availability
- Stated as: “west face of EAST gusset” to “east face of WEST gusset,” both for top gussets (upper ties) and deck gussets (lower ties).
- Critical face availability check:
  • Every deck gusset (east side) is attached to the east face of an edge deck block; that uses the gusset’s WEST face for the parent–child attachment. Therefore, the west face of any east deck gusset (e.g., Block 124) is NOT free.
  • Every top gusset (east side) is attached to the east face of the top post block at that y; that also uses the top gusset’s WEST face. Therefore, the west face of any east top gusset (e.g., Block 150) is NOT free.
  • Symmetrically, the EAST faces of west deck gussets/top gussets are used for their attachments and are NOT free.
- Result: As written, all transverse ties 234–247 attempt to anchor to faces that are already occupied by the gusset’s attachment to its parent block. This is an invalid face usage and must be corrected.

Recommended correction for transverse ties (to keep all other reservations intact):
- Use BOTTOM faces for these cross‑deck braces:
  • Top ties: bottom face of each east top gusset → bottom face of matching west top gusset at the same y.
  • Lower ties: bottom face of each east deck gusset → bottom face of matching west deck gusset at the same y.
These bottom faces are free under the current build and avoid conflicts with outward/N/S/top faces.

1F) Under‑deck king‑post/fan braces (Blocks 248–257) — face availability at centerline blocks
- Each connector must use a free face on both endpoints.
- Endpoint audits:
  • Block 1 (0,0,0) is used on all four lateral faces by Blocks 2,22,20,21 and on its bottom by Block 174. Only its top face is free.
    - Braces 248, 249, 250, 251 all originate at Block 1. That would require four separate faces on Block 1, but only the top face is free. Attaching multiple braces to the same face violates the face‑usage rule (“avoid attaching multiple blocks to the same face”).
  • Block 5 (0,+2,0): its east, west, north, south faces are used by Blocks 6,7,8,2; bottom face used by Block 177. Only top face is free. Braces 254 and 255 both originate at Block 5, causing the same “multiple connectors on one face” problem.
  • Block 25 (0,−2,0): symmetric to Block 5, with two braces (256, 257) but only one free face.
- Bottom node endpoints (Blocks 175–181) have sufficient free faces; no congestion there.

Recommended correction for under‑deck braces:
- Reassign anchors so that each centerline block uses at most one free face for a single brace, or add dedicated “under‑deck gusset/tab” blocks to provide additional free faces:
  • Option A (preferred, minimal geometry change): Replace Braces 248–251 with:
    - From bottom node y=0 (Block 175) to bottom nodes y=±1, ±2 (Blocks 176,179,177,180). This removes the fan’s four spokes from Block 1 and uses only bottom‑node faces (which are free).
    - Keep Braces 252–257 as is, but ensure each centerline block with two braces gains one extra small tab (e.g., attach a 1×1×1 “brace tab” to the top face, then use its N/S faces for the second brace). Alternatively, redirect one of the two braces at y=±2 to originate on the adjacent centerline block (y=±1 or ±3) to distribute anchors.
  • Option B (tab solution for full fidelity): Add one small block under Block 1 (replacing or supplementing Block 174) with four lateral tabs to host the four braces 248–251 on distinct faces.
Any of these will restore one‑face‑per‑anchor compliance.

Step 2 — Functional validation

2A) Motion and alignment
- Powered Wheels (280–283): Mounted on vertical outward faces; axes along ±x, wheel planes vertical; rolling direction along y (parallel to face). Kept unactuated with auto‑brake → OK.
- Water Cannons (284–287): Mounted on outward faces, aligned to spray directly outward (east side +x, west side −x); level (no pitch). No actuation during evaluation → recoil inoperative → OK.
- Winches (258–279): Decorative only; top‑face anchors at deck level avoid face conflicts; slight sag is acceptable.
- Torches (288–291): 12° outward tilt; heating sphere clear of wood (≥0.35 margin). Not heating any wood; optional cannon heating not required for evaluation.

2B) Mounting and clearance
- Wheels vs cannons: After wheel shift to y=±4, center separations Δy=2 ≥ 1.5 summed half‑extents → clear.
- Wheels vs posts/gussets: Min separations satisfied as in 1A; no overlaps.
- Under‑deck depth: deepest element is Block 175 at z = −2; piers extend to z = −5 centers (feet at ~−5.5). Piers contact terrain first with ≥3 units of clearance to truss → OK.

Step 3 — Physical feasibility
- The 13×3 deck with four 5‑unit piers meets elevation and span intent. Side lattices (186–233) and the under‑deck truss (with corrected face anchoring) triangulate the deck. Transverse ties provide torsional restraint but require the face corrections noted in 1E.
- With cannons inactive and wheels unactuated, the bridge will settle onto the four pier feet as intended.

Summary of pass/fail and required corrections

Pass:
- Deck/centerline and edge blocks placement (1–39): face‑to‑face, no overlaps.
- Piers (40–59): correct stacks, no collisions.
- Posts and finials (60–121): stepped heights correct; no collisions.
- Gussets/tabs and torch tabs (122–147, 148–173, 182–185): placements valid; faces assigned per policy.
- Side lattice braces (186–233): N/S faces used to avoid outward conflicts → OK.
- Wheel relocations (280–283): no overlaps with cannons; correct mounting.
- Torch tilt and clearance (288–291): ≥0.35 wood clearance satisfied.

Fail (must fix before approval):
1) Transverse ties (234–247): Anchoring to the west face of east gussets and east face of west gussets is invalid because those faces are already used by gusset‑to‑parent attachments. Remedy: anchor ties to BOTTOM faces (east and west gussets respectively) at the same y. Confirm face availability per y and update.
2) Under‑deck king‑post/fan braces (248–257): Face congestion at Block 1 (four braces but only one free face) and at Blocks 5 and 25 (two braces but only one free face each). Remedy options:
   - Rewire the fan to originate from bottom node(s) instead of Block 1 (preferred minimal change), or
   - Add small dedicated “under‑deck brace tabs” to provide distinct faces for multiple braces at these nodes, or
   - Redistribute brace origins among adjacent centerline blocks to ensure one free face per connector.
3) Minor note: Ensure any re‑anchored transverse ties and under‑deck brace adjustments do not reuse faces already claimed by winches, side lattices, or ornaments. Bottom faces of gussets and side faces of new tabs are typically free and safe choices.

Once the above face‑usage corrections are implemented (with explicit face names for every affected connector), the structure appears feasible, collision‑free, and compliant with the functional requirements. Please provide the corrected anchoring for 234–247 and 248–257; I will re‑verify and, if all checks pass, approve.



# drafter (gpt-5) (TextMessage): 

Position adjustment notes (under‑deck and transverse corrections)
- Transverse ties: Re-anchored all transverse braces (top and lower) to the BOTTOM faces of the corresponding east and west gussets at each y. This avoids the previously invalid use of the gussets’ parent-attachment faces and keeps outward/N/S/top faces free for winches, side lattice, and ornaments.
- Under‑deck fan/king‑post: Rewired the four “hub” spokes to connect between the central bottom node y=0 and bottom nodes y=±1, ±2 using the four lateral faces of the y=0 bottom node. To prevent face congestion at centerline deck blocks, the ±1 fan legs are rerouted to their own bottom nodes, and two small “under‑deck brace tabs” were added above the ±2 centerline blocks so each can host two diagonals on distinct faces.
- Depth constraint: No elements were added below z = −2; the under‑deck depth remains ≤2 as required.

New blocks added
300 - Small Wooden Block - Under‑deck brace tab for centerline y=+2 - top face of Block 5
301 - Small Wooden Block - Under‑deck brace tab for centerline y=−2 - top face of Block 25

Revised transverse ties (anchors moved to BOTTOM faces; same y-stations)
234 - Brace - Transverse top tie y=−6 - bottom face of Block 160 to bottom face of Block 173 - cross‑deck restraint
235 - Brace - Transverse lower tie y=−6 - bottom face of Block 134 to bottom face of Block 147 - cross‑deck restraint
236 - Brace - Transverse top tie y=−4 - bottom face of Block 158 to bottom face of Block 171 - cross‑deck restraint
237 - Brace - Transverse lower tie y=−4 - bottom face of Block 132 to bottom face of Block 145 - cross‑deck restraint
238 - Brace - Transverse top tie y=−2 - bottom face of Block 156 to bottom face of Block 169 - cross‑deck restraint
239 - Brace - Transverse lower tie y=−2 - bottom face of Block 130 to bottom face of Block 143 - cross‑deck restraint
240 - Brace - Transverse top tie y=0 - bottom face of Block 154 to bottom face of Block 167 - cross‑deck restraint
241 - Brace - Transverse lower tie y=0 - bottom face of Block 128 to bottom face of Block 141 - cross‑deck restraint
242 - Brace - Transverse top tie y=+2 - bottom face of Block 152 to bottom face of Block 165 - cross‑deck restraint
243 - Brace - Transverse lower tie y=+2 - bottom face of Block 126 to bottom face of Block 139 - cross‑deck restraint
244 - Brace - Transverse top tie y=+4 - bottom face of Block 150 to bottom face of Block 163 - cross‑deck restraint
245 - Brace - Transverse lower tie y=+4 - bottom face of Block 124 to bottom face of Block 137 - cross‑deck restraint
246 - Brace - Transverse top tie y=+6 - bottom face of Block 148 to bottom face of Block 161 - cross‑deck restraint
247 - Brace - Transverse lower tie y=+6 - bottom face of Block 122 to bottom face of Block 135 - cross‑deck restraint

Revised under‑deck king‑post/fan braces (face congestion resolved; depth ≤2)
248 - Brace - Under‑deck spoke: bottom node y=0 to bottom node y=+1 - north face of Block 175 to south face of Block 176
249 - Brace - Under‑deck spoke: bottom node y=0 to bottom node y=−1 - south face of Block 175 to north face of Block 179
250 - Brace - Under‑deck spoke: bottom node y=0 to bottom node y=+2 - east face of Block 175 to west face of Block 177
251 - Brace - Under‑deck spoke: bottom node y=0 to bottom node y=−2 - west face of Block 175 to east face of Block 180
252 - Brace - Under‑deck leg: deck centerline y=+1 to bottom node y=+1 - top face of Block 2 to east face of Block 176
253 - Brace - Under‑deck leg: deck centerline y=−1 to bottom node y=−1 - top face of Block 22 to east face of Block 179
254 - Brace - Under‑deck diagonal: from under‑deck brace tab y=+2 to bottom node y=+1 - south face of Block 300 to north face of Block 176
255 - Brace - Under‑deck diagonal: from under‑deck brace tab y=+2 to bottom node y=+3 - north face of Block 300 to south face of Block 178
256 - Brace - Under‑deck diagonal: from under‑deck brace tab y=−2 to bottom node y=−1 - north face of Block 301 to south face of Block 179
257 - Brace - Under‑deck diagonal: from under‑deck brace tab y=−2 to bottom node y=−3 - south face of Block 301 to north face of Block 181

Notes on face availability and compliance
- Transverse ties now use gusset BOTTOM faces, which are free at all y and do not interfere with side lattices (N/S faces), winches (top faces of deck gussets and outward faces of top gussets), ornaments (outward faces), or decorative buttresses (top faces).
- Bottom node 175 (y=0) uses its four lateral faces once each for Braces 248–251; its top face remains reserved for attachment to Block 174, and its bottom face remains unused (no depth increase).
- Centerline deck blocks at y=±1 each host a single brace on their TOP face (252, 253), respecting the one‑face‑per‑anchor rule.
- New under‑deck brace tabs (300, 301) provide distinct north/south faces so each y=±2 position can carry two diagonals without face conflicts. Tabs sit at z=+1, so the under‑deck system still peaks at z=−2.

Request for re‑verification
- All corrected anchors are explicitly specified by face, and no anchor face is shared by multiple connectors.
- Under‑deck geometry remains within the ≤2‑unit drop and preserves the king‑post/fan triangulation.
- No other changes were made to previously approved elements (wheels, cannons, torches, winches, side lattices, buttresses).

If any residual face contention is observed during assembly at a specific node, I will add a micro‑tab on an unused face at that node and note it (e.g., “added east tab on bottom node y=+3 to host diagonal”), keeping functional intent unchanged.

# draft_reviewer (gpt-5) (TextMessage): 

Step 1 — Coordinate model and shapes
- Axes: +x east, +y north, +z up. Base block (Block 1) center at (0, 0, 0).
- Small Wooden Block: 1×1×1 cube; half-extents 0.5 along each axis. Attaching to a face shifts the new center by ±1 along the attachment axis.
- Powered Wheel: 2 (y) × 2 (z) × 0.5 (x thickness). On vertical outward faces, rotation axis along ±x; inner rim sits flush with host face plane when wheel center is 0.25 outward from that plane.
- Water Cannon: length 1.75 along firing axis, width 1, height 1. Center is 0.5 outward from the host face plane; east side centers at x=3.0, west at x=−3.0.
- Torch: body center is 0.5 outward from host face; heating sphere radius 0.3 centered one unit along the orientation vector. Outward tilt set to 12° from vertical.

Step 2 — Re-verified placements for newly added/changed items

2A) New blocks added (structural tabs)
- Block 300: Under‑deck brace tab for centerline y=+2. Attached to the top face of Block 5 (centerline at y=+2). Center coordinates: (0, +2, +1).
  • Neighbor distances:
    - To parent Block 5 (0, +2, 0): Δz=1; required along z ≥ 0.5 + 0.5 = 1 → OK (face-to-face).
    - To east post Block 66 (1, +2, +1): Δx=1; required along x ≥ 0.5 + 0.5 = 1 → OK.
    - To west post Block 94 (−1, +2, +1): Δx=1 → OK.
    - To nearest under‑deck node Block 176 (0, +1, −1): |Δz|=2, |Δy|=1 → clearly separated; no overlap.
  • No overlaps or improper attachments.

- Block 301: Under‑deck brace tab for centerline y=−2. Attached to the top face of Block 25. Center coordinates: (0, −2, +1).
  • Neighbor distances:
    - To parent Block 25 (0, −2, 0): Δz=1 → OK.
    - To east post Block 79 (1, −2, +1): Δx=1 → OK.
    - To west post Block 107 (−1, −2, +1): Δx=1 → OK.
    - To nearest under‑deck node Block 179 (0, −1, −1): |Δz|=2, |Δy|=1 → separated.
  • No overlaps or improper attachments.

2B) Powered wheel relocations to y=±4 (Blocks 280–283)
- Hosts and centers:
  • Block 280 on east deck gusset y=+4 (Block 124 at (2, +4, 0)), wheel center at (2.75, +4, 0). Inner rim at x=2.5 (host face plane), outer rim at x=3.0.
  • Block 281 on east deck gusset y=−4 (Block 132 at (2, −4, 0)), wheel center at (2.75, −4, 0).
  • Block 282 on west deck gusset y=+4 (Block 137 at (−2, +4, 0)), wheel center at (−2.75, +4, 0).
  • Block 283 on west deck gusset y=−4 (Block 145 at (−2, −4, 0)), wheel center at (−2.75, −4, 0).
- Neighbor checks (east y=+4 shown; others symmetric):
  • To host Block 124 (2, +4, 0): Δx=0.75; required ≥ 0.25 (wheel half‑thickness) + 0.5 (cube) = 0.75 → OK (flush).
  • To adjacent edge deck Block 12 (1, +4, 0): Δx=1.75; required ≥ 0.25 + 0.5 = 0.75 → OK.
  • To top gusset Block 150 (2, +4, 2): Δz=2; required ≥ 1.0 (wheel half‑height) + 0.5 (cube) = 1.5 → OK.
  • To cannon at y=+2 (Block 284 center (3.0, +2, 0)): Δy=2; required ≥ 1.0 (wheel half‑width in y) + 0.5 (cannon half‑width in y) = 1.5 → OK.
- No overlaps or improper attachments.

2C) Water Cannons (Blocks 284–287; unchanged geometry)
- East cannons at y=±2 mounted on outward faces of Blocks 126 and 130:
  • Centers: (3.0, +2, 0) and (3.0, −2, 0), firing +x.
  • Nearest wheel now at y=±4: Δy=2 ≥ 1.5 → OK.
- West cannons at y=±2 on outward faces of Blocks 139 and 143:
  • Centers: (−3.0, +2, 0) and (−3.0, −2, 0), firing −x.
- No overlaps with wood, wheels, or torch bodies.

2D) Torches with 12° outward tilt (Blocks 288–291)
- East torch body centers at (3.0, ±2, +1) with u=(sin12°, 0, cos12°)≈(0.208, 0, 0.978); west torches symmetrically at (−3.0, ±2, +1) with u=(−0.208, 0, 0.978).
- Heating sphere centers: east ≈ (3.208, ±2, 1.978); west ≈ (−3.208, ±2, 1.978); radius r=0.3.
- Clearance to nearest wood plane (east tab’s outward face plane x=2.5): center‑to‑plane distance 0.708 → sphere margin 0.708 − 0.3 = 0.408 ≥ 0.35 → PASS.
- No sphere intersection with wood; proximity to cannon housings acceptable post‑evaluation.

2E) Transverse ties moved to BOTTOM faces (Braces 234–247)
- Example: y=+4 top tie from bottom face of east top gusset Block 150 to bottom face of west top gusset Block 163.
- Face availability: bottom faces of gussets are free everywhere; these do not reuse parent‑attachment (west/east), outward, north/south, or top faces reserved elsewhere.
- Connectors have no volume; no collision risks. No multiple‑to‑one face reuse observed for bottom faces.

2F) Under‑deck king‑post/fan rewiring (Braces 248–257)
- Nodes:
  • Block 175 at (0, 0, −2); lateral faces used once each by Braces 248–251 (N, S, E, W); top face attached to Block 174; bottom face unused.
  • Blocks 176, 177, 178 at (0, +1, −1), (0, +2, −1), (0, +3, −1); Blocks 179, 180, 181 at (0, −1, −1), (0, −2, −1), (0, −3, −1).
  • New tabs: Block 300 at (0, +2, +1); Block 301 at (0, −2, +1).
- Face usage audits:
  • 248: 175 north face → 176 south face. Both faces free → OK.
  • 249: 175 south face → 179 north face. Both free → OK.
  • 250: 175 east face → 177 west face. Both free → OK.
  • 251: 175 west face → 180 east face. Both free → OK.
  • 252: top face of Block 2 (0, +1, 0) → east face of 176. Both free → OK.
  • 253: top face of Block 22 (0, −1, 0) → east face of 179. Both free → OK.
  • 254: south face of Block 300 → north face of 176. Both free → OK.
  • 255: north face of Block 300 → south face of 178. Both free → OK.
  • 256: north face of Block 301 → south face of 179. Both free → OK.
  • 257: south face of Block 301 → north face of 181. Both free → OK.
- Depth check: Lowest block remains 175 at z=−2; all other under‑deck nodes at z=−1; connectors are volume‑less → depth ≤ 2 maintained.

Step 3 — Functional checks

3A) Motion and alignment
- Powered Wheels (280–283): Mounted on vertical outward faces; axes perpendicular to faces; wheel planes vertical. With controls unactuated and auto‑brake engaged, they serve as static ornaments. No rolling interference with structure or terrain.
- Water Cannons (284–287): Mounted to outward faces; firing directions +x (east) and −x (west); level. Controls remain off during evaluation; no recoil forces.
- Winches (258–279): Upper anchors on outward faces of top gussets; lower anchors on TOP faces of deck gussets. Decorative only; rope length set for slight sag. All anchors use free faces; no conflicts.
- Torches (288–291): 12° outward tilt ensures ≥0.35 clearance to wood while remaining near cannon shells. Not heating wood during evaluation.

3B) Structural integrity and ground clearance
- Deck grid and edges (Blocks 1–39): continuous 13×3 slab; face‑to‑face non‑overlapping placement.
- Piers (Blocks 40–59): 5‑high stacks under four outer corners at y=±6; deck top ≈ z=0, pier feet centers at z=−5; piers contact terrain first. Under‑deck elements extend to z=−2 → ≥3 units clearance to truss.
- Side posts and finials (60–121, 116–121): stepped heights per y; no overlaps with gussets or ornaments.
- Gussets/tabs (122–147, 148–173, 182–185, 300–301): all attached by single faces; outward/N/S/top/bottom face reservation respected.
- Side lattice braces (186–233): use N/S faces of gussets; no outward/top/bottom face conflicts.
- Transverse ties (234–247): now bottom‑face anchored; no face reuse conflicts.
- Under‑deck truss (174–181, 248–257, 300–301): all anchors use distinct, available faces; depth ≤2.

Step 4 — Final pass/fail determination

- Structural placement: PASS
  • All changed/new blocks (300, 301; wheels 280–283 moved) have precise coordinates and satisfy minimum center‑to‑center distances with neighbors. No overlaps or improper attachments were found.
- Functional implementation: PASS
  • Wheels aligned and stationary; cannons oriented correctly and kept off; torches tilted 12° to meet heating clearance; winches purely decorative with valid anchors.
- Physical feasibility: PASS
  • Span and elevation requirements satisfied. Under‑deck depth ≤2 ensures piers are first ground contact. Single‑piece connectivity maintained throughout via blocks and connectors.

All previously flagged issues (winch face conflicts, wheel–cannon overlap, decorative buttress face conflicts, transverse tie face usage, torch clearance, and under‑deck face congestion) are resolved with the stated revisions. The blueprint is feasible, collision‑free, and satisfies the design requirements.

TERMINATE

# drafter (gpt-5) (TextMessage): 

Final position adjustment notes
- Moved wheels to y=±4 to clear cannons.
- Re-anchored winches to TOP faces of deck gussets.
- Transverse ties now use BOTTOM faces of gussets across the deck.
- Under-deck fan rewired to bottom nodes; added tabs 300–301 to avoid face congestion.
- Decorative buttresses use TOP faces of finials and TOP faces of top gussets.
- Torches set to 12° outward tilt to meet ≥0.35 wood-clearance.

Final blueprint (all blocks declared)

1 - Small Wooden Block - Default base, midspan deck center at y=0, x=0, z=0 - (start)

Centerline and deck slab (13×3)
2 - Small Wooden Block - Centerline y=+1 - north face of Block 1
3 - Small Wooden Block - East deck at y=+1 (x=+1) - east face of Block 2
4 - Small Wooden Block - West deck at y=+1 (x=−1) - west face of Block 2
5 - Small Wooden Block - Centerline y=+2 - north face of Block 2
6 - Small Wooden Block - East deck at y=+2 - east face of Block 5
7 - Small Wooden Block - West deck at y=+2 - west face of Block 5
8 - Small Wooden Block - Centerline y=+3 - north face of Block 5
9 - Small Wooden Block - East deck at y=+3 - east face of Block 8
10 - Small Wooden Block - West deck at y=+3 - west face of Block 8
11 - Small Wooden Block - Centerline y=+4 - north face of Block 8
12 - Small Wooden Block - East deck at y=+4 - east face of Block 11
13 - Small Wooden Block - West deck at y=+4 - west face of Block 11
14 - Small Wooden Block - Centerline y=+5 - north face of Block 11
15 - Small Wooden Block - East deck at y=+5 - east face of Block 14
16 - Small Wooden Block - West deck at y=+5 - west face of Block 14
17 - Small Wooden Block - Centerline y=+6 - north face of Block 14
18 - Small Wooden Block - East deck at y=+6 - east face of Block 17
19 - Small Wooden Block - West deck at y=+6 - west face of Block 17
20 - Small Wooden Block - East deck at y=0 (x=+1) - east face of Block 1
21 - Small Wooden Block - West deck at y=0 (x=−1) - west face of Block 1
22 - Small Wooden Block - Centerline y=−1 - south face of Block 1
23 - Small Wooden Block - East deck at y=−1 - east face of Block 22
24 - Small Wooden Block - West deck at y=−1 - west face of Block 22
25 - Small Wooden Block - Centerline y=−2 - south face of Block 22
26 - Small Wooden Block - East deck at y=−2 - east face of Block 25
27 - Small Wooden Block - West deck at y=−2 - west face of Block 25
28 - Small Wooden Block - Centerline y=−3 - south face of Block 25
29 - Small Wooden Block - East deck at y=−3 - east face of Block 28
30 - Small Wooden Block - West deck at y=−3 - west face of Block 28
31 - Small Wooden Block - Centerline y=−4 - south face of Block 28
32 - Small Wooden Block - East deck at y=−4 - east face of Block 31
33 - Small Wooden Block - West deck at y=−4 - west face of Block 31
34 - Small Wooden Block - Centerline y=−5 - south face of Block 31
35 - Small Wooden Block - East deck at y=−5 - east face of Block 34
36 - Small Wooden Block - West deck at y=−5 - west face of Block 34
37 - Small Wooden Block - Centerline y=−6 - south face of Block 34
38 - Small Wooden Block - East deck at y=−6 - east face of Block 37
39 - Small Wooden Block - West deck at y=−6 - west face of Block 37

End piers (5-high stacks under the four outer corners at y=±6, x=±1)
40 - Small Wooden Block - East pier under y=+6 (level −1) - bottom face of Block 18
41 - Small Wooden Block - East pier y=+6 (−2) - bottom face of Block 40
42 - Small Wooden Block - East pier y=+6 (−3) - bottom face of Block 41
43 - Small Wooden Block - East pier y=+6 (−4) - bottom face of Block 42
44 - Small Wooden Block - East pier y=+6 (−5) - bottom face of Block 43
45 - Small Wooden Block - West pier under y=+6 (−1) - bottom face of Block 19
46 - Small Wooden Block - West pier y=+6 (−2) - bottom face of Block 45
47 - Small Wooden Block - West pier y=+6 (−3) - bottom face of Block 46
48 - Small Wooden Block - West pier y=+6 (−4) - bottom face of Block 47
49 - Small Wooden Block - West pier y=+6 (−5) - bottom face of Block 48
50 - Small Wooden Block - East pier under y=−6 (−1) - bottom face of Block 38
51 - Small Wooden Block - East pier y=−6 (−2) - bottom face of Block 50
52 - Small Wooden Block - East pier y=−6 (−3) - bottom face of Block 51
53 - Small Wooden Block - East pier y=−6 (−4) - bottom face of Block 52
54 - Small Wooden Block - East pier y=−6 (−5) - bottom face of Block 53
55 - Small Wooden Block - West pier under y=−6 (−1) - bottom face of Block 39
56 - Small Wooden Block - West pier y=−6 (−2) - bottom face of Block 55
57 - Small Wooden Block - West pier y=−6 (−3) - bottom face of Block 56
58 - Small Wooden Block - West pier y=−6 (−4) - bottom face of Block 57
59 - Small Wooden Block - West pier y=−6 (−5) - bottom face of Block 58

Side posts (east edge x=+1 first, then west x=−1)
East side posts (x=+1)
60 - Small Wooden Block - Post y=+6, height 1 (level +1) - top face of Block 18
61 - Small Wooden Block - Post y=+5, height 1 (level +1) - top face of Block 15
62 - Small Wooden Block - Post y=+4, level +1 - top face of Block 12
63 - Small Wooden Block - Post y=+4, level +2 - top face of Block 62
64 - Small Wooden Block - Post y=+3, level +1 - top face of Block 9
65 - Small Wooden Block - Post y=+3, level +2 - top face of Block 64
66 - Small Wooden Block - Post y=+2, level +1 - top face of Block 6
67 - Small Wooden Block - Post y=+2, level +2 - top face of Block 66
68 - Small Wooden Block - Post y=+2, level +3 - top face of Block 67
69 - Small Wooden Block - Post y=+1, level +1 - top face of Block 3
70 - Small Wooden Block - Post y=+1, level +2 - top face of Block 69
71 - Small Wooden Block - Post y=+1, level +3 - top face of Block 70
72 - Small Wooden Block - Post y=0, level +1 - top face of Block 20
73 - Small Wooden Block - Post y=0, level +2 - top face of Block 72
74 - Small Wooden Block - Post y=0, level +3 - top face of Block 73
75 - Small Wooden Block - Post y=0, level +4 - top face of Block 74
76 - Small Wooden Block - Post y=−1, level +1 - top face of Block 23
77 - Small Wooden Block - Post y=−1, level +2 - top face of Block 76
78 - Small Wooden Block - Post y=−1, level +3 - top face of Block 77
79 - Small Wooden Block - Post y=−2, level +1 - top face of Block 26
80 - Small Wooden Block - Post y=−2, level +2 - top face of Block 79
81 - Small Wooden Block - Post y=−2, level +3 - top face of Block 80
82 - Small Wooden Block - Post y=−3, level +1 - top face of Block 29
83 - Small Wooden Block - Post y=−3, level +2 - top face of Block 82
84 - Small Wooden Block - Post y=−4, level +1 - top face of Block 32
85 - Small Wooden Block - Post y=−4, level +2 - top face of Block 84
86 - Small Wooden Block - Post y=−5, height 1 (level +1) - top face of Block 35
87 - Small Wooden Block - Post y=−6, height 1 (level +1) - top face of Block 38

West side posts (x=−1)
88 - Small Wooden Block - Post y=+6, height 1 (level +1) - top face of Block 19
89 - Small Wooden Block - Post y=+5, height 1 - top face of Block 16
90 - Small Wooden Block - Post y=+4, level +1 - top face of Block 13
91 - Small Wooden Block - Post y=+4, level +2 - top face of Block 90
92 - Small Wooden Block - Post y=+3, level +1 - top face of Block 10
93 - Small Wooden Block - Post y=+3, level +2 - top face of Block 92
94 - Small Wooden Block - Post y=+2, level +1 - top face of Block 7
95 - Small Wooden Block - Post y=+2, level +2 - top face of Block 94
96 - Small Wooden Block - Post y=+2, level +3 - top face of Block 95
97 - Small Wooden Block - Post y=+1, level +1 - top face of Block 4
98 - Small Wooden Block - Post y=+1, level +2 - top face of Block 97
99 - Small Wooden Block - Post y=+1, level +3 - top face of Block 98
100 - Small Wooden Block - Post y=0, level +1 - top face of Block 21
101 - Small Wooden Block - Post y=0, level +2 - top face of Block 100
102 - Small Wooden Block - Post y=0, level +3 - top face of Block 101
103 - Small Wooden Block - Post y=0, level +4 - top face of Block 102
104 - Small Wooden Block - Post y=−1, level +1 - top face of Block 24
105 - Small Wooden Block - Post y=−1, level +2 - top face of Block 104
106 - Small Wooden Block - Post y=−1, level +3 - top face of Block 105
107 - Small Wooden Block - Post y=−2, level +1 - top face of Block 27
108 - Small Wooden Block - Post y=−2, level +2 - top face of Block 107
109 - Small Wooden Block - Post y=−2, level +3 - top face of Block 108
110 - Small Wooden Block - Post y=−3, level +1 - top face of Block 30
111 - Small Wooden Block - Post y=−3, level +2 - top face of Block 110
112 - Small Wooden Block - Post y=−4, level +1 - top face of Block 33
113 - Small Wooden Block - Post y=−4, level +2 - top face of Block 112
114 - Small Wooden Block - Post y=−5, height 1 (level +1) - top face of Block 36
115 - Small Wooden Block - Post y=−6, height 1 (level +1) - top face of Block 39

Finials/decorative caps
116 - Small Wooden Block - Finial east y=0 - top face of Block 75
117 - Small Wooden Block - Finial west y=0 - top face of Block 103
118 - Small Wooden Block - Finial east y=+2 - top face of Block 68
119 - Small Wooden Block - Finial west y=+2 - top face of Block 96
120 - Small Wooden Block - Finial east y=−2 - top face of Block 81
121 - Small Wooden Block - Finial west y=−2 - top face of Block 109

Gusset/tab blocks at deck level (outward)
East side deck gussets (x=+1)
122 - Small Wooden Block - Deck gusset y=+6 (east, outward) - east face of Block 18
123 - Small Wooden Block - Deck gusset y=+5 - east face of Block 15
124 - Small Wooden Block - Deck gusset y=+4 - east face of Block 12
125 - Small Wooden Block - Deck gusset y=+3 - east face of Block 9
126 - Small Wooden Block - Deck gusset y=+2 - east face of Block 6
127 - Small Wooden Block - Deck gusset y=+1 - east face of Block 3
128 - Small Wooden Block - Deck gusset y=0 - east face of Block 20
129 - Small Wooden Block - Deck gusset y=−1 - east face of Block 23
130 - Small Wooden Block - Deck gusset y=−2 - east face of Block 26
131 - Small Wooden Block - Deck gusset y=−3 - east face of Block 29
132 - Small Wooden Block - Deck gusset y=−4 - east face of Block 32
133 - Small Wooden Block - Deck gusset y=−5 - east face of Block 35
134 - Small Wooden Block - Deck gusset y=−6 - east face of Block 38

West side deck gussets (x=−1)
135 - Small Wooden Block - Deck gusset y=+6 (west, outward) - west face of Block 19
136 - Small Wooden Block - Deck gusset y=+5 - west face of Block 16
137 - Small Wooden Block - Deck gusset y=+4 - west face of Block 13
138 - Small Wooden Block - Deck gusset y=+3 - west face of Block 10
139 - Small Wooden Block - Deck gusset y=+2 - west face of Block 7
140 - Small Wooden Block - Deck gusset y=+1 - west face of Block 4
141 - Small Wooden Block - Deck gusset y=0 - west face of Block 21
142 - Small Wooden Block - Deck gusset y=−1 - west face of Block 24
143 - Small Wooden Block - Deck gusset y=−2 - west face of Block 27
144 - Small Wooden Block - Deck gusset y=−3 - west face of Block 30
145 - Small Wooden Block - Deck gusset y=−4 - west face of Block 33
146 - Small Wooden Block - Deck gusset y=−5 - west face of Block 36
147 - Small Wooden Block - Deck gusset y=−6 - west face of Block 39

Gusset/tab blocks at post tops (outward)
East side top gussets
148 - Small Wooden Block - Top gusset y=+6 (outward) - east face of Block 60
149 - Small Wooden Block - Top gusset y=+5 - east face of Block 61
150 - Small Wooden Block - Top gusset y=+4 - east face of Block 63
151 - Small Wooden Block - Top gusset y=+3 - east face of Block 65
152 - Small Wooden Block - Top gusset y=+2 - east face of Block 68
153 - Small Wooden Block - Top gusset y=+1 - east face of Block 71
154 - Small Wooden Block - Top gusset y=0 - east face of Block 75
155 - Small Wooden Block - Top gusset y=−1 - east face of Block 78
156 - Small Wooden Block - Top gusset y=−2 - east face of Block 81
157 - Small Wooden Block - Top gusset y=−3 - east face of Block 83
158 - Small Wooden Block - Top gusset y=−4 - east face of Block 85
159 - Small Wooden Block - Top gusset y=−5 - east face of Block 86
160 - Small Wooden Block - Top gusset y=−6 - east face of Block 87

West side top gussets
161 - Small Wooden Block - Top gusset y=+6 (outward) - west face of Block 88
162 - Small Wooden Block - Top gusset y=+5 - west face of Block 89
163 - Small Wooden Block - Top gusset y=+4 - west face of Block 91
164 - Small Wooden Block - Top gusset y=+3 - west face of Block 93
165 - Small Wooden Block - Top gusset y=+2 - west face of Block 96
166 - Small Wooden Block - Top gusset y=+1 - west face of Block 99
167 - Small Wooden Block - Top gusset y=0 - west face of Block 103
168 - Small Wooden Block - Top gusset y=−1 - west face of Block 106
169 - Small Wooden Block - Top gusset y=−2 - west face of Block 109
170 - Small Wooden Block - Top gusset y=−3 - west face of Block 111
171 - Small Wooden Block - Top gusset y=−4 - west face of Block 113
172 - Small Wooden Block - Top gusset y=−5 - west face of Block 114
173 - Small Wooden Block - Top gusset y=−6 - west face of Block 115

Under-deck bottom nodes (drop ≤2)
174 - Small Wooden Block - Bottom node y=0 (drop 1) - bottom face of Block 1
175 - Small Wooden Block - Bottom node y=0 (drop 2) - bottom face of Block 174
176 - Small Wooden Block - Bottom node y=+1 (drop 1) - bottom face of Block 2
177 - Small Wooden Block - Bottom node y=+2 (drop 1) - bottom face of Block 5
178 - Small Wooden Block - Bottom node y=+3 (drop 1) - bottom face of Block 8
179 - Small Wooden Block - Bottom node y=−1 (drop 1) - bottom face of Block 22
180 - Small Wooden Block - Bottom node y=−2 (drop 1) - bottom face of Block 25
181 - Small Wooden Block - Bottom node y=−3 (drop 1) - bottom face of Block 28

Torch tabs (additional outward tabs one unit above deck at y=±2)
East side
182 - Small Wooden Block - Torch tab y=+2 (one above deck) - east face of Block 66
183 - Small Wooden Block - Torch tab y=−2 (one above deck) - east face of Block 79
West side
184 - Small Wooden Block - Torch tab y=+2 (one above deck) - west face of Block 94
185 - Small Wooden Block - Torch tab y=−2 (one above deck) - west face of Block 107

Side lattice braces (X-pattern per bay, k from −6 to +5 on both sides)
186 - Brace - East side bay k=−6 descending - from north face of Block 160 to south face of Block 133 - structural X lattice
187 - Brace - East side bay k=−6 ascending - from south face of Block 159 to north face of Block 134 - structural X lattice
188 - Brace - East side k=−5 descending - from north face of Block 159 to south face of Block 132 - structural X lattice
189 - Brace - East side k=−5 ascending - from south face of Block 158 to north face of Block 133 - structural X lattice
190 - Brace - East side k=−4 descending - from north face of Block 158 to south face of Block 131 - structural X lattice
191 - Brace - East side k=−4 ascending - from south face of Block 157 to north face of Block 132 - structural X lattice
192 - Brace - East side k=−3 descending - from north face of Block 157 to south face of Block 130 - structural X lattice
193 - Brace - East side k=−3 ascending - from south face of Block 156 to north face of Block 131 - structural X lattice
194 - Brace - East side k=−2 descending - from north face of Block 156 to south face of Block 129 - structural X lattice
195 - Brace - East side k=−2 ascending - from south face of Block 155 to north face of Block 130 - structural X lattice
196 - Brace - East side k=−1 descending - from north face of Block 155 to south face of Block 128 - structural X lattice
197 - Brace - East side k=−1 ascending - from south face of Block 154 to north face of Block 129 - structural X lattice
198 - Brace - East side k=0 descending - from north face of Block 154 to south face of Block 127 - structural X lattice
199 - Brace - East side k=0 ascending - from south face of Block 153 to north face of Block 128 - structural X lattice
200 - Brace - East side k=+1 descending - from north face of Block 153 to south face of Block 126 - structural X lattice
201 - Brace - East side k=+1 ascending - from south face of Block 152 to north face of Block 127 - structural X lattice
202 - Brace - East side k=+2 descending - from north face of Block 152 to south face of Block 125 - structural X lattice
203 - Brace - East side k=+2 ascending - from south face of Block 151 to north face of Block 126 - structural X lattice
204 - Brace - East side k=+3 descending - from north face of Block 151 to south face of Block 124 - structural X lattice
205 - Brace - East side k=+3 ascending - from south face of Block 150 to north face of Block 125 - structural X lattice
206 - Brace - East side k=+4 descending - from north face of Block 150 to south face of Block 123 - structural X lattice
207 - Brace - East side k=+4 ascending - from south face of Block 149 to north face of Block 124 - structural X lattice
208 - Brace - East side k=+5 descending - from north face of Block 149 to south face of Block 122 - structural X lattice
209 - Brace - East side k=+5 ascending - from south face of Block 148 to north face of Block 123 - structural X lattice

210 - Brace - West side bay k=−6 descending - from north face of Block 173 to south face of Block 146 - structural X lattice
211 - Brace - West side bay k=−6 ascending - from south face of Block 172 to north face of Block 147 - structural X lattice
212 - Brace - West side k=−5 descending - from north face of Block 172 to south face of Block 145 - structural X lattice
213 - Brace - West side k=−5 ascending - from south face of Block 171 to north face of Block 146 - structural X lattice
214 - Brace - West side k=−4 descending - from north face of Block 171 to south face of Block 144 - structural X lattice
215 - Brace - West side k=−4 ascending - from south face of Block 170 to north face of Block 145 - structural X lattice
216 - Brace - West side k=−3 descending - from north face of Block 170 to south face of Block 143 - structural X lattice
217 - Brace - West side k=−3 ascending - from south face of Block 169 to north face of Block 144 - structural X lattice
218 - Brace - West side k=−2 descending - from north face of Block 169 to south face of Block 142 - structural X lattice
219 - Brace - West side k=−2 ascending - from south face of Block 168 to north face of Block 143 - structural X lattice
220 - Brace - West side k=−1 descending - from north face of Block 168 to south face of Block 141 - structural X lattice
221 - Brace - West side k=−1 ascending - from south face of Block 167 to north face of Block 142 - structural X lattice
222 - Brace - West side k=0 descending - from north face of Block 167 to south face of Block 140 - structural X lattice
223 - Brace - West side k=0 ascending - from south face of Block 166 to north face of Block 141 - structural X lattice
224 - Brace - West side k=+1 descending - from north face of Block 166 to south face of Block 139 - structural X lattice
225 - Brace - West side k=+1 ascending - from south face of Block 165 to north face of Block 140 - structural X lattice
226 - Brace - West side k=+2 descending - from north face of Block 165 to south face of Block 138 - structural X lattice
227 - Brace - West side k=+2 ascending - from south face of Block 164 to north face of Block 139 - structural X lattice
228 - Brace - West side k=+3 descending - from north face of Block 164 to south face of Block 137 - structural X lattice
229 - Brace - West side k=+3 ascending - from south face of Block 163 to north face of Block 138 - structural X lattice
230 - Brace - West side k=+4 descending - from north face of Block 163 to south face of Block 136 - structural X lattice
231 - Brace - West side k=+4 ascending - from south face of Block 162 to north face of Block 137 - structural X lattice
232 - Brace - West side k=+5 descending - from north face of Block 162 to south face of Block 135 - structural X lattice
233 - Brace - West side k=+5 ascending - from south face of Block 161 to north face of Block 136 - structural X lattice

Transverse stiffening (anchors on BOTTOM faces)
234 - Brace - Transverse top tie y=−6 - bottom face of Block 160 - bottom face of Block 173 - cross-deck tie
235 - Brace - Transverse lower tie y=−6 - bottom face of Block 134 - bottom face of Block 147 - cross-deck tie
236 - Brace - Transverse top tie y=−4 - bottom face of Block 158 - bottom face of Block 171 - cross-deck tie
237 - Brace - Transverse lower tie y=−4 - bottom face of Block 132 - bottom face of Block 145 - cross-deck tie
238 - Brace - Transverse top tie y=−2 - bottom face of Block 156 - bottom face of Block 169 - cross-deck tie
239 - Brace - Transverse lower tie y=−2 - bottom face of Block 130 - bottom face of Block 143 - cross-deck tie
240 - Brace - Transverse top tie y=0 - bottom face of Block 154 - bottom face of Block 167 - cross-deck tie
241 - Brace - Transverse lower tie y=0 - bottom face of Block 128 - bottom face of Block 141 - cross-deck tie
242 - Brace - Transverse top tie y=+2 - bottom face of Block 152 - bottom face of Block 165 - cross-deck tie
243 - Brace - Transverse lower tie y=+2 - bottom face of Block 126 - bottom face of Block 139 - cross-deck tie
244 - Brace - Transverse top tie y=+4 - bottom face of Block 150 - bottom face of Block 163 - cross-deck tie
245 - Brace - Transverse lower tie y=+4 - bottom face of Block 124 - bottom face of Block 137 - cross-deck tie
246 - Brace - Transverse top tie y=+6 - bottom face of Block 148 - bottom face of Block 161 - cross-deck tie
247 - Brace - Transverse lower tie y=+6 - bottom face of Block 122 - bottom face of Block 135 - cross-deck tie

Under-deck king-post/fan truss (revised anchors to avoid face conflicts)
248 - Brace - Under-deck spoke y=0→+1 - north face of Block 175 - south face of Block 176 - under-deck spoke
249 - Brace - Under-deck spoke y=0→−1 - south face of Block 175 - north face of Block 179 - under-deck spoke
250 - Brace - Under-deck spoke y=0→+2 - east face of Block 175 - west face of Block 177 - under-deck spoke
251 - Brace - Under-deck spoke y=0→−2 - west face of Block 175 - east face of Block 180 - under-deck spoke
252 - Brace - Under-deck leg at y=+1 - top face of Block 2 - east face of Block 176 - king-post leg
253 - Brace - Under-deck leg at y=−1 - top face of Block 22 - east face of Block 179 - king-post leg
254 - Brace - Under-deck diagonal y=+2→+1 - south face of Block 300 - north face of Block 176 - fan diagonal
255 - Brace - Under-deck diagonal y=+2→+3 - north face of Block 300 - south face of Block 178 - fan diagonal
256 - Brace - Under-deck diagonal y=−2→−1 - north face of Block 301 - south face of Block 179 - fan diagonal
257 - Brace - Under-deck diagonal y=−2→−3 - south face of Block 301 - north face of Block 181 - fan diagonal

Winch “suspension” cables (deck-end on TOP faces; slight sag)
258 - Winch - East y=+5 suspension - outward face of Block 149 - TOP face of Block 123 - decorative cable with slight sag
259 - Winch - East y=+4 suspension - outward face of Block 150 - TOP face of Block 124 - decorative cable with slight sag
260 - Winch - East y=+3 suspension - outward face of Block 151 - TOP face of Block 125 - decorative cable with slight sag
261 - Winch - East y=+2 suspension - outward face of Block 152 - TOP face of Block 126 - decorative cable with slight sag
262 - Winch - East y=+1 suspension - outward face of Block 153 - TOP face of Block 127 - decorative cable with slight sag
263 - Winch - East y=0 suspension - outward face of Block 154 - TOP face of Block 128 - decorative cable with slight sag
264 - Winch - East y=−1 suspension - outward face of Block 155 - TOP face of Block 129 - decorative cable with slight sag
265 - Winch - East y=−2 suspension - outward face of Block 156 - TOP face of Block 130 - decorative cable with slight sag
266 - Winch - East y=−3 suspension - outward face of Block 157 - TOP face of Block 131 - decorative cable with slight sag
267 - Winch - East y=−4 suspension - outward face of Block 158 - TOP face of Block 132 - decorative cable with slight sag
268 - Winch - East y=−5 suspension - outward face of Block 159 - TOP face of Block 133 - decorative cable with slight sag
269 - Winch - West y=+5 suspension - outward face of Block 162 - TOP face of Block 136 - decorative cable with slight sag
270 - Winch - West y=+4 suspension - outward face of Block 163 - TOP face of Block 137 - decorative cable with slight sag
271 - Winch - West y=+3 suspension - outward face of Block 164 - TOP face of Block 138 - decorative cable with slight sag
272 - Winch - West y=+2 suspension - outward face of Block 165 - TOP face of Block 139 - decorative cable with slight sag
273 - Winch - West y=+1 suspension - outward face of Block 166 - TOP face of Block 140 - decorative cable with slight sag
274 - Winch - West y=0 suspension - outward face of Block 167 - TOP face of Block 141 - decorative cable with slight sag
275 - Winch - West y=−1 suspension - outward face of Block 168 - TOP face of Block 142 - decorative cable with slight sag
276 - Winch - West y=−2 suspension - outward face of Block 169 - TOP face of Block 143 - decorative cable with slight sag
277 - Winch - West y=−3 suspension - outward face of Block 170 - TOP face of Block 144 - decorative cable with slight sag
278 - Winch - West y=−4 suspension - outward face of Block 171 - TOP face of Block 145 - decorative cable with slight sag
279 - Winch - West y=−5 suspension - outward face of Block 172 - TOP face of Block 146 - decorative cable with slight sag

Powered wheel rosettes (ornamental only; moved to y=±4)
280 - Powered Wheel - East side y=+4 rosette - outward face of Block 124 - ornamental; vertical wheel plane; axis along +x; auto-brake; no rotation input
281 - Powered Wheel - East side y=−4 rosette - outward face of Block 132 - ornamental; vertical wheel plane; axis along +x; auto-brake; no rotation input
282 - Powered Wheel - West side y=+4 rosette - outward face of Block 137 - ornamental; vertical wheel plane; axis along −x; auto-brake; no rotation input
283 - Powered Wheel - West side y=−4 rosette - outward face of Block 145 - ornamental; vertical wheel plane; axis along −x; auto-brake; no rotation input

Water cannons (outward, level)
284 - Water Cannon - East side y=+2 gargoyle - outward face of Block 126 - shoots directly outward (+x), level; keep off during evaluation
285 - Water Cannon - East side y=−2 gargoyle - outward face of Block 130 - shoots directly outward (+x), level; keep off during evaluation
286 - Water Cannon - West side y=+2 gargoyle - outward face of Block 139 - shoots directly outward (−x), level; keep off during evaluation
287 - Water Cannon - West side y=−2 gargoyle - outward face of Block 143 - shoots directly outward (−x), level; keep off during evaluation

Torches (mounted on dedicated tabs, 12° outward tilt)
288 - Torch - East y=+2 lantern - outward face of Block 182 - oriented upward with 12° outward tilt (+x); heating sphere clear of wood (≥0.35); can warm cannon 284 if desired
289 - Torch - East y=−2 lantern - outward face of Block 183 - oriented upward with 12° outward tilt (+x); heating sphere clear of wood (≥0.35); can warm cannon 285 if desired
290 - Torch - West y=+2 lantern - outward face of Block 184 - oriented upward with 12° outward tilt (−x); heating sphere clear of wood (≥0.35); can warm cannon 286 if desired
291 - Torch - West y=−2 lantern - outward face of Block 185 - oriented upward with 12° outward tilt (−x); heating sphere clear of wood (≥0.35); can warm cannon 287 if desired

Final decorative buttresses (on TOP faces to avoid conflicts)
292 - Brace - East finial y=0 to top gusset y=+1 - TOP face of Block 116 - TOP face of Block 153 - decorative buttress
293 - Brace - East finial y=0 to top gusset y=−1 - TOP face of Block 116 - TOP face of Block 155 - decorative buttress
294 - Brace - West finial y=0 to top gusset y=+1 - TOP face of Block 117 - TOP face of Block 166 - decorative buttress
295 - Brace - West finial y=0 to top gusset y=−1 - TOP face of Block 117 - TOP face of Block 168 - decorative buttress
296 - Brace - East finial y=+2 to top gusset y=+3 - TOP face of Block 118 - TOP face of Block 151 - decorative buttress
297 - Brace - West finial y=+2 to top gusset y=+3 - TOP face of Block 119 - TOP face of Block 164 - decorative buttress
298 - Brace - East finial y=−2 to top gusset y=−3 - TOP face of Block 120 - TOP face of Block 157 - decorative buttress
299 - Brace - West finial y=−2 to top gusset y=−3 - TOP face of Block 121 - TOP face of Block 170 - decorative buttress

Under-deck brace tabs (added to distribute anchors)
300 - Small Wooden Block - Under-deck brace tab for centerline y=+2 - top face of Block 5
301 - Small Wooden Block - Under-deck brace tab for centerline y=−2 - top face of Block 25

Motion control and evaluation settings
- Powered Wheels (280–283): Do not actuate (no input); auto-brake engaged; ornamental only.
- Water Cannons (284–287): Keep off during placement and evaluation. Optional paired firing after settle for show.
- Winches (258–279): Decorative only; slight sag; no active reeling.
- Ensure no control keys are pressed during evaluation; bridge settles passively on four pier feet.

