I am creating a brand new Heroic TTRPG called Mordschlag, the design principles are the following:

No narrative dissonance - all systems are to be designed so that there is as little separating from the mechanics, and what people actually expect to happen in the table. Systems should encourage players to think about the world in the table.

Ease of entry - the best systems are easy to learn and rewarding to master

Tactical decisions - combat should be about positioning, and thinking ahead, not just your build.

Party Cohesion - the party progresses as a unit, and some systems such as the already finished divine favor system, need to be managed collectively.

Low/medium Fantasy, Tight bounded accuracy - the party should never feel like they are incapable of becoming the underdogs. Player power should cap out where games like pathfinder do at around level 13. As an example, effective health only ever increases by 2x across 20 levels


As an example mechanic which much of the game will be based off of, here is the system's damage resolution mechanic:

## 1. Damage Resolution

### Defense

Instead of armor class, every creature has a Physical, Mental, and Spiritual Defense (PD, MD, SD)

Baseline mortal physical defense (PD) is **2+DEX**.

When a creature rolls damage, the total is compared with the target’s relevant defense.

| Result     | Damage Category | Points Applied |
| ---------- | --------------- | -------------- |
| Total < PD | Miss            | o HP           |
| PDx1       | Minor           | 1 HP           |
| PDx2       | Moderate        | 2 HP           |
| PDx3       | Major           | 3 HP           |
An attacker can convert a Miss into Minor damage by spending 2 Stamina.

### Apply to Health Pools

Physical damage is applied in this order:

> **Stamina →  Flesh → Vitality**

## 2. Physical Health

### Damage Types

An asterisk denotes a damage type that might apply to a different health pool. When this damage type is detailed, it will have a signifier in parathesis to indicate which health pool(s) it will can applied to, i.e. Radiant(P) for Physical Radiant damage. If it lists both, then the attacker chooses which, but never both.

| Name      | Examples         |
| --------- | ---------------- |
| Blunt     | Blunt trauma     |
| Slashing  | Claws, Axes      |
| Piercing  | Stabbing, Teeth  |
| Acid      | Corrosives       |
| Cold      | Frostbite        |
| Fire      | Flames, Scalding |
| Lightning | Shocks           |
| Toxic     | Venom, Poison    |
| Necrotic* | Withering        |
| Radiant*  | Holy fire        |
| Concuss*  | Shockwaves       |
| Force*    | Raw magic        |

### Stamina

Stamina represents dodging, parrying, rolling, twisting away, minor scrapes, and threats that don't deal lasting damage.

A creature who is unaware of a threat, or entirely unable to defend themselves cannot use Stamina, and the damage goes straight to Vitality.

A PC gains one Stamina when they end their turn

A normal mortal has 7 Stamina. 

### Flesh

Unless otherwise stated, a feature that effects Vitality effects Flesh first. Flesh is identical to Vitality but does not provide penalties when missing.

Frontline classes typically have 1 Flesh which replaces 1 Vitality.

### Vitality

Vitality represents real bodily harm: deep cuts, broken bones, punctured organs, internal bleeding.

A normal mortal has 3 Vitality, PCs typically have 4

For every point of Vitality you are missing, a creature has a -1 to their speed and all rolls. 

## 3. Mental Health

### Damage Types

| Name     | Examples                           |
| -------- | ---------------------------------- |
| Concuss* | Head trauma                        |
| Pain     | Persistent wounds                  |
| Static   | Psychic assaults, the unfathomable |
| Stress   | Extreme circumstances, fatigue     |

### Health Bar

Most creatures have 9 bars of Mental health with a MD of 5.

At certain breakpoints, a creature suffers negative penalties to Mental Saves and Checks. 

| All  | 2/3rds | 1/3rd      | None      |
| ---- | ------ | ---------- | --------- |
| Fine | Irate  | Distressed | Miserable |
|      | -1     | -2         | -3        |

### Pain

When a creature takes any amount of Vitality damage, they take 1d20 Pain damage for each hit point removed.

## 4. Spiritual Health

Most creatures do not have spiritual health, but some beings such as ghosts, celestials, and fiends do. A creature with Spiritual health dies when it reaches 0.

### Damage Types

| Name      | Examples          |
| --------- | ----------------- |
| Necrotic* | Corruption        |
| Radiant*  | Holy energies     |
| Force*    | Ethereal energies |

## 5. Recovery

| Rest                 | Effect                                                         |
| -------------------- | -------------------------------------------------------------- |
| Minor Rest  (1hr)    | Restore all Stamina, Flesh, 2 Spirit, and 2 Mental             |
| Moderate Rest (8hrs) | Restore all Stamina, Flesh, 5 Spirit, 5 Mental, and 2 Vitality |
| Major Rest (12hrs)   | Restore all Hit Points                                         |

Sometimes when a creature takes Vitality damage the bar becomes blocked from healing, meaning the wound will not naturally close. A blocked Vitality bar means the creature cannot recover that Vitality until the bar is unblocked.

A blocked wound can be removed with a successful DT 2 Medicine check with Healer's tools. Doing so results in 1d12 Pain damage.

## 6. Dying

When a creature reaches 0 Vitality Points it is incapacitated, can only crawl, and will die within after 10 rounds unless it receives aid. 

**Stabilize:**  
Spend 2 actions and make a successful DT 2 Medicine check. The creature will no longer die after a minute.

A creature can stabilize itself by spending 5 or more stamina as an action. 


Try to soak in all facets of this system and think about what assumptions you are making, afterwards I will show you the foundations of the martial combat system, and we can move onto the basics of the perk system after that.

A creature starts their turn with two actions and a reaction.
















Daggerheart style system where you calculate hit point loss based on damage thresholds. This allows us to have different sets of hit point bars without making it complicated to track. Also allows us to remove AC and therefore attack rolls, "misses" are represented by chunking into stamina and forcing the enemy to dodge/parry, hits happen once a creature runs out of the stamina required to defend themself and you hit their body.

Flow of attacking looks like this - Attack on a creature declared - damage is rolled - hit points are calculated

Positives > Hit points make much more sense in this system. If someone is unaware of an attacker then stamina is bypassed and you can go straight for vitals since nothing is being parried or dodged. - Getting stabbed or otherwise wounded is actually dangerous, but stamina means death is only as much of a threat as in other heroic TTRPGs. - Minor creatures aren't sustaining ridiculous amounts of major wounds like in systems where HP directly translates to wounds. - don't have to worry about calculating AC or bothering with attack rolls. - Much harder to end your turn having had no impact on the encounter.

Miss damage deals 0 HP, Minor damage deals 1 HP bar, Moderate damage deals 2, Major damage deals 3 HP - this can be expanded or changed. 

Negatives > Needs to be balanced in such a way where Vitality isn't easily accessible in direct combat. - Need to make sure at most 4 hit point types have major impact for most combats otherwise it could get hard to track. - loses some of the complexity of a system with damage rolls. I'll have to make sure other features let players make similar tactical choices with buffs and such, don't want to remove power fantasies like the precision warrior either. - Damage dice and weapons might need some thought, a battle axe doesn't necessarily have a higher chance to hit than a rapier. 

Maybe precision attacks increase your damage by a bit if you miss.

Crits are reserved for classes that get them, and they occur by rolling a d12 whenever a character takes an offensive action.

Not sure about the order of Hit points but initial thought is:

Stamina / Armor / Flesh / Vitality /

Mental and Spirit sit in their own spot since they are only targetable by non-physical damage. Some Temporary hit points might let you choose where to put them, and some such as bravery/willpower might sit in front of Mental/Spirit.

All in all Vitality and Flesh represent damage to your body, Armor and Stamina represent avoiding damage to the body, Mental and Spirit represent your Mind and Soul



| 7   | 10  | 14  |
| --- | --- | --- |

| V   | V   | V   |     | S   | S   | S   | S   | S   | S   | S   | S   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     |     |     |     |     |     |     |     |     |



**Vulnerabilities and Resistance**

Simply increase the amount of damage dealt by 1 Hit Point


**Physical**

Blunt

Slashing

Piercing

**Elemental**

Acid

Cold

Fire

Poison

Lightning

Thunder

**Mystical**

Force

Psychic

Necrotic

Radiant


### Hit Point Types


##### Finished Hit Points:







##### Needs Work:

Flesh - might get hit in situations where an attack hits vitality, but acts as a small buffer that turns moderate wounds into minor cuts - could be reserved for brawny unarmored fighters, or maybe they just get more - doesn't come with the drawbacks for being hit like with Vitality - if issued to everybody it probably comes in very small amounts, maybe just one hit point per person

Armor - doesn't get depleted, makes it harder to get to vitality once stamina is down or ignored. - Could work like this: medium armor means you have to do at least moderate damage to effect vitality, heavy armor means you have to do major, light armor could have a different effect.

Vitality - represents actual severe harm to a creature's body - each point of Vitality taken probably comes with a drawback, /falling prone on turn end/speed reduction/less damage/ eventually culminating in death - creatures probably get 4 hit points of vitality or some other smallish number - effectively stands in for death saving throws, 

Stamina - represents a creature's ability to dodge, parry, or otherwise deflect harm away from their body - might regenerate a little on start of turn, more if you spend an action to get your bearings  - could also be spendable to use certain abilities or enhance attacks.

##### Maybe?:

Mental Fortitude for psychic damage - has its own effects when depleted similar to Vitality but doesn't kill unless you make a character designed to do so. - Can make "save or suck" spells and features a little more reliable. First you break a creature's mental barrier, then you can hit them with a mind control spell. That's much better than flipping a coin to see if your attack did something, a success on the save might deplete 1 HP anyway.

Spirit

Temporary hit point types, probably added via class features or abilities

 - Luck



 - Bravery/Willpower/Faith
While you have these hit points you gain bonuses to fear effects, might let you ignore some of the effects of having damage to your Vitality, Spirit, or Mental


 - 



 - 





Possible additional system - Body part targeting once you reach vitality - add penalty dice according to how hard the body part is to hit, let players hack off limbs, stab eyes, 

