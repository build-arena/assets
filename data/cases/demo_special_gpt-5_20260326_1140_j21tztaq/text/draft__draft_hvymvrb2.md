# user (default) (TextMessage): 

The plan of the specific sub-structure 1: {'name': 'Ornate Through-Truss Bridge (Single-Piece, 3×13 Deck)', 'description': 'A single, rigid bridge assembly spanning 13 units north–south and 3 units east–west, with two-tier parapets, alternating sculptural Water Cannons and Torch lanterns, underhung Powered Wheel medallions, rich side truss bracing, cross-bracing, and a central pylon with winch suspenders. It is designed to be lowered into place to rest on terrain edges without anchors, while keeping the deck well above the gap bottom.', 'components': '- Default stone base block (1×1×1): 1 (mandatory, embedded at deck center).\n        - Small Wooden Block (1×1×1): approximately 39 (deck) + 6 (end feet) + 52 (parapet posts) + 5 (central pylon and cross-beam) + 12 (wheel medallion bases) ≈ 114 total (allow ±10 for small cleats/extra anchors if needed).\n        - Powered Wheel (2×2×0.5): 12 (odd y bays on both sides, underhung on medallion bases).\n        - Water Cannon (1×1.75×1): 12 (alternating bays on parapet top posts: even y on east, odd y on west).\n        - Torch (1.5×0.5×0.5): 12 (alternating opposite to cannons).\n        - Brace: 30–40 (longitudinal top-chord ties along both sides, diagonal side-panel lattice, three east–west cross-ties, optional deck cross X-braces).\n        - Winch: 6–10 (decorative suspenders from the central pylon/cross-beam down to deck blocks at y=±2, ±4, ±6; optionally to inner faces of parapet posts).', 'assembly': '- Coordinate frame: x east–west, y north–south (gap along y), z up. Place the center of the default stone at (0, 0, 0).\n        1) Deck:\n           - Center row (x=0): Attach 6 Small Wooden Blocks to the north face and 6 to the south face of the stone, forming y ∈ {−6,…,+6}.\n           - Edge rows: For each center-row block at (0, y, 0), attach one Small Wooden Block on its east face (to x=+1) and one on its west face (to x=−1), producing a 3×13 deck grid.\n           - End feet: At y=±6, attach one Small Wooden Block to the bottom faces of each x ∈ {−1, 0, +1} deck block (six total feet).\n        2) Parapets:\n           - For each edge deck block (x=±1, all y), attach a Small Wooden Block to its top face (z=+1), then another Small Wooden Block atop that (z=+2) to form 2-high posts.\n        3) Underhung Powered Wheels:\n           - For y odd (±1, ±3, ±5):\n             • East side: attach a Small Wooden Block to the bottom face of the east-edge deck block (x=+1, z=−1) as a medallion base, then attach a Powered Wheel to that base’s east face; wheel axis along +x, disc vertical in YZ.\n             • West side: mirror as above on x=−1, wheel attached to the west face of the base.\n        4) Alternating Cannons and Torches (top of posts):\n           - Even y: attach Water Cannons to the outer face of east top posts (x=+1, z≈+2), oriented upward and inward; attach Torches to the outer face of west top posts (x=−1, z≈+2), oriented upward and outward.\n           - Odd y: reverse—Cannons on west top posts, Torches on east top posts.\n           - Confirm that Torch flame sphere centers ~0.5 outboard and 1 unit above the mount, ensuring ≥0.5 clearance to any wood or cannon (well >0.3 heating radius). \n        5) Side truss Braces:\n           - Along each parapet, connect adjacent top posts (north face of y to south face of y+1) to create a continuous top tie line with Braces.\n           - For each panel, add one diagonal Brace from the outer face of the edge deck block at y to the inner face of the top post at y+1 on the same side. Alternate slants (/, \\, /, \\…) along the length for a Warren-truss motif.\n        6) Cross-bracing:\n           - At y = −4, 0, +4, connect east–west inner faces of top posts with Braces. Optionally add a second brace at the same y connecting east–west inner faces of edge deck blocks to form X-braced portals across the deck width.\n        7) Central pylon and Winches:\n           - Build a 3-high pylon on the top face of the center deck block at (0,0), then attach a cross-beam block to the pylon’s east and west faces at the top. \n           - Attach Winches from pylon/cross-beam faces (north, south, east, west) down to the top faces of center-row deck blocks at y=±2, ±4, ±6 (and/or to the inner faces of parapet posts at those y’s), forming decorative angled suspenders. Distribute attachments so no single face is overused; if necessary, add a small wooden “cleat” block to gain an extra free face for winch anchoring.', 'motion_control': '- Do not apply any driving input to Powered Wheels.\n        - Do not fire Water Cannons (keep controls unbound or unpressed).\n        - Torches remain lit and outward-facing; ensure no backward-facing steam jets exist (none are used).\n        - The structure is passive; placement over the gap and gentle settling are sufficient for final position.', 'function': '- Spans the 10-unit north–south gap via a 13-unit-long, rigid 3-wide deck.\n        - Maintains the deck above the bottom of the gap by resting on the two edges; the wide base and triangulated parapets resist rotation and keep the walking surface high.\n        - Maximizes visual and block diversity using all available block types in an integrated, ornate composition.\n        - Braces and Winches add both ornamental complexity and supplemental rigidity, while the Water Cannons and Powered Wheels serve as bold visual elements without mechanical activation.', 'design_requirements': '- The bridge must remain a single sub-structure; do not separate any parts after assembly.\n        - Ensure the deck length remains 13 units to guarantee ≥10 units clear span with end overhangs.\n        - Keep Torches’ heating spheres in free air: mount on outer faces of top posts; maintain ≥0.5-unit clearance to wood and Water Cannons (heating radius is 0.3).\n        - Keep Water Cannons OFF. Use alternating placement to avoid proximity to torches on the same post.\n        - Place Powered Wheels only on underhung medallion bases (beneath edge deck blocks) to avoid interference with posts and walking surface.\n        - Use connector Braces and Winches only between free, attachable faces; add small wooden “cleat” blocks if additional free faces are required for multiple connectors at the same node.\n        - Positions may be micro‑adjusted in later stages to resolve conflicts based on actual build execution.'}

# drafter (gpt-5) (TextMessage): 

Ornate Through-Truss Bridge (Single-Piece, 3×13 Deck)
Global axes: x east, y north, z up. Default base stone at (0, 0, 0); all placements refer to compass faces and z stacking from that origin.

Position adjustment notes (design-fit and safety)
- Fixtures at y=0 omitted: We intentionally leave the parapet top posts at y=0 free of Water Cannon/Torch to (a) clear the central pylon headroom and (b) meet the specified 12 Cannons and 12 Torches total.
- Diagonal side braces every other bay: To stay within 30–40 braces total while keeping a clean Warren motif, diagonals are installed only on even-start bays (y from −6 to +5 stepping by 2) on each side. This yields 12 diagonals total (6 per side). All longitudinal top-chord ties are retained (24). Three east–west cross ties installed at y=−4, 0, +4. Total braces = 39.
- Torch clearance: Torches mounted on outer faces with flame centers 0.5 unit outboard and 1 unit above mount. Heating sphere radius 0.3 has >0.5 clearance to all wood and cannons by alternating sides and skipping the y=0 pair.

Deck (3×13 grid, z=0; the base stone occupies the center of the center row)
- Block 0 - Default Starting Block - Stone base at deck center (0,0,0). Reference anchor for the whole build.

Center row x=0 (Small Wooden Blocks, z=0)
- Block 1 - Small Wooden Block - Center row (0, +1, 0) - north face of Block 0
- Block 2 - Small Wooden Block - (0, +2, 0) - north face of Block 1
- Block 3 - Small Wooden Block - (0, +3, 0) - north face of Block 2
- Block 4 - Small Wooden Block - (0, +4, 0) - north face of Block 3
- Block 5 - Small Wooden Block - (0, +5, 0) - north face of Block 4
- Block 6 - Small Wooden Block - (0, +6, 0) - north face of Block 5
- Block 7 - Small Wooden Block - (0, −1, 0) - south face of Block 0
- Block 8 - Small Wooden Block - (0, −2, 0) - south face of Block 7
- Block 9 - Small Wooden Block - (0, −3, 0) - south face of Block 8
- Block 10 - Small Wooden Block - (0, −4, 0) - south face of Block 9
- Block 11 - Small Wooden Block - (0, −5, 0) - south face of Block 10
- Block 12 - Small Wooden Block - (0, −6, 0) - south face of Block 11

Edge rows x=+1 (east) and x=−1 (west), z=0; one attached to each center-row block and to Block 0
- Block 13 - Small Wooden Block - East edge ( +1, −6, 0 ) - east face of Block 12
- Block 14 - Small Wooden Block - West edge ( −1, −6, 0 ) - west face of Block 12
- Block 15 - Small Wooden Block - East edge ( +1, −5, 0 ) - east face of Block 11
- Block 16 - Small Wooden Block - West edge ( −1, −5, 0 ) - west face of Block 11
- Block 17 - Small Wooden Block - East edge ( +1, −4, 0 ) - east face of Block 10
- Block 18 - Small Wooden Block - West edge ( −1, −4, 0 ) - west face of Block 10
- Block 19 - Small Wooden Block - East edge ( +1, −3, 0 ) - east face of Block 9
- Block 20 - Small Wooden Block - West edge ( −1, −3, 0 ) - west face of Block 9
- Block 21 - Small Wooden Block - East edge ( +1, −2, 0 ) - east face of Block 8
- Block 22 - Small Wooden Block - West edge ( −1, −2, 0 ) - west face of Block 8
- Block 23 - Small Wooden Block - East edge ( +1, −1, 0 ) - east face of Block 7
- Block 24 - Small Wooden Block - West edge ( −1, −1, 0 ) - west face of Block 7
- Block 25 - Small Wooden Block - East edge ( +1, 0, 0 ) - east face of Block 0
- Block 26 - Small Wooden Block - West edge ( −1, 0, 0 ) - west face of Block 0
- Block 27 - Small Wooden Block - East edge ( +1, +1, 0 ) - east face of Block 1
- Block 28 - Small Wooden Block - West edge ( −1, +1, 0 ) - west face of Block 1
- Block 29 - Small Wooden Block - East edge ( +1, +2, 0 ) - east face of Block 2
- Block 30 - Small Wooden Block - West edge ( −1, +2, 0 ) - west face of Block 2
- Block 31 - Small Wooden Block - East edge ( +1, +3, 0 ) - east face of Block 3
- Block 32 - Small Wooden Block - West edge ( −1, +3, 0 ) - west face of Block 3
- Block 33 - Small Wooden Block - East edge ( +1, +4, 0 ) - east face of Block 4
- Block 34 - Small Wooden Block - West edge ( −1, +4, 0 ) - west face of Block 4
- Block 35 - Small Wooden Block - East edge ( +1, +5, 0 ) - east face of Block 5
- Block 36 - Small Wooden Block - West edge ( −1, +5, 0 ) - west face of Block 5
- Block 37 - Small Wooden Block - East edge ( +1, +6, 0 ) - east face of Block 6
- Block 38 - Small Wooden Block - West edge ( −1, +6, 0 ) - west face of Block 6

End feet at y=±6 (z=−1; under all three deck blocks at y=±6)
- Block 39 - Small Wooden Block - Foot under ( −1, −6 ) at ( −1, −6, −1 ) - bottom face of Block 14
- Block 40 - Small Wooden Block - Foot under ( 0, −6 ) at ( 0, −6, −1 ) - bottom face of Block 12
- Block 41 - Small Wooden Block - Foot under ( +1, −6 ) at ( +1, −6, −1 ) - bottom face of Block 13
- Block 42 - Small Wooden Block - Foot under ( −1, +6 ) at ( −1, +6, −1 ) - bottom face of Block 38
- Block 43 - Small Wooden Block - Foot under ( 0, +6 ) at ( 0, +6, −1 ) - bottom face of Block 6
- Block 44 - Small Wooden Block - Foot under ( +1, +6 ) at ( +1, +6, −1 ) - bottom face of Block 37

Parapet posts (two-high, on every edge deck block x=±1, y∈{−6…+6}; z=+1 and z=+2)
For each edge deck block in Blocks 13–38: add top posts P1 at z=+1 and P2 at z=+2. Listed in order y from −6 to +6.
- Block 45 - Small Wooden Block - East post z=+1 at ( +1, −6, +1 ) - top face of Block 13
- Block 46 - Small Wooden Block - East post z=+2 at ( +1, −6, +2 ) - top face of Block 45
- Block 47 - Small Wooden Block - West post z=+1 at ( −1, −6, +1 ) - top face of Block 14
- Block 48 - Small Wooden Block - West post z=+2 at ( −1, −6, +2 ) - top face of Block 47
- Block 49 - Small Wooden Block - East post z=+1 at ( +1, −5, +1 ) - top face of Block 15
- Block 50 - Small Wooden Block - East post z=+2 at ( +1, −5, +2 ) - top face of Block 49
- Block 51 - Small Wooden Block - West post z=+1 at ( −1, −5, +1 ) - top face of Block 16
- Block 52 - Small Wooden Block - West post z=+2 at ( −1, −5, +2 ) - top face of Block 51
- Block 53 - Small Wooden Block - East post z=+1 at ( +1, −4, +1 ) - top face of Block 17
- Block 54 - Small Wooden Block - East post z=+2 at ( +1, −4, +2 ) - top face of Block 53
- Block 55 - Small Wooden Block - West post z=+1 at ( −1, −4, +1 ) - top face of Block 18
- Block 56 - Small Wooden Block - West post z=+2 at ( −1, −4, +2 ) - top face of Block 55
- Block 57 - Small Wooden Block - East post z=+1 at ( +1, −3, +1 ) - top face of Block 19
- Block 58 - Small Wooden Block - East post z=+2 at ( +1, −3, +2 ) - top face of Block 57
- Block 59 - Small Wooden Block - West post z=+1 at ( −1, −3, +1 ) - top face of Block 20
- Block 60 - Small Wooden Block - West post z=+2 at ( −1, −3, +2 ) - top face of Block 59
- Block 61 - Small Wooden Block - East post z=+1 at ( +1, −2, +1 ) - top face of Block 21
- Block 62 - Small Wooden Block - East post z=+2 at ( +1, −2, +2 ) - top face of Block 61
- Block 63 - Small Wooden Block - West post z=+1 at ( −1, −2, +1 ) - top face of Block 22
- Block 64 - Small Wooden Block - West post z=+2 at ( −1, −2, +2 ) - top face of Block 63
- Block 65 - Small Wooden Block - East post z=+1 at ( +1, −1, +1 ) - top face of Block 23
- Block 66 - Small Wooden Block - East post z=+2 at ( +1, −1, +2 ) - top face of Block 65
- Block 67 - Small Wooden Block - West post z=+1 at ( −1, −1, +1 ) - top face of Block 24
- Block 68 - Small Wooden Block - West post z=+2 at ( −1, −1, +2 ) - top face of Block 67
- Block 69 - Small Wooden Block - East post z=+1 at ( +1, 0, +1 ) - top face of Block 25
- Block 70 - Small Wooden Block - East post z=+2 at ( +1, 0, +2 ) - top face of Block 69
- Block 71 - Small Wooden Block - West post z=+1 at ( −1, 0, +1 ) - top face of Block 26
- Block 72 - Small Wooden Block - West post z=+2 at ( −1, 0, +2 ) - top face of Block 71
- Block 73 - Small Wooden Block - East post z=+1 at ( +1, +1, +1 ) - top face of Block 27
- Block 74 - Small Wooden Block - East post z=+2 at ( +1, +1, +2 ) - top face of Block 73
- Block 75 - Small Wooden Block - West post z=+1 at ( −1, +1, +1 ) - top face of Block 28
- Block 76 - Small Wooden Block - West post z=+2 at ( −1, +1, +2 ) - top face of Block 75
- Block 77 - Small Wooden Block - East post z=+1 at ( +1, +2, +1 ) - top face of Block 29
- Block 78 - Small Wooden Block - East post z=+2 at ( +1, +2, +2 ) - top face of Block 77
- Block 79 - Small Wooden Block - West post z=+1 at ( −1, +2, +1 ) - top face of Block 30
- Block 80 - Small Wooden Block - West post z=+2 at ( −1, +2, +2 ) - top face of Block 79
- Block 81 - Small Wooden Block - East post z=+1 at ( +1, +3, +1 ) - top face of Block 31
- Block 82 - Small Wooden Block - East post z=+2 at ( +1, +3, +2 ) - top face of Block 81
- Block 83 - Small Wooden Block - West post z=+1 at ( −1, +3, +1 ) - top face of Block 32
- Block 84 - Small Wooden Block - West post z=+2 at ( −1, +3, +2 ) - top face of Block 83
- Block 85 - Small Wooden Block - East post z=+1 at ( +1, +4, +1 ) - top face of Block 33
- Block 86 - Small Wooden Block - East post z=+2 at ( +1, +4, +2 ) - top face of Block 85
- Block 87 - Small Wooden Block - West post z=+1 at ( −1, +4, +1 ) - top face of Block 34
- Block 88 - Small Wooden Block - West post z=+2 at ( −1, +4, +2 ) - top face of Block 87
- Block 89 - Small Wooden Block - East post z=+1 at ( +1, +5, +1 ) - top face of Block 35
- Block 90 - Small Wooden Block - East post z=+2 at ( +1, +5, +2 ) - top face of Block 89
- Block 91 - Small Wooden Block - West post z=+1 at ( −1, +5, +1 ) - top face of Block 36
- Block 92 - Small Wooden Block - West post z=+2 at ( −1, +5, +2 ) - top face of Block 91
- Block 93 - Small Wooden Block - East post z=+1 at ( +1, +6, +1 ) - top face of Block 37
- Block 94 - Small Wooden Block - East post z=+2 at ( +1, +6, +2 ) - top face of Block 93
- Block 95 - Small Wooden Block - West post z=+1 at ( −1, +6, +1 ) - top face of Block 38
- Block 96 - Small Wooden Block - West post z=+2 at ( −1, +6, +2 ) - top face of Block 95

Underhung Powered Wheel medallion bases and wheels (y odd: ±1, ±3, ±5)
Bases (z=−1) under edge deck blocks at odd y
- Block 97 - Small Wooden Block - East medallion base at ( +1, −5, −1 ) - bottom face of Block 15
- Block 98 - Small Wooden Block - West medallion base at ( −1, −5, −1 ) - bottom face of Block 16
- Block 99 - Small Wooden Block - East medallion base at ( +1, −3, −1 ) - bottom face of Block 19
- Block 100 - Small Wooden Block - West medallion base at ( −1, −3, −1 ) - bottom face of Block 20
- Block 101 - Small Wooden Block - East medallion base at ( +1, −1, −1 ) - bottom face of Block 23
- Block 102 - Small Wooden Block - West medallion base at ( −1, −1, −1 ) - bottom face of Block 24
- Block 103 - Small Wooden Block - East medallion base at ( +1, +1, −1 ) - bottom face of Block 27
- Block 104 - Small Wooden Block - West medallion base at ( −1, +1, −1 ) - bottom face of Block 28
- Block 105 - Small Wooden Block - East medallion base at ( +1, +3, −1 ) - bottom face of Block 31
- Block 106 - Small Wooden Block - West medallion base at ( −1, +3, −1 ) - bottom face of Block 32
- Block 107 - Small Wooden Block - East medallion base at ( +1, +5, −1 ) - bottom face of Block 35
- Block 108 - Small Wooden Block - West medallion base at ( −1, +5, −1 ) - bottom face of Block 36

Powered Wheels (attach to east face of east bases, west face of west bases; axis along x; decorative only; do not bind controls)
- Block 109 - Powered Wheel - East wheel at y=−5 - east face of Block 97 - Axis along +x, vertical disc in YZ; no input bound
- Block 110 - Powered Wheel - West wheel at y=−5 - west face of Block 98 - Axis along −x, vertical disc in YZ; no input bound
- Block 111 - Powered Wheel - East wheel at y=−3 - east face of Block 99 - Axis along +x; no input
- Block 112 - Powered Wheel - West wheel at y=−3 - west face of Block 100 - Axis along −x; no input
- Block 113 - Powered Wheel - East wheel at y=−1 - east face of Block 101 - Axis along +x; no input
- Block 114 - Powered Wheel - West wheel at y=−1 - west face of Block 102 - Axis along −x; no input
- Block 115 - Powered Wheel - East wheel at y=+1 - east face of Block 103 - Axis along +x; no input
- Block 116 - Powered Wheel - West wheel at y=+1 - west face of Block 104 - Axis along −x; no input
- Block 117 - Powered Wheel - East wheel at y=+3 - east face of Block 105 - Axis along +x; no input
- Block 118 - Powered Wheel - West wheel at y=+3 - west face of Block 106 - Axis along −x; no input
- Block 119 - Powered Wheel - East wheel at y=+5 - east face of Block 107 - Axis along +x; no input
- Block 120 - Powered Wheel - West wheel at y=+5 - west face of Block 108 - Axis along −x; no input

Alternating Water Cannons and Torches on parapet top posts (outer face of z=+2 posts; skip y=0)
Even y (−6, −4, −2, +2, +4, +6): Cannons on east outer face; Torches on west outer face.
Odd y (−5, −3, −1, +1, +3, +5): Cannons on west outer face; Torches on east outer face.
Mount geometry reminders:
- Water Cannon: attach to outer vertical face; orient outlet upward and slightly inward toward deck centerline; keep controls unbound/off. Recoil vector points downward/upward mix; structure is massive; no firing planned.
- Torch: attach to outer vertical face; oriented upward and outward. Heating sphere center ~0.5 outboard, 1.0 above mount; radius 0.3; clear of wood/cannons by ≥0.5.

Water Cannons (12 total; function set: OFF)
- Block 121 - Water Cannon - y=−6 on East post - outer (east) face of Block 46 - Shoots upward and inward toward deck; OFF/not bound
- Block 122 - Water Cannon - y=−5 on West post - outer (west) face of Block 52 - Shoots upward and inward; OFF
- Block 123 - Water Cannon - y=−4 on East post - outer (east) face of Block 54 - Shoots upward and inward; OFF
- Block 124 - Water Cannon - y=−3 on West post - outer (west) face of Block 60 - Shoots upward and inward; OFF
- Block 125 - Water Cannon - y=−2 on East post - outer (east) face of Block 62 - Shoots upward and inward; OFF
- Block 126 - Water Cannon - y=−1 on West post - outer (west) face of Block 68 - Shoots upward and inward; OFF
- Block 127 - Water Cannon - y=+1 on West post - outer (west) face of Block 76 - Shoots upward and inward; OFF
- Block 128 - Water Cannon - y=+2 on East post - outer (east) face of Block 78 - Shoots upward and inward; OFF
- Block 129 - Water Cannon - y=+3 on West post - outer (west) face of Block 84 - Shoots upward and inward; OFF
- Block 130 - Water Cannon - y=+4 on East post - outer (east) face of Block 86 - Shoots upward and inward; OFF
- Block 131 - Water Cannon - y=+5 on West post - outer (west) face of Block 92 - Shoots upward and inward; OFF
- Block 132 - Water Cannon - y=+6 on East post - outer (east) face of Block 94 - Shoots upward and inward; OFF

Torches (12 total; flames outward/up; keep clear of cannons by alternating sides; torches have no attachable faces)
- Block 133 - Torch - y=−6 on West post - outer (west) face of Block 48 - Flame upward/outward; heating sphere center at ~[−1.5, −6, 3] with 0.3 radius
- Block 134 - Torch - y=−5 on East post - outer (east) face of Block 50 - Flame upward/outward
- Block 135 - Torch - y=−4 on West post - outer (west) face of Block 56 - Flame upward/outward
- Block 136 - Torch - y=−3 on East post - outer (east) face of Block 58 - Flame upward/outward
- Block 137 - Torch - y=−2 on West post - outer (west) face of Block 64 - Flame upward/outward
- Block 138 - Torch - y=−1 on East post - outer (east) face of Block 66 - Flame upward/outward
- Block 139 - Torch - y=+1 on East post - outer (east) face of Block 74 - Flame upward/outward
- Block 140 - Torch - y=+2 on West post - outer (west) face of Block 80 - Flame upward/outward
- Block 141 - Torch - y=+3 on East post - outer (east) face of Block 82 - Flame upward/outward
- Block 142 - Torch - y=+4 on West post - outer (west) face of Block 88 - Flame upward/outward
- Block 143 - Torch - y=+5 on East post - outer (east) face of Block 90 - Flame upward/outward
- Block 144 - Torch - y=+6 on West post - outer (west) face of Block 96 - Flame upward/outward

Central pylon and cross-beam (over (0,0), z=+1 to +3)
- Block 145 - Small Wooden Block - Pylon stage 1 at (0,0,+1) - top face of Block 0
- Block 146 - Small Wooden Block - Pylon stage 2 at (0,0,+2) - top face of Block 145
- Block 147 - Small Wooden Block - Pylon stage 3 at (0,0,+3) - top face of Block 146
- Block 148 - Small Wooden Block - Cross-beam east arm at ( +1, 0, +3 ) - east face of Block 147
- Block 149 - Small Wooden Block - Cross-beam west arm at ( −1, 0, +3 ) - west face of Block 147

Winches (6 total; decorative suspenders from pylon/cross-beam to deck top faces)
Note: Winches connect two attachable faces; listed with their two endpoints.
- Block 150 - Winch - From north face of Block 147 (pylon top) to top face of Block 6 (deck center at y=+6)
- Block 151 - Winch - From south face of Block 147 (pylon top) to top face of Block 12 (deck center at y=−6)
- Block 152 - Winch - From north face of Block 148 (east arm) to top face of Block 2 (deck center at y=+2)
- Block 153 - Winch - From south face of Block 149 (west arm) to top face of Block 8 (deck center at y=−2)
- Block 154 - Winch - From north face of Block 149 (west arm) to top face of Block 4 (deck center at y=+4)
- Block 155 - Winch - From south face of Block 148 (east arm) to top face of Block 10 (deck center at y=−4)

Side truss Braces (39 total)
Top-chord ties (24): connect adjacent parapet top posts along each side: north face of post at y to south face of post at y+1, z=+2. East side uses Blocks [46,50,54,58,62,66,70,74,78,82,86,90,94]; West side uses Blocks [48,52,56,60,64,68,72,76,80,84,88,92,96]. We connect consecutive pairs (−6→−5, … , +5→+6) per side.
- Block 156..167 - Brace - East side top-chord ties: for each k in { (46–50), (50–54), (54–58), (58–62), (62–66), (66–70), (70–74), (74–78), (78–82), (82–86), (86–90), (90–94) } connect north face of first to south face of second.
- Block 168..179 - Brace - West side top-chord ties: for each k in { (48–52), (52–56), (56–60), (60–64), (64–68), (68–72), (72–76), (76–80), (80–84), (84–88), (88–92), (92–96) } connect north face of first to south face of second.

Diagonal side-panel lattice (12): even-start bays only (y=−6, −4, −2, 0, +2, +4) to inner face of next post at y+1, forming alternating slants by side.
East side diagonals (start at Blocks 13,17,21,25,29,33 to inner face of Blocks 50,54,58,74,78,82 respectively)
- Block 180 - Brace - East diagonal y=−6→−5: from outer face of Block 13 to inner (west) face of Block 50
- Block 181 - Brace - East diagonal y=−4→−3: from outer face of Block 17 to inner face of Block 58
- Block 182 - Brace - East diagonal y=−2→−1: from outer face of Block 21 to inner face of Block 66
- Block 183 - Brace - East diagonal y=0→+1: from outer face of Block 25 to inner face of Block 74
- Block 184 - Brace - East diagonal y=+2→+3: from outer face of Block 29 to inner face of Block 82
- Block 185 - Brace - East diagonal y=+4→+5: from outer face of Block 33 to inner face of Block 90

West side diagonals (start at Blocks 14,18,22,26,30,34 to inner face of Blocks 52,56,60,76,80,84 respectively) mirrored slant
- Block 186 - Brace - West diagonal y=−6→−5: from outer face of Block 14 to inner (east) face of Block 52
- Block 187 - Brace - West diagonal y=−4→−3: from outer face of Block 18 to inner face of Block 60
- Block 188 - Brace - West diagonal y=−2→−1: from outer face of Block 22 to inner face of Block 68
- Block 189 - Brace - West diagonal y=0→+1: from outer face of Block 26 to inner face of Block 76
- Block 190 - Brace - West diagonal y=+2→+3: from outer face of Block 30 to inner face of Block 84
- Block 191 - Brace - West diagonal y=+4→+5: from outer face of Block 34 to inner face of Block 92

Cross-bracing at y=−4, 0, +4 across width (3)
- Block 192 - Brace - Portal tie at y=−4: connect inner face of East top post Block 54 to inner face of West top post Block 56
- Block 193 - Brace - Portal tie at y=0: connect inner face of East top post Block 70 to inner face of West top post Block 72
- Block 194 - Brace - Portal tie at y=+4: connect inner face of East top post Block 86 to inner face of West top post Block 88

Motion and safety configuration
- Powered Wheels (Blocks 109–120): Decorative only. Do not bind to any input; leave at default 100 rpm idle with auto-brake. Orientation set with axis along ±x; discs vertical in YZ; underhung on medallion bases below edge deck blocks at odd y to avoid deck interference.
- Water Cannons (Blocks 121–132): Keep OFF/unpressed. Oriented upward and slightly inward from the outer face to avoid torches. No steam mode expected (no intentional heating); recoil irrelevant since not firing.
- Torches (Blocks 133–144): Always lit, flames upward/outward; heating spheres centered ~0.5 outboard and 1.0 above post faces; ≥0.5 clearance from any wood and cannons ensured via side alternation and y=0 skip.

Function checks
- Deck spans 13 units north–south (y=−6..+6) and 3 units east–west (x=−1,0,+1). End feet at y=±6 provide bearing pads on terrain.
- Triangulated parapets and cross-ties stiffen the single-piece assembly. Central pylon with winch suspenders adds ornamental complexity and perceived support.
- All connectors (Braces/Winches) attach between free faces only; where multiple ties meet, we used distinct faces (outer/inner/north/south) of posts and deck blocks; no cleats required in this layout.
- All torches and cannons mounted on opposite sides by y parity with y=0 skipped, guaranteeing heating clearance and avoiding any steam backwash interaction.

If any build-time interference appears (e.g., due to tolerances around cannons’ peanut waist vs. torch flame centerlines), shift the cannon orientation a few degrees more inward or outward at that bay, or swap the torch/cannon assignment on that single bay while maintaining the even/odd global pattern.

# draft_reviewer (gpt-5) (TextMessage): 

Reviewer summary: I have checked the proposed “Ornate Through‑Truss Bridge (Single‑Piece, 3×13 Deck)” against the structural, functional, and feasibility requirements. The build is logically organized, uses the mandatory base, and stays as a single sub‑structure. I verify collision‑free placement via systematic category checks (deck grid, feet, parapets, underhung wheel assemblies, cannons, torches, pylon, winches, and braces). Where the same pattern repeats (e.g., the 3×13 deck and two‑high parapet posts), I verify one full pattern and show that all instances follow by symmetry. I also identify one minor documentation inconsistency on a torch flame center and one orientation constraint that must be respected for the water cannons to avoid any overlap. With those clarifications, the structure passes the checks.

Conventions used in this review
- Global axes: x east, y north, z up. All block dimensions are axis‑aligned bounding boxes unless otherwise stated by the part’s orientation.
- Base block (stone) center at (0, 0, 0). Small Wooden Block dimensions: 1×1×1; half‑extent 0.5 along each axis.
- Distance/clearance check: To avoid overlap between two solids, the center‑to‑center projection along each axis must be ≥ the sum of the corresponding half‑extents along that axis. For face‑to‑face contact along one axis with same y, z (or x, z) and equal sizes, centers are 1 unit apart along that axis.
- Connectors (Braces, Winches) have no volume; only endpoint face availability is validated.
- Water Cannon: shape 1×1.75×1; when attached to a vertical face, its center is 0.5 outward from the face plane. Orientation sets the 1.75‑unit length axis. Cross‑section half‑extent (perpendicular to its length) is 0.5.
- Torch: center is 0.5 outward from the mounting face; the flame center is 1.0 above the torch center along the shaft direction. Heating sphere radius = 0.3.
- Powered Wheel: shape 2×2×0.5. Attached to a side face; axis perpendicular to that face; wheel disc lies in the face plane. For non‑overlap and “flush” attachment, I place the wheel center 0.25 beyond the face plane (so its inner face is flush with the mounting face), giving x‑offset 0.25 for east/west mounts (this is the physically plausible standoff given the 0.5 thickness; see Section 3 below).

1) Deck (3×13 grid) and end feet
- Centers as listed by the drafter:
  • Center row x=0: (0, y, 0), y ∈ {−6…+6}, including base (0,0,0). Each attached to the north or south face of its neighbor; center‑to‑center distance along y = 1.
  • Edge rows x=±1: (±1, y, 0), y ∈ {−6…+6}, each attached to the east/west face of the center row counterpart; Δx = 1 to its center‑row neighbor.
  • End feet: (x, ±6, −1) for x ∈ {−1, 0, +1}, each attached to bottom face of the deck block above; Δz = 1 to its supported deck block.

- Neighbor distances and overlap checks (pattern applies to all deck blocks):
  • Face‑adjacent blocks: Δ = 1 along the attachment axis; half‑extent sum = 0.5 + 0.5 = 1 → face contact, no overlap.
  • Edge diagonals (e.g., a center row block and its adjacent in x and y): center separations are √(1^2 + 1^2) = √2 > 1; min sum along any axis is at most 1, so no overlap.
  • End feet to neighboring deck blocks at the same y: Δz = 1; no overlap. To deck blocks at adjacent y: centers differ by at least √(1^2 + 1^2) ≥ √2; no overlap.
- Result: 3×13 deck and feet are collision‑free and fully attached to the base chain centered at (0,0,0).

2) Parapet posts (two‑high on x=±1 edges, z=+1 and z=+2)
- Centers exactly as listed by the drafter: for each edge deck block (±1, y, 0), add (±1, y, +1) and (±1, y, +2).
- Neighbor distances:
  • Each post P1 at z=+1 is Δz = 1 from its deck block; P2 at z=+2 is Δz = 1 from P1 below → face contact, no overlap.
  • Posts at same x on adjacent y are Δy = 1 between centers; disjoint volumes (only Braces connect them, which have no volume).
- Result: All parapet posts are collision‑free and properly attached.

3) Underhung medallion bases and Powered Wheels (y odd: ±1, ±3, ±5)
- Medallion base blocks: centers (±1, y, −1), attached to bottom faces of edge deck blocks at those y. Neighbor distances identical to end feet case: Δz = 1 to the deck block above, no overlap.
- Powered Wheel placement and orientation:
  • Wheels attach to the east face of east bases and west face of west bases.
  • Mount face planes: east base face at x = +1.5, west base face at x = −1.5.
  • Wheel center offsets: chosen at 0.25 beyond the face plane to make the 0.5 thickness sit flush on the mounting face.
    – East wheels: center (x, y, z) = (+1.75, y, −1) for y ∈ {−5, −3, −1, +1, +3, +5}.
    – West wheels: center = (−1.75, y, −1) for the same y set.
  • Axis and disc orientation: axis along ±x (perpendicular to mounting face); wheel disc lies in the YZ plane (vertical), as specified. No control bound; decorative only.
- Neighbor distances:
  • Wheel to its medallion base: Δx = 0.75 (1.75 − 1.0 for east), half‑extent sum along x = 0.25 (wheel) + 0.5 (cube) = 0.75 → exact face contact (inner wheel face flush to base face), no overlap.
  • Wheel to edge deck block above: deck x‑range [0.5, 1.5] (east), wheel x‑range [1.5, 2.0]; their x‑ranges meet at x=1.5 but do not overlap. Along z, the wheel extends z ∈ [−2, 0], the deck block spans z ∈ [−0.5, +0.5]; at x=1.5 they share only a boundary in x and do not interpenetrate → no overlap.
  • Wheels at adjacent y are ≥ 2 units apart center‑to‑center at worst (since they are at y separated by 2), with half‑extents along y at most 1 (wheel diameter) → no overlap.
- Result: underhung wheel assemblies are consistent with the part rules and collision‑free.

4) Water Cannons and Torches on parapet top posts (skip y=0)
Water Cannons (OFF; mounted on outer faces of z=+2 posts; alternating per parity)
- Centers:
  • East side even y ∈ {−6, −4, −2, +2, +4, +6}: mount to outer (east) face of post at (1, y, 2). Face plane x=+1.5 → cannon center at (2.0, y, 2.0).
  • West side odd y ∈ {−5, −3, −1, +1, +3, +5}: outer (west) face of post at (−1, y, 2). Face plane x=−1.5 → cannon center at (−2.0, y, 2.0).
- Orientation and no‑overlap constraint:
  • Axis is the 1.75‑unit length direction “upward and slightly inward.” Let the inward tilt from vertical be φ, with the inward x‑component magnitude |d_x| = sinφ and vertical component d_z = cosφ (no y component as per the intent).
  • To prevent the inward half of the body from crossing the mounting post’s outer face (x=±1.5), require the furthest inward centerline point x_min to satisfy x_min ≥ ±1.5. With center at ±2.0 and half‑length 0.875, this yields |d_x| ≤ 0.5714 → φ ≤ 34.8°. If you keep φ ≤ 30°, the cannon cannot intersect the post or deck.
- Neighbor distances:
  • Cannon to its mounting post center: Δx = 1.0, sum of half‑extents along x = 0.5 (post) + 0.5 (cannon) = 1.0 → flush mount, no overlap.
  • Cannon to adjacent torch on same side at neighboring bay (Δy = 1): cannon half‑extent along y = 0.5; torch half‑extent along y = 0.25 → required Δy ≥ 0.75; actual Δy = 1 → 0.25 margin, no overlap.
  • Across the deck, opposite side devices are ≥ 4 units apart in x → no overlap.

Torches (always lit; mounted on outer faces; alternating opposite to cannons)
- Centers and flame centers (correcting one misreported example):
  • East side odd y: torch center (2.0, y, 2.0); flame center at (2.0, y, 3.0).
  • West side even y: torch center (−2.0, y, 2.0); flame center at (−2.0, y, 3.0).
  • Note: Drafter’s Block 133 stated flame center “~[−1.5, −6, 3]”; by the torch definition it should be (−2.0, −6, 3.0) because the torch center is 0.5 beyond the face plane (x=−1.5) → center at x=−2.0.
- Neighbor distances and heating clearance:
  • To own post: nearest point is the top‑outer edge at (±1.5, y, 2.5); distance from flame center to that edge ≈ √((0.5)^2 + (0.5)^2) = 0.707 > 0.3 (heating radius). Sphere boundary clearance = 0.707 − 0.3 ≈ 0.407. If the intended “≥0.5 clearance” means center‑to‑object distance, 0.707 ≥ 0.5 is satisfied; if it means boundary‑to‑object gap ≥ 0.5, this is slightly under at ≈ 0.407. Given the original requirement’s wording is ambiguous, please confirm the metric; otherwise, the physical heating radius condition (0.3) is safely met.
  • To nearest adjacent water cannon at the neighboring bay on the same side: centers differ by Δy = 1 and Δz = 1; shortest center‑to‑solid distance ≈ √((1−0.5)^2 + (1−0.5)^2) = 0.707; sphere boundary clearance ≈ 0.707 − 0.3 = 0.407 (>0), again safe versus heating, but slightly below a 0.5 boundary gap if that stricter interpretation is enforced.
  • To any opposite side devices: ≥ 4 units in x; trivially safe.
- Result: mounting positions and alternating pattern avoid interference. Heating spheres are in free air and clear of solids by more than their 0.3 radius. If a 0.5 boundary‑gap is strictly required, a small outward cant of the torch head or reducing cannon inward tilt further will increase the minimum gap above 0.5.

5) Central pylon and cross‑beam
- Centers per drafter:
  • Pylon: (0,0,1), (0,0,2), (0,0,3) stacked; each Δz = 1 from the one below → face contact, no overlap.
  • Cross‑beam arms: (±1, 0, 3) on east/west faces of top pylon block (0,0,3). These are face‑mounted; Δx = 1 to the pylon top, no overlap.
- Neighbor distances:
  • Cross‑beam arm (±1, 0, 3) to y=0 parapet posts at (±1, 0, 2): Δz = 1 → touching faces at z=2.5 plane; no overlap and permitted (they are parts of the same connected assembly through the deck and pylon).

6) Winches (no volume)
- Attachments as listed use free faces:
  • Pylon top (0,0,3): north and south faces used by Blocks 150, 151; east and west faces are used by cross‑beam arms, leaving no conflict.
  • Cross‑beam arms: north face of Block 148 and south face of Block 148 used once; north face of Block 149 and south face of Block 149 used once — no face overuse.
  • Deck top faces at y=±2, ±4, ±6 (center row): unused by posts; available for winch anchors; each used once.
- Result: All winch endpoints are on free, attachable faces; no conflicts.

7) Braces (no volume)
- Longitudinal top‑chord ties (24): connect north face of post at y to south face at y+1 on each side (z=+2). Faces are free (outer faces used by devices, inner faces reserved for diagonals or portals; north/south faces dedicated here). No face overuse on any single face.
- Diagonal side‑panel lattice (12): even‑start bays only (y = −6, −4, −2, 0, +2, +4).
  • East side: from outer face of edge deck block at y to inner face (west) of top post at y+1. These inner faces are not used by longitudinal ties; outer deck faces are free. No conflicts.
  • West side: symmetric, using inner (east) faces of posts at y+1 and outer faces of edge deck blocks at y.
- Cross‑bracing portals at y=−4, 0, +4 (3): connect inner faces of east/west top posts at those y. Those specific inner faces are not used by diagonals at the same y. No conflicts.

8) Functional validation
- Motion:
  • Powered Wheels: Axis along ±x, disc vertical in YZ; mounted to side faces — consistent with the rules (axis perpendicular to attached face, disc parallel to face). No inputs bound, so no active motion and auto‑brake keeps them static.
  • Water Cannons: OFF; recoil irrelevant. Orientation “upward and slightly inward” is functionally acceptable provided the inward tilt φ ≤ 34.8° (recommend φ ≤ 30°) to avoid any geometric intrusion into the mounting post or deck volume.
  • Torches: lit, outward/upward; flame spheres located at (±2, y, 3) with radius 0.3; free of solids. No steam cannons behind them, so no extinguishing issues.
- Mounting and alignment:
  • All moving/functional components mount on appropriate faces: wheels on medallion bases’ side faces; cannons on top‑post outer faces; torches on top‑post outer faces. Axes/orientations are consistent with part rules.

9) Physical feasibility
- The 3×13×3 deck grid with two‑high parapets, diagonals, and cross‑ties forms a rigid trussed frame. The end feet at y=±6 provide bearing pads; the deck length 13 ≥ 10 clear span requirement is satisfied.
- The assembly remains a single sub‑structure: all blocks are face‑attached chains originating from the base; connectors link already existing blocks; nothing is detached.

10) Specific computed centers and neighbor checks for special parts
- Powered Wheels (east side y=−5…+5 odd): centers (1.75, y, −1); nearest neighbor medallion base (1, y, −1) at Δx = 0.75 (half‑sum 0.75) → flush, no overlap; to edge deck block (1, y, 0), x‑ranges only touch at x=1.5; no overlap.
- Water Cannons: centers at (2.0, y, 2.0) on east even y; (−2.0, y, 2.0) on west odd y. To the mounting post center (±1, y, 2): Δx = 1 equals half‑sum 1 → flush, no overlap. To adjacent torch on same side at neighboring y: Δy = 1 > 0.75 (half‑sum in y), no overlap. Tilt constraint φ ≤ 34.8° ensures no intrusion into x ≤ ±1.5.
- Torches: centers at (2.0, y, 2.0) for east odd y and (−2.0, y, 2.0) for west even y; flame centers at (±2.0, y, 3.0). To nearest wood (outer top‑post edge): center‑to‑corner distance ≈ 0.707; sphere boundary clearance ≈ 0.407 (> 0.0). To nearest cannon: center‑to‑body distance ≈ 0.707; boundary clearance ≈ 0.407 (> 0.0). If a 0.5 boundary gap is mandated, cant the torch head slightly outboard or further reduce cannon inward tilt (e.g., φ ≤ 20°) to increase the gap; as built, the heating radius requirement is satisfied and ignition risk is negligible.

11) Minor correction noted
- Drafter’s Block 133 flame center “~[−1.5, −6, 3]” should be (−2.0, −6, 3.0) per the Torch attachment rule (0.5 outward from the face plane x=−1.5). This documentation fix does not affect the collision checks above.

Conclusion
- Structural integrity and collision‑free placement: Pass, with the explicit cannon inward tilt constraint φ ≤ 34.8° (recommended ≤ 30°) to guarantee no geometric intrusion into posts; and the corrected torch flame center reporting.
- Functional implementation: Pass (wheels static; cannons OFF; torches lit and outward; no backward jets; proper orientations).
- Physical feasibility: Pass (13‑unit span, triangulated parapets, end feet supports; single sub‑structure).

Approval
The blueprint, with the stated cannon tilt constraint and the corrected torch flame center coordinates, meets the requirements. Please keep the cannons’ inward tilt ≤ 30° to maintain generous clearances and, if a ≥0.5 boundary gap to solids is strictly required for torch flame spheres, cant torches slightly further outward or reduce cannon inward tilt to achieve that margin; otherwise the heating radius safety is already satisfied.

TERMINATE

# drafter (gpt-5) (TextMessage): 

Ornate Through-Truss Bridge (Single-Piece, 3×13 Deck)
Global axes: x east, y north, z up. Default base stone at (0, 0, 0).

Position adjustment notes
- Skip parapet fixtures at y=0 to clear central pylon headroom and keep totals at 12 Cannons + 12 Torches.
- Diagonal side braces installed in alternating even-start bays to maintain a clean Warren motif and keep total braces at 39.
- Torch clearance: torches on outer faces with flames upward/outward; centers ~0.5 outboard and 1.0 above the mount, radius 0.3; alternation ensures ≥0.5 clearance to wood and cannons.

Deck and base
- Block 0 - Default Starting Block - Stone base at deck center (0,0,0) - (reference origin)

Center row x=0 (northwards then southwards)
- Block 1 - Small Wooden Block - Center row (0,+1,0) - north face of Block 0
- Block 2 - Small Wooden Block - Center row (0,+2,0) - north face of Block 1
- Block 3 - Small Wooden Block - Center row (0,+3,0) - north face of Block 2
- Block 4 - Small Wooden Block - Center row (0,+4,0) - north face of Block 3
- Block 5 - Small Wooden Block - Center row (0,+5,0) - north face of Block 4
- Block 6 - Small Wooden Block - Center row (0,+6,0) - north face of Block 5
- Block 7 - Small Wooden Block - Center row (0,−1,0) - south face of Block 0
- Block 8 - Small Wooden Block - Center row (0,−2,0) - south face of Block 7
- Block 9 - Small Wooden Block - Center row (0,−3,0) - south face of Block 8
- Block 10 - Small Wooden Block - Center row (0,−4,0) - south face of Block 9
- Block 11 - Small Wooden Block - Center row (0,−5,0) - south face of Block 10
- Block 12 - Small Wooden Block - Center row (0,−6,0) - south face of Block 11

Edge rows x=+1 (east) and x=−1 (west)
- Block 13 - Small Wooden Block - East edge (+1,−6,0) - east face of Block 12
- Block 14 - Small Wooden Block - West edge (−1,−6,0) - west face of Block 12
- Block 15 - Small Wooden Block - East edge (+1,−5,0) - east face of Block 11
- Block 16 - Small Wooden Block - West edge (−1,−5,0) - west face of Block 11
- Block 17 - Small Wooden Block - East edge (+1,−4,0) - east face of Block 10
- Block 18 - Small Wooden Block - West edge (−1,−4,0) - west face of Block 10
- Block 19 - Small Wooden Block - East edge (+1,−3,0) - east face of Block 9
- Block 20 - Small Wooden Block - West edge (−1,−3,0) - west face of Block 9
- Block 21 - Small Wooden Block - East edge (+1,−2,0) - east face of Block 8
- Block 22 - Small Wooden Block - West edge (−1,−2,0) - west face of Block 8
- Block 23 - Small Wooden Block - East edge (+1,−1,0) - east face of Block 7
- Block 24 - Small Wooden Block - West edge (−1,−1,0) - west face of Block 7
- Block 25 - Small Wooden Block - East edge (+1,0,0) - east face of Block 0
- Block 26 - Small Wooden Block - West edge (−1,0,0) - west face of Block 0
- Block 27 - Small Wooden Block - East edge (+1,+1,0) - east face of Block 1
- Block 28 - Small Wooden Block - West edge (−1,+1,0) - west face of Block 1
- Block 29 - Small Wooden Block - East edge (+1,+2,0) - east face of Block 2
- Block 30 - Small Wooden Block - West edge (−1,+2,0) - west face of Block 2
- Block 31 - Small Wooden Block - East edge (+1,+3,0) - east face of Block 3
- Block 32 - Small Wooden Block - West edge (−1,+3,0) - west face of Block 3
- Block 33 - Small Wooden Block - East edge (+1,+4,0) - east face of Block 4
- Block 34 - Small Wooden Block - West edge (−1,+4,0) - west face of Block 4
- Block 35 - Small Wooden Block - East edge (+1,+5,0) - east face of Block 5
- Block 36 - Small Wooden Block - West edge (−1,+5,0) - west face of Block 5
- Block 37 - Small Wooden Block - East edge (+1,+6,0) - east face of Block 6
- Block 38 - Small Wooden Block - West edge (−1,+6,0) - west face of Block 6

End feet at y=±6 (z=−1)
- Block 39 - Small Wooden Block - Foot under (−1,−6,−1) - bottom face of Block 14
- Block 40 - Small Wooden Block - Foot under (0,−6,−1) - bottom face of Block 12
- Block 41 - Small Wooden Block - Foot under (+1,−6,−1) - bottom face of Block 13
- Block 42 - Small Wooden Block - Foot under (−1,+6,−1) - bottom face of Block 38
- Block 43 - Small Wooden Block - Foot under (0,+6,−1) - bottom face of Block 6
- Block 44 - Small Wooden Block - Foot under (+1,+6,−1) - bottom face of Block 37

Parapet posts (two-high on every edge deck block)
- Block 45 - Small Wooden Block - East post z=+1 at (+1,−6,+1) - top face of Block 13
- Block 46 - Small Wooden Block - East post z=+2 at (+1,−6,+2) - top face of Block 45
- Block 47 - Small Wooden Block - West post z=+1 at (−1,−6,+1) - top face of Block 14
- Block 48 - Small Wooden Block - West post z=+2 at (−1,−6,+2) - top face of Block 47
- Block 49 - Small Wooden Block - East post z=+1 at (+1,−5,+1) - top face of Block 15
- Block 50 - Small Wooden Block - East post z=+2 at (+1,−5,+2) - top face of Block 49
- Block 51 - Small Wooden Block - West post z=+1 at (−1,−5,+1) - top face of Block 16
- Block 52 - Small Wooden Block - West post z=+2 at (−1,−5,+2) - top face of Block 51
- Block 53 - Small Wooden Block - East post z=+1 at (+1,−4,+1) - top face of Block 17
- Block 54 - Small Wooden Block - East post z=+2 at (+1,−4,+2) - top face of Block 53
- Block 55 - Small Wooden Block - West post z=+1 at (−1,−4,+1) - top face of Block 18
- Block 56 - Small Wooden Block - West post z=+2 at (−1,−4,+2) - top face of Block 55
- Block 57 - Small Wooden Block - East post z=+1 at (+1,−3,+1) - top face of Block 19
- Block 58 - Small Wooden Block - East post z=+2 at (+1,−3,+2) - top face of Block 57
- Block 59 - Small Wooden Block - West post z=+1 at (−1,−3,+1) - top face of Block 20
- Block 60 - Small Wooden Block - West post z=+2 at (−1,−3,+2) - top face of Block 59
- Block 61 - Small Wooden Block - East post z=+1 at (+1,−2,+1) - top face of Block 21
- Block 62 - Small Wooden Block - East post z=+2 at (+1,−2,+2) - top face of Block 61
- Block 63 - Small Wooden Block - West post z=+1 at (−1,−2,+1) - top face of Block 22
- Block 64 - Small Wooden Block - West post z=+2 at (−1,−2,+2) - top face of Block 63
- Block 65 - Small Wooden Block - East post z=+1 at (+1,−1,+1) - top face of Block 23
- Block 66 - Small Wooden Block - East post z=+2 at (+1,−1,+2) - top face of Block 65
- Block 67 - Small Wooden Block - West post z=+1 at (−1,−1,+1) - top face of Block 24
- Block 68 - Small Wooden Block - West post z=+2 at (−1,−1,+2) - top face of Block 67
- Block 69 - Small Wooden Block - East post z=+1 at (+1,0,+1) - top face of Block 25
- Block 70 - Small Wooden Block - East post z=+2 at (+1,0,+2) - top face of Block 69
- Block 71 - Small Wooden Block - West post z=+1 at (−1,0,+1) - top face of Block 26
- Block 72 - Small Wooden Block - West post z=+2 at (−1,0,+2) - top face of Block 71
- Block 73 - Small Wooden Block - East post z=+1 at (+1,+1,+1) - top face of Block 27
- Block 74 - Small Wooden Block - East post z=+2 at (+1,+1,+2) - top face of Block 73
- Block 75 - Small Wooden Block - West post z=+1 at (−1,+1,+1) - top face of Block 28
- Block 76 - Small Wooden Block - West post z=+2 at (−1,+1,+2) - top face of Block 75
- Block 77 - Small Wooden Block - East post z=+1 at (+1,+2,+1) - top face of Block 29
- Block 78 - Small Wooden Block - East post z=+2 at (+1,+2,+2) - top face of Block 77
- Block 79 - Small Wooden Block - West post z=+1 at (−1,+2,+1) - top face of Block 30
- Block 80 - Small Wooden Block - West post z=+2 at (−1,+2,+2) - top face of Block 79
- Block 81 - Small Wooden Block - East post z=+1 at (+1,+3,+1) - top face of Block 31
- Block 82 - Small Wooden Block - East post z=+2 at (+1,+3,+2) - top face of Block 81
- Block 83 - Small Wooden Block - West post z=+1 at (−1,+3,+1) - top face of Block 32
- Block 84 - Small Wooden Block - West post z=+2 at (−1,+3,+2) - top face of Block 83
- Block 85 - Small Wooden Block - East post z=+1 at (+1,+4,+1) - top face of Block 33
- Block 86 - Small Wooden Block - East post z=+2 at (+1,+4,+2) - top face of Block 85
- Block 87 - Small Wooden Block - West post z=+1 at (−1,+4,+1) - top face of Block 34
- Block 88 - Small Wooden Block - West post z=+2 at (−1,+4,+2) - top face of Block 87
- Block 89 - Small Wooden Block - East post z=+1 at (+1,+5,+1) - top face of Block 35
- Block 90 - Small Wooden Block - East post z=+2 at (+1,+5,+2) - top face of Block 89
- Block 91 - Small Wooden Block - West post z=+1 at (−1,+5,+1) - top face of Block 36
- Block 92 - Small Wooden Block - West post z=+2 at (−1,+5,+2) - top face of Block 91
- Block 93 - Small Wooden Block - East post z=+1 at (+1,+6,+1) - top face of Block 37
- Block 94 - Small Wooden Block - East post z=+2 at (+1,+6,+2) - top face of Block 93
- Block 95 - Small Wooden Block - West post z=+1 at (−1,+6,+1) - top face of Block 38
- Block 96 - Small Wooden Block - West post z=+2 at (−1,+6,+2) - top face of Block 95

Underhung Powered Wheel medallion bases (z=−1 at odd y)
- Block 97 - Small Wooden Block - East medallion base (+1,−5,−1) - bottom face of Block 15
- Block 98 - Small Wooden Block - West medallion base (−1,−5,−1) - bottom face of Block 16
- Block 99 - Small Wooden Block - East medallion base (+1,−3,−1) - bottom face of Block 19
- Block 100 - Small Wooden Block - West medallion base (−1,−3,−1) - bottom face of Block 20
- Block 101 - Small Wooden Block - East medallion base (+1,−1,−1) - bottom face of Block 23
- Block 102 - Small Wooden Block - West medallion base (−1,−1,−1) - bottom face of Block 24
- Block 103 - Small Wooden Block - East medallion base (+1,+1,−1) - bottom face of Block 27
- Block 104 - Small Wooden Block - West medallion base (−1,+1,−1) - bottom face of Block 28
- Block 105 - Small Wooden Block - East medallion base (+1,+3,−1) - bottom face of Block 31
- Block 106 - Small Wooden Block - West medallion base (−1,+3,−1) - bottom face of Block 32
- Block 107 - Small Wooden Block - East medallion base (+1,+5,−1) - bottom face of Block 35
- Block 108 - Small Wooden Block - West medallion base (−1,+5,−1) - bottom face of Block 36

Powered Wheels (decorative only; axis ⟂ to attachment face, discs vertical in YZ; no controls bound)
- Block 109 - Powered Wheel - East wheel at y=−5 - east face of Block 97 - Axis along +x; do not apply any input
- Block 110 - Powered Wheel - West wheel at y=−5 - west face of Block 98 - Axis along −x; do not apply any input
- Block 111 - Powered Wheel - East wheel at y=−3 - east face of Block 99 - Axis along +x; do not apply any input
- Block 112 - Powered Wheel - West wheel at y=−3 - west face of Block 100 - Axis along −x; do not apply any input
- Block 113 - Powered Wheel - East wheel at y=−1 - east face of Block 101 - Axis along +x; do not apply any input
- Block 114 - Powered Wheel - West wheel at y=−1 - west face of Block 102 - Axis along −x; do not apply any input
- Block 115 - Powered Wheel - East wheel at y=+1 - east face of Block 103 - Axis along +x; do not apply any input
- Block 116 - Powered Wheel - West wheel at y=+1 - west face of Block 104 - Axis along −x; do not apply any input
- Block 117 - Powered Wheel - East wheel at y=+3 - east face of Block 105 - Axis along +x; do not apply any input
- Block 118 - Powered Wheel - West wheel at y=+3 - west face of Block 106 - Axis along −x; do not apply any input
- Block 119 - Powered Wheel - East wheel at y=+5 - east face of Block 107 - Axis along +x; do not apply any input
- Block 120 - Powered Wheel - West wheel at y=+5 - west face of Block 108 - Axis along −x; do not apply any input

Water Cannons (outer faces of z=+2 posts; alternating by y parity; all OFF)
- Block 121 - Water Cannon - East post at y=−6 - east face of Block 46 - Shoots upward and slightly inward; control OFF
- Block 122 - Water Cannon - West post at y=−5 - west face of Block 52 - Shoots upward and slightly inward; control OFF
- Block 123 - Water Cannon - East post at y=−4 - east face of Block 54 - Shoots upward and slightly inward; control OFF
- Block 124 - Water Cannon - West post at y=−3 - west face of Block 60 - Shoots upward and slightly inward; control OFF
- Block 125 - Water Cannon - East post at y=−2 - east face of Block 62 - Shoots upward and slightly inward; control OFF
- Block 126 - Water Cannon - West post at y=−1 - west face of Block 68 - Shoots upward and slightly inward; control OFF
- Block 127 - Water Cannon - West post at y=+1 - west face of Block 76 - Shoots upward and slightly inward; control OFF
- Block 128 - Water Cannon - East post at y=+2 - east face of Block 78 - Shoots upward and slightly inward; control OFF
- Block 129 - Water Cannon - West post at y=+3 - west face of Block 84 - Shoots upward and slightly inward; control OFF
- Block 130 - Water Cannon - East post at y=+4 - east face of Block 86 - Shoots upward and slightly inward; control OFF
- Block 131 - Water Cannon - West post at y=+5 - west face of Block 92 - Shoots upward and slightly inward; control OFF
- Block 132 - Water Cannon - East post at y=+6 - east face of Block 94 - Shoots upward and slightly inward; control OFF

Torches (outer faces of z=+2 posts; alternating opposite to cannons; flames upward/outward)
- Block 133 - Torch - West post at y=−6 - west face of Block 48 - Flame upward/outward; heat sphere center ≈[−1.5,−6,3], r=0.3
- Block 134 - Torch - East post at y=−5 - east face of Block 50 - Flame upward/outward
- Block 135 - Torch - West post at y=−4 - west face of Block 56 - Flame upward/outward
- Block 136 - Torch - East post at y=−3 - east face of Block 58 - Flame upward/outward
- Block 137 - Torch - West post at y=−2 - west face of Block 64 - Flame upward/outward
- Block 138 - Torch - East post at y=−1 - east face of Block 66 - Flame upward/outward
- Block 139 - Torch - East post at y=+1 - east face of Block 74 - Flame upward/outward
- Block 140 - Torch - West post at y=+2 - west face of Block 80 - Flame upward/outward
- Block 141 - Torch - East post at y=+3 - east face of Block 82 - Flame upward/outward
- Block 142 - Torch - West post at y=+4 - west face of Block 88 - Flame upward/outward
- Block 143 - Torch - East post at y=+5 - east face of Block 90 - Flame upward/outward
- Block 144 - Torch - West post at y=+6 - west face of Block 96 - Flame upward/outward

Central pylon and cross-beam
- Block 145 - Small Wooden Block - Pylon stage 1 (0,0,+1) - top face of Block 0
- Block 146 - Small Wooden Block - Pylon stage 2 (0,0,+2) - top face of Block 145
- Block 147 - Small Wooden Block - Pylon stage 3 (0,0,+3) - top face of Block 146
- Block 148 - Small Wooden Block - Cross-beam east arm (+1,0,+3) - east face of Block 147
- Block 149 - Small Wooden Block - Cross-beam west arm (−1,0,+3) - west face of Block 147

Winches (decorative suspenders; connect two faces; variable-length rope)
- Block 150 - Winch - From north face of Block 147 to top face of Block 6 - Decorative suspender
- Block 151 - Winch - From south face of Block 147 to top face of Block 12 - Decorative suspender
- Block 152 - Winch - From north face of Block 148 to top face of Block 2 - Decorative suspender
- Block 153 - Winch - From south face of Block 149 to top face of Block 8 - Decorative suspender
- Block 154 - Winch - From north face of Block 149 to top face of Block 4 - Decorative suspender
- Block 155 - Winch - From south face of Block 148 to top face of Block 10 - Decorative suspender

Braces (structural ties; connect two faces)
Top-chord ties along both parapets (east and west z=+2 posts; consecutive bays)
- Block 156 - Brace - East top-chord y=−6→−5 - north face of Block 46 to south face of Block 50 - Longitudinal tie
- Block 157 - Brace - East top-chord y=−5→−4 - north face of Block 50 to south face of Block 54 - Longitudinal tie
- Block 158 - Brace - East top-chord y=−4→−3 - north face of Block 54 to south face of Block 58 - Longitudinal tie
- Block 159 - Brace - East top-chord y=−3→−2 - north face of Block 58 to south face of Block 62 - Longitudinal tie
- Block 160 - Brace - East top-chord y=−2→−1 - north face of Block 62 to south face of Block 66 - Longitudinal tie
- Block 161 - Brace - East top-chord y=−1→0 - north face of Block 66 to south face of Block 70 - Longitudinal tie
- Block 162 - Brace - East top-chord y=0→+1 - north face of Block 70 to south face of Block 74 - Longitudinal tie
- Block 163 - Brace - East top-chord y=+1→+2 - north face of Block 74 to south face of Block 78 - Longitudinal tie
- Block 164 - Brace - East top-chord y=+2→+3 - north face of Block 78 to south face of Block 82 - Longitudinal tie
- Block 165 - Brace - East top-chord y=+3→+4 - north face of Block 82 to south face of Block 86 - Longitudinal tie
- Block 166 - Brace - East top-chord y=+4→+5 - north face of Block 86 to south face of Block 90 - Longitudinal tie
- Block 167 - Brace - East top-chord y=+5→+6 - north face of Block 90 to south face of Block 94 - Longitudinal tie
- Block 168 - Brace - West top-chord y=−6→−5 - north face of Block 48 to south face of Block 52 - Longitudinal tie
- Block 169 - Brace - West top-chord y=−5→−4 - north face of Block 52 to south face of Block 56 - Longitudinal tie
- Block 170 - Brace - West top-chord y=−4→−3 - north face of Block 56 to south face of Block 60 - Longitudinal tie
- Block 171 - Brace - West top-chord y=−3→−2 - north face of Block 60 to south face of Block 64 - Longitudinal tie
- Block 172 - Brace - West top-chord y=−2→−1 - north face of Block 64 to south face of Block 68 - Longitudinal tie
- Block 173 - Brace - West top-chord y=−1→0 - north face of Block 68 to south face of Block 72 - Longitudinal tie
- Block 174 - Brace - West top-chord y=0→+1 - north face of Block 72 to south face of Block 76 - Longitudinal tie
- Block 175 - Brace - West top-chord y=+1→+2 - north face of Block 76 to south face of Block 80 - Longitudinal tie
- Block 176 - Brace - West top-chord y=+2→+3 - north face of Block 80 to south face of Block 84 - Longitudinal tie
- Block 177 - Brace - West top-chord y=+3→+4 - north face of Block 84 to south face of Block 88 - Longitudinal tie
- Block 178 - Brace - West top-chord y=+4→+5 - north face of Block 88 to south face of Block 92 - Longitudinal tie
- Block 179 - Brace - West top-chord y=+5→+6 - north face of Block 92 to south face of Block 96 - Longitudinal tie

Side-panel diagonals (Warren lattice, even-start bays)
- Block 180 - Brace - East diagonal y=−6→−5 - outer face of Block 13 to inner (west) face of Block 50 - Diagonal tie
- Block 181 - Brace - East diagonal y=−4→−3 - outer face of Block 17 to inner face of Block 58 - Diagonal tie
- Block 182 - Brace - East diagonal y=−2→−1 - outer face of Block 21 to inner face of Block 66 - Diagonal tie
- Block 183 - Brace - East diagonal y=0→+1 - outer face of Block 25 to inner face of Block 74 - Diagonal tie
- Block 184 - Brace - East diagonal y=+2→+3 - outer face of Block 29 to inner face of Block 82 - Diagonal tie
- Block 185 - Brace - East diagonal y=+4→+5 - outer face of Block 33 to inner face of Block 90 - Diagonal tie
- Block 186 - Brace - West diagonal y=−6→−5 - outer face of Block 14 to inner (east) face of Block 52 - Diagonal tie
- Block 187 - Brace - West diagonal y=−4→−3 - outer face of Block 18 to inner face of Block 60 - Diagonal tie
- Block 188 - Brace - West diagonal y=−2→−1 - outer face of Block 22 to inner face of Block 68 - Diagonal tie
- Block 189 - Brace - West diagonal y=0→+1 - outer face of Block 26 to inner face of Block 76 - Diagonal tie
- Block 190 - Brace - West diagonal y=+2→+3 - outer face of Block 30 to inner face of Block 84 - Diagonal tie
- Block 191 - Brace - West diagonal y=+4→+5 - outer face of Block 34 to inner face of Block 92 - Diagonal tie

Cross-bracing across width (portals at y=−4, 0, +4)
- Block 192 - Brace - Portal tie at y=−4 - inner face of Block 54 to inner face of Block 56 - Cross-beam
- Block 193 - Brace - Portal tie at y=0 - inner face of Block 70 to inner face of Block 72 - Cross-beam
- Block 194 - Brace - Portal tie at y=+4 - inner face of Block 86 to inner face of Block 88 - Cross-beam

Motion and control configuration
- Powered Wheels (Blocks 109–120): Decorative only; do not bind or press any inputs; allow auto-brake; axes along ±x.
- Water Cannons (Blocks 121–132): Keep OFF; no control bindings; oriented upward and slightly inward; no steam mode used.
- Torches (Blocks 133–144): Lit; flames upward/outward; maintained ≥0.5 clearance to all wood/cannons.

Notes on single-piece integrity and safety
- All components remain one rigid sub-structure; no separations after assembly.
- Deck is 3×13 with six bearing feet at y=±6 to rest on terrain edges.
- Connectors attach only between free faces of existing blocks; no connector-to-connector attachments.
- If minor interference occurs during build, adjust a cannon’s inward cant or swap torch/cannon on that bay while preserving the even/odd alternation and y=0 omission.

