ServerEvents.recipes((recipe) => {
  let mobSpawn = (entity, ingredients, aura, time) => {
    recipe.custom({
      type: 'naturesaura:animal_spawner',
      ingredients: ingredients,
      entity: entity,
      aura: aura,
      time: time,
    })
  }

  mobSpawn(
    'ars_nouveau:drygmy',
    [
      {
        item: 'naturesaura:birth_spirit',
      },
      {
        item: 'ars_nouveau:source_gem',
      },
      {
        item: 'ars_nouveau:wilden_horn',
      },
    ],
    150000,
    200
  )

  mobSpawn(
    'ars_nouveau:whirlisprig',
    [
      {
        item: 'naturesaura:birth_spirit',
      },
      {
        item: 'ars_nouveau:source_gem',
      },
      {
        item: 'ars_nouveau:green_archwood_sapling',
      },
    ],
    150000,
    200
  )

  mobSpawn(
    'ars_nouveau:starbuncle',
    [
      {
        item: 'naturesaura:birth_spirit',
      },
      {
        item: 'ars_nouveau:source_gem',
      },
      {
        item: 'minecraft:gold_nugget',
      },
    ],
    150000,
    200
  )
})
