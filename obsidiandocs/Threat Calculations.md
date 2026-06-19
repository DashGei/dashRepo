## Encounter Building Formula

### Core Principle
Every monster has a **Threat Rating (TR)**. The encounter’s difficulty is determined by the **total TR** of all monsters present, compared to the party’s level (average party level, assuming 5 optimized characters).  

The formula satisfies the design goal: **a medium encounter for level L becomes easy for level L+1 and hard for level L‑1**. This creates a smooth, linear progression—making encounter budgeting predictable and fast.

---

### Difficulty Thresholds
Let **L** = average party level (rounded to the nearest whole).  
Let **Total TR** = sum of all monsters’ Threat Ratings in the encounter.

| Difficulty | Total TR Range |
|------------|----------------|
| Trivial    | `4L – 4` or less |
| Easy       | `4L – 4` to `4L – 1` |
| Medium     | `4L` to `4L + 3` |
| Hard       | `4L + 4` to `4L + 7` |
| Deadly     | `4L + 8` or more |

**Example** (L=3):  
- Medium encounter: Total TR 12–15.  
- Easy for L=4: `4·4 – 4 = 12` to `16 – 1 = 15` → exactly the same 12–15 band.  
- Hard for L=2: `4·2 + 4 = 12` to `8 + 7 = 15` → same band.  
This confirms the diagonal shift exactly.

---

### Calibrating from the Playtest
The playtest encounter: **2 Drow Scouts + 2 Drow Skulkers** against a level 3 party felt like a **medium** encounter.  

To fit the formula, we assign each of these monsters a **TR of 3**.  
- Total TR = 4 × 3 = **12** → falls within Medium range for L=3 (12–15).  

This matches the observed difficulty and gives a consistent baseline: a monster with TR equal to the party level is a fair 1‑on‑1 challenge for a single PC of that level (with the party size of 5, a group of equal‑TR monsters must be slightly fewer than the party to remain medium).

---

### How to Determine a Monster’s Threat Rating
Threat Rating is essentially the monster’s “level”—the level of a party for which the monster is a standard opponent. As a quick guide, compare the monster’s stats to PC benchmarks at the target TR:

| TR | Attack Bonus (approx.) | Phys/Mental DC | AC | HP |
|----|------------------------|----------------|----|----|
| 1  | +4–+5                 | 12–13          | 13–14 | ~15–20 |
| 2  | +5–+6                 | 12–13          | 14–15 | ~20–25 |
| 3  | +5–+6                 | 12–13          | 14–15 | ~25–35 |
| 4  | +6–+7                 | 13–14          | 15–16 | ~35–45 |
| 5  | +7–+8                 | 14–15          | 16–17 | ~45–55 |
| …  | +1 per 3–4 levels     | +1 per 3–4     | +1 per 3–4 | +8–12 per level |

Traits, action options, and special abilities (like Lolthsworn Poisons, invisibility, reaction attacks) can increase the effective TR by 1 or more if they heavily alter the action economy or bypass standard defenses. Use the benchmark table as a starting point, then adjust upwards if the monster’s capabilities are notably above its raw numbers.

---

### Adjusting for Non‑Standard Party Sizes
The formula assumes exactly 5 PCs. If your group is different, scale the multiplier: for a party of **N** characters, replace `4` with `(4/5) × N` (roughly `0.8 × N`). For instance, a party of 4 would use `3.2L` as the midpoint, making thresholds: Trivial < `3.2L – 3.2`, Easy up to `3.2L – 1`, Medium `3.2L` to `3.2L + 3.2`, etc. Round thresholds to the nearest whole number for simplicity. However, the core game assumes 5 PCs, so the default formula is the one above.

---

### Encounter Design Quick Reference (5 PCs, L=Party Level)

| Desired Difficulty | Target Total TR | Example Combinations (L=3) |
|-------------------|----------------|----------------------------|
| Trivial            | ≤ 4L – 5        | 2 TR 2 monsters (4)       |
| Easy               | 4L – 4 to 4L–1 | 3 TR 2 monsters (6) or 1 TR 3 + 1 TR 2 (5) |
| Medium             | 4L to 4L + 3   | 4 TR 3 monsters (12)      |
| Hard               | 4L + 4 to 4L+7 | 3 TR 4 monsters (12) or 2 TR 4 + 1 TR 3 (11)? Wait 2×4+3=11, need 12+ → 2 TR 4 + 1 TR 4 (12) or 1 TR 5 + 2 TR 3 (11 not enough) Actually to hit 12-15 for L=3, medium; 16-19 for hard. |
| Deadly             | ≥ 4L + 8       | 4 TR 4 monsters (16) or 2 TR 5 + 1 TR 4 (14) not enough, need 16+ |

*Note: For L=3, hard is 16–19 total TR. So 4 TR 4 monsters (16) is hard; 2 TR 5 + 1 TR 4 (14) is medium. Choose combinations that land in the desired range.*

This system gives you a straight line from monster TR to encounter difficulty, ensuring the “one level shift equals one difficulty step” property holds true at every tier of play.

## Updated Threat Rating Chart

I’ve added a **Damage Per Round (DPR)** column that assumes the monster uses both of its actions to make attacks against a typical PC of the same level. The values are calibrated to the monsters already stated and the encounter benchmarks we’ve established.

---

### Threat Rating Benchmarks

| TR  | Attack Bonus | Phys/Mental DC | AC    | HP      | DPR (2 Attacks) |
| --- | ------------ | -------------- | ----- | ------- | --------------- |
| 1   | +4–+5        | 12–13          | 13–14 | 15–20   | 5               |
| 2   | +5–+6        | 12–13          | 14–15 | 20–25   | 7               |
| 3   | +5–+6        | 12–13          | 14–15 | 25–35   | 8               |
| 4   | +6–+7        | 13–14          | 15–16 | 35–45   | 10              |
| 5   | +7–+8        | 14–15          | 16–17 | 45–55   | 13              |
| 6   | +7–+8        | 14–15          | 16–17 | 55–65   | 16              |
| 7   | +8–+9        | 15–16          | 17–18 | 65–80   | 20              |
| 8   | +8–+9        | 15–16          | 17–18 | 80–95   | 24              |
| 9   | +9–+10       | 16–17          | 18–19 | 95–110  | 28              |
| 10  | +10–+11      | 17–18          | 19–20 | 110–130 | 32              |

*DPR is the average damage a monster deals if it spends both actions on attacks (e.g., two Strikes) against a creature with AC appropriate for a PC of that level. It accounts for hit chance, critical hits, and standard damage riders.*  
*Monsters with multi‑target abilities (Cleave, area spells) or disabling riders may have slightly lower single‑target DPR but are still correctly rated because of their additional impact.*

---

### How the Numbers Fit Existing Monsters

- **Drow Scout (TR 3)**: +5 to hit, 1d6+3 (6.5) per Strike → two Strikes vs AC 15: ~7.8 DPR. Fits the TR 3 DPR of 8.
- **Drow Warrior (TR 4)**: +5 to hit, 1d10+3 (8.5) → two Strikes vs AC 15: ~10.2 DPR. Cleave adds occasional splash damage, making it solidly TR 4.
- **Phase Spider (TR 6)**: +5 to hit, 2d6+3+1d6 (13.5) → two Strikes vs AC 15: ~16.2 DPR. Matches the TR 6 column exactly.
- **Drow Mage (TR 4)**: Its DPR with Arcane Bolt (2d6 force, +5 to hit, two actions) is 2×(0.55×7) ≈ 7.7, but its true threat comes from control spells (Phantasmal Force, Web) that disable entire turns, raising its effective rating.

The chart gives you a quick balance target: if a monster’s raw damage output falls significantly above or below its TR line, adjust its HP, AC, or special abilities to compensate, or shift its TR up or down by 1.

---

This table now forms the foundation of your monster creation toolkit. Want to build a boss or an elite variant next, maybe something with a limited multi‑attack or a “Paragon” action?