$(document).ready(function() {
    console.log('tatsugiri.js loaded')
    $('#p1 select.type1').val('Fire')
    $('#p1 select.type1').change()

    $('#p1 select.move-selector').eq(0).val('Flare Blitz')
    $('#p1 select.move-selector').eq(0).change()
    
    $("input:checkbox[id='vessel-of-ruin']").prop("checked", true)
    $("input:checkbox[id='vessel-of-ruin']").prop("checked", true).change()
    
    $("#p1 .hp .evs").val(666)
    $("#p1 .hp .evs").change()
    
    $('#p1 select.ability').val("Simple")
    $("#p1 select.ability").change() 

    $('#p1 input.set-selector').val('Abomasnow (Blank Set)')
    $('#p1 input.set-selector').change()

    console.log($('#damageValues').text())
});

p1 = "Abomasnow @ Focus Sash\nAbility: Snow Warning\nLevel: 50\nTera Type: Water\nEVs: 252 HP / 220 SpA / 36 Spe \nModest Nature\nIVs: 0 Atk / 21 SpD \n- Blizzard\n- Leaf Storm\n- Aurora Veil\n- Earth Power\n"

p2 = "Chi-Yu @ Choice Specs\nAbility: Beads of Ruin\nLevel: 50\nTera Type: Fire\nEVs: 252 HP / 164 Def / 28 SpA / 4 SpD / 60 Spe \nBold Nature\nIVs: 0 Atk \n- Heat Wave\n- Snarl\n- Dark Pulse\n- Overheat\n"

format = {
    "name": "",
    "type1": "",
    "type2": "",
    "level": 50,
    "evs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
    },
    "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
    },
    "boost": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
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

function set_pokemon(pokemon, pn) {
    pokemon = pokemon.split('\n')
    console.log(pokemon)
    var pokemon_dict = format
    pokemon_dict['name'] = pokemon[0].split('@')[0].trim()
    pokemon_dict['item'] = pokemon[0].split('@')[1].trim()
    pokemon_dict['ability'] = pokemon[1].split(':')[1].trim()
    pokemon_dict['level'] = pokemon[2].split(':')[1].trim()
    pokemon_dict['tera_type'] = pokemon[3].split(':')[1].trim()
    if (pokemon[4].includes("HP")) {
        pokemon_dict['evs']['hp'] = pokemon[4].split(':')[1].split(' ')[0].trim()
    }
    if (pokemon[4].includes("Atk")) {
        pokemon_dict['evs']['at'] = pokemon[4].split(':')[1].split(' ')[0].trim()
    }
    if (pokemon[4].includes("Def")) {
        pokemon_dict['evs']['df'] = pokemon[4].split(':')[1].split(' ')[0].trim()
    }
    if (pokemon[4].includes("SpA")) {
        pokemon_dict['evs']['sa'] = pokemon[4].split(':')[1].split(' ')[0].trim()
    }
    if (pokemon[4].includes("SpD")) {
        pokemon_dict['evs']['sd'] = pokemon[4].split(':')[1].split(' ')[0].trim()
    }
    if (pokemon[4].includes("SpD")) {
        pokemon_dict['evs']['sp'] = pokemon[4].split(':')[1].split(' ')[0].trim()
    }
    pokemon_dict['nature'] = pokemon[5].split(' ')[0].trim()
    if (pokemon[6].includes('IVs')) {
        if (pokemon[6].includes('HP')) {
            pokemon_dict['ivs']['hp'] = pokemon[6].split(':')[1].split(' ')[0].trim()
        }
        if (pokemon[6].includes('Atk')) {
            pokemon_dict['ivs']['at'] = pokemon[6].split(':')[1].split(' ')[0].trim()
        }
        if (pokemon[6].includes('Def')) {
            pokemon_dict['ivs']['df'] = pokemon[6].split(':')[1].split(' ')[0].trim()
        }
        if (pokemon[6].includes('SpA')) {
            pokemon_dict['ivs']['sa'] = pokemon[6].split(':')[1].split(' ')[0].trim()
        }
        if (pokemon[6].includes('SpD')) {
            pokemon_dict['ivs']['sd'] = pokemon[6].split(':')[1].split(' ')[0].trim()
        }
        if (pokemon[6].includes('Spe')) {
            pokemon_dict['ivs']['sp'] = pokemon[6].split(':')[1].split(' ')[0].trim()
        }
    }
    for (i = 0; i < 4; i++) {
        if (pokemon[7 + i].split('-').length > 1) {
            pokemon_dict['moves'][i] = pokemon[7 + i].split('-')[0].trim()
        }
    }
    console.log(pokemon_dict)
}

set_pokemon(p1, 1)