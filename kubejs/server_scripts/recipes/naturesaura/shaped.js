ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/shaped/';

    const recipes = [
        {
            output: '8x naturesaura:crimson_aura_mushroom',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:crimson_fungus',
                B: 'naturesaura:gold_powder'
            },
            id: `${id_prefix}crimson_aura_mushroom`
        },
        {
            output: '8x naturesaura:warped_aura_mushroom',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:warped_fungus',
                B: 'naturesaura:gold_powder'
            },
            id: `${id_prefix}warped_aura_mushroom`
        },
        {
            output: 'naturesaura:moss_generator',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:essences/earth',
                B: 'minecraft:moss_block',
                C: 'naturesaura:infused_stone'
            },
            id: `${id_prefix}moss_generator`
        },
        {
            output: 'naturesaura:firework_generator',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: 'minecraft:firework_rocket',
                C: '#c:essences/air',
                D: 'pneumaticcraft:cannon_barrel',
                E: '#c:essences/fire'
            },
            id: `${id_prefix}firework_generator`
        },
        {
            output: 'naturesaura:potion_generator',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'minecraft:nether_bricks',
                B: '#c:ingots/hallowed_gold',
                C: 'supplementaries:lumisene_bottle',
                D: 'minecraft:sponge',
                E: '#c:essences/earth'
            },
            id: `${id_prefix}potion_generator`
        },
        {
            output: 'naturesaura:chorus_generator',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'minecraft:purpur_block',
                B: '#c:gems/pulsating_crystal',
                C: '#c:essences/air',
                D: 'minecraft:chorus_flower',
                E: '#c:essences/fire'
            },
            id: `${id_prefix}chorus_generator`
        },
        {
            output: 'naturesaura:animal_generator',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'minecraft:nether_bricks',
                B: '#c:gems/empowered_emeradic',
                C: 'supplementaries:gold_bars',
                D: '#c:nuggets/soularium',
                E: '#c:essences/water'
            },
            id: `${id_prefix}animal_generator`
        },
        {
            output: 'naturesaura:generator_limit_remover',
            pattern: ['ABA', 'CFD', 'AEA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: '#c:essences/air',
                C: '#c:essences/earth',
                D: '#c:essences/fire',
                E: '#c:essences/water',
                F: 'create:electron_tube'
            },
            id: `${id_prefix}generator_limit_remover`
        },
        {
            output: 'naturesaura:nature_altar',
            pattern: [' A ', 'BBB', 'CCC'],
            key: {
                A: '#c:gems/source',
                B: 'minecraft:moss_block',
                C: 'minecraft:chiseled_tuff'
            },
            id: `${id_prefix}nature_altar`
        },
        {
            output: 'naturesaura:crushing_catalyst',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:ingots/infused_iron',
                B: 'naturesaura:infused_stone',
                C: 'theurgy:crystallized_water'
            },
            id: `${id_prefix}crushing_catalyst`
        },
        {
            output: 'naturesaura:conversion_catalyst',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:ingots/infused_iron',
                B: 'naturesaura:infused_stone',
                C: 'aether:ambrosium_block'
            },
            id: `${id_prefix}conversion_catalyst`
        },
        {
            output: 'naturesaura:hopper_upgrade',
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#c:ingots/infused_iron',
                B: 'aether:enchanted_gravitite',
                C: 'minecraft:hopper'
            },
            id: `${id_prefix}hopper_upgrade`
        },
        {
            output: 'naturesaura:offering_table',
            pattern: ['ABA', 'CAD', 'EEE'],
            key: {
                A: 'naturesaura:infused_stone',
                B: '#c:ingots/infused_iron',
                C: '#c:essences/earth',
                D: '#c:essences/water',
                E: 'naturesaura:ancient_planks'
            },
            id: `${id_prefix}offering_table`
        },
        {
            output: 'naturesaura:field_creator',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'minecraft:glass',
                B: '#c:essences/air',
                C: '#c:gems/pulsating_crystal',
                D: '#c:essences/earth'
            },
            id: `${id_prefix}field_creator`
        },
        {
            output: 'naturesaura:snow_creator',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'naturesaura:infused_brick',
                B: '#c:essences/water',
                C: '#c:essences/air',
                D: 'minecraft:pumpkin'
            },
            id: `${id_prefix}snow_creator`
        },
        {
            output: 'naturesaura:time_changer',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: 'ars_nouveau:ritual_sunrise',
                C: '#c:ingots/infused_iron',
                D: 'ars_technica:calibrated_precision_mechanism',
                E: 'ars_nouveau:ritual_moonfall'
            },
            id: `${id_prefix}time_changer`
        },
        {
            output: 'naturesaura:weather_changer',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: 'ars_nouveau:ritual_cloudshaping',
                C: 'minecraft:fire_charge',
                D: 'ars_technica:calibrated_precision_mechanism',
                E: 'minecraft:sunflower',
                F: 'minecraft:dark_prismarine'
            },
            id: `${id_prefix}weather_changer`
        },
        {
            output: 'naturesaura:death_ring',
            pattern: ['ABC', 'D D', 'EDE'],
            key: {
                A: '#c:tokens/earth',
                B: 'minecraft:skeleton_skull',
                C: '#c:tokens/air',
                D: '#c:ingots/hallowed_gold',
                E: 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:end"}]'
            },
            id: `${id_prefix}death_ring`
        },
        {
            output: 'naturesaura:light_staff',
            pattern: [' CB', ' DA', 'D  '],
            key: {
                A: '#c:essences/fire',
                B: '#c:dusts/glowstone',
                C: '#c:essences/air',
                D: 'naturesaura:ancient_stick'
            },
            id: `${id_prefix}light_staff`
        },
        {
            output: 'naturesaura:mover_cart',
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: 'naturesaura:infused_brick',
                B: '#c:ingots/infused_iron',
                C: 'minecraft:minecart'
            },
            id: `${id_prefix}mover_cart`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
