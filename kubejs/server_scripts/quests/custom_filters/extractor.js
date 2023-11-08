$ItemFiltersAPI.registerCustomFilter('extractor', (itemstack) => {
  if (itemstack.getIdLocation().getNamespace() != 'tetra') return false

  let blade = getTetraPart(itemstack, 'double/head_right')

  if ([null, '', 'null'].includes(blade)) {
    return false
  }

  return blade.includes('extractor')
})

let extractorExample = {
  Damage: 0,
  HideFlags: 1,
  'double/basic_handle_material': 'basic_handle/oak',
  'double/basic_pickaxe_left_material': 'basic_pickaxe/diamond',
  'double/extractor_right_material': 'extractor/extractor',
  'double/handle': 'double/basic_handle',
  'double/head_left': 'double/basic_pickaxe_left',
  'double/head_left:arrested': 0,
  'double/head_right': 'double/extractor_right',
  'double/head_right/settle_progress': 292,
  honing_progress: 422,
  id: '1b5127f2-f937-45f0-b009-25b5b8505cc9',
  repairCount: 1,
}
