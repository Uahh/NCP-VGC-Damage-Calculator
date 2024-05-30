p1 = "Urshifu-Rapid-Strike @ Mystic Water\nAbility: Unseen Fist\nLevel: 50\nTera Type: Water\nEVs: 4 HP / 252 Atk / 252 Spe\nJolly Nature\n- Surging Strikes\n- Close Combat\n- Aqua Jet\n- Rock Slide"

// p2 = "Chi-Yu @ Choice Specs\nAbility: Beads of Ruin\nLevel: 50\nTera Type: Fire\nEVs: 252 HP / 164 Def / 28 SpA / 4 SpD / 60 Spe \nBold Nature\nIVs: 0 Atk \n- Heat Wave\n- Snarl\n- Dark Pulse\n- Overheat\n"

// p1 = 'Urshifu-Rapid-Strike'

p2_list = [
    {
        "name": 'Incineroar',
        "moves": ['Flare Blitz', 'Knock Off', 'Fake Out', 'Parting Shot']
    },
    {
        "name": 'Rillaboom',
        "moves": ['Grassy Glide', 'Fake Out', 'U-turn', 'Wood Hammer']
    },
    // {
    //     "name": 'Urshifu-Rapid-Strike',
    //     "moves": ['Surging Strikes', 'Close Combat', 'Aqua Jet', 'Rock Slide']
    // },
    // {
    //     "name": 'Amoonguss',
    //     "moves": ['Spore', 'Rage Powder', 'Pollen Puff', 'Protect']
    // },
    // {
    //     "name": 'Tornadus',
    //     "moves": ['Hurricane', 'Bleakwind Storm', 'Tailwind', 'Taunt']
    // },
    // {
    //     "name": 'Flutter Mane',
    //     "moves": ['Dazzling Gleam', 'Shadow Ball', 'Moonblast', 'Protect']
    // },
    // {
    //     "name": 'Raging Bolt',
    //     "moves": ['Thunderbolt', 'Volt Switch', 'Thunder Wave', 'Protect']
    // },
    // {
    //     "name": 'Calyrex-Shadow',
    //     "moves": ['Astral Barrage', 'Shadow Ball', 'Psychic', 'Protect']
    // },
    // {
    //     "name": 'Farigira',
    //     "moves": ['Dazzling Gleam', 'Psychic', 'Protect']
    // },
    // {
    //     "name": 'Ogerpon-Wellsprin',
    //     "moves": ['Ivy Cudgel', 'Grassy Glide', 'Wood Hammer', 'Protect']
    // },
    // {
    //     "name": 'Calyrex-Ice',
    //     "moves": ['Glacial Lance', 'High Horsepower', 'Trick Room', 'Protect']
    // },
    // {
    //     "name": 'Urshifu-Single-Strike',
    //     "moves": ['Wicked Blow', 'Close Combat', 'Sucker Punch', 'Protect']
    // }
]

ev_ranges = [4, 68, 132, 196, 252]

format = {
    "name": "",
    "type1": "",
    "type2": "",
    "level": 50,
    "evs": {
        "HP": 0,
        "Atk": 0,
        "Def": 0,
        "SpA": 0,
        "SpD": 0,
        "Spe": 0
    },
    "ivs": {
        "HP": 31,
        "Atk": 31,
        "Def": 31,
        "SpA": 31,
        "SpD": 31,
        "Spe": 31
    },
    "boost": {
        "HP": 0,
        "Atk": 0,
        "Def": 0,
        "SpA": 0,
        "SpD": 0,
        "Spe": 0
    },
    "nature": "",
    "ability": "",
    "tera_type": "",
    "item": "",
    "moves": [
        "(No Move)",
        "(No Move)",
        "(No Move)",
        "(No Move)"
    ]
}

function pokemon_format(pokemon) {
    pokemon = pokemon.split('\n')
    // console.log(pokemon)
    var pokemon_dict = JSON.parse(JSON.stringify(format))
    pokemon_dict['name'] = pokemon[0].split('@')[0].trim()
    for (var i = 0; i < showdownToCalcFormes.length; ++i) {
        if (pokemon_dict['name'] == showdownToCalcFormes[i][0])
            pokemon_dict['name'] = showdownToCalcFormes[i][1]
    }
    pokemon_dict['item'] = pokemon[0].split('@')[1].trim()
    pokemon_dict['ability'] = pokemon[1].split(':')[1].trim()
    pokemon_dict['level'] = pokemon[2].split(':')[1].trim()
    pokemon_dict['tera_type'] = pokemon[3].split(':')[1].trim()

    let regex = /(\d+)\s(HP|Atk|Def|SpA|SpD|Spe)/g;
    let match;

    while ((match = regex.exec(pokemon[4])) !== null) {
        let value = parseInt(match[1], 10);
        let attribute = match[2];
        pokemon_dict['evs'][attribute] = value;
    }

    var move_index = 6
    pokemon_dict['nature'] = pokemon[5].split(' ')[0].trim()
    if (pokemon[6].includes('IVs')) {
        while ((match = regex.exec(pokemon[6])) !== null) {
            let value = parseInt(match[1], 10);
            let attribute = match[2];
            pokemon_dict['ivs'][attribute] = value;
        }
        move_index += 1
    }

    for (i = 0; i < 4; i++) {
        pokemon_dict['moves'][i] = pokemon[move_index + i].split('-')[1].trim()
    }
    // console.log(pokemon_dict)
    return pokemon_dict
}

function pokemon_easy_format(pokemon_list) {
    result = []
    for (var i = 0; i < pokemon_list.length; i++) {
        pokemon_name = pokemon_list[i]['name']
        moves = pokemon_list[i]['moves']
        var pokemon_dict = JSON.parse(JSON.stringify(format))
        pokemon_dict['name'] = pokemon_name
        for (var j = 0; j < moves.length; j++) {
            pokemon_dict['moves'][j] = moves[j]
        }
        result.push(pokemon_dict)
    }
    return result
}

function set_pokemon(pokemon_dict, pn) {
    $(document).ready(function () {
        // $('#p1 select.type1').val('Fire')
        // $('#p1 select.type1').change()

        // $("input:checkbox[id='vessel-of-ruin']").prop("checked", true)
        // $("input:checkbox[id='vessel-of-ruin']").prop("checked", true).change()

        $('#p' + pn + ' input.set-selector').val(pokemon_dict['name'] + ' (Blank Set)')
        $('#p' + pn + ' input.set-selector').change()

        $('#p' + pn + ' .hp .evs').val(pokemon_dict['evs']['HP'])
        $('#p' + pn + ' .hp .evs').change()
        $('#p' + pn + ' .at .evs').val(pokemon_dict['evs']['Atk'])
        $('#p' + pn + ' .ak .evs').change()
        $('#p' + pn + ' .df .evs').val(pokemon_dict['evs']['Def'])
        $('#p' + pn + ' .df .evs').change()
        $('#p' + pn + ' .sa .evs').val(pokemon_dict['evs']['SpA'])
        $('#p' + pn + ' .sa .evs').change()
        $('#p' + pn + ' .sd .evs').val(pokemon_dict['evs']['SpD'])
        $('#p' + pn + ' .sd .evs').change()
        $('#p' + pn + ' .sp .evs').val(pokemon_dict['evs']['Spe'])
        $('#p' + pn + ' .sp .evs').change()

        $('#p' + pn + ' select.item').val(pokemon_dict['item'])
        $('#p' + pn + ' select.item').change()

        for (var i = 0; i < 4; i++) {
            $('#p' + pn + ' select.move-selector').eq(i).val(pokemon_dict['moves'][i])
            $('#p' + pn + ' select.move-selector').eq(i).change()
        }
    });
}

function set_evs(type, ev) {
    $(document).ready(function () {
        $('#p2 .' + type + ' .evs').val(ev)
        $('#p2 .' + type + ' .evs').change()
    });
}

function get_atk_type() {
    atk = $('.at .total').eq(1).text()
    sat = $('.sa .total').eq(1).text()
    return atk > sat ? 'at' : 'sa'
}

function main(p1, p2) {
    $(document).ready(function () {
        removeWeather()
    });


    p1_dict = pokemon_format(p1)
    p2_dict_list = pokemon_easy_format(p2_list)
    for (var i = 0; i < p2_dict_list.length; i++) {
        set_pokemon(p2_dict_list[i], 2)
        atk = get_atk_type()
        for (var j = 0; j < ev_ranges.length; j++) {
            set_evs(atk, ev_ranges[j])
            $(document).ready(function () {
                console.log(damageResults)
                console.log(damageResults)
            });
        }
    }
}

main(p1, p2)