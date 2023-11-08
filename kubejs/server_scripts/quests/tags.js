ServerEvents.tags('item', (tag) => {
  tag.add('ftbuniversity:useful_things/mob_spawners', [
    'mob_grinding_utils:dreadful_dirt',
    'mob_grinding_utils:delightful_dirt',
    'mob_grinding_utils:entity_spawner',
    'botania:spawner_claw',
    'pneumaticcraft:spawner_agitator',
    'pneumaticcraft:pressurized_spawner',
    'rftoolsutility:spawner',
    'soulshards:soul_cage',
    'minecraft:spawner',
    'evilcraft:spirit_reanimator',
    'naturesaura:animal_spawner',
  ])

  tag.add('ftbuniversity:useful_things/mob_movers', [
    'mob_grinding_utils:entity_conveyor',
    'mob_grinding_utils:fan',
    'botania:light_launcher',
    'botania:light_relay',
    'create:encased_fan',
    'create:belt_connector',
    'immersiveengineering:conveyor_basic',
    'darkutils:vector_plate',
    'darkutils:vector_plate_fast',
    'darkutils:vector_plate_extreme',
  ])

  tag.add('ftbuniversity:useful_things/mob_killers', [
    'mob_grinding_utils:spikes',
    'mob_grinding_utils:saw',
    'botania:hyacidus',
    'botania:heisei_dream',
    'botania:bellethorn',
    'pneumaticcraft:sentry_turret',
    'ars_nouveau:basic_spell_turret',
    'rftoolsbuilder:shield_block1',
    'botania:lens_damage',
    'ars_nouveau:drygmy_charm',
    'darkutils:damage_plate',
    'darkutils:damage_plate_player',
    'evilcraft:spirit_furnace',
  ])

  tag.add('ftbuniversity:useful_things/fe_gen', [
    'mekanismgenerators:heat_generator',
    'mekanismgenerators:solar_generator',
    'mekanismgenerators:gas_burning_generator',
    'mekanismgenerators:bio_generator',
    'mekanismgenerators:advanced_solar_generator',
    'mekanismgenerators:wind_generator',
    'mekanismgenerators:turbine_valve',
    'mekanismgenerators:fusion_reactor_port',
    'rftoolspower:blazing_generator',
    'rftoolspower:coalgenerator',
    'rftoolspower:endergenic',
    'integrateddynamics:coal_generator',
    'botania:mana_fluxfield',
    'naturesaura:rf_converter',
    'immersiveengineering:lightning_rod',
    'immersiveengineering:diesel_generator',
    'pneumaticcraft:pneumatic_dynamo',
  ])

  tag.add('ftbuniversity:useful_things/fe_transfer', [
    /universal_cable/,
    /part.*energy/,
    'ae2:fe_p2p_tunnel',
    'modularrouters:modular_router',
  ])

  tag.add('ftbuniversity:useful_things/fe_filler', [
    /energy_cube/,
    'mekanism:chargepad',
    'rftoolspower:dimensionalcell',
    'rftoolspower:dimensionalcell_advanced',
    'rftoolspower:dimensionalcell_simple',
    /world_energy/,
  ])

  tag.add('ftbuniversity:useful_things/fe_teleporter', [
    'rftoolspower:dimensionalcell',
    'rftoolspower:dimensionalcell_advanced',
    'rftoolspower:dimensionalcell_simple',
    'mekanism:quantum_entangloporter',
    'fluxnetworks:flux_plug',
    'fluxnetworks:flux_point',
  ])

  tag.add('ftbuniversity:useful_things/fe_storage', [
    /power:cell/,
    'rftoolspower:dimensionalcell',
    'rftoolspower:dimensionalcell_advanced',
    'rftoolspower:dimensionalcell_simple',
    /induction_cell/,
    /energy_cube/,
    'integrateddynamics:energy_battery',
    /fluxnetworks:.*flux_storage/,
  ])

  tag.add('ftbuniversity:useful_things/inventory_chargers', [
    'integrateddynamics:energy_battery',
    'pneumaticcraft:aerial_interface',
    'fluxnetworks:flux_controller',
  ])

  tag.add('ftbuniversity:useful_things/item_storage', [
    'ae2:chest',
    /item_storage_cell/,
    /mekanism:personal/,
    /ironchest:(iron|gold|diamond|crystal|obsidian)_chest$/,
    /functionalstorage:oak_(1|2|4)/,
    'functionalstorage:armory_cabinet',
    'functionalstorage:ender_drawer',
    // 'nabba:better_barrel',
    // 'nabba:anti_barrel',
    // 'nabba:barrel_interface',
    /pneum.*chest$/,
    'ars_nouveau:storage_lectern',
    'ars_nouveau:bookwyrm_charm',
  ])

  tag.add('ftbuniversity:useful_things/item_transfer', [
    'quark:pipe',
    'prettypipes:pipe',
    /mekanism.*transporter/,
    'laserio:laser_node',
    'xnet:connector_blue',
    'integratedtunnels:part_importer_item',
    'integratedtunnels:part_exporter_item',
    'ae2:import_bus',
    'ae2:export_bus',
    'create:belt_connector',
    'create:mechanical_arm',
    'create:minecart_contraption',
    'mekanism:quantum_entangloporter',
    'pneumaticcraft:logistics_drone',
    'pneumaticcraft:logistics_module',
    'modularrouters:modular_router',
    'sfm:manager',
    'rftoolscontrol:processor',
    'rftoolscontrol:node',
    'immersiveengineering:conveyor_basic',
    'ars_nouveau:starbuncle_charm',
  ])

  tag.add('ftbuniversity:useful_things/fluid_storage', [
    'mekanism:dynamic_tank',
    /(basic|advanced|elite|ultimate)_fluid_tank/,
    'pneumaticcraft:small_tank',
    'pneumaticcraft:medium_tank',
    'pneumaticcraft:large_tank',
    'pneumaticcraft:huge_tank',
    /rft.*tank/,
    'create:fluid_tank',
    'mob_grinding_utils:tank',
    'mob_grinding_utils:jumbo_tank',
  ])

  tag.add('ftbuniversity:useful_things/fluid_transfer', [
    /mechanical_pipe/,
    'create:fluid_pipe',
    'mekanism:quantum_entangloporter',
    'pneumaticcraft:logistics_drone',
    'modularrouters:modular_router',
    'sfm:manager',
    'rftoolscontrol:processor',
    'rftoolscontrol:node',
    'create:minecart_contraption',
    'immersiveengineering:fluid_pipe',
  ])

  tag.add('ftbuniversity:useful_things/quarry', [
    'rftoolsbuilder:shape_card_quarry',
    'rftoolsbuilder:shape_card_quarry_clear',
    'rftoolsbuilder:shape_card_quarry_clear_fortune',
    'rftoolsbuilder:shape_card_quarry_clear_silk',
    'rftoolsbuilder:shape_card_quarry_fortune',
    'rftoolsbuilder:shape_card_quarry_silk',
    'mekanism:digital_miner',
    'botania:orechid',
    'create:mechanical_drill',
  ])

  tag.add('ftbuniversity:useful_things/pump', [
    'mekanism:electric_pump',
    'create:mechanical_pump',
    'create:hose_pulley',
    'rftoolsbuilder:shape_card_pump',
    'rftoolsbuilder:shape_card_pump_clear',
    'immersiveengineering:fluid_pump',
  ])

  tag.add('ftbuniversity:useful_things/flight', [
    'mekanism:jetpack',
    'mekanism:jetpack_armored',
    'mekanism:module_jetpack_unit',
    'botania:flight_tiara',
    'ars_nouveau:ritual_flight',
    'rftoolsutility:flight_module',
    'pneumaticcraft:jet_boots_upgrade_1',
  ])

  tag.add('ftbuniversity:useful_things/player_transfer', [
    'elevatorid:elevator_white',
    'pneumaticcraft:elevator_base',
    'rftoolsutility:matter_transmitter',
    'rftoolsutility:matter_receiver',
    'rftoolsutility:charged_porter',
    'mekanism:teleporter',
    'ars_nouveau:warp_scroll',
    'create:minecart_contraption',
    'botania:light_relay',
  ])

  let arsTiers = [
    [
      '1',
      [
        'phantom_block',
        'toss',
        'cut',
        'summon_wolves',
        'snare',
        'evaporate',
        'touch',
        'pickup',
        'launch',
        'rotate',
        'ignite',
        'harm',
        'amplify',
        'bounce',
        'leap',
        'sensitive',
        'redstone_signal',
        'interact',
        'place_block',
        'harvest',
        'gust',
        'freeze',
        'summon_steed',
        'self',
        'break',
        'rune',
        'craft',
        'pull',
        'delay',
        'projectile',
        'underfoot',
        'light',
        'dispel',
      ],
      [
        'not_aquatic_filter',
        'not_insect_filter',
        'not_aerial_filter',
        'insect_filter',
        'conjure_terrain',
        'not_undead_filter',
        'undead_filter',
        'fiery_filter',
        'aquatic_filter',
        'aerial_filter',
        'not_fiery_filter',
        'not_summon_filter',
        'summon_filter',
      ],
    ],
    [
      '2',
      [
        'invisibility',
        'fortune',
        'grow',
        'name',
        'dampen',
        'gravity',
        'firework',
        'crush',
        'conjure_water',
        'smelt',
        'heal',
        'exchange',
        'fell',
        'duration_down',
        'ender_inventory',
        'aoe',
        'decelerate',
        'extend_time',
        'accelerate',
        'flare',
        'explosion',
        'wind_shear',
        'sense_magic',
        'pierce',
        'slowfall',
        'extract',
        'cold_snap',
        'infuse',
        'animate_block',
      ],
      [
        'poison_spores',
        'charm',
        'discharge',
        'watery_grave',
        'propagator_arc',
        'curved_projectile',
        'phantom_grasp',
        'bubble_shield',
      ],
    ],
    [
      '3',
      [
        'wither',
        'split',
        'lightning',
        'blink',
        'glide',
        'fangs',
        'intangible',
        'wall',
        'summon_vex',
        'orbit',
        'summon_undead',
        'summon_decoy',
        'hex',
        'linger',
      ],
      ['propagator_homing', 'life_link', 'homing_projectile'],
    ],
  ]

  for (let tierAndGlyphs of arsTiers) {
    let tier = tierAndGlyphs[0]
    let glyphs = tierAndGlyphs[1]
    let addonGlyphs = tierAndGlyphs[2]

    for (let glyph of glyphs) {
      tag.add(`ftbuniversity:tier_${tier}_glyph`, `ars_nouveau:glyph_${glyph}`)
    }
    for (let glyph of addonGlyphs) {
      tag.add(
        `ftbuniversity:tier_${tier}_glyph`,
        `ars_elemental:glyph_${glyph}`
      )
    }
  }

  tag.add('ftbuniversity:tetra_salvage_items', [
    'tetra:forged_bolt',
    'tetra:forged_beam',
    'tetra:quick_latch',
    'tetra:metal_scrap',
    'tetra:vent_plate',
    'tetra:planar_stabilizer',
    'tetra:thermal_cell',
    'tetra:combustion_chamber',
    'tetra:lubricant_dispenser',
  ])

  tag.add('ftbuniversity:apotheosis/eterna', [
    'minecraft:bookshelf',
    'botania:mana_pylon',
    'botania:natura_pylon',
    'botania:gaia_pylon',
    /quark:(blossom|azalea|ancient|spruce|birch|jungle|acacia|dark_oak|crimson|warped|mangrove|bamboo)_bookshelf/,
    'hexcasting:akashic_bookshelf',
    /apotheosis:.*(hell|sea|end|bee|melon|deep|sculk|stone)shelf/,
  ])

  tag.add('ftbuniversity:apotheosis/quanta', [
    'minecraft:skeleton_skull',
    'minecraft:wither_skeleton_skull',
    'minecraft:zombie_head',
    'minecraft:creeper_head',
    /apotheosis:.*(hell|bee|melon|sculk)shelf/,
    'apotheosis:crystal_seashelf',
    'apotheosis:endshelf',
    'apotheosis:pearl_endshelf',
    'apotheosis:deepshelf',
    'apotheosis:soul_touched_deepshelf',
  ])

  tag.add('ftbuniversity:apotheosis/arcana', [
    /minecraft:.*candle/,
    'apotheosis:glowing_hellshelf',
    /apotheosis:.*(sea|sculk|stone)shelf/,
    'apotheosis:endshelf',
    'apotheosis:pearl_endshelf',
    'apotheosis:echoing_deepshelf',
    'apotheosis:deepshelf',
  ])

  tag.add('ftbuniversity:apotheosis/rectification', [
    'minecraft:amethyst_cluster',
    'apotheosis:heart_seashelf',
    'apotheosis:rectifier_t2',
    'apotheosis:rectifier',
    'apotheosis:rectifier_t3',
    'apotheosis:soul_touched_sculkshelf',
  ])

  tag.add('ftbuniversity:apotheosis/clue', [
    'apotheosis:blazing_hellshelf',
    'apotheosis:sightshelf',
    'apotheosis:sightshelf_t2',
    'apotheosis:echoing_sculkshelf',
  ])
})

ServerEvents.tags('block', (tag) => {
  tag.add('ftbuniversity:extractor_schematics', /tetra:extractor/)
  tag.add('ftbuniversity:stonecutter_schematics', /tetra:stonecutter_/)
  tag.add('ftbuniversity:earthpiercer_schematics', /tetra:earthpiercer_/)
  tag.add('ftbuniversity:tetra_schematics', [
    '#ftbuniversity:earthpiercer_schematics',
    '#ftbuniversity:stonecutter_schematics',
    '#ftbuniversity:extractor_schematics',
  ])
})
