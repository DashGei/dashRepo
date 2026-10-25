# Mordschlag

## System Overview & Design Reference

This document is the current design reference for **Mordschlag**, a low/medium-fantasy tabletop roleplaying game. It is intended to provide another LLM with enough context to understand the game's design philosophy, core mechanics, progression, combat, health, magic, rests, perks, and current areas of uncertainty so that it can create new content consistent with the system.

This document is a **living design reference**, not a final rulebook. Rules explicitly marked **[Working]**, **[Prototype]**, or **[Unresolved]** should not be treated as immutable.

---

# 1. Design Philosophy

Mordschlag is built around five major principles.

## No Narrative Dissonance

Mechanics should correspond closely to what participants expect to happen in the fiction.

Rules should encourage players to think about the world as a physical and social environment rather than treating the game as an abstract character-building exercise.

Whenever possible:

- A mechanical effect should have an intuitive fictional explanation.
    
- Existing systems should be reused rather than creating bespoke mechanics for every situation.
    
- Players should be rewarded for understanding and exploiting the fictional environment.
    

Examples:

- Stamina represents dodging, parrying, twisting, and avoiding serious injury rather than literal bodily health.
    
- Vitality represents actual wounds and causes physical impairment.
    
- A good campsite improves rest because it is genuinely more restorative.
    
- Forced movement interacts naturally with environmental hazards and spell areas.
    
- Concentration/focus on a spell can be broken by sufficiently severe injury rather than requiring an unrelated mini-game.
    

## Ease of Entry

The game should be easy to learn while rewarding mastery.

Mechanics should use a small number of repeated concepts rather than introducing unique procedures for every subsystem.

The Core Resolution system, Weal/Woe, Threshold Tests, Strain, distance categories, conditions, and Rest Tests are intended to provide a common vocabulary across the game.

## Tactical Decisions

Combat should emphasize:

- positioning;
    
- prediction;
    
- reactions;
    
- resource management;
    
- battlefield control;
    
- movement;
    
- interacting with allies and enemies;
    

rather than primarily rewarding character-build optimization.

A character should become more capable largely by acquiring new tactical options rather than by gaining massive numerical bonuses.

## Party Cohesion

The party is intended to function as a unit.

Some systems are collectively managed rather than independently calculated for every character.

Examples include:

- Rest;
    
- Recreation;
    
- Divine Favor;
    
- Mentorship;
    
- party-level progression.


The game should create situations where characters meaningfully contribute to one another's success.

## Mid Fantasy, and Thematic

Mordschlag aims for the power level of settings such as:

- _Blue Eye Samurai_
    
- _Game of Thrones_
    
- _The Lord of the Rings_
    

Characters can become exceptional, but should remain physically and narratively recognizable as mortal or mortal-adjacent beings.

Player power should reach roughly the level of Pathfinder characters around level 13 rather than escalating indefinitely toward extremely high heroic fantasy.

Effective survivability is intended to increase only modestly over 20 levels. The current target is approximately **4× effective health across the full progression**, while still keeping characters vulnerable enough to become underdogs.


# 2. Core Resolution

Whenever a creature attempts something with an uncertain outcome, the game normally uses a **Threshold Test**.

There are three principal forms:

- Checks
    
- Saves
    
- Strikes
    

All use the same general logic:

1. Roll the appropriate die or dice.
    
2. Add applicable bonuses.
    
3. Compare the result to a Difficulty Total (DT) or Defense.
    
4. Determine the degree of success.
    

## Degrees

|Degree|Requirement|General Meaning|
|---|---|---|
|**Miss**|Total < DT|Failure; no effect|
|**Minor**|Total ≥ DT|Partial success, glancing result, success at a cost|
|**Moderate**|Total ≥ 2× DT|Clean success|
|**Major**|Total ≥ 3× DT|Exceptional or devastating result|

For Strikes, the target's relevant Defense replaces DT.

The game's four-degree structure is intended to be reused extensively rather than replaced with binary pass/fail procedures.

---

# 3. Weal and Woe

**Weal** represents positive circumstances/advantages surrounding your roll, and it shifts the degree up by one: Miss → Minor → Moderate → Major.  

**Woe** represents negative circumstances/disadvantages surrounding your roll, and it shifts the degree down by one: Major → Moderate→ Minor → Miss.

Weal and Woe cancel each other one-for-one. They never stack, and nothing can rise above Major or fall below Miss.

# 4. Training

Training is an additional bonus applied to qualifying Threshold Tests.

Current values:

- **Trained:** +1
    
- **Expert:** +3

Training may come from:

- class features;
    
- background;
    
- other character options;
    
- GM judgment where appropriate.

The small size of these bonuses is intentional. A +1 or +3 is significant on the game's resolution system.


# Ability Checks

When a creature takes an action interacting with the world, and the result of that action is unsure, the GM will call for a Ability Check, or Check.

When a creature makes a Check, they roll **1d20**, and then add a relevant ability modifier as well as training.
Before making a Check, a player may also describe one way in which they are using the world around them to aid their roll, adding 1d4 to the total.

There are two types of Checks, **Binary**, and **Graded**

In a **Binary** Check, rolling Moderate or Major succeeds, whereas rolling Miss or Minor fails.
In a **Graded** Check, your degree of success effects what kind of result you get more directly. Rolling a Miss fails. Minor fails, or succeeds with a complication. Moderate succeeds cleanly, and rolling Major succeeds exceptionally.

Typical DTs:

| DT  | Difficulty |
| --- | ---------- |
| 3   | Trivial    |
| 5   | Easy       |
| 8   | Standard   |
| 7   | Hard       |
| 8   | Very Hard  |
| 10  | Heroic     |

---

## Saving Throws

The defender rolls **1d20 + relevant stat** against the DT, which is determined by the attacker's Physical or Mental modifier.

The DT of an effect is either determined by the GM, or the attacker's relevant ability score. Almost every saving throw is Binary, so depending on your roll you will either succeed or fail.

 **1d20 + relevant Ability Modifier + Training**

| Degree       | Outcome |
| ------------ | ------- |
| **Miss**     | Failure |
| **Minor**    | Failure |
| **Moderate** | Success |
| **Major**    | Success |
## Damage

Roll damage and compare the total to the target’s relevant Defense.

| Result       | Damage Category | Points Applied |
| ------------ | --------------- | -------------- |
| Total < D    | Miss            | 0 HP           |
| Total ≥ D    | Minor           | 1 HP           |
| Total ≥ 2× D | Moderate        | 2 HP           |
| Total ≥ 3× D | Major           | 3 HP           |
Apply damage to the appropriate pool. Physical damage goes **Stamina → Flesh → Vitality**. Mental damage goes to its own track.

### Binary Checks

- Miss: fail
    
- Minor: fail
    
- Moderate: succeed
    
- Major: succeed
    

### Graded Checks

The degree directly determines the quality of the outcome.

- Miss: failure
    
- Minor: failure or complication
    
- Moderate: clean success
    
- Major: exceptional success
    

## Typical Difficulty Totals

|  DT | Difficulty |
| --: | ---------- |
|   3 | Trivial    |
|   5 | Easy       |
|   6 | Standard   |
|   7 | Hard       |
|   8 | Very Hard  |
|   9 | Heroic     |


---

### Opposed Checks

A Save is generally rolled by the defender.

The defender rolls:

> **1d20 + relevant Ability Modifier

against a DT determined by the effect.

The DT is generally the attacker's relevant Ability Modifier.

Most Saves are Binary:

|Degree|Result|
|---|---|
|Miss|Failure|
|Minor|Failure|
|Moderate|Success|
|Major|Success|

Different effects can call for different abilities or defenses.

# 7. Strikes

A Strike uses the attacker's **damage roll** as its Threshold Test.

The attacker rolls the Strike's damage dice and compares the result with the target's relevant Defense.

Current physical Strike structure:

|Damage Roll|Degree|Damage|
|---|---|--:|
|Total < Defense|Miss|0 HP|
|Total ≥ Defense|Minor|1 HP|
|Total ≥ 2× Defense|Moderate|2 HP|
|Total ≥ 3× Defense|Major|3 HP|

The relevant Defense may be:

- Physical Defense (PD)
    
- Mental Defense (MD)


---

# 8. Opposed Checks

When two creatures directly oppose one another:

- both roll 1d20 + bonuses;
    
- the higher result wins;
    
- ties are rolled again.
    

When two creatures oppose each other, both roll **1d20 + bonuses**. The higher total wins. If creatures tie then creatures roll again.

---

# 9. Combat Structure

Combat is organized into **party and enemy groups**, rather than individual initiative order.

At the beginning of a session, players are divided into:

- Group A
    
- Group B
    

A simple assignment method is going clockwise around the table. If there is an odd number of players, the middle player goes into Group B.

The GM divides enemies into:

- Monster Group A
    
- Monster Group B
    

## Turn Order

The side that initiated the conflict acts first.

The general sequence is:

> Friendly Group A → Enemy Group A → Friendly Group B → Enemy Group B

or the equivalent sequence depending on which side initiated.

The intention is that **groups function as tactical units** and players can coordinate with one another within their group's turn.

## Actions

A creature normally begins its turn with:

- **2 Actions**
    
- **1 Reaction**

The Action economy is intended to be simple and compact.

Reactions are a major source of tactical interaction and allow creatures to respond to movement, attacks, positioning, and other events.

---

# Ability scores

### Might (MIG)

Might represents **physical power, bodily resilience, and sustained exertion**. It governs what a character can accomplish through strength, conditioning, and the ability to endure physically demanding circumstances.

### Agility (AGI)

Agility represents **physical precision, coordination, and rapid bodily control**. It governs careful movement, balance, manual Agility, stealth, and quick physical reactions.

### Instinct (INS)

Instinct represents **immediate perception, intuition, and awareness of living situations**. It governs noticing what is happening, sensing danger, reading people, and reacting based on experience without needing to consciously reason everything out.

### Presence (PRE)

Presence represents **social force and the ability to affect other people**. It governs convincing, deceiving, intimidating, entertaining, inspiring, and otherwise shaping how others respond to the character.

### Acumen (ACU)

Acumen represents **knowledge, comprehension, and deliberate reasoning**. It governs recalling information, interpreting evidence, understanding systems, applying learned knowledge, and figuring out why something is happening.

# 10. Distance

Mordschlag uses broad spatial categories rather than requiring constant exact measurement.

|Distance|Range|
|---|--:|
|**Adjacent**|1 m|
|**Close**|3 m|
|**Near**|6 m|
|**Far**|12 m|
|**Distant**|30 m|

These categories are intended to make positioning meaningful while avoiding excessive grid precision.

---

# 11. Strain

**Strain** is the general limited-use resource used for abilities that are intended to be usable only a few times per day.

A default creature has **15 Strain**.

Strain is shared conceptually across:

- magical scaling;
    
- certain perks;
    
- powerful reactions;
    
- other limited-use features.

A perk does not necessarily need to cost Strain.

---

# 12. Physical Health

Physical damage is applied through three layers:

> **Stamina → Flesh → Vitality**

These represent qualitatively different kinds of harm.

## Stamina

Current PC baseline:

> **10 Stamina**

Stamina represents:

- dodging;
    
- parrying;
    
- rolling;
    
- twisting away;
    
- minor scrapes;
    
- exhausting effort;
    
- threats that do not become lasting injuries.
    

A creature who:

- is unaware of the threat, or
    
- is entirely unable to defend itself

