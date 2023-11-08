ServerEvents.recipes((recipe) => {
  let slabs = [
    'acacia',
    'birch',
    'crimson',
    'dark_oak',
    'jungle',
    'oak',
    'spruce',
    'warped',
    'mangrove',
    'blackstone',
  ]
  for (let slab of slabs) {
    recipe.shapeless(`railways:track_${slab}`, [
      'create:track',
      `minecraft:${slab}_slab`,
    ])
  }

  let quarkChests = [
    ['quark:ancient_chest', 'quark:ancient_planks'],
    ['quark:bamboo_chest', 'quark:bamboo_planks'],
    ['quark:blossom_chest', 'quark:blossom_planks'],
    ['quark:oak_chest', 'minecraft:oak_planks'],
    ['quark:spruce_chest', 'minecraft:spruce_planks'],
    ['quark:birch_chest', 'minecraft:birch_planks'],
    ['quark:jungle_chest', 'minecraft:jungle_planks'],
    ['quark:acacia_chest', 'minecraft:acacia_planks'],
    ['quark:dark_oak_chest', 'minecraft:dark_oak_planks'],
    ['quark:crimson_chest', 'minecraft:crimson_planks'],
    ['quark:warped_chest', 'minecraft:warped_planks'],
    ['quark:mangrove_chest', 'minecraft:mangrove_planks'],
    ['quark:nether_brick_chest', 'minecraft:nether_bricks'],
    ['quark:purpur_chest', 'minecraft:purpur_block'],
    ['quark:prismarine_chest', 'minecraft:prismarine'],
    ['quark:azalea_chest', 'quark:azalea_planks'],
  ]

  recipe.shaped('minecraft:chest', ['PPP', 'P P', 'PPP'], {
    P: '#minecraft:planks',
  })

  for (let i of quarkChests) {
    let chest = i[0]
    let ingredient = i[1]

    recipe.remove({ output: chest })
    recipe.shapeless(chest, ['minecraft:chest', ingredient])
  }

  recipe.remove({ id: 'computercraft:wireless_modem_normal' })
  recipe.shaped('computercraft:wireless_modem_normal', ['SSS', 'SES', 'SRS'], {
    S: '#bookshelf:stones',
    E: 'minecraft:ender_pearl',
    R: 'minecraft:redstone',
  })

  recipe.remove({ id: 'crittersandcompanions:iron_dragonfly_armor' })
  recipe.shaped(
    'crittersandcompanions:iron_dragonfly_armor',
    ['I  ', 'I  ', 'I  '],
    {
      I: 'minecraft:iron_ingot',
    }
  )

  recipe.remove({ id: 'quark:building/crafting/sturdy_stone' })
  recipe.shaped('quark:sturdy_stone', ['CCC', 'CSC', 'CCC'], {
    C: 'minecraft:cobblestone',
    S: 'minecraft:stone',
  })

  recipe.remove({ id: 'soulshards:vile_dust_alt' })
  recipe.remove({ id: 'create:smelting/scoria' })
  recipe.smelting('create:scoria', 'minecraft:soul_soil')

  recipe.stonecutting('mekanism:ingot_lead', 'immersiveengineering:ingot_lead')
  recipe.stonecutting(
    'mekanism:ingot_uranium',
    'immersiveengineering:ingot_uranium'
  )

  recipe.remove({ id: 'jaopca:mekanism.material_to_dust.fluix' })
})

ServerEvents.tags('item', (event) => {
  let replaceTags = [
    ['forge:storage_blocks/compressed_stone', 'compressium:stone_1'],
    ['forge:storage_blocks/double_compressed_stone', 'compressium:stone_2'],
    ['forge:storage_blocks/triple_compressed_stone', 'compressium:stone_3'],
    ['forge:storage_blocks/compressed_dirt', 'compressium:dirt_1'],
    ['forge:storage_blocks/double_compressed_dirt', 'compressium:dirt_2'],
    ['forge:storage_blocks/triple_compressed_dirt', 'compressium:dirt_3'],
    ['forge:storage_blocks/compressed_obsidian', 'compressium:obsidian_1'],
    [
      'forge:storage_blocks/double_compressed_obisidian',
      'compressium:obsidian_2',
    ],
  ]

  for (let [tag, item] of replaceTags) {
    event.removeAll(tag)
    event.add(tag, item)
  }
})
