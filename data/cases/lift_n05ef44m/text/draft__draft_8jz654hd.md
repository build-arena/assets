# user (default) (TextMessage): 

The plan of the specific sub-structure 1: {'name': 'Steam Rocket Engine Module', 'description': 'A compact, self-contained steam rocket engine that generates vertical thrust. It consists of a small wooden mount block attached to its base stone, a Water Cannon mounted to the mount’s bottom face pointing downward, a Torch on the mount’s side pointing downward to heat the cannon into steam mode, and two opposite small wooden lug blocks (north and south) used solely as brace anchor points to connect to the chassis.', 'components': '- 1x Default Stone Base (1×1×1, mass 0.25)\n        - 1x Small Wooden Block (mount, mass 0.3)\n        - 1x Water Cannon (mass 1.5)\n        - 1x Torch (mass 1.0)\n        - 2x Small Wooden Block (brace lugs: north and south, each mass 0.3)', 'assembly': '- Start from the sub-structure’s default stone base.\n        - Attach the mount Small Wooden Block (Wm) to the TOP face of the base stone (centers aligned).\n        - Attach the Water Cannon to the BOTTOM face of Wm, outlet pointing straight DOWN (−z). This orients thrust upward (+z).\n        - Attach a Torch to the EAST face of Wm, oriented DOWNWARD. The torch’s horizontal support offsets ~0.5 out from Wm’s east face; its heating sphere (radius 0.3) is centered ~1.0 below the torch body. This places the heating sphere adjacent to the lower side of the Water Cannon body (clear of the direct exhaust axis), reliably heating it to steam mode.\n        - Attach two Small Wooden Blocks as brace lugs: one to the NORTH face of Wm (lug-N) and one to the SOUTH face of Wm (lug-S). Their outward faces (north of lug-N and south of lug-S) will be kept free for Braces during final assembly.\n        - Face use tally (to avoid conflicts): Wm top used by base; bottom used by cannon; east used by torch; north and south used by lugs; west remains free.\n        - Clearance: Ensure the Water Cannon hangs below Wm with its outlet below Wm but slightly above the ground upon final assembly; the Torch sits lateral to the cannon, not directly under the outlet.', 'motion_control': '- Assign the Water Cannon to the shared firing key (e.g., “F”).\n        - Torch is always on (no control).\n        - Behavior: Holding the key runs the cannon; torch heating transitions output to steam mode (≈8.6× thrust), producing strong upward thrust.', 'function': 'Provides one vertical steam rocket engine with integral heating and brace anchors. Two instances are used to create a symmetric propulsion pair for the final rocket.', 'design_requirements': '- The Water Cannon must point straight down with its axis aligned to global z.\n        - The Torch’s heating sphere (radius 0.3) must intersect the Water Cannon’s lower side body (avoid the narrow waist); place the torch slightly lateral and below the mount so it is not directly in the exhaust stream to reduce extinguishing risk.\n        - Keep lug-N and lug-S outward faces free for Braces.\n        - Ensure ground clearance for the cannon outlet at rest; adjust engine-to-chassis spacing via brace lengths as needed.\n        - Positions may be micro‑adjusted in later stages to resolve conflicts based on actual build execution.'}

# drafter (gpt-5) (TextMessage): 

Sub-structure name: Steam Rocket Engine Module

Blocks declaration and placement (built from the default 1×1×1 starting base):
- Block 0 - Default Starting Block (1×1×1 base stone) - base reference for the module - origin reference
- Block 1 - Small Wooden Block - mount (Wm), 1×1×1, structural hub for attachments - top face of Block 0
- Block 2 - Water Cannon - vertical thrust cannon mounted under Wm - bottom face of Block 1 - points straight down (global −z). Assigned to shared firing key “F”. When held, the cannon fires; with nearby torch heating, it transitions to steam mode (~8.6× recoil), producing strong upward (+z) thrust.
- Block 3 - Torch - side heater for steam mode, oriented downward - east face of Block 1 - always on. Orientation vector downward (global −z). Heating sphere radius 0.3 centered approximately one unit below the torch body (east of the cannon axis), intersecting the lower side of the Water Cannon’s body to reliably heat it while remaining lateral to the exhaust stream.
- Block 4 - Small Wooden Block - brace lug-N (anchor for future Brace connection), keep outward NORTH face free - north face of Block 1
- Block 5 - Small Wooden Block - brace lug-S (anchor for future Brace connection), keep outward SOUTH face free - south face of Block 1

Functional geometry and behavior details:
- Global axes: +x east, +y north, +z upward.
- Water Cannon placement and geometry: attached to Wm’s bottom face; axis aligned with global z and pointing −z. The cannon body hangs below Wm; outlet is below the mount, ensuring vertical thrust upward. Recoil is constant (1.6 at normal gravity) and rises to ~13.76 in steam mode (8.6×).
- Torch placement and heating: attached to Wm’s east face, horizontal support offsets ~0.5 unit east from the face. Torch points downward; its heating sphere (r = 0.3) is centered ~1.0 unit below the torch body, situated east of the cannon axis and at the lower-half height of the cannon. This positioning causes the sphere to intersect the cannon’s lower side body (avoiding the narrow waist and avoiding direct alignment under the outlet), reliably triggering steam mode while minimizing extinguishing risk from the downward plume.

Control assignments:
- Water Cannon: key “F” (shared firing key). Hold to fire.
- Torch: always on (no control).

Face-use tally for Wm (Block 1):
- Top: used by Block 0 (base).
- Bottom: used by Block 2 (Water Cannon).
- East: used by Block 3 (Torch).
- North: used by Block 4 (lug-N).
- South: used by Block 5 (lug-S).
- West: remains free (available for future needs).

Clearance notes:
- The Water Cannon outlet sits below Wm while remaining above expected ground clearance in typical chassis mounting; final ground clearance is adjusted via Brace lengths when integrating into the rocket chassis.
- Lugs’ outward faces (north of Block 4 and south of Block 5) are intentionally kept free for Braces during final assembly.

Module function:
- Provides one compact, self-contained vertical steam rocket engine with integral heating and brace anchors. Use two identical modules for symmetric propulsion in the final rocket.

Position adjustment note:
- None at this stage. If later assembly reveals interference (e.g., steam plume intermittently extinguishing the torch), we will micro-adjust the east-side torch by swapping to the west face (Block 1 west) or by slight chassis brace spacing changes, keeping the torch lateral and its heating sphere intersecting the lower side of the cannon body. Functional intent (downward cannon, downward torch, lug-N/S free faces) remains unchanged.

# draft_reviewer (gpt-5) (TextMessage): 

Step 1 — Establish coordinate system and base reference
- Assume the default base block (Block 0) is a 1×1×1 cube centered at [0, 0, 0].
- Face centers of a 1×1×1 cube:
  - Top face center: [0, 0, +0.5]
  - Bottom face center: [0, 0, −0.5]
  - East face center: [+0.5, 0, 0]
  - West face center: [−0.5, 0, 0]
  - North face center: [0, +0.5, 0]
  - South face center: [0, −0.5, 0]

Available block shapes (half-dimensions for collision checks):
- Small Wooden Block: 1×1×1; half sizes = 0.5 (x), 0.5 (y), 0.5 (z)
- Water Cannon: 1.75×1×1 (length along its axis; “waist” as center, asymmetrical ends: inlet at +0.75 along axis and outlet at −1 along axis). Treat half-widths as: x = 0.5, y = 0.5; along axis use 1.0 (downward side) and 0.75 (upward side). For AABB checks, conservatively use max half-length 1.0 on z.
- Torch: 1.5×0.5×0.5. When attached to a vertical face, the torch body center is offset 0.5 along the face normal; heating sphere center is torch body center plus a unit-length orientation vector. Half-widths: x = 0.25, y = 0.25, z = 0.75 when the long dimension is along z (downward orientation).

Step 2 — Place each block and compute exact center coordinates
Block 0 — Default base stone (given)
- Center: [0, 0, 0]

Block 1 — Small Wooden Block (Wm) attached to Block 0 top face
- Attachment: Wm to top face of Block 0, face-to-face.
- Center: [0, 0, 1.0]

Block 2 — Water Cannon attached to Wm bottom face, pointing straight down (−z)
- Wm bottom face center: [0, 0, 0.5]
- Water Cannon center is offset 0.5 along the face normal (−z): [0, 0, 0.5 − 0.5] = [0, 0, 0.0]
- Orientation: axis aligned with global z and pointing −z.
- Inlet position: center +0.75 along +z = [0, 0, +0.75]
- Outlet position: center −1.0 along −z = [0, 0, −1.0]
- Axial extent (z): from −1.0 to +0.75
- Transverse extents (x,y): ±0.5 about the center.

Block 3 — Torch attached to Wm east face, oriented downward (−z)
- Wm east face center: [+0.5, 0, 1.0]
- Torch body center offset +0.5 along +x: [1.0, 0, 1.0]
- Orientation vector: strictly downward (0, 0, −1)
- Heating sphere radius: 0.3; sphere center = torch body center + (orientation vector) = [1.0, 0, 0.0]

Block 4 — Small Wooden Block lug-N attached to Wm north face
- Wm north face center: [0, +0.5, 1.0]
- lug-N center: [0, +1.0, 1.0]
- Keep lug-N outward NORTH face free (no connections on its north face).

Block 5 — Small Wooden Block lug-S attached to Wm south face
- Wm south face center: [0, −0.5, 1.0]
- lug-S center: [0, −1.0, 1.0]
- Keep lug-S outward SOUTH face free.

Step 3 — Neighbor distances and collision checks for each new block
Method: Report center-to-center vector and Euclidean distance; then per-axis separations vs. sum of half-dimensions to confirm overlap/contact/separation.

Block 1 (Wm) vs. Block 0 (base)
- Center vector: [0, 0, +1]; Euclidean distance = 1.0
- Axis separations: |dx|=0 vs sum_half_x=0.5+0.5=1.0; |dy|=0 vs sum_half_y=1.0; |dz|=1.0 vs sum_half_z=1.0
- Result: No overlap. Faces are flush at z=+0.5 plane (proper attachment).

Block 2 (Water Cannon) vs. Block 1 (Wm)
- Center vector: [0, 0, −1]; distance = 1.0
- Axis separations: |dx|=0 vs 1.0; |dy|=0 vs 1.0; |dz|=1.0 vs sum_half_z=0.5 (Wm) + 1.0 (cannon) = 1.5
- All three axes satisfy |d| < sum_half on x and y, and |dz| < sum_half on z → Overlap in volume.
- Also by geometry, the cannon’s upper extent (+0.75) intrudes 0.25 units above Wm’s bottom face at z=0.5, penetrating into Wm (0.5 to 0.75 region).
- Structural status: Overlap detected. Improper attachment/placement.

Block 2 (Water Cannon) vs. Block 0 (base)
- Center vector: [0, 0, 0]; distance = 0
- Axis separations: |dx|=0 vs 1.0; |dy|=0 vs 1.0; |dz|=0 vs sum_half_z=0.5 (base) + 1.0 (cannon) = 1.5
- Result: Severe overlap (complete overlap in x,y and substantial overlap in z). The cannon occupies the same central volume as the base.

Block 3 (Torch) vs. Block 1 (Wm)
- Center vector: [+1, 0, 0]; distance = 1.0
- Axis separations: |dx|=1.0 vs sum_half_x=0.5 (Wm) + 0.25 (torch) = 0.75 → separated along x; thus no overlap.
- Functional heating proximity: Torch heating sphere center [1, 0, 0] is 1.0 units east of the cannon center; the cannon’s east face is at x=+0.5. The minimal x-gap between the torch sphere and cannon body is 0.2 (sphere leftmost x=1 − 0.3 = 0.7 vs cannon east face x=0.5); therefore the heating sphere does NOT intersect the cannon.

Block 3 (Torch) vs. Block 2 (Water Cannon)
- Center vector: [+1, 0, +1]; distance ≈ 1.414
- Axis separations: x: 1.0 > 0.75 (separated), y: 0 < 0.75 (overlap in y), z: 1.0 < 1.75 (overlap in z by extents). Since there is separation along x, there is no volumetric overlap overall.

Block 4 (lug-N) vs. Block 1 (Wm)
- Center vector: [0, +1, 0]; distance = 1.0
- Axis separations: |dy|=1.0 vs sum_half_y=1.0 → flush contact on y; |dx|=0 < 1.0; |dz|=0 < 1.0
- Result: Proper face attachment; no overlap.

Block 4 (lug-N) vs. Block 0 (base)
- Center vector: [0, +1, +1]; distance ≈ 1.414
- Axis separations: Along y: 1.0 vs 1.0 → tangent at y=+0.5; Along z: 1.0 vs 1.0 → tangent at z=+0.5; Along x: 0 < 1.0; Result: Tangential edge contact only (no volume overlap). Acceptable.

Block 5 (lug-S) vs. Block 1 (Wm)
- Center vector: [0, −1, 0]; distance = 1.0
- Axis separations: |dy|=1.0 vs 1.0 → flush contact on y; |dx|=0 < 1.0; |dz|=0 < 1.0
- Result: Proper face attachment; no overlap.

Block 5 (lug-S) vs. Block 0 (base)
- Center vector: [0, −1, +1]; distance ≈ 1.414
- Axis separations: similar to lug-N vs base; tangential edge contact only. Acceptable.

Step 4 — Functional validation
- Water Cannon direction: Specified to point straight down (axis aligned to global −z). Confirmed by placement and orientation.
- Torch heating: Specified “oriented downward (global −z)” and must have its heating sphere intersect the Water Cannon’s lower side body. With the torch body at [1, 0, 1] and heating sphere center at [1, 0, 0], the sphere radius (0.3) does not reach the cannon body (east face is at x=0.5, sphere’s leftmost x is 0.7). Therefore, the torch fails to heat the cannon; steam mode cannot be guaranteed.
- Face-use tally on Wm:
  - Top: attached to base → used
  - Bottom: used by Water Cannon
  - East: used by Torch
  - North: used by lug-N
  - South: used by lug-S
  - West: free
- Motion/control: Water Cannon on key “F”, Torch always on. Control assignment is consistent.

Step 5 — Physical feasibility assessment
- Key structural failures prevent operation:
  1) The Water Cannon overlaps both Wm and the base block due to the specified geometry and offsets when mounted on Wm’s bottom face. This is an improper attachment and a collision that invalidates the build.
  2) The Torch’s heating sphere does not intersect the Water Cannon’s body when mounted to Wm’s east face with a strictly downward (−z) orientation vector. Steam mode cannot be achieved as designed.
- Without resolving these, the module cannot function as intended (no steam transition; physical collision prevents assembly).
- Mass accounting (for context): Base 0.25 + Wm 0.3 + Cannon 1.5 + Torch 1.0 + lugs 0.3+0.3 = 3.65 mass units. Thrust numbers are irrelevant until structural/heating issues are corrected.

Step 6 — Required corrections
To pass structural integrity and satisfy functional heating, you must revise at least the following:

A) Fix the Water Cannon collision:
- Option A1: Add a spacer block (another 1×1×1 Small Wooden Block) between Wm and the cannon so that the cannon center sits below the base block. For example: Base at [0,0,0], Wm at [0,0,1], Spacer at [0,0,0] between Wm and Cannon won’t work because faces are single-use; instead, place Wm on top of an added spacer above the base: Base [0,0,0], Spacer [0,0,1], Wm [0,0,2], Water Cannon center then at [0,0,1.5] − 0.5 = [0,0,1.0]? You’d need to recompute to ensure the cannon’s entire body lies clear of the base. Practically, you need the cannon center z ≤ −0.5 to avoid any overlap with the base (so its upper extent +0.75 ≤ −0.5, i.e., center z ≤ −1.25), which requires elevating Wm far above the base. This is not achievable with the current single Wm unless you add at least two spacer blocks or remove the base.
- Option A2: Remove the base block from the module once assembly is complete (if the base is only a temporary construction aid). If the base must remain as a structural element per your components list, you cannot mount the cannon to Wm’s bottom face without collision under the current geometry.
- Option A3: Relocate the Water Cannon to a side face (e.g., Wm west face) while keeping its axis aligned to global −z. This avoids the base overlap. Note: you cannot then also mount the torch on the same face; you must choose different faces. Your current specification strictly requires the cannon be on the bottom face, so you would need to change that requirement.

B) Ensure the Torch’s heating sphere intersects the cannon lower-side body:
- With the torch on the Wm east face and a strictly downward orientation vector (0,0,−1), intersection does not occur. You must:
  - Option B1: Tilt the torch’s orientation slightly inward (westward) while generally pointing downward so the heating sphere center moves from [1,0,0] to, for example, [0.7,0,0.05] (orientation vector approximately [−0.3, 0, −0.95], unit length). This places the sphere’s leftmost x at 0.4, which intersects the cannon’s east side (x up to 0.5) at z≈0.05—satisfying the intersection requirement while remaining lateral and below the mount.
  - Option B2: Move the torch to a different face and orientation where the heating sphere reaches the cannon’s lower-side body without being directly under the outlet (e.g., on Wm west face with orientation slightly downward and eastward), provided the face is free. Currently west is free, but be cautious about distances and face occupancy with other components.

C) Keep lug-N and lug-S faces free:
- Current placement of lugs on north and south faces of Wm is fine; their outward faces remain free.

Step 7 — Conclusion
- Structural integrity: FAIL. The Water Cannon overlaps both Wm and the base block in the current placement.
- Functional implementation: FAIL. The Torch’s heating sphere does not intersect the Water Cannon body with a strictly downward orientation; steam mode cannot be achieved.
- Physical feasibility: FAIL due to the above.

Please revise by either:
- Elevating Wm (adding spacer blocks) or removing the base so the Water Cannon can hang completely clear of the base and Wm; and
- Adjusting the torch orientation vector to include a westward component so its heating sphere intersects the cannon’s lower side while remaining lateral to the exhaust.

Once you provide a corrected blueprint with updated coordinates and face use that resolves these collisions and heating geometry, I will re-evaluate.

# drafter (gpt-5) (TextMessage): 

Sub-structure name: Steam Rocket Engine Module (revised to resolve collisions and ensure reliable steam heating)

Blocks declaration and placement (built from the default 1×1×1 starting base):
- Block 0 - Default Starting Block (1×1×1 base stone) - base reference for the module - origin reference
- Block 1 - Small Wooden Block - mount (Wm), 1×1×1, structural hub for attachments - top face of Block 0
- Block 4 - Small Wooden Block - brace lug-N (anchor for future Brace connection), keep outward NORTH face free - north face of Block 1
- Block 5 - Small Wooden Block - brace lug-S (anchor for future Brace connection), keep outward SOUTH face free - south face of Block 1
- Block 2 - Water Cannon - vertical thrust cannon mounted to Wm’s WEST face - west face of Block 1 - points straight down (global −z). Assigned to shared firing key “F”. Firing produces constant recoil (1.6); with nearby torch heating it transitions to steam mode (~8.6×, ≈13.76 equivalent recoil), giving strong upward (+z) thrust.
- Block 3 - Torch - lateral heater mounted to lug-N’s WEST face, angled mostly downward and slightly southward - west face of Block 4 - always on. Orientation vector = [0, −0.8, −0.6] (unit). Heating sphere radius 0.3 centered at torch body center plus this vector; placed to intersect the cannon’s lower-side body while staying lateral to the exhaust stream.

Global axes reference: +x east, +y north, +z upward.

Exact centers and key geometry (for verification):
- Block 0 (Base) center: [0, 0, 0]
- Block 1 (Wm) center: [0, 0, 1.0] (attached to Block 0 top)
- Block 4 (lug-N) center: [0, +1.0, 1.0] (attached to Wm north)
- Block 5 (lug-S) center: [0, −1.0, 1.0] (attached to Wm south)

Water Cannon (Block 2):
- Host face: Wm west face center at [−0.5, 0, 1.0]
- Cannon body center (0.5 offset along face normal): [−1.0, 0, 1.0]
- Axis: global −z (downward)
- Inlet position (center +0.75 along +z): [−1.0, 0, 1.75]
- Outlet position (center −1.0 along −z): [−1.0, 0, 0.0]
- AABB extents: x ∈ [−1.5, −0.5], y ∈ [−0.5, +0.5], z ∈ [0.0, 1.75]

Torch (Block 3):
- Host face: lug-N west face center at [−0.5, 1.0, 1.0]
- Torch body center (0.5 offset along −x): [−1.0, 1.0, 1.0]
- Orientation vector (unit): v = [0, −0.8, −0.6] (mostly downward, slightly south)
- Heating sphere center: [−1.0, 0.2, 0.4] with radius r = 0.3

Collision and proximity checks (sanity):
- Cannon vs Wm: center-to-center vector [−1, 0, 0]; along x: separation = 1.0 equals sum of half-widths (0.5 + 0.5) → proper flush at the west face; no volume overlap.
- Cannon vs Base: vector [−1, 0, +1]; along x: separation = 1.0 equals 0.5 + 0.5 → tangent at base west plane; no overlap; y and z within summed half-extents.
- Torch body vs lug-N: vector [−1, 0, 0]; x separation 1.0 > 0.5 + 0.25 = 0.75 → clear; no overlap.
- Torch body vs Wm: vector [−1, +1, 0]; x and y separations both 1.0 > 0.75 → clear; no overlap.
- Torch body vs Cannon: vector [0, +1, 0]; y separation 1.0 > 0.5 + 0.25 = 0.75 → clear; no overlap.
- Heating sphere vs Cannon: sphere center [−1.0, 0.2, 0.4] lies laterally 0.2 from cannon axis (x=−1, y=0); with sphere radius 0.3 and cannon half-width 0.5, intersection occurs (0.2 ≤ 0.8), at z = 0.4 (well below the cannon center and above the outlet), satisfying the steam-heating requirement while remaining out of direct exhaust.

Control assignments:
- Water Cannon: key “F” (hold to fire)
- Torch: always on (no control)

Face-use tally:
- Wm (Block 1): Top used by Base; West used by Cannon; North used by lug-N; South used by lug-S; East remains free; Bottom remains free.
- lug-N (Block 4): West used by Torch; North face remains free for brace anchor (as required).
- lug-S (Block 5): South face remains free for brace anchor (as required).

Clearance notes:
- Cannon outlet at z = 0.0 is below Wm but lateral to the base; no ground strike expected in typical chassis mounting. Final ground clearance can be tuned by brace lengths during chassis integration.
- Torch is laterally offset and above the outlet plane (heating sphere center z=0.4, bottom of sphere z≈0.1), minimizing extinguishing risk from the downward plume while maintaining reliable heating contact on the cannon’s lower-side body.

Module function:
- Delivers one compact, self-contained vertical steam rocket engine with integral heating and brace anchors. Use two mirrored instances for a symmetric propulsion pair.

Position adjustment note (to resolve reviewer’s Step 5 failures while preserving functional intent):
- Repositioned Water Cannon from Wm bottom face to Wm west face (axis still straight down, −z). Rationale: With the fixed 0.5 attachment offset and the cannon’s +0.75 inlet extent, mounting to a horizontal bottom face causes unavoidable 0.25 intrusion into the mount (and overlap with the base). Side-face mounting eliminates that geometric conflict while fully preserving the requirement “Water Cannon must point straight down.”
- Moved Torch from Wm east face to lug-N west face and adjusted orientation from strictly downward to v = [0, −0.8, −0.6]. Rationale: Ensures the heating sphere intersects the cannon’s lower-side body (reliable steam mode) while staying lateral to the exhaust and keeping lug-N/S outward faces free for Braces. This change adheres to “Torch on the mount’s side pointing downward” in spirit and satisfies the explicit heating geometry requirement.

Mass accounting (unchanged components):
- Base 0.25 + Wm 0.3 + Cannon 1.5 + Torch 1.0 + lug-N 0.3 + lug-S 0.3 = 3.65 units total.

# draft_reviewer (gpt-5) (TextMessage): 

Review overview
- I re-established a consistent coordinate frame and recalculated all block centers and extents based on your revised placements.
- I then checked, for each placed block, distances to all neighboring blocks’ centers and compared per-axis separations against the sum of half-dimensions to flag overlaps or improper attachments.
- Finally, I validated functional requirements (cannon orientation, torch heating intersection, brace faces left free) and assessed physical feasibility.

Step 1 — Coordinate system and base reference
- Base (Block 0) assumed as a 1×1×1 cube centered at [0, 0, 0].
- Face centers for a 1×1×1 cube:
  - Top: [0, 0, +0.5]
  - Bottom: [0, 0, −0.5]
  - East: [+0.5, 0, 0]
  - West: [−0.5, 0, 0]
  - North: [0, +0.5, 0]
  - South: [0, −0.5, 0]

Block half-sizes for collision checks
- Small Wooden Block: half sizes = 0.5 (x), 0.5 (y), 0.5 (z)
- Water Cannon: peanut cylinder length 1.75 along its axis, width 1, height 1. For AABB checks with axis aligned to global z:
  - Half-sizes: 0.5 (x), 0.5 (y), 1.0 (z)
  - Axial extent relative to center: outlet −1.0 along −z; inlet +0.75 along +z
- Torch: shape 1.5×0.5×0.5; when mounted to a vertical face and oriented mostly downward, treat half-sizes conservatively as 0.25 (x), 0.25 (y), 0.75 (z). Heating sphere radius = 0.3, centered at torch body center plus the unit orientation vector.

Step 2 — Block placements (exact centers)
- Block 0 (Base): [0, 0, 0]
- Block 1 (Wm mount) on Block 0 top face: [0, 0, 1.0]
- Block 4 (lug-N) on Wm north face: [0, +1.0, 1.0]
- Block 5 (lug-S) on Wm south face: [0, −1.0, 1.0]

Block 2 — Water Cannon on Wm west face, axis −z (down)
- Wm west face center: [−0.5, 0, 1.0]
- Cannon center offset 0.5 along face normal (−x): [−1.0, 0, 1.0]
- Axial z extent: min z = 0.0 (outlet), max z = 1.75 (inlet)
- Transverse extents: x ∈ [−1.5, −0.5], y ∈ [−0.5, +0.5]

Block 3 — Torch on lug-N west face, orientation vector v = [0, −0.8, −0.6] (unit)
- lug-N west face center: [−0.5, 1.0, 1.0]
- Torch body center offset 0.5 along face normal (−x): [−1.0, 1.0, 1.0]
- Heating sphere center: torch body center + v = [−1.0, 0.2, 0.4]

Step 3 — Neighbor distances and collision checks
Method: For each new block, compute center-to-center vector and Euclidean distance. Check per-axis separations against sum of half sizes to confirm flush attachment, separation, or overlap.

Block 1 (Wm) vs Block 0 (Base)
- Vector: [0, 0, +1.0]; distance = 1.0
- Axis separations: |dx|=0 ≤ 1.0; |dy|=0 ≤ 1.0; |dz|=1.0 = 1.0 (0.5 + 0.5)
- Result: Proper flush attachment at the top face; no overlap.

Block 4 (lug-N) vs Block 1 (Wm)
- Vector: [0, +1.0, 0]; distance = 1.0
- Axis separations: |dy|=1.0 = 1.0; |dx|=0 ≤ 1.0; |dz|=0 ≤ 1.0
- Result: Proper flush attachment on the north face; no overlap.

Block 4 (lug-N) vs Block 0 (Base)
- Vector: [0, +1.0, +1.0]; distance ≈ 1.414
- Axis separations: |dx|=0 ≤ 1.0; |dy|=1.0 = 1.0; |dz|=1.0 = 1.0
- Result: Tangential edge contact only; no overlap.

Block 5 (lug-S) vs Block 1 (Wm)
- Vector: [0, −1.0, 0]; distance = 1.0
- Axis separations: |dy|=1.0 = 1.0; |dx|=0 ≤ 1.0; |dz|=0 ≤ 1.0
- Result: Proper flush attachment on the south face; no overlap.

Block 5 (lug-S) vs Block 0 (Base)
- Vector: [0, −1.0, +1.0]; distance ≈ 1.414
- Axis separations: |dx|=0 ≤ 1.0; |dy|=1.0 = 1.0; |dz|=1.0 = 1.0
- Result: Tangential edge contact only; no overlap.

Block 2 (Water Cannon) vs Block 1 (Wm)
- Vector: [−1.0, 0, 0]; distance = 1.0
- Axis separations: |dx|=1.0 = 1.0 (0.5 + 0.5); |dy|=0 ≤ 1.0; |dz|=0 ≤ 1.5 (0.5 + 1.0)
- Result: Proper flush attachment on the west face; no overlap.

Block 2 (Water Cannon) vs Block 0 (Base)
- Vector: [−1.0, 0, +1.0]; distance ≈ 1.414
- Axis separations: |dx|=1.0 = 1.0; |dy|=0 ≤ 1.0; |dz|=1.0 ≤ 1.5
- Result: Tangent along x prevents volumetric overlap; acceptable clearance.

Block 2 (Water Cannon) vs Block 4 (lug-N)
- Vector: [−1.0, −1.0, 0]; distance ≈ 1.414
- Axis separations: |dx|=1.0 = 1.0; |dy|=1.0 = 1.0; |dz|=0 ≤ 1.5
- Result: Edge contact only (x and y both at tangency); no overlap.

Block 2 (Water Cannon) vs Block 5 (lug-S)
- Vector: [−1.0, +1.0, 0]; distance ≈ 1.414
- Axis separations: same as lug-N case; edge contact only; no overlap.

Block 3 (Torch body) vs Block 4 (lug-N)
- Vector: [−1.0, 0, 0]; distance = 1.0
- Axis separations: |dx|=1.0 > 0.75 (0.5 + 0.25); |dy|=0 ≤ 0.75; |dz|=0 ≤ 1.25
- Result: Clear separation along x; no overlap.

Block 3 (Torch body) vs Block 1 (Wm)
- Vector: [−1.0, +1.0, 0]; distance ≈ 1.414
- Axis separations: |dx|=1.0 > 0.75; |dy|=1.0 > 0.75; |dz|=0 ≤ 1.25
- Result: Clear separation in x and y; no overlap.

Block 3 (Torch body) vs Block 2 (Water Cannon)
- Vector: [0, +1.0, 0]; distance = 1.0
- Axis separations: |dy|=1.0 > 0.75 (0.5 + 0.25); |dx|=0 ≤ 1.0; |dz|=0 ≤ 1.75
- Result: Clear separation along y; no overlap.

Heating sphere vs Water Cannon (functional proximity)
- Sphere center: [−1.0, 0.2, 0.4], radius r = 0.3
- Cannon axis line at x=−1.0, y=0; transverse distance from sphere center to axis = sqrt((0)^2 + (0.2)^2) = 0.2
- Cannon transverse radius = 0.5; z position 0.4 lies within cannon axial range [0.0, 1.75]
- Result: The sphere intersects the cannon’s lower-side body (the sphere center lies within the cannon’s transverse radius, and z is near the lower end). Heating contact is assured, away from the narrow waist.

Step 4 — Functional validation
- Water Cannon orientation: Axis aligned to global z and pointing −z. This meets the requirement “must point straight down.”
- Torch heating: Orientation vector is unit length [0, −0.8, −0.6]; the heating sphere center at [−1.0, 0.2, 0.4] intersects the cannon’s lower-side body, not the mid-waist, and remains above the outlet plane (outlet at z=0.0; sphere bottom at z≈0.1). This satisfies the steam-heating requirement while remaining lateral to the exhaust stream.
- Face use:
  - Wm: Top used by Base; West used by Cannon; North and South used by lugs; East and Bottom remain free.
  - lug-N: West used by Torch; North (outward face) remains free as brace anchor.
  - lug-S: South (outward face) remains free as brace anchor.
- Controls: Water Cannon on shared firing key “F”; Torch always on. This is consistent.

Step 5 — Physical feasibility
- Structural: All attachments are flush to faces or separated; no volumetric overlaps detected. The cannon no longer intrudes into Wm or Base.
- Heating: Sphere-to-cannon intersection on the lower side is clear and strong, enabling reliable transition to steam mode.
- Extinguishing risk: Torch flame and body are laterally offset from the exhaust; the heating sphere sits above the outlet and slightly south of the axis, mitigating extinguishing risk from the downward plume.
- Ground clearance: Outlet at z=0.0 is below Wm and lateral to the base; final ground clearance can be tuned via chassis braces in the full assembly.

Conclusion
- Structural integrity: PASS — no overlaps or improper attachments found.
- Functional implementation: PASS — cannon points straight down; heating sphere intersects the lower-side cannon body; brace faces kept free.
- Physical feasibility: PASS — geometry and heating behavior are consistent with requirements.

Approved. TERMINATE

# drafter (gpt-5) (TextMessage): 

Sub-structure name: Steam Rocket Engine Module (final, per reviewer’s corrections)

Blocks declaration and placement (built from the default 1×1×1 starting base):
- Block 0 - Default Starting Block (1×1×1 base stone) - base reference for the module - origin reference
- Block 1 - Small Wooden Block - mount (Wm), 1×1×1, structural hub for attachments - top face of Block 0
- Block 2 - Water Cannon - vertical thrust cannon mounted to Wm’s WEST face - west face of Block 1 - points straight down (global −z). Assigned to shared firing key “F”. When held, the cannon fires; heated by the torch it transitions to steam mode (~8.6× recoil), producing strong upward (+z) thrust.
- Block 3 - Small Wooden Block - brace lug-N (anchor for future Brace connection), keep outward NORTH face free - north face of Block 1
- Block 4 - Small Wooden Block - brace lug-S (anchor for future Brace connection), keep outward SOUTH face free - south face of Block 1
- Block 5 - Torch - lateral heater for steam mode, mounted to lug-N’s WEST face and angled mostly downward with slight southward bias - west face of Block 3 - always on. Orientation vector approximately [0, −0.8, −0.6] (unit). The heating sphere (radius 0.3) centered one unit along this vector intersects the Water Cannon’s lower-side body while remaining lateral to the exhaust plume.

Functional geometry and behavior details:
- Global axes: +x east, +y north, +z upward.
- Water Cannon geometry: attached to Wm west face; center offset 0.5 west from the face. Axis aligned to −z; outlet below Wm; inlet above cannon center. This placement eliminates collision with the base and mount while preserving the “straight down” requirement.
- Torch heating: mounted west of lug-N; its heating sphere is positioned to overlap the cannon’s lower side at z≈0.4 (relative to the module), reliably triggering steam mode while staying out of the direct exhaust stream.

Control assignments:
- Water Cannon: key “F” (hold to fire).
- Torch: always on (no control).

Face-use tally:
- Wm (Block 1): Top used by Base; West used by Cannon; North used by lug-N; South used by lug-S; East and Bottom remain free.
- lug-N (Block 3): West used by Torch; North face remains free for brace anchor (as required).
- lug-S (Block 4): South face remains free for brace anchor (as required).

Position adjustment note:
- Moved the Water Cannon from Wm bottom face to Wm west face to resolve the collision flagged by the reviewer and still satisfy the “straight down” axis requirement.
- Adjusted the Torch placement to lug-N’s west face and tilted its orientation vector to [0, −0.8, −0.6] so its heating sphere intersects the cannon’s lower-side body, as requested for reliable steam mode while minimizing extinguishing risk.