cannot use Stamina to absorb the damage. The damage instead goes directly to Vitality.

All creatures regain 1 Stamina per minute when out of combat

## Flesh

Flesh represents real bodily harm that has not yet produced the severe impairment associated with Vitality damage.

Unless another rule says otherwise, an effect that damages Vitality removes Flesh first.

Flesh does not impose the penalties associated with missing Vitality.

Frontline-oriented characters may have additional Flesh.

## Vitality

Current starting PC baseline:

> **4 Vitality**

Vitality represents serious bodily injury:

- deep cuts;
    
- broken bones;
    
- punctured organs;
    
- internal bleeding;
    
- other significant wounds.
    

For every point of Vitality a creature is missing:

> **-1 to Speed and all rolls**

This creates a self-reinforcing injury system where serious wounds reduce the creature's ability to continue fighting effectively.

---

# 13. Physical Damage Types

Current physical damage types include:

| Name     |
| -------- |
| Blunt    |
| Slash    |
| Pierce   |
| Acid     |
| Cold     |
| Burn     |
| Volt     |
| Toxic    |
| Necrotic |
| Radiant  |
| Force    |
# 14. Mental Health

Current working baseline:

> **9 Mental Health**

Mental Defense (MD) is the creature's Mental Modifier (highest mental ability score)

Mental health represents:

- psychological strain;
    
- shock;
    
- stress;
    
- persistent pain;
    
- psychic assault;
    
- emotional deterioration;
    
- supernatural mental pressure.
    

## Mental States

The current concept uses four broad states:

- Fine
    
- Irate
    
- Distressed
    
- Miserable
    

These states correspond to increasing penalties to Mental Saves and Checks.

Current draft:

- Irate: -1
    
- Distressed: -2
    
- Miserable: -3


---

# 15. Mental Damage Types

Current mental damage types include:

| Name   | Persistent wounds                  |
| ------ | ---------------------------------- |
| Pain   | Persistent wounds                  |
| Numb   | Psychic assaults, the unfathomable |
| Stress | Extreme circumstances, fatigue     |

These can interact differently with Mental Health depending on their individual effects.

## Pain

When a creature takes Vitality damage, it also suffers Pain damage.

Current rule:

> **1d20 Pain damage per point of Vitality removed.**

Pain represents the psychological and neurological impact of serious bodily injury.

The precise interaction between Pain damage and the Mental Health track should be retained consistently throughout future content.

---

# 17. Dying

When a creature reaches **0 Vitality**:

- it is incapacitated;
    
- it can only crawl;
    
- it will die after approximately 10 rounds unless stabilized.
    

## Stabilize

A creature can be stabilized by:

> **2 Actions + successful DT 5 Medicine Check**

A stabilized creature no longer dies after the normal countdown.


---

# 18. Blocked Wounds and Medical Recovery

Vitality damage can sometimes create a **blocked wound**.

A blocked Vitality point cannot naturally recover until the blockage is removed.

A blocked wound can be treated by:

> successful DT 2 Medicine Check using Healer's Tools.

Treating the wound inflicts **1d12 Pain damage**.

This gives mundane medicine a meaningful place in recovery.

---

# 19. Rest

Rest is a collective party-level mechanic.

All members of the party share the result of a Rest Test unless a feature specifically says otherwise.

The quality of rest depends on:

- time;
    
- sleeping conditions;
    
- shelter;
    
- food;
    
- company;
    
- party Recreation;
    
- other circumstances.
    

## Rest Test

The party rolls a **pool of dice** and adds all results.

Current **Rest Test DT: 7**.

|Degree|Total|Rest|
|---|--:|---|
|**Miss**|< 7|Poor Rest|
|**Minor**|7–13|Minor Rest|
|**Moderate**|14–20|Moderate Rest|
|**Major**|21+|Major Rest|

## Time Dice

Current rest progression:

|Rest Time|Number of Time Dice|
|---|--:|
|1 hour|2|
|4 hours|3|
|7 hours|4|
|10 hours|5|
|13 hours|6|
|16 hours|7|

The quality of the resting location determines the die used for every Time Die.

| Quality   | Time Die | Example     |
| --------- | -------- | ----------- |
| **Awful** | d2       | Sewers      |
| **Poor**  | d4       | Undergrowth |
| **Fine**  | d6       | Bedroll     |
| **Nice**  | d8       | Cot         |
| **Good**  | d10      | Made bed    |
| **Great** | d12      | Fancy room  |

Example:

> 7 hours of rest in Good conditions = **4d8** before other contributions.

The intended pacing is approximately:

- short rest → potentially Minor;
    
- ordinary overnight rest → usually Moderate;
    
- very long/high-quality rest → increasingly likely to become Major.
    

## Rest Design Philosophy

Time is intended to be the most reliable source of improvement.

Resting in a good location should matter mechanically.

The system deliberately gives players a reason to seek:

- good beds;
    
- safe shelters;
    
- food;
    
- comfortable rooms;
    
- taverns;
    
- campsites.
    

This is meant to make the fictional quality of the party's rest mechanically relevant.



| Rest       | Effect                                                      |
| ---------- | ----------------------------------------------------------- |
| Miss       | Restore All Stamina, 1 Strain, 1 Mental                     |
| Minor      | Restore all Stamina, Flesh, 5 Strain, 2 Mental              |
| Moderate   | Restore all Stamina, Flesh, 10 Strain, 5 Mental, 2 Vitality |
| Major Rest | Restore all Hit Points and Strain                           |
# 20. Recreation and Downtime

Recreation is intended to be a party-level progression feature.

The current concept is that after the party has rested for at least **4 hours**, characters may perform downtime activities.

Current activities include:

- Cook
    
- Director
    
- Crafting
    
- Mentorship
    
- Praying


Other downtime actions may be added later.

## Cook

A character may serve as the Cook if they have:

- proficiency with Cooking Tools;
    
- appropriate ingredients;
    
- a place to prepare food.
    

The Cook makes:

> **DT 7 Threshold Test using their Mental modifier**

The result adds a die to the Rest Pool:

|Result|Rest Die|
|---|--:|
|Miss|—|
|Minor|d2|
|Moderate|d4|
|Major|d6|

## Director

A character may serve as the Director if they have proficiency in:

- Performance, or
    
- Persuasion.
    

The Director also makes:

> **DT 7 Threshold Test using their Mental modifier**

The result adds:

|Result|Rest Die|
|---|--:|
|Miss|—|
|Minor|d2|
|Moderate|d4|
|Major|d6|

The Director represents activities such as:

- music;
    
- stories;
    
- speeches;
    
- conversation;
    
- entertainment;
    
- maintaining morale.
    

## Crafting

Characters can spend downtime crafting or repairing according to the crafting rules.

## Mentorship

A Mentor may teach **one lesson to one Student**.

The detailed Mentorship rules already exist separately and should not be rewritten in the Rest rules.

## Praying

A character can pray to a chosen god.

If the character received no Divine Favor from that god on the previous day, praying grants:

> **+1 Divine Favor**

The detailed Divine Favor system is managed collectively and exists elsewhere.

---

# 21. Party Progression

Mordschlag includes a separate concept of **party-level progression**.

Not all progression belongs to individual characters.

The party can unlock systems that are collectively managed.

Current known party-level systems include:

- **Recreation**
    
- **Mentorship**
    
- **Divine Favor**


Recreation is currently intended to become available at approximately **Level 2**.

Mentorship and Divine Favor are associated with later party-progression milestones, currently around the early/mid progression.


---

# 22. Spellcasting

Magic is designed as a modular system rather than a list of completely independent spells.

A spell can be understood as:

> **Formula + Delivery + Strain Investment + Duration**

## Base Spell Rules

By default:

- a spell with a damage base deals **2d6 damage**;
    
- a spell with an effect applies that effect;
    
- additional Strain can increase damage;
    
- additional Strain can modify area, length, radius, targets, or other delivery characteristics.

- A spell can use 2 Strain for every action taken to cast it

A spell formula example is 
**Wave** *Blunt* *MIT* Targets are pushed 2m away from the origin and fall Prone.

### Damage Scaling

Every:

> **2 Strain = +1d6 spell damage**

The caster may spend additional Strain when desired to increase damage. This is very much up to later scrutiny and will change

## Area Origins

An area spell must originate from:

> a point the caster can see within **12 meters**.

A creature suffers an area's effects when:

- it enters the area; or
    
- it starts its turn in the area.


---

# 23. Spell Delivery

Current standard Delivery types:

|Delivery|Base Cost|Scaling|
|---|--:|---|
|Aura|2|+1 Strain per additional 1m radius|
|Cone|2|+2 Strain per additional 1m length|
|Cube|1|+1 Strain per additional 1m cube|
|Imbue|0|+2 Strain per additional target|
|Line|1|+1 Strain per additional 2m length|
|Bolt|0|+3 Strain per additional target|
|Sphere|2|+1 Strain per additional 1m radius|
|Touch|0|No listed scaling|

### Aura

A **2m-radius** area centered on the caster.

The caster may choose to be unaffected.

### Cone

A **3m cone** extending in front of the caster.

### Cube

A **1m cube**.

### Imbue

Targets a weapon held by a willing creature within 12m.

### Line

A **1m-wide, 4m-long, 2m-tall** area extending from the caster.

### Bolt

Targets a creature within 12m.

### Sphere

A **2m-radius sphere** centered on a visible point.

### Touch

Targets:

- the caster; or
    
- a creature the caster can touch within 1m.
    

The latest standardized list does not currently include the previously proposed Glyph delivery.

---

# 24. Spell Duration and Focus

A spell normally lasts until the **start of the caster's next turn**.

The caster may extend it one additional turn by spending 1 Strain to maintain Focus.

Taking either:

- **Major damage**, or
    
- **Moderate Mental damage**


breaks the spell's Focus.

---

# 26. Conditions

Conditions are intentionally compact and generally modify the existing resolution system rather than adding entirely new subsystems.

## Blind

- Cannot see.
    
- Strikes against the creature have Weal.
    
- The creature's Strikes have Woe.
    

## Charmed

- Cannot willingly harm the charmer.
    
- Charmer has Weal on Presence Checks against the creature.
    

## Grappled

- Speed = 0.
    

## Exhausted

- -1 to all rolls and Speed per level.
    
- A creature dies at 10 levels of Exhaustion.
    

## Frightened

- Takes 1d12 Stress damage at turn start.
    
- Woe on Checks and Strikes.
    
- Cannot walk toward the source of fear.
    

## Incapacitated

- Cannot Focus.
    
- Cannot take Actions or Reactions.
    
- Automatically fails Might and Agility Checks.
    
- Strikes against it have Weal.
    

## Poisoned

- Woe on Checks and Strikes.
    

## Prone

- Woe on Strikes.
    
- Ranged Strikes against it have Woe.
    
- Melee Strikes against it have Weal.
    
- Standing costs 2 Speed.
    

## Restrained

- Speed = 0.
    
- Strikes against it have Weal.
    
- Its own Strikes have Woe.
    

## Slow

- -1 Speed.
    
- -1 Reaction.
    

---

# 27. Stances

A PC begins with **one Stance** and gains another approximately every four levels.

Current stance access points:

> Levels **1, 4, 8, 12, 16, 20** receive a Stance or New Spell.

Stances are intended to represent **current tactical posture**, not permanent character identity.

They answer:

> **“How am I fighting right now?”**

---

# 28. Example Stances

### Overlord

*This High Elven practice is generally attributed to shortbow, but the same general principles can be used in polearm techniques. -Orvin Gulmed "Learnings From Other Lands"*

**Suppress** {R*} When a creature you can see strikes another creature, you can use your reaction to strike against the attacker with a 1d8 penalty. This strike also reduces the attacker's strike by the roll on the d8.

**Pin** When any of your strikes do at least Minor damage, the target’s speed is reduced by 1 meter until the end of its next turn.

### Warrior

*A martial pose devised by Orcs in order to cut down and defend oneself from hordes of undead —Works just as well against Goblins, Imps, and other rabble. -Orvin Gulmed "Learnings From Other Lands"*

**Sweep Strike** Once per turn when you strike an enemy, you can also strike an adjacent enemy within range.

**No One Leaves** {R*} When a creature that you can see leaves your reach, you can use your reaction to activate this feat and  strike that creature. This strike occurs immediately before the creature leaves your reach.

### Mixed

*The term "Ranger" originally refers to a company of partisans during the Annexation of Rênge  who made frequent exploit of this fighting style.*

**Fluidity** Making a Ranged strike adds 1d4 to your next Melee strike, making a Melee strike adds 1d4 to your next Ranged strike. These d4 persist until the start of your next turn.

**Skirt Shot** When you take the Dash action, you can strike as part of that action, this strike has Woe.


---

# 29. Progression

Mordschlag uses a 20-level progression.

The current general progression template is:

| Level | Boon Features                   | Class Features     |
| ----- | ------------------------------- | ------------------ |
| 1     | Stance / 4 Spells, l Minor perk | Core Class Feature |
| 2     | Moderate Perk                   | Secondary Feature  |
| 3     | Major Perk                      | —                  |
| 4     | Stance / New Spell              | —                  |
| 5     | 2 Minor Perks                   | Core Upgrade       |
| 6     | +1 Stamina                      | Secondary Upgrade  |
| 7     | Major Perk                      | —                  |
| 8     | Stance / New Spell              | —                  |
| 9     | Moderate Perk                   | —                  |
| 10    | +1 Flesh                        | Core Upgrade       |
| 11    | 2 Minor Perks                   | Secondary Upgrade  |
| 12    | Stance / New Spell              | —                  |
| 13    | Major Perk                      | —                  |
| 14    | +1 Stamina                      | Core Upgrade       |
| 15    | 2 Minor Perks                   | Secondary Upgrade  |
| 16    | Stance / New Spell              | —                  |
| 17    | Moderate Perk                   | Core Upgrade       |
| 18    | +1 Stamina                      | —                  |
| 19    | Major Perk                      | —                  |
| 20    | Stance / New Spell              | Capstone           |

The exact placement of individual class features may change.

The important structural idea is:

- no dead levels;
    
- frequent choices;
    
- limited numerical growth;
    
- regular stance/spell expansion;
    
- recurring specialization through Major Perks.
    

---

# 30. Major Perks and Subclasses

Major Perks are effectively the game's **subclass progression**.

A character chooses a Major Perk at:

> **Level 3**

and later receives further features from that same Major Perk path at:

> **Levels 7, 13, and 19**

Thus, a Major Perk consists of four stages of specialization.

The conceptual progression is:

> Level 3 — foundation  
> Level 7 — development  
> Level 13 — mastery  
> Level 19 — apex

Major Perk design is currently the responsibility of the primary designer and should not be automatically generated or altered when creating Minor or Moderate perks unless specifically requested.

---

# 31. Minor and Moderate Perks

Minor and Moderate Perks are the primary sources of individual customization outside class features and Major Perks.

The current progression gives:

### Moderate Perks

- Level 2
    
- Level 9
    
- Level 17


### Minor Perks

- Level 5
    
- Level 11
    
- Level 15

might have to be more common.

## Minor

A Minor Perk generally:

- adds a narrow capability;
    
- provides a small tactical trick;
    
- solves a specific situational problem;
    
- grants a useful fictional permission;
    
- or modifies a relatively narrow existing interaction.
    

A Minor Perk should usually do one clear thing.

Examples:

- Heavy Blows
    
- Acrobatic Recovery
    
- Nod
    
- Pack Mule
    
- Heliomancy
    
- Wayfinder
    

## Moderate

A Moderate Perk generally:

- creates a significant tactical option;
    
- changes action economy;
    
- substantially modifies positioning;
    
- grants powerful narrative utility;
    
- changes how a spell or combat mechanic behaves;
    
- or creates a new reliable way to approach situations.
    

Examples:

- Evasion
    
- Cover Fire
    
- Hands of the Dead
    
- Deduce
    
- Fleeting
    
- Reactive Warping
    
- Take It and Leave It
    

Moderate does not necessarily mean “more numbers.” A powerful new interaction can be Moderate without providing a numerical bonus.

---

# 32. Current Perk Taxonomy

The intended perk metadata system currently uses several categories.

## Degree

- [Minor]
    
- [Moderate]
    
- [Major]


## Access

- [General]
    
- [Class: X]
    
- [Stance: X]
    
- [Training: X]
    

## Function

- [Combat]
    
- [Social]
    
- [Exploration]
    
- [Utility]
    
- [Magic]
    
- [Ritual]
    

A perk can have multiple Function tags.

## Type

Current conceptual categories include:

- [Passive]
    
- [Action]
    
- [Reaction]
    
- potentially Free/triggered effects
    

**[Unresolved]** Final activation terminology and formatting have not yet been locked down.

## Prerequisites

Current conceptual prerequisites include:

- [Level]
    
- [Ability]
    
- [Training]
    
- [Stance: X]
    
- [Perk]


Additional tags such as [Weapon: X] or [Spell: X] have been proposed but are not yet formally locked.

---

# 33. Perk Activation and Cost Philosophy

The current shorthand used in drafts includes:

- **{A}** — 1 Action
    
- **{AA}** — 2 Actions
    
- **{AAA}** — an Action on one turn, followed by 2 Actions on a later turn
    
- **{R}** — Reaction
    
- **{F}** — Free/timing-independent activation
    
- **{P}** — Passive

This shorthand is provisional.

The preferred conceptual distinction is:

- activation/action economy;
    
- trigger;
    
- requirement;
    
- cost;
    
- effect.
    

Strain should be listed separately as a **Cost** rather than being hidden inside activation syntax.

Example conceptual structure:

> **Activation:** Reaction  
> **Trigger:** You are targeted by a Strike.  
> **Cost:** 1 Strain.  
> **Effect:** ...

Requirements and triggers should remain distinct.

A requirement answers:

> **What must be true when I use this?**

A trigger answers:

> **What event allows me to use it?**

---

# 34. Important Perk Design Principles

When creating future perks:

### Prefer new decisions over flat bonuses.

Prefer:

> “You can reposition when X occurs.”

over:

> “You gain +1 whenever X occurs.”

### Do not automatically assign Strain to every perk.

Strain should represent a meaningful tactical expenditure.

A passive capability can be powerful without consuming Strain.

### Use existing systems.

A new perk should ideally interact with:

- Actions;
    
- Reactions;
    
- Stamina;
    
- Strain;
    
- Weal/Woe;
    
- positioning;
    
- existing spell rules;
    
- existing conditions;
    
- existing defenses.
    

Avoid introducing a new subsystem unless there is a strong reason.

---

# 35. Spell/Perk Interaction Philosophy

Perks can modify spells, but such perks should generally feel like:

> **a character learning a new way to exploit an existing spell**

rather than:

> **a second spell list hidden inside the perk system.**

Examples:

- Hands of the Dead modifies Wither.
    
- Intensifier modifies Focused spells.
    
- Violent Evocation modifies specific area damage spells.
    
- Gale Matrix modifies Gale.
    
- Reactive Warping interacts with Door.


Spell-specific prerequisites may eventually become a standard mechanism.

# 36. Tactical Design Priorities

A new combat mechanic should be evaluated according to:

1. What position does it make desirable?
    
2. What future action does it encourage players to anticipate?
    
3. Does it create a meaningful choice about Actions or Reactions?
    
4. Does it interact with allies?
    
5. Does it create a meaningful reason to spend or conserve Stamina or Strain?
    
6. Does it reward understanding of the battlefield?
    
7. Does it create a recognizable fictional consequence?
    

The ideal combat ability is often one that makes the player think:

> “If I do X now, my opponent is forced into Y next.”

rather than:

> “I have a larger attack bonus.”

---

# 37. Typical Resource Philosophy

Mordschlag uses a small number of major resources:

### Health

- Stamina
    
- Flesh
    
- Vitality
    
- Mental Health

### Limited-use resources

- Strain
    
- Reactions
    

### Tactical position

- Speed
    
- Distance categories
    
- adjacency
    
- reach
    
- zones/areas
    

These should interact rather than becoming isolated subsystems.

---

# 38. Desired Power Curve

Character advancement should increase:

- options;
    
- reliability;
    
- specialization;
    
- tactical depth;
    
- fictional competence;
    

more than it increases raw numerical magnitude.

The character at level 20 should be meaningfully better than the character at level 1, but should still inhabit the same general physical and narrative world.

Avoid:

- enormous HP inflation;
    
- huge attack bonuses;
    
- dozens of permanent numerical modifiers;
    
- abilities that invalidate ordinary threats;
    
- mechanics that make lower-level enemies completely irrelevant solely because of level scaling.
    

The intended fantasy is:

> **exceptional people operating under recognizable physical and fictional constraints.**

---

# 39. World and Aesthetic Assumptions

Mordschlag's intended world and tone support:

- grounded violence;
    
- meaningful wounds;
    
- scarce or costly extraordinary power;
    
- supernatural elements without making everything fantastical;
    
- tactical terrain;
    
- social consequences;
    
- practical travel;
    
- mundane expertise;
    
- strong party relationships.
    

The game should support stories where:

- a tavern bed genuinely matters;
    
- a good meal improves the party's readiness;
    
- a skilled doctor is valuable;
    
- being knocked down matters;
    
- a wound can disable a veteran;
    
- a superior tactical position can be worth more than raw statistics;
    
- magic changes the battlefield without turning every character into a demigod.
    

---

# 40. Current Design Areas That Are Not Final

An LLM generating Mordschlag content should treat the following as **open design questions** rather than established facts:

## Defenses

- Baseline mortal PD currently starts at **2 + AGI**.


## Rest Recovery

The current Rest Test framework is established as a working prototype, but the exact recovery associated with Miss/Minor/Moderate/Major Rest still needs to be reconciled with the latest time progression.

## Recreation

The core Cook/Director mechanic is established as a working rule.

The exact number of downtime activities available during longer rests and the eventual scope of Recreation perks remain open.

## Mental Breakpoints

The 9-point Mental track and -1/-2/-3 states are established conceptually, but exact breakpoint language still needs to be standardized.

## Perk Formatting

The final printed syntax for:

- Strain costs;
    
- triggers;
    
- actions;
    
- free activations;
    
- stance requirements;
    
- spell prerequisites;
    

is not finalized.

## Major Perks

Major Perks/subclasses are designer-controlled and should not be assumed to follow ordinary Minor/Moderate perk design.

## Exact Health Curve

The long-term target is approximately 4× effective health across 20 levels, but the final numerical progression has not yet been fully established.

## Spell Balance

Spell formulas and delivery rules are a working system and require extensive playtesting, especially around:

- area size;
    
- repeated area triggering;
    
- condition duration;
    
- Strain efficiency;
    
- multi-target Bolt;
    
- Focus;
    
- battlefield control.
    

---

# 41. Rules Interpretation Priorities for Future Design

When designing new Mordschlag content, prioritize interpretation in this order:

### 1. Fictional plausibility

Ask:

> What is actually happening in the world?

### 2. Existing system vocabulary

Prefer:

- Threshold Tests;
    
- Weal/Woe;
    
- Actions;
    
- Reactions;
    
- Stamina;
    
- Strain;
    
- existing conditions;
    
- existing distance categories;
    

over a bespoke mechanism.

### 3. Tactical interaction

Ask:

> What decision does the rule create?

### 4. Party interaction

Ask:

> Does this give allies reasons to coordinate?

### 5. Numerical scaling

Only after the previous questions should raw numerical bonuses be considered.

---

# 42. Content-Creation Checklist for an LLM

When generating a new Mordschlag rule, perk, spell, monster, class feature, or subsystem, the model should ask:

### Fiction

- What does this look like in the world?
    
- Does the mechanic match the fictional event?
    

### Resolution

- Which Threshold Test does it use?
    
- What is the DT or Defense?
    
- Does it use Weal/Woe naturally?
    

### Action Economy

- Does it use an Action?
    
- Two Actions?
    
- Reaction?
    
- Free trigger?
    
- Turn Start Action?
    

### Resources

- Does it consume Stamina?
    
- Strain?
    
- A spell's Focus?
    
- A Reaction?
    

### Positioning

- Does distance matter?
    
- Does adjacency matter?
    
- Does movement matter?
    
- Does the effect create or exploit an area?
    

### Power

- Is this mostly horizontal or vertical?
    
- Is the numerical bonus small enough for Mordschlag?
    
- Is the effect Minor or Moderate in scope?
    
- Is it accidentally Major/subclass-sized?
    

### Party

- Can allies interact with it?
    
- Does it create useful coordination?
    

### Existing Rules

- Can an existing condition, damage type, or mechanic express the effect?
    
- Is a new rule actually necessary?
    

### Complexity

- Can the player understand it quickly?
    
- Does resolution require unusual bookkeeping?
    
- Can the rule be stated in a few sentences?
    
# 43. Rules Language and Formatting Standards

All new and revised Mordschlag content should follow the language and formatting conventions described here. The purpose is to make rules easy to read, consistent across the game, and precise enough that players and GMs can understand how an ability works without having to infer its intended behavior.

These conventions are intended to standardize the presentation of rules, not to make every rule sound identical. Mordschlag should retain a conversational writing style wherever possible. Mechanics should be explained in natural language, with lists and structured fields used when they make a rule easier to reference or resolve.

## General Writing Style

Prefer clear, direct sentences that describe what a character can do and what happens as a result. A rule should explain its mechanical effect without unnecessary repetition, while retaining enough context for the reader to understand its purpose.

Prefer familiar terminology already established by the system over inventing new terminology for an existing mechanic. A new ability should reuse Threshold Tests, Weal and Woe, Actions, Reactions, Strain, Stamina, existing conditions, and other established systems wherever possible.

Requirements, triggers, costs, and effects should be kept distinct. A requirement describes what must be true to use an ability. A trigger describes the event that allows its use. An activation describes the action or timing required. A cost describes what the character must expend. An effect describes what happens when the ability is used.

Not every feature needs to present these elements as separate labels. A short passive feature may be clearest as a single sentence. A complex Reaction or limited-use ability may benefit from explicitly separating its trigger, cost, and effect.

## Terminology and Capitalization

Use established game terms consistently. When referring to a defined mechanic, use its established name rather than an informal substitute.

Capitalize formal resolution mechanics such as **Threshold Test**, **Check**, **Save**, **Strike**, and **Rest Test** when referring to those specific mechanics. Capitalize **Action** and **Reaction** when referring to the defined action types. Use **Weal** and **Woe** consistently, including when describing their application to a roll.

Capitalize the names of abilities, resources, and conditions when referring to their formal game-defined forms. These include **Stamina**, **Flesh**, **Vitality**, **Mental Health**, **Strain**, **Focus**, and conditions such as **Irate**, **Distressed**, and **Miserable**.

Use ordinary lowercase wording when a term is not being used as a specific game mechanic. Capitalization should help distinguish defined rules concepts from ordinary prose, not serve as general emphasis.

Use the same name for the same mechanic throughout a document. Do not alternate between expressions such as "Technique die," "Technique Dice," and "Technique resource" when their intended meanings are identical. If a distinction exists between these concepts, define it explicitly.

When an abbreviation is necessary, introduce the full term first. For example, write "Physical Defense (PD)" before using "PD" in the remainder of the relevant section. Use the established abbreviation consistently thereafter.

## Numbers, Units, and Resources

Use numerals for mechanical quantities, including ability costs, ranges, durations, resource changes, damage values, and numbers of targets. Write distances with a space between the number and the unit, such as **12 m**. Use consistent notation for dice, such as **1d6**, **2d4**, and **1d10**.

When describing resource expenditure or recovery, name the resource and state the change directly. Prefer "spend 2 Strain," "restore 1 Vitality," or "lose 1 Mental Health" over ambiguous expressions such as "pay 2 points" or "lose 1 HP of Mental Health."

Distinguish direct changes to a resource from damage that is resolved through the damage rules. If an effect inflicts damage, use the appropriate damage terminology. If an effect directly reduces a resource, say so explicitly. Do not assume that losing a resource point and taking damage are interchangeable.

When a resource change depends on a roll, specify whether the change occurs before or after the roll's result is determined. If the timing affects a Strike's damage degree, a Defense comparison, or a condition, explain the interaction directly.

## Actions, Triggers, and Timing

Use **Action** and **Reaction** consistently when referring to the action economy. State the required activation explicitly when it matters. For example, "As an Action, you can..." or "When a creature you can see leaves your reach, you can use your Reaction to..."

Distinguish between an action's activation and its trigger. A Reaction should identify the event that permits its use. A feature that activates at the start of a turn should say so explicitly rather than relying on a general phrase such as "on your turn."

Specify timing whenever an effect can expire, be used again, or interrupt another event. Phrases such as "until the start of your next turn," "until the end of its next turn," "once per turn," and "once per Major Rest" should be used deliberately and consistently.

If an effect lasts for a duration, state when that duration begins and ends whenever the distinction matters. If an ability grants multiple uses, dice, or actions, explain whether they may be used together or separately and whether they share any normal usage restrictions.

Do not use vague timing expressions such as "at any time" when the rules permit a more precise description. Specify whether an ability can be used on another creature's turn, during an existing roll, in response to an event, or only during the character's own turn.

## Tests, Rolls, and Degrees of Success

Distinguish between modifying a roll's numerical total and changing its degree of success. These are not interchangeable effects.

When a feature adds or subtracts a die, bonus, or penalty, state which roll or total it modifies. If the effect changes a Strike's damage, specify whether the modification occurs before the target's Defense is compared against the result.

When a feature changes a degree of success, state whether it changes the degree directly or modifies the underlying total. Do not leave the distinction implicit.

Use the established terms **Miss**, **Minor**, **Moderate**, and **Major** when referring to the four degrees of success. Apply the existing Weal and Woe rules unless a feature explicitly states that it modifies them.

When using a Defense or Difficulty Total, identify the relevant value. For example, use "the target's Physical Defense (PD)" rather than an ambiguous phrase such as "the enemy's defense" when the particular Defense matters.

Examples should demonstrate the general rule without accidentally narrowing or contradicting it. If a result means a target takes at least 1 HP of damage, the example should not imply that the target necessarily takes exactly 1 HP when a higher degree is achieved.

## Targets, Ranges, and Effects

State the target, range, and relevant restrictions of an ability whenever they affect its use. Prefer formulations such as "choose up to 4 creatures you can see within 12 m" over shorter phrases that leave the target count or line of sight ambiguous.

Use "target" when discussing the creature or object selected by an ability. Use "creature" when the effect can apply to any creature, regardless of allegiance. Use "ally," "enemy," or "hostile creature" only when the distinction is mechanically relevant.

If an ability affects multiple targets, clarify whether its effect applies independently to each target or collectively to the group. If an area or effect continues to operate over time, specify when creatures are affected, using the existing spell and condition conventions where applicable.

When a feature replaces a value, state what is replaced and for which resolution. When it grants a bonus, state what receives that bonus. When it grants immunity, state precisely which effects are excluded. Avoid broad phrases such as "magic resistance" unless the term has a defined mechanical meaning.

## Feature Names and Headings

Use the feature name as the heading. Do not append the feature's level to the name unless a document-wide format explicitly requires it. The progression table should communicate when the feature is acquired.

For example, use:

### Technique

rather than:

### Technique: 1

The body of the feature should explain its mechanics. Avoid placing important rules only in the heading, table, or descriptive text if the reader needs them to resolve the ability.

When a feature improves an existing ability, explicitly identify the ability being modified and describe how the new rule changes it. Do not require the reader to compare several disconnected sections to determine whether the new feature replaces, supplements, or removes an earlier benefit.

## Bold, Italics, and Emphasis

Use headings to distinguish sections and features. Feature names do not need to be repeatedly bolded within their own descriptions.

**Bold** is to be used any time a player might need to quickly reference the document. What is the area? Oh its **12m**, what condition does this apply again? **Frightened**.

Use _italics_ primarily for flavor text, quotations, and other descriptive material that is intentionally separated from the mechanical rule. Flavor text may establish a feature's tone, cultural context, or fictional explanation, but it must not introduce mechanical requirements or effects that are absent from the rules text.

Keep mechanical instructions in normal text unless a specific emphasis is needed. Avoid using bold and italics together for ordinary rules, and do not rely on formatting alone to communicate an important distinction.

Tables should be used for information that benefits from direct comparison, such as progression, costs, damage categories, or options. Tables should not replace the explanation of a rule when the reader needs additional context to understand how its entries operate.

## Unresolved Rules and Mechanical Dependencies

A language edit must not silently resolve an unresolved mechanical question. If the intended operation of a feature is uncertain, identify the uncertainty and preserve it for a design decision rather than inventing a rule through wording alone.

When a feature interacts with another system, use that system's established terminology and behavior unless the feature explicitly introduces an exception. If the interaction is not defined, specify what requires a design decision.

Mark provisional or uncertain rules using the established **[Working]**, **[Prototype]**, or **[Unresolved]** conventions where appropriate. Do not present a proposed interpretation as an established rule until it has been accepted.

A final review should verify that the wording is grammatically correct, the timing and resource costs are clear, all referenced mechanics exist, and the examples match the rule as written.

The ultimate goal is for a reader to understand not only what an ability allows a character to do, but also when it can be used, what it costs, what it changes, and how it interacts with the rest of Mordschlag.

# (side notes from the designer)

When writing I like to stay out of bulleted lists, and instead keep a more conversationalist attitude to rule writing.

Ultimately this game draws from a smattering of media, many of the elements in this RPG have a purpose, especially those such as divine favor and the rest system. Like many other RPGs this one aims to represent the players in a fantastical world, and the main way they interact with that world is through killing. While undeniably this system has a focus on combat, the mechanics all should want to instill a sense of life within the players and GM. While the LLM which created this document did fine explaining the mechanics, it is up to you to decide where they all fit into this thematic approach.

Everyone should feel the mortality of the moment in this game, this includes the fear, the companionship, the zealotry, the pain, the hope, and the will to come out on top for those around you. For this reason I am defining this game's genre as "Mortal Fantasy"