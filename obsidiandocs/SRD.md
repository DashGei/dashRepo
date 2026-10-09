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

## Low/Medium Fantasy and Tight Bounded Accuracy

Mordschlag aims for the power level of settings such as:

- _Blue Eye Samurai_
    
- _Game of Thrones_
    
- _The Lord of the Rings_
    

Characters can become exceptional, but should remain physically and narratively recognizable as mortal or mortal-adjacent beings.

Player power should reach roughly the level of Pathfinder characters around level 13 rather than escalating indefinitely toward extremely high heroic fantasy.

Effective survivability is intended to increase only modestly over 20 levels. The current target is approximately **4× effective health across the full progression**, while still keeping characters vulnerable enough to become underdogs.

---

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

**Weal** represents positive circumstances surrounding a roll.

It moves the result up by one degree:

> Miss → Minor → Moderate → Major

**Woe** represents negative circumstances.

It moves the result down by one degree:

> Major → Moderate → Minor → Miss

Weal and Woe cancel one another one-for-one.

They do not stack beyond a single effective shift.

Nothing can rise above Major or fall below Miss.

Weal/Woe is preferred over accumulating many small situational modifiers whenever the circumstance represents a meaningful advantage or disadvantage.

---

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

The small size of these bonuses is intentional. A +1 or +3 is significant on the game's d10-based resolution system.

---

# 5. Ability Checks

When a creature interacts with the world and the result is uncertain, the GM can call for an **Ability Check**.

A Check is:

> **1d10 + relevant Ability Modifier + Training**

Before a Check, the player may describe one way they are using the environment to aid the attempt. When appropriate, this adds **1d4** to the result.

There are two broad kinds of Checks.

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

|DT|Difficulty|
|--:|---|
|1|Trivial|
|2|Easy|
|3|Standard|
|4|Hard|
|6|Very Hard|
|8|Heroic|

---

# 6. Saving Throws

A Save is generally rolled by the defender.

The defender rolls:

> **1d10 + relevant Ability Modifier + applicable Training**

against a DT determined by the effect.

The DT can be established by:

- the attacker;
    
- the spell or feature;
    
- the GM.
    

Most Saves are Binary:

|Degree|Result|
|---|---|
|Miss|Failure|
|Minor|Failure|
|Moderate|Success|
|Major|Success|

Different effects can call for different abilities or defenses.

---

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
    
- Spiritual Defense (SD)
    

## Stamina Override

An attacker may spend **2 Stamina** to turn a Strike that would be a Miss into Minor damage.

This creates an important resource decision:

> Is it worth spending your own short-term endurance to ensure that an attack gets through?

---

# 8. Opposed Checks

When two creatures directly oppose one another:

- both roll 1d10 + bonuses;
    
- the higher result wins;
    
- ties are rolled again.
    

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
    

Strain should generally represent a meaningful choice rather than being a passive tax on using a feature.

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

PCs normally regain **1 Stamina when they end their turn**.

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

- Blunt
    
- Slashing
    
- Piercing
    
- Acid
    
- Cold
    
- Fire
    
- Lightning
    
- Toxic
    
- Necrotic*
    
- Radiant*
    
- Concuss*
    
- Force*
    

An asterisk indicates that the damage type may apply to a different health pool depending on the specific effect.

When a damage type can affect multiple pools, the spell or ability specifies the applicable pool.

If an effect provides a choice between health pools, the attacker chooses one and does not apply the damage to both.

---

# 14. Mental Health

Most creatures have a Mental Health track.

Current working baseline:

> **9 Mental Health**

A standard baseline Mental Defense is currently around **MD 5**, but MD remains open for later balancing.

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
    

**[Unresolved]** Exact breakpoints and final wording for these mental thresholds are not yet fully standardized.

---

# 15. Mental Damage Types

Current mental damage types include:

- Concuss*
    
- Pain
    
- Static
    
- Stress
    

These can interact differently with Mental Health depending on their individual effects.

## Pain

When a creature takes Vitality damage, it also suffers Pain damage.

Current rule:

> **1d12 Pain damage per point of Vitality removed.**

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

> **2 Actions + successful DT 2 Medicine Check**

A stabilized creature no longer dies after the normal countdown.

A creature can stabilize itself by:

> spending 5 or more Stamina as an Action.

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

|Quality|Time Die|Example|
|---|---|---|
|**Awful**|d2|Sewers|
|**Poor**|d4|Undergrowth|
|**Fine**|d6|Bedroll|
|**Good**|d8|Cot|
|**Great**|d10|Made bed|
|**Excellent**|d12|Fancy room|

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

> **DT 5 Threshold Test using their Mental modifier**

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

> **DT 5 Threshold Test using their Mental modifier**

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

- a spell with a damage base deals **1d6 damage**;
    
- a spell with an effect applies that effect;
    
- additional Strain can increase damage;
    
- additional Strain can modify area, length, radius, targets, or other delivery characteristics.

A spell formula example is 
**Wave** *Blunt* *MIT* Targets are pushed 2m away from the origin and fall Prone.

### Damage Scaling

Every:

> **2 Strain = +1d6 spell damage**

The caster may spend additional Strain when desired to increase damage.

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

The caster may extend it one additional turn by using their **Turn Start Action** to maintain Focus.

Taking either:

- **Major damage**, or
    
- **Moderate Mental damage**
    

breaks the spell's Focus.

Focus is intended to be an action-economy and narrative mechanic rather than a separate Concentration mini-game.

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
    

## Drunk

- Resistance to Pain and Stress.
    
- Poisoned.
    
- Woe on Dexterity Saves.
    

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
    
- Automatically fails Might and Dexterity Checks.
    
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

|Level|Boon Features|Class Features|
|---|---|---|
|1|Stance / 4 Spells|Core Class Feature|
|2|Moderate Perk|Secondary Feature|
|3|Major Perk|—|
|4|Stance / New Spell|—|
|5|Minor Perk|Core Upgrade|
|6|+1 Stamina|Secondary Upgrade|
|7|Major Perk|—|
|8|Stance / New Spell|—|
|9|Moderate Perk|—|
|10|+1 Flesh|Core Upgrade|
|11|Minor Perk|Secondary Upgrade|
|12|Stance / New Spell|—|
|13|Major Perk|—|
|14|+1 Stamina|Core Upgrade|
|15|Minor Perk|Secondary Upgrade|
|16|Stance / New Spell|—|
|17|Moderate Perk|Core Upgrade|
|18|+1 Stamina|—|
|19|Major Perk|—|
|20|Stance / New Spell|Capstone|

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
    

The tiers should describe **scope and interaction**, not simply numerical magnitude.

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

### Avoid large bonus dice.

The core system uses a d10 and small Training modifiers. Adding an entire additional d10 is very powerful and should be treated as exceptional.

Weal/Woe is often preferable to huge numerical bonuses.

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

---

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
    
- Spiritual Health
    

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

- Baseline mortal PD currently starts at **2 + DEX**.
    
- MD and SD values are not finalized.
    
- Defense scaling across levels is not finalized.
    

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
    

---

# 43. One-Sentence System Summary

**Mordschlag** is a Mortal Fantasy tabletop RPG about capable people facing dangerous situations through skill, preparation, and tactical thinking. Combat is built around positioning, timing, teamwork, and anticipating what your enemies will do rather than simply having the strongest character build, while the game's wounds, exhaustion, resources, and recovery are designed to make physical consequences matter. Characters grow primarily by learning new techniques, developing specialized fighting styles, and gaining new ways to solve problems rather than becoming vastly more powerful or durable. Outside of combat, the world matters just as much: where you sleep, how you travel, what your party does with its downtime, who helps each other, and how you use the environment can all affect your chances of success. Magic is powerful but constrained, injuries are meaningful, and even experienced characters can still find themselves outmatched—Mordschlag is a fantasy of **becoming exceptionally capable without ever becoming invulnerable**.