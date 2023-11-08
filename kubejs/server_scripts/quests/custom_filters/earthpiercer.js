$ItemFiltersAPI.registerCustomFilter('earthpiercer', (itemstack) => {
  if (itemstack.getIdLocation().getNamespace() != 'tetra') return false

  let blade = getTetraPart(itemstack, 'single/earthpiercer_material')

  if ([null, '', 'null'].includes(blade)) {
    return false
  }

  return blade.includes('earthpiercer')
})

let earthpiercerExample = {
  Damage: 0,
  id: 'a6fba635-4540-4c6e-8719-b097e9a49cf4',
  'single/basic_handle_material': 'basic_handle/stick',
  'single/earthpiercer_material': 'earthpiercer/earthpiercer',
  'single/handle': 'single/basic_handle',
  'single/head': 'single/earthpiercer',
}
