$ItemFiltersAPI.registerCustomFilter('stonecutter', (itemstack) => {
  if (itemstack.getIdLocation().getNamespace() != 'tetra') return false

  let blade = getTetraPart(itemstack, 'sword/blade')

  if ([null, '', 'null'].includes(blade)) {
    return false
  }

  return blade.includes('stonecutter')
})

let stonecutterExample = {
  Damage: 0,
  id: '5fc9fae8-6c21-4cb0-a465-f039ee94c800',
  'sword/basic_hilt_material': 'basic_hilt/stick',
  'sword/blade': 'sword/stonecutter',
  'sword/hilt': 'sword/basic_hilt',
  'sword/stonecutter_material': 'stonecutter/stonecutter',
}
