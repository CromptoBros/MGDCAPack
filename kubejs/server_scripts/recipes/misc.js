ServerEvents.recipes((recipe) => {
  let removeOutput = (item) => recipe.remove({ output: item })
  let removeInput = (item) => recipe.remove({ input: item })
  let removeFromRecipes = (item) => {
    removeOutput(item)
    removeInput(item)
  }
  for (let item of global.itemsToRemove) {
    removeFromRecipes(item)
    if (global.debug) console.info(`Removed ${item} from recipes`)
  }

  for (let item of global.removedBecauseBugged) {
    removeFromRecipes(item)
    if (global.debug)
      console.info(`Removed ${item} from recipes, as it's bugged`)
  }

  recipe.remove({ mod: 'itemfilters' })

  recipe.shapeless('quark:matrix_enchanter', 'minecraft:enchanting_table')
  recipe.shapeless('minecraft:enchanting_table', 'quark:matrix_enchanter')

  let holosphere = Item.of(
    'tetra:holo',
    '{"holo/core":"holo/core","holo/core_material":"core/dim","holo/frame":"holo/frame","holo/frame_material":"frame/ancient","holo/repo":"holo/repo","holo/repo_material":"repo/default","holo/scanner":"holo/scanner","holo/scanner_material":"scanner/default",id:"9503de92-046c-4d61-8afe-8c0d71c6afae"}'
  )
  recipe.shapeless(holosphere, ['minecraft:book', 'minecraft:wooden_pickaxe'])

  recipe.shaped('4x minecraft:chest', ['LLL', 'L L', 'LLL'], {
    L: '#minecraft:logs',
  })

  recipe.recipes.mekanismCrushing('ae2:ender_dust', 'minecraft:ender_pearl')
  recipe.recipes.mekanismCrushing('6x minecraft:bone_meal', 'minecraft:bone')

  recipe.recipes.mekanismSawing(
    '#integrateddynamics:menril_logs',
    '6x integrateddynamics:menril_planks',
    Item.of('integrateddynamics:crystalized_menril_chunk').withChance(0.25)
  )

  recipe.smelting('tinyredstone:silicon', 'tinyredstone:silicon_compound')

  recipe.remove({ id: 'integrateddynamics:blasting/menril_log_filled_coal' })
  recipe.remove({ id: 'integrateddynamics:blasting/menril_log_coal' })

  recipe.remove({ id: /functionalstorage:.*alternate/ })

  for (let dimension of ['overworld', 'nether', 'end']) {
    recipe.smelting(
      '4x rftoolsbase:dimensionalshard',
      `rftoolsbase:dimensionalshard_${dimension}`
    )
  }

  recipe.shapeless('ae2:guide', ['minecraft:book', 'ae2:certus_quartz_crystal'])
})
