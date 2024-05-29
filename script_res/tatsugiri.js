// $(document).ready(function() {
//     console.log('tatsugiri.js loaded')
//     $('#p1 select.type1').val('Fire')
//     $('#p1 select.type1').change()

//     $('#p1 select.move-selector').eq(0).val('Flare Blitz')
//     $('#p1 select.move-selector').eq(0).change()
    
//     $("input:checkbox[id='vessel-of-ruin']").prop("checked", true)
//     $("input:checkbox[id='vessel-of-ruin']").prop("checked", true).change()
    
//     $("#p1 .hp .evs").val(666)
//     $("#p1 .hp .evs").change()
    
//     $('#p1 select.ability').val("Simple")
//     $("#p1 select.ability").change() 

//     $('#p1 input.set-selector').val('Abomasnow (Blank Set)')
//     $('#p1 input.set-selector').change()

//     console.log($('#damageValues').text())
// });

p1 = "Urshifu-Rapid-Strike @ Mystic Water\nAbility: Unseen Fist\nLevel: 50\nTera Type: Water\nEVs: 4 HP / 252 Atk / 252 Spe\nJolly Nature\n- Surging Strikes\n- Close Combat\n- Aqua Jet\n- Rock Slide"

p2 = "Chi-Yu @ Choice Specs\nAbility: Beads of Ruin\nLevel: 50\nTera Type: Fire\nEVs: 252 HP / 164 Def / 28 SpA / 4 SpD / 60 Spe \nBold Nature\nIVs: 0 Atk \n- Heat Wave\n- Snarl\n- Dark Pulse\n- Overheat\n"

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
        "",
        "",
        "",
        ""
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

function set_pokemon(pokemon_dict, pn) {
    $(document).ready(function() {
        // $('#p1 select.type1').val('Fire')
        // $('#p1 select.type1').change()
    
        // $('#p1 select.move-selector').eq(0).val('Flare Blitz')
        // $('#p1 select.move-selector').eq(0).change()
        
        // $("input:checkbox[id='vessel-of-ruin']").prop("checked", true)
        // $("input:checkbox[id='vessel-of-ruin']").prop("checked", true).change()
        
        // $("#p1 .hp .evs").val(666)
        // $("#p1 .hp .evs").change()
        
        // $('#p1 select.ability').val("Simple")
        // $("#p1 select.ability").change() 
    
        // $('#p1 input.set-selector').val('Abomasnow (Blank Set)')
        // $('#p1 input.set-selector').change()

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

        for(var i = 0; i < 4; i++) {
            $('#p' + pn + ' select.move-selector').eq(i).val(pokemon_dict['moves'][i])
            $('#p' + pn + ' select.move-selector').eq(i).change()
        }
        // console.log($('#p' + pn + ' select.item'))

        // console.log($('#damageValues').text())
    });
}

function main(p1, p2) {
    $(document).ready(function() {
        removeWeather()
    });
    p1_dict = pokemon_format(p1)
    p2_dict = pokemon_format(p2)
    set_pokemon(p1_dict, 1)
    set_pokemon(p2_dict, 2)
    $(document).ready(function() {
        console.log(damageResults)
    });
}

main(p1, p2)
