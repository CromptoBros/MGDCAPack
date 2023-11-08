$ItemFiltersAPI.registerCustomFilter('tetra_hammers', (itemstack) => {
  let leftIsHammer = tetraHasPart(
    itemstack,
    'tetra:modular_double',
    'double/basic_hammer_left_material'
  )
  let rightIsHammer = tetraHasPart(
    itemstack,
    'tetra:modular_double',
    'double/basic_hammer_right_material'
  )

  return leftIsHammer && rightIsHammer
})

let doubleHammerExample = {
  Damage: 0,
  HideFlags: 1,
  'double/basic_axe_right_material': 'basic_axe/stone',
  'double/basic_handle_material': 'basic_handle/stick',
  'double/basic_pickaxe_left_material': 'basic_pickaxe/stone',
  'double/handle': 'double/basic_handle',
  'double/head_left': 'double/basic_pickaxe_left',
  'double/head_right': 'double/basic_axe_right',
  honing_progress: 290,
  id: 'dd1306db-55ba-4962-b120-cc62a1c61347',
}
