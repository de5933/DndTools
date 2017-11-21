class Die {
    constructor (size, randomObject) {
        this._size = size || 20;
        this._random = randomObject || new Random();
    }
    
    roll() {
        return Math.ceil(this._random.random(this._size));
    }
}

class Dice {
    constructor (count, size, randomObject) {
        count = count || 1;
        this._dice = [];
        for (var i = 0; i < count; i++) {
            this._dice.push(new Die(size, randomObject));
        }
    }
    
    roll() {
        var sum = 0;
        var results = this._dice.map(function(d){ 
            var v = d.roll();
            sum += v;
            return v;
        });
        return {
            results: results,
            sum: sum
        };
    }
}

class Gen {
    constructor (seed) {
        this._rnd = new Random(seed);
    }
    
    getCharacter() {
        return {
            'class': this.getFromList(list.classes),
            background: this.getFromList(list.races),
            race: this.getFromList(list.backgrounds),
            abilityScores: this.getAbilityScores(),
            level: Math.floor(this._rnd.random(5,15))
        };
    }
    
    getAbilityScores() {
        var dice = new Dice(6,20,this._rnd);
        var result = dice.roll();
        return result.results.map(function(n){
            return {
                score: n,
                modifier: Math.floor((n-10)/2)
            };
        });
    }
    
    getFromList(list) {
        return this._rnd.choose(list);
    }
    
    getLoot(count) {
        count = count || 1;
        var loot = [];
        for (var i = 0; i < count; i++) {
            loot.push(this._rnd.choose(list.items));
        }
        return loot;
    }
}

var list = {
    classes: [
        'Barbarian',
        'Bard',
        'Cleric',
        'Druid',
        'Fighter',
        'Monk',
        'Paladin',
        'Ranger',
        'Rogue',
        'Sorcerer',
        'Warlock',
        'Wizard'
    ],
    races: [
        'Dragonborn',
        'Dwarf',
        'Hill Dwarf',
        'Elf',
        'High Elf',
        'Gnome',
        'Rock Gnome',
        'Half-Elf',
        'Half-Orc',
        'Halfling',
        'Lightfoot',
        'Human',
        'Tiefling'
    ],
    backgrounds: [
        'Acolyte',
        'Artisan',
        'Bounty Hunter',
        'Charlatan',
        'City Watch',
        'Clan Crafter',
        'Cloistered Scholar',
        'Commoner',
        'Courtier',
        'Criminal',
        'Entertainer',
        'Faction Agent',
        'Far Traveler',
        'Folk Hero',
        'Guild Artisan',
        'Guild Thief',
        'Haunted One',
        'Hermit',
        'Jester',
        'Knight',
        'Minstrel',
        'Noble',
        'Outlander',
        'Priest',
        'Sage',
        'Sailor',
        'Soldier',
        'Spy',
        'Thug',
        'Urchin'
    ],
    items: [
  'Adamantine Armor',
  'Ammunition, +1, +2 or +3',
  'Amulet of Health',
  'Amulet of Proof against Detection and Location',
  'Amulet of the Planes',
  'Animated Shield',
  'Apparatus of the Crab',
  'Armor of Invulnerability',
  'Armor of Resistance',
  'Armor of Vulnerability',
  'Armor, +1, +2, or +3',
  'Arrow of Slaying',
  'Arrow-Catching Shield',
  'Bag of Beans',
  'Bag of Devouring',
  'Bag of Holding',
  'Bag of Tricks',
  'Bead of Force',
  'Belt of Dwarvenkind',
  'Belt of Giant Strength',
  'Berserker Axe',
  'Boots of Elvenkind',
  'Boots of Levitation',
  'Boots of Speed',
  'Boots of Striding and Springing',
  'Boots of the Winterlands',
  'Bowl of Command Water Elementals',
  'Bracers of Archery',
  'Bracers of Defense',
  'Brazier of Commanding Fire Elementals',
  'Brooch of Shielding',
  'Broom of Flying',
  'Candle of Invocation',
  'Cape of the Mountebank',
  'Carpet of Flying',
  'Censer of Controlling Air Elementals',
  'Chime of Opening',
  'Circlet of Blasting',
  'Cloak of Arachnida',
  'Cloak of Displacement',
  'Cloak of Elvenkind',
  'Cloak of Protection',
  'Cloak of the Bat',
  'Cloak of the Manta Ray',
  'Crystal Ball',
  'Cube of Force',
  'Cubic Gate',
  'Dagger of Venom',
  'Dancing Sword',
  'Decanter of Endless Water',
  'Deck of Illusions',
  'Deck of Many Things',
  'Defender',
  'Demon Armor',
  'Dimensional Shackles',
  'Dragon Scale Mail',
  'Dragon Slayer',
  'Dust of Disappearance',
  'Dust of Dryness',
  'Dust of Sneezing and Choking',
  'Dwarven Plate',
  'Dwarven Thrower',
  'Efficient Quiver',
  'Efreeti Bottle',
  'Elemental Gem',
  'Elven Chain',
  'Eversmoking Bottle',
  'Eyes of Charming',
  'Eyes of Minute Seeing',
  'Eyes of the Eagle',
  'Feather Token',
  'Figurine of Wondrous Power',
  'Flame Tongue',
  'Folding Boat',
  'Frost Brand',
  'Gauntlets of Ogre Power',
  'Gem of Brightness',
  'Gem of Seeing',
  'Giant Slayer',
  'Glamoured Studded Leather',
  'Gloves of Missile Snaring',
  'Gloves of Swimming and Climbing',
  'Goggles of Night',
  'Hammer of Thunderbolts',
  'Handy Haversack',
  'Hat of Disguise',
  'Headband of Intellect',
  'Helm of Brilliance',
  'Helm of Comprehending Languages',
  'Helm of Telepathy',
  'Helm of Teleportation',
  'Holy Avenger',
  'Horn of Blasting',
  'Horn of Valhalla',
  'Horseshoes of Speed',
  'Horseshoes of a Zephyr',
  'Immovable Rod',
  'Instant Fortress',
  'Ioun Stone',
  'Iron Bands of Binding',
  'Iron Flask',
  'Javelin of Lightning',
  'Lantern of Revealing',
  'Luck Blade',
  'Mace of Disruption',
  'Mace of Smiting',
  'Mace of Terror',
  'Mantle of Spell Resistance',
  'Manual of Bodily Health',
  'Manual of Gainful Exercise',
  'Manual of Golems',
  'Manual of Quickness of Action',
  'Marvelous Pigments',
  'Medallion of Thoughts',
  'Mirror of Life Trapping',
  'Mithral Armor',
  'Necklace of Adaption',
  'Necklace of Fireballs',
  'Necklace of Prayer Beads',
  'Nine Lives Stealer',
  'Oathbow',
  'Oil of Etherealness',
  'Oil of Sharpness',
  'Oil of Slipperiness',
  'Orb of Dragonkind',
  'Pearl of Power',
  'Periapt of Health',
  'Periapt of Proof against Poison',
  'Periapt of Wound Closure',
  'Philter of Love',
  'Pipes of Haunting',
  'Pipes of the Sewers',
  'Plate Armor of Etherealness',
  'Portable Hole',
  'Potion of Animal Friendship',
  'Potion of Clairvoyance',
  'Potion of Climbing',
  'Potion of Diminution',
  'Potion of Flying',
  'Potion of Gaseous Form',
  'Potion of Giant Strength',
  'Potion of Growth',
  'Potion of Healing',
  'Potion of Heroism',
  'Potion of Invisibility',
  'Potion of Mind Reading',
  'Potion of Poison',
  'Potion of Resistance',
  'Potion of Speed',
  'Potion of Water Breathing',
  'Restorative Ointment',
  'Ring of Animal Influence',
  'Ring of Djinni',
  'Ring of Elemental Command',
  'Ring of Evasion',
  'Ring of Feather Falling',
  'Ring of Free Action',
  'Ring of Invisibility',
  'Ring of Jumping',
  'Ring of Mind Shielding',
  'Ring of Protection',
  'Ring of Regeneration',
  'Ring of Resistance',
  'Ring of Shooting Stars',
  'Ring of Spell Storing',
  'Ring of Spell Turning',
  'Ring of Swimming',
  'Ring of Telekinesis',
  'Ring of Three Wishes',
  'Ring of Warmth',
  'Ring of Water Walking',
  'Ring of X-ray Vision',
  'Ring of the Ram',
  'Robe of Eyes',
  'Robe of Scintillating Colors',
  'Robe of Stars',
  'Robe of Useful Items',
  'Robe of the Archmagi',
  'Rod of Absorption',
  'Rod of Alertness',
  'Rod of Lordly Might',
  'Rod of Rulership',
  'Rod of Security',
  'Rope of Climbing',
  'Rope of Entanglement',
  'Scarab of Protection',
  'Scimitar of Speed',
  'Shield of Missile Attraction',
  'Shield, +1, +2, or +3',
  'Slippers of Spider Climbing',
  'Sovereign Glue',
  'Spell Scroll',
  'Spellguard Shield',
  'Sphere of Annihilation',
  'Staff of Charming',
  'Staff of Fire',
  'Staff of Frost',
  'Staff of Healing',
  'Staff of Power',
  'Staff of Striking',
  'Staff of Swarming Insects',
  'Staff of Thunder and Lightning',
  'Staff of Withering',
  'Staff of the Magi',
  'Staff of the Python',
  'Staff of the Woodlands',
  'Stone of Controlling Earth Elementals',
  'Stone of Good Luck (Luckstone)',
  'Sun Blade',
  'Sword of Life Stealing',
  'Sword of Sharpness',
  'Sword of Wounding',
  'Talisman of Pure Good',
  'Talisman of Ultimate Evil',
  'Talisman of the Sphere',
  'Tome of Clear Thought',
  'Tome of Leadership and Influence',
  'Tome of Understanding',
  'Trident of Fish Command',
  'Universal Solvent',
  'Vicious Weapon',
  'Vorpal Sword',
  'Wand of Binding',
  'Wand of Enemy Detection',
  'Wand of Fear',
  'Wand of Fireballs',
  'Wand of Lightning Bolts',
  'Wand of Magic Detection',
  'Wand of Magic Missiles',
  'Wand of Paralysis',
  'Wand of Polymorph',
  'Wand of Secrets',
  'Wand of Web',
  'Wand of Wonder',
  'Wand of the War Mage, +1, +2, or +3',
  'Weapon, +1, +2, or +3',
  'Well of Many Worlds',
  'Wind Fan',
  'Winged Boots',
  'Wings of Flying'
]
};

