var ABILITIES_ADV = [
    'Air Lock',
    'Battle Armor',
    'Blaze',
    'Chlorophyll',
    'Clear Body',
    'Cloud Nine',
    'Drizzle',
    'Drought',
    'Flash Fire',
    'Forecast',
    'Guts',
    'Huge Power',
    'Hustle',
    'Hyper Cutter',
    'Intimidate',
    'Levitate',
    'Marvel Scale',
    'Overgrow',
    'Pure Power',
    'Rain Dish',
    'Sand Stream',
    'Sand Veil',
    'Shell Armor',
    'Soundproof',
    'Swarm',
    'Swift Swim',
    'Thick Fat',
    'Torrent',
    'Volt Absorb',
    'Water Absorb',
    'White Smoke',
    'Wonder Guard',
    'Damp',
    'Minus',   
    'Plus', 
    'Trace',   
    //NO FUNCTION IN CALCS
    'Arena Trap',
    'Color Change',
    'Compound Eyes',
    'Cute Charm',
    'Early Bird',
    'Effect Spore',
    'Flame Body',
    'Illuminate',
    'Immunity',
    'Inner Focus',  //Has functionality in a later gen
    'Insomnia',
    'Keen Eye',
    'Lightning Rod',    //Has functionality in a later gen
    'Limber',
    'Liquid Ooze',
    'Magma Armor',
    'Magnet Pull',
    'Natural Cure',
    'Oblivious',    //Has functionality in a later gen
    'Own Tempo',    //Has functionality in a later gen
    'Pickup',
    'Poison Point',
    'Pressure',
    'Rock Head',
    'Rough Skin',
    'Run Away',
    'Serene Grace',
    'Shadow Tag',
    'Shed Skin',
    'Shield Dust',
    'Speed Boost',
    'Static',
    'Stench',
    'Sticky Hold',
    'Sturdy',
    'Suction Cups',
    'Synchronize',
    'Truant',
    'Vital Spirit',
    'Water Veil',
];

var ABILITIES_DPP = ABILITIES_ADV.concat([
    'Adaptability',
    'Bad Dreams',
    'Download',
    'Dry Skin',
    'Filter',
    'Flower Gift',
    'Gluttony',
    'Heatproof',
    'Ice Body',
    'Iron Fist',
    'Klutz',
    'Magic Guard',
    'Mold Breaker',
    'Motor Drive',
    'Multitype',
    'Normalize',
    'Poison Heal',
    'Reckless',
    'Scrappy',
    'Simple',
    'Skill Link',
    'Slow Start',
    'Sniper',
    'Snow Cloak',
    'Snow Warning',
    'Solar Power',
    'Solid Rock',
    'Technician',
    'Tinted Lens',
    'Unaware',
    'Quick Feet',
    'Unburden',
    //NO FUNCTIONALITY IN CALCS
    'Aftermath',
    'Anger Point',
    'Anticipation',
    'Forewarn',
    'Frisk',
    'Honey Gather',
    'Hydration',
    'Leaf Guard',
    'No Guard',
    'Rivalry',  //Only implement functionality if demand is a lot
    'Stall',
    'Steadfast',
    'Storm Drain',   //Has functionality in a later gen
    'Super Luck',
    'Tangled Feet',
]);

var ABILITIES_BW = ABILITIES_DPP.concat([
    'Analytic',
    'Contrary',
    'Defeatist',
    'Defiant',
    'Flare Boost',
    'Infiltrator',
    //'Lightning Rod',
    'Multiscale',
    'Overcoat',
    'Sand Force',
    'Sand Rush',
    'Sap Sipper',
    'Sheer Force',
    //'Storm Drain',
    'Teravolt',
    'Toxic Boost',
    'Turboblaze',
    'Unnerve',
    'Heavy Metal',
    'Light Metal',
    //NO FUNCTIONALITY IN CALCS
    'Big Pecks',
    'Cursed Body',
    'Friend Guard',
    'Harvest',
    'Healer',
    'Illusion',
    'Imposter',
    'Iron Barbs',
    'Justified',
    'Magic Bounce',
    'Moody',
    'Moxie',
    'Mummy',
    'Pickpocket',
    'Poison Touch',
    'Prankster',
    'Rattled',
    'Regenerator',
    'Telepathy',
    'Victory Star',
    'Weak Armor',
    'Wonder Skin',
    'Zen Mode',  //Might implement functionality
]);

var ABILITIES_XY = ABILITIES_BW.concat([
    'Aerilate',
    'Aura Break',
    'Bulletproof',
    'Competitive',
    'Dark Aura',
    'Delta Stream',
    'Desolate Land',
    'Fairy Aura',
    'Fur Coat',
    'Mega Launcher',
    'Parental Bond',
    'Pixilate',
    'Primordial Sea',
    'Protean',
    'Refrigerate',
    'Strong Jaw',
    'Tough Claws',
    'Grass Pelt',
    //NO FUNCTIONALITY IN CALCS
    'Aroma Veil',
    'Cheek Pouch',  //Maybe implement functionality
    'Flower Veil',
    'Gale Wings',
    'Gooey',
    'Magician',
    'Stance Change',
    'Sweet Veil',
    'Symbiosis'
]);

var ABILITIES_SM = ABILITIES_XY.concat([
    'Electric Surge',
    'Psychic Surge',
    'Grassy Surge',
    'Misty Surge',
    'Merciless',
    'Stakeout',
    'Water Bubble',
    'Steelworker',
    'Liquid Voice',
    'Galvanize',
    'Fluffy',
    'RKS System',
    'Shadow Shield',
    'Prism Armor',
    'Full Metal Body',
    'Slush Rush',
    'Surge Surfer',
    'Neuroforce',
    'Power Construct',
    'Dazzling',
    'Queenly Majesty',
    //NO FUNCTIONALITY IN CALCS
    'Battery',
    'Battle Bond',
    'Beast Boost',
    'Berserk',
    'Comatose',
    'Corrosion',
    'Dancer',
    'Disguise',
    'Emergency Exit',
    'Innards Out',
    'Long Reach',
    'Power of Alchemy',
    'Receiver',
    'Schooling',    
    'Shields Down', 
    'Soul-Heart',
    'Stamina',
    'Tangling Hair',
    'Triage',
    'Water Compaction',
    'Wimp Out'
]);

var ABILITIES_SS = ABILITIES_SM.concat([
    //'Inner Focus',
    //'Oblivious',
    //'Own Tempo',
    'Libero',
    'Ice Scales',
    'Power Spot',
    'Intrepid Sword',
    'Dauntless Shield',
    "Gorilla Tactics",
    "Punk Rock",
    'Mirror Armor',
    'Neutralizing Gas',
    'Ripen',
    'Steely Spirit',
    'Transistor',
    "Dragon's Maw",
    'As One',
    'Mimicry',
    'Sand Spit',
    //NO FUNCTIONALITY IN CALCS
    'Ball Fetch',
    'Cotton Down',
    'Gulp Missile',
    'Hunger Switch',
    'Ice Face',
    'Pastel Veil',
    'Perish Body',
    'Propeller Tail',
    'Screen Cleaner',   
    'Stalwart',
    'Steam Engine',
    'Wandering Spirit',
    'Quick Draw',
    'Unseen Fist',
    'Curious Medicine',
    'Chilling Neigh',
    'Grim Neigh'
]);

var ABILITIES_SV = ABILITIES_SS.concat([
    'Lingering Aroma',  //Mummy clone, no calc functionality
    'Seed Sower',   //Grassy Terrain when hit                                                       IN CALC
    'Thermal Exchange', //+1 Atk when hit by Fire and cannot be burned, no calc functionality
    'Anger Shell',  //+1 Atk SpA Spe -1 Def SpD at half health, consider calc functionality
    'Purifying Salt',   //half Ghost damage taken and status condition immunity                     IN CALC
    'Well-Baked Body',  //Fire immunity and +2 Def when hit                                         IN CALC
    'Wind Rider',   //Wind move immunity and +1 Atk when hit or Tailwind is set                     IN CALC
    'Guard Dog',    //Boosted Attack from Intimidate, switch-out moves fail                         IN CALC
    'Rocky Payload',    //increase Rock damage dealt by 1.5x                                        IN CALC
    'Wind Power',   //charge when hit by wind move, abilityOff like Electromorphosis                IN CALC
    'Zero to Hero', //changes form when switching out, no calc functionality
    'Commander',    //all effects are related to the one mon, no calc functionality
    'Electromorphosis', //already added, charge as an ability                                       IN CALC
    'Protosynthesis',   //activates in sun or with Booster Energy, determines stat like Beast Boost             IN CALC
    'Quark Drive',  //activates in electric terrain or with Booster Energy, determines stat like Beast Boost    IN CALC
    'Good as Gold', //status move immunity, no calc functionality
    'Vessel of Ruin',   //NOT A STAT DROP, IT'S A BASE STAT MODIFIER                                IN CALC
    'Sword of Ruin',    //SEE ABOVE                                                                 IN CALC
    'Tablets of Ruin',  //SEE ABOVE                                                                 IN CALC
    'Beads of Ruin',    //SEE ABOVE                                                                 IN CALC
    'Orichalcum Pulse', //sun AND stat mod                                                          IN CALC
    'Hadron Engine',    //electric terrain AND stat mod                                             IN CALC
    'Opportunist',  //boosts same stats as opponent, might have calc functionality but probably not
    'Cud Chew', //reuse the same berry, no calc functionality
    'Sharpness',    //increase slicing move damage dealt                                            IN CALC
    'Supreme Overlord', //Atk/SpA boost for each ally defeated by +0.1x                             IN CALC
    'Costar',   //copies ally stat changes, no calc functionality
    'Toxic Debris', //Toxic Spikes for every physical hit, no calc functionality
    'Armor Tail',   //Queenly Majesty/Dazzling again                                                IN CALC
    'Earth Eater',  //Ground type Water Absorb                                                      IN CALC
    'Mycelium Might',   //inverse Prankster, no calc functionality
    //Teal Mask DLC new additions
    "Mind's Eye",   //Ignores evasion/accuracy and is Scrappy w/o Intimidate immunity
    'Supersweet Syrup', //Intimidate but with evasion and only once
    'Hospitality',  //Heals ally's HP, no calc functionality
    'Toxic Chain',  //Poison Touch but with badly poisoned instead, no calc functionality
    'Embody Aspect', //Boosts Ogerpon's stats based on mask, needs for info for what kind of boost and how much
    //Indigo Disk new additions
    'Tera Shift',   //Transforms Terapagos into Tera form
    'Tera Shell',   //Max HP means all attacks are not very effective
    'Teraform Zero',    //Removes weather and terrain
    'Poison Puppeteer', //Poisoning also confuses, no calc funcitonality
]);

//ABILITIES_XY.splice(ABILITIES_XY.indexOf('Lightning Rod'), 1, 'Lightning Rod');
var ATE_IZE_ABILITIES = [
    'Normalize',
    'Aerilate',
    'Pixilate',
    'Refrigerate',
    'Galvanize',
];