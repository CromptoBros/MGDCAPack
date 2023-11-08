$ItemFiltersAPI.registerCustomFilter('dolabras', (itemstack) => {
  if (itemstack.getIdLocation().getNamespace() != 'tetra') return false

  let leftHead = getTetraPart(itemstack, 'double/head_left')
  let rightHead = getTetraPart(itemstack, 'double/head_right')

  if (
    [null, '', 'null'].includes(leftHead) ||
    [null, '', 'null'].includes(rightHead)
  ) {
    return false
  }

  let leftIsPick = leftHead.includes('_pickaxe')
  let rightIsAxe = rightHead.includes('_axe')

  return leftIsPick && rightIsAxe
})

let dolabraExample = {
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
