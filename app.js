let rollData = {
    'weapon': {
        'crit': [
            {
                'low': '1',
                'high': '1',
                'desc': "You feel accomplished, but nothing remarkable happens.",
                'effect': "Regular critical hit."
            },
            {
                'low': '2',
                'high': '5',
                'desc': "You feel it is imperative to press the advantage no matter the cost.",
                'effect': "You can choose to gain advantage on all attacks against your target until the end of your next turn, but if you do all enemies have advantage on their attack rolls against you until the end of your next turn."
            },
            {
                'low': '6',
                'high': '9',
                'desc': "You feel it is imperative to press the advantage, but maintain awareness of your surroundings.",
                'effect': "You can choose to gain advantage on all attacks against your target next turn, your target has advantage on their attack rolls against you until the end of your next turn."
            },
            {
                'low': '10',
                'high': '14',
                'desc': "You know how to press the advantage.",
                'effect': "You gain advantage on all attacks against your target until the end of your next turn."
            },
            {
                'low': '15',
                'high': '19',
                'desc': "As you are fighting, you notice an effective route to escape danger.",
                'effect': "You are able to use the disengage action after your attack."
            },
            {
                'low': '20',
                'high': '24',
                'desc': "You feel the eb and flow of the battle, and know where to make your next move.",
                'effect': "After your turn you move to the top of the initiative order."
            },
            {
                'low': '25',
                'high': '29',
                'desc': "You begin to recognize patterns in your opponents fighting technique.",
                'effect': "You gain +2 to your AC against your target, and advantage on all savings throws from effects originating from your target until your next turn."
            },
            {
                'low': '30',
                'high': '39',
                'desc': "You are able to maneuver towards your opponent while attacking, and attempt to harass them.",
                'effect': "After your attack you can choose to attempt to grapple your opponent if you have a free hand, or attempt to shove your opponent if both hands are in use."
            },
            {
                'low': '40',
                'high': '49',
                'desc': "You are able to maneuver towards your opponent while attacking and harass them.",
                'effect': "After your attack you can choose to automatically succeed in grappling your opponent if you have a free hand, or shoving your opponent if both hands are in use."
            },
            {
                'low': '50',
                'high': '59',
                'desc': "You attempt to disarm your opponent.",
                'effect': "You are able to take the disarm action after your attack"
            },
            {
                'low': '60',
                'high': '64',
                'desc': "You attempt to disarm your opponent.",
                'effect': "You are able to take the disarm action after your attack"
            },
            {
                'low': '65',
                'high': '69',
                'desc': "You kick your target's weapon out of their hands.",
                'effect': "You are able to take the disarm action after your attack, and can steal your opponents weapon if you have a free hand. Otherwise you can knock it up to 20 feet away."
            },
            {
                'low': '70',
                'high': '74',
                'desc': "Your senses heighten and you become aware of threats around the battlefield.",
                'effect': "You are able to use the dodge action after your attack."
            },
            {
                'low': '75',
                'high': '79',
                'desc': "Your attack knocks your target over.",
                'effect': "Your target is knocked prone."
            },
            {
                'low': '80',
                'high': '84',
                'desc': "Your strike surprises your opponent.",
                'effect': "Your target is surprised until the end of their next turn."
            },
            {
                'low': '85',
                'high': '89',
                'desc': "You strike with great force.",
                'effect': "Roll an additional set of damage dice above and beyond your normal critical roll."
            },
            {
                'low': '90',
                'high': '94',
                'desc': "You strike with extreme force.",
                'effect': "Roll an additional set of damage dice above and beyond your normal critical roll, and the target suffers one unit of exhaustion."
            },
            {
                'low': '95',
                'high': '99',
                'desc': "You strike with debilitating force.",
                'effect': "Roll an additional set of damage dice above and beyond your normal critical roll, and the target suffers a permanent injury chosen by the DM. The permanent injury can be healed with extended rest of a length determined by the DM, but the attack leaves a scar."
            },
            {
                'low': '100',
                'high': '100',
                'desc': "You strike with devastating force.",
                'effect': "Roll an additional set of damage dice above and beyond your normal critical roll, and the target suffers 1 unit of exhaustion, and the target suffers a permanent injury chosen by the DM. The permanent injury can be healed with extended rest of a length determined by the DM, but the attack leaves a scar."
            },
        ],
        'fail': [
            {
                'low': 100,
                'high': 100,
                'desc': "You are embarassed by your poor showing, but nothing remarkable happens.",
                'effect': "You miss your attack."
            },
            {
                'low': 95,
                'high': 99,
                'desc': "You lose your combat footing, exposing yourself to your target.",
                'effect': "Your target has advantage on their first attack roll against you next round."
            },
            {
                'low': 90,
                'high': 94,
                'desc': "You lose your combat footing, exposing yourself to your enemies.",
                'effect': "Your enemies have advantage on their first attack roll against you next round."
            },
            {
                'low': 85,
                'high': 89,
                'desc': "You lose your combat footing, and have difficulty recovering.",
                'effect': "Your enemies have advantage on their attack rolls against you until the end of your next turn."
            },
            {
                'low': 80,
                'high': 84,
                'desc': "Melee: You get tangled with your enemy and fall over\nRanged: You spill your quiver.",
                'effect': "Melee: You are knocked prone and your movement is reduced to 0. Your target must succeed a DC 10 dexterity check or they are also knocked prone.\nRanged: You must pick up arrows individually from the ground using your \"environmental interaction\", or the \"Use an Object\" action to nock your bow."
            },
            {
                'low': 70,
                'high': 79,
                'desc': "You lose your balance while attacking.",
                'effect': "You fall prone and your movement is reduced to 0."
            },
            {
                'low': 60,
                'high': 69,
                'desc': "As you attack your opponent you begin to fear that they are the superior combatant.",
                'effect': "Disadvantage on your next attack roll against your target."
            },
            {
                'low': 50,
                'high': 59,
                'desc': "You miss an attack and gaze upon the chaos of the battle, causing your confidence to falter.",
                'effect': "Disadvantage on your next attack roll against any target."
            },
            {
                'low': 40,
                'high': 49,
                'desc': "You lose your grip as you attack.",
                'effect': "Roll a DC 10 Dexterity Check, on failure you drop your weapon at your feet."
            },
            {
                'low': 30,
                'high': 39,
                'desc': "Melee: The weapon slips from your hand as you attack.\nRanged: Your ammunition gets lodged in its container.",
                'effect': "Melee: Roll a DC 10 Dexterity Check, on failure you throw your weapon into your enemy's space. DM determines where the item is thrown on large sized or greater creatures.\nRanged: You must use an action to organize the ammunition in its case before you can make another ranged attack."
            },
            {
                'low': 20,
                'high': 29,
                'desc': "Melee: You lunge past an enemy exposing yourself to his attack.\nRanged: Your missile startles your allies near your target.",
                'effect': "Melee: Enemy you were attacking is able to use their reaction to perform and attack of opportunity.\nRanged: the target can perform an opportunity attack on any ally within melee range."
            },
            {
                'low': 15,
                'high': 19,
                'desc': "Missing what you thought was a critical blow causes you to panic.",
                'effect': "End your current turn and you are surprised until the end of your next turn."
            },
            {
                'low': 10,
                'high': 14,
                'desc': "You attack wildly and lose track of the fight around you.",
                'effect': "End your turn and move to the bottom of the initiative order at the start of the next round."
            },
            {
                'low': 6,
                'high': 9,
                'desc': "You lose your footing while attacking and fall to the ground bumping your head.",
                'effect': "You fall prone. Roll a DC 10 constitution save, on failure you take 1d6 damage and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious."
            },
            {
                'low': 2,
                'high': 5,
                'desc': "You lose your footing while attacking and fall head first.",
                'effect': "You fall prone. Roll a DC 15 constitution save, on failure you take 2d6 damage and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious."
            },
            {
                'low': 1,
                'high': 1,
                'desc': "You lose your footing while attacking and slam your head into the ground.",
                'effect': "You fall prone, take 3d6 damage, and become unconscious for 1 minute or until you receive damage from any source."
            }
        ]
    },
    'spell': {
        'crit': [
            {
                'low': 1,
                'high': 1,
                'desc': "You feel accomplished, but nothing remarkable happens.",
                'effect': "Regular spell critical hit."
            },
            {
                'low': 2,
                'high': 5,
                'desc': "You feel it is imperative to press the advantage no matter the cost.",
                'effect': "You can choose to gain advantage on your next attack roll against your target, but all enemies have advantage on their attack rolls against you until the end of your next turn."
            },
            {
                'low': 6,
                'high': 9,
                'desc': "You feel it is imperative to press the advantage, but maintain awareness of your surroundings.",
                'effect': "You can choose to gain advantage on your next attack roll against your target, your target has advantage on their attack rolls against you until the end of your next turn."
            },
            {
                'low': 10,
                'high': 14,
                'desc': "As you are fighting, you notice an effective route to escape danger.",
                'effect': "You are able to use the disengage action after your attack."
            },
            {
                'low': 15,
                'high': 19,
                'desc': "You feel the eb and flow of the battle, and know where to make your next move.",
                'effect': "After your turn you move to the top of the initiative order."
            },
            {
                'low': 20,
                'high': 29,
                'desc': "Your spell cripples your opponent.",
                'effect': "Your target's movement speed is cut in half for their next 2 turns."
            },
            {
                'low': 30,
                'high': 39,
                'desc': "Your spell attack knocks your target over.",
                'effect': "Your target is knocked prone."
            },
            {
                'low': 40,
                'high': 49,
                'desc': "The light from your spell flashes near your target's eyes 	Your target is blinded until the end of their next turn.",
                'effect': "You blast the targets weapons out of their hands. 	Your target's weapon is flung 1d6*5 feet away in a random direction."
            },
            {
                'low': 50,
                'high': 59,
                'desc': "The light from your spell flashes near your target's eyes 	Your target is blinded until the end of their next turn.",
                'effect': "You blast the targets weapons out of their hands. 	Your target's weapon is flung 1d6*5 feet away in a random direction."
            },
            {
                'low': 60,
                'high': 69,
                'desc': "The sight of your magic fills the target's heart with fear.",
                'effect': "Your target is frightened by you until you stop casting magic. You are able to discern the source of your targets fear."
            },
            {
                'low': 70,
                'high': 74,
                'desc': "The force from your spell stuns your opponent.",
                'effect': "Your target is incapacitated until the end of their next turn."
            },
            {
                'low': 75,
                'high': 79,
                'desc': "Your spell is incidentally infused with fey energy.",
                'effect': "Roll 10d8. If your targets current health is lower than the number rolled they fall asleep for 1 minute."
            },
            {
                'low': 80,
                'high': 84,
                'desc': "Your spells strike surprises your opponent.",
                'effect': "Your target is surprised until the end of their next turn."
            },
            {
                'low': 85,
                'high': 89,
                'desc': "Your spell strikes with great force.",
                'effect': "Roll an additional set of spell damage dice above and beyond your normal critical roll."
            },
            {
                'low': 90,
                'high': 94,
                'desc': "Your spell strikes with extreme force.",
                'effect': "Roll an additional set of spell damage dice above and beyond your normal critical roll, and the target suffers one unit of exhaustion."
            },
            {
                'low': 96,
                'high': 99,
                'desc': "Your spell strikes with debilitating force.",
                'effect': "Roll an additional set of spell damage dice above and beyond your normal critical roll, and the target suffers a permanent injury chose by the DM. The permanent injury can be healed with extended rest of a length determined by the DM, but the attack leaves a scar."
            },
            {
                'low': 100,
                'high': 100,
                'desc': "Your spell strikes with devastating force.",
                'effect': "Roll an additional set of spell damage dice above and beyond your normal critical roll, and the target suffers 1 unit of exhaustion, and the target suffers a permanent injury chose by the DM. The permanent injury can be healed with extended rest of a length determined by the DM, but the attack leaves a scar."
            },
        ],
        'fail': [
            {
                'low': 100,
                'high': 100,
                'desc': "You are embarassed by your poor showing, but nothing remarkable happens.",
                'effect': "You miss your attack."
            },
            {
                'low': 95,
                'high': 99,
                'desc': "You get wrapped up in your spellcasting and forget to watch your target.",
                'effect': "Your target has advantage on their first attack roll against you next round."
            },
            {
                'low': 90,
                'high': 94,
                'desc': "You get wrapped up in your spellcasting and forget to watch your surroundings.",
                'effect': "All enemies have advantage on their first attack roll against you next round."
            },
            {
                'low': 85,
                'high': 89,
                'desc': "You are so wrapped up in your spellcasting that you forget you are fighting a battle.",
                'effect': "All enemies have advantage on their attack rolls against you until the end of your next turn."
            },
            {
                'low': 80,
                'high': 84,
                'desc': "Your spell creates a large plume of smoke obscuring your location.",
                'effect': "The area in a 5 foot radius around your location becomes heavily obscured for 1 minute. A strong breeze can blow away the smoke in 1 round."
            },
            {
                'low': 70,
                'high': 79,
                'desc': "Your spell misfires knocking you over.",
                'effect': "You are knocked prone."
            },
            {
                'low': 60,
                'high': 69,
                'desc': "The spell fires in an unexpected manner, causing your confidence in your abilities to falter.",
                'effect': "You have disadvantage on any spell attacks, and enemies have advantage against your spell savings throws until the end of your next turn."
            },
            {
                'low': 50,
                'high': 59,
                'desc': "The placement of your spell startles your allies near your target, causing them to drop their guard.",
                'effect': "Your target is able to use their reaction to take an attack of opportunity on one of your allies in melee range."
            },
            {
                'low': 40,
                'high': 49,
                'desc': "You scramble the ingredients of your component pouch or your focus becomes overloaded with magical energy and temporarily stops working.",
                'effect': "You are unable to perform material components to cast spells until the end of your next turn."
            },
            {
                'low': 30,
                'high': 39,
                'desc': "Your arm cramps as you cast.",
                'effect': "You are unable to perform somatic components to cast spells until the end of your next turn."
            },
            {
                'low': 20,
                'high': 29,
                'desc': "You bite your tongue as you cast.",
                'effect': "You are unable to use verbal components to cast spells until the end of your next turn."
            },
            {
                'low': 15,
                'high': 19,
                'desc': "Your spell misfires and dazes you, causing you to lose track of the fight.",
                'effect': "End your turn and move to the bottom of the initiative order at the start of the next round."
            },
            {
                'low': 10,
                'high': 14,
                'desc': "Your spell misfires causing you to panic.",
                'effect': "End your current turn and you are surprised until the end of your next turn."
            },
            {
                'low': 6,
                'high': 9,
                'desc': "Your spell backfires creating a small explosion causing you to fall and bump your head.",
                'effect': "You fall prone. Roll a DC 10 constitution save, on failure you take 1d6 bludeoning damage and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious."
            },
            {
                'low': 2,
                'high': 5,
                'desc': "Your spell backfires creating a large explosion causing you to fall and bump your head.",
                'effect': "You fall prone. Roll a DC 15 constitution save, on failure you take 1d6 bludgeoning damage, 1d6 thunder damage, and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious."
            },
            {
                'low': 1,
                'high': 1,
                'desc': "Your spell completely backfires creating a large explosion causing you to fall and bump your head.",
                'effect': "You hit yourself with your spell. If the spell effect is instant you take the full effect. If the spell requires concentration the effect persists until the end of your next turn. You also fall prone, take 1d6 bludgeoning damage, 1d6 thunder damage, and become unconscious for 1 minute or until you receive damage from any source."
            },
        ],
    },
};

let attackTypesContainerEl  = document.querySelector('.attack-types');

let attackTypePlaceholderEl = document.querySelector('.placehold .attack-type');
let weaponTypeEl            = attackTypePlaceholderEl.cloneNode(true);
let spellTypeEl             = attackTypePlaceholderEl.cloneNode(true);

let resultTypePlaceholderEl = document.querySelector('.placehold .result-type');
let weaponCritTypeEl        = resultTypePlaceholderEl.cloneNode(true);
let weaponFailTypeEl        = resultTypePlaceholderEl.cloneNode(true);
let spellCritTypeEl         = resultTypePlaceholderEl.cloneNode(true);
let spellFailTypeEl         = resultTypePlaceholderEl.cloneNode(true);

weaponCritTypeEl.classList.add('crit');
weaponCritTypeEl.querySelector('h2 .type-name').textContent = 'Crit';
weaponFailTypeEl.classList.add('fail');
weaponFailTypeEl.querySelector('h2 .type-name').textContent = 'Fail';
weaponTypeEl.classList.add('weapon');
weaponTypeEl.querySelector('.result-types').appendChild(weaponCritTypeEl);
weaponTypeEl.querySelector('.result-types').appendChild(weaponFailTypeEl);
weaponTypeEl.querySelector('h1 .type-name').textContent = 'Weapon';

spellCritTypeEl.classList.add('crit');
spellCritTypeEl.querySelector('h2 .type-name').textContent = 'Crit';
spellFailTypeEl.classList.add('fail');
spellFailTypeEl.querySelector('h2 .type-name').textContent = 'Fail';
spellTypeEl.classList.add('spell');
spellTypeEl.querySelector('.result-types').appendChild(spellCritTypeEl);
spellTypeEl.querySelector('.result-types').appendChild(spellFailTypeEl);
spellTypeEl.querySelector('h1 .type-name').textContent = 'Spell';

attackTypesContainerEl.appendChild(weaponTypeEl);
attackTypesContainerEl.appendChild(spellTypeEl);

let rollBoxEl   = document.querySelector('#roll');
let rollFormEl  = rollBoxEl.closest('form');

rollFormEl.addEventListener('submit', function(e) {
    e.preventDefault();
    doRoll(rollBoxEl.value);
});

let doRoll = function(roll) {
    let rollSpecified = !!roll;

    [ 'weapon', 'spell'].forEach(function(weaponType, wtidx) {
        let attackTypeEl = weaponType === 'weapon' ? weaponTypeEl : spellTypeEl;

        [ 'crit', 'fail'].forEach(function(resultType, rtidx) {
            if (!rollSpecified) {
                roll = Math.ceil(Math.random() *100);
            }

            // console.log(roll);
            // console.log(weaponType+' '+resultType);

            rollData[weaponType][resultType].forEach(function(result, ridx) {
                if (result.low <= roll && result.high >= roll) {
                    // console.log('found');
                    // console.log(result);

                    let resultTypeEl = attackTypeEl.querySelector('.'+resultType);
                    resultTypeEl.querySelector('.roll-result').textContent = roll;
                    resultTypeEl.querySelector('.roll-result-desc').textContent = result.desc;
                    resultTypeEl.querySelector('.roll-result-effect').textContent = result.effect;
                }
            });
        });
    });


    // console.log(weaponCritEffect);
}

doRoll();