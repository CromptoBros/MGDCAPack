const ores = [
  {
    id: 'dark_ore',
    stone: 'evilcraft:dark_ore',
    deepslate: 'evilcraft:dark_ore_deepslate',
    size: 3,
    removeAir: 0,
    chance: 0,
    count: 7,
    location: {
      min: -24,
      max: 56,
    },
  },{
    id: 'uranium',
    stone: 'mekanism:uranium_ore',
    deepslate: 'mekanism:deepslate_uranium_ore',
    size: 9,
    removeAir: 0,
    chance: 0,
    count: 7,
    location: {
      min: -24,
      max: 56,
    },
  },
  {
    id: 'tin_small',
    stone: 'mekanism:tin_ore',
    deepslate: 'mekanism:deepslate_tin_ore',
    size: 4,
    removeAir: 0,
    chance: 0,
    count: 14,
    location: {
      min: -20,
      max: 94,
    },
  },

  {
    id: 'tin_large',
    stone: 'mekanism:tin_ore',
    deepslate: 'mekanism:deepslate_tin_ore',
    size: 9,
    removeAir: 0,
    chance: 0,
    count: 12,
    location: {
      min: -32,
      max: 72,
    },
  },
  {
    id: 'lead',
    stone: 'mekanism:lead_ore',
    deepslate: 'mekanism:deepslate_lead_ore',
    size: 9,
    removeAir: 0,
    chance: 0,
    count: 8,
    location: {
      min: -24,
      max: 64,
    },
  },
  {
    id: 'nickel',
    stone: 'immersiveengineering:ore_nickel',
    size: 5,
    removeAir: 0,
    chance: 0,
    count: 7,
    location: {
      min: -64,
      max: 24,
    },
  },
  {
    id: 'deep_nickel',
    deepslate: 'immersiveengineering:deepslate_ore_nickel',
    size: 6,
    removeAir: 0,
    chance: 0,
    count: 11,
    location: {
      min: -120,
      max: -8,
    },
  },
  {
    id: 'silver',
    stone: 'immersiveengineering:ore_silver',
    deepslate: 'immersiveengineering:deepslate_ore_silver',
    size: 9,
    removeAir: 0,
    count: 10,
    chance: 0,
    location: {
      min: -48,
      max: 32,
    },
  },
  {
    id: 'aluminum',
    stone: 'immersiveengineering:ore_aluminum',
    deepslate: 'immersiveengineering:deepslate_ore_aluminum',
    size: 6,
    removeAir: 0,
    chance: 0,
    count: 22,
    location: {
      min: 32,
      max: 112,
    },
  },
  {
    id: 'zinc',
    stone: 'create:zinc_ore',
    deepslate: 'create:deepslate_zinc_ore',
    size: 12,
    removeAir: 0,
    chance: 0,
    count: 8,
    location: {
      min: -63,
      max: 70,
    },
  },
  {
    id: 'osmium_middle',
    stone: 'mekanism:osmium_ore',
    deepslate: 'mekanism:deepslate_osmium_ore',
    size: 9,
    removeAir: 0,
    chance: 0,
    count: 6,
    location: {
      min: -32,
      max: 56,
    },
  },

  {
    id: 'osmium_low',
    stone: 'mekanism:osmium_ore',
    deepslate: 'mekanism:deepslate_osmium_ore',
    size: 4,
    removeAir: 0,
    chance: 0,
    count: 8,
    location: {
      min: 0,
      max: 64,
    },
  },
  {
    id: 'fluorite',
    stone: 'mekanism:fluorite_ore',
    deepslate: 'mekanism:deepslate_fluorite_ore',
    size: 5,
    removeAir: 0.3,
    chance: 0,
    count: 5,
    location: {
      min: 0,
      max: 23,
    },
  },
  {
    id: 'dimensional',
    stone: 'rftoolsbase:dimensionalshard_overworld',
    size: 2,
    removeAir: 0,
    chance: 0,
    count: 2,
    location: {
      min: -64,
      max: 64,
    },
  },
]

WorldgenEvents.add((event) => {
  const { anchors } = event

  ores.forEach((ore) => {
    event.addOre((oreAdd) => {
      oreAdd.biomes = 'jamd:mining'
      oreAdd.id = ore.id
      if (ore.stone != null) {
        oreAdd.addTarget('#minecraft:stone_ore_replaceables', ore.stone)
      }
      if (ore.deepslate != null) {
        oreAdd.addTarget('#minecraft:deepslate_ore_replaceables', ore.deepslate)
      }
      oreAdd.size = ore.size
      oreAdd.noSurface = ore.removeAir
      oreAdd.chance = ore.chance
      oreAdd
        .count(ore.count)
        .squared()
        .triangleHeight(
          anchors.absolute(ore.location.min),
          anchors.absolute(ore.location.max)
        )
    })
  })
})
