$ItemFiltersAPI.registerCustomFilter('bolts', (itemstack) => {
  if (itemstack.getIdLocation().getNamespace() != 'tetra') return false

  let singleBinding = getTetraPart(itemstack, 'single/binding_material')
  let doubleBinding = getTetraPart(itemstack, 'double/binding_material')

  if (
    [null, '', 'null'].includes(doubleBinding) &&
    [null, '', 'null'].includes(singleBinding)
  ) {
    return false
  }

  let eitherIsBolt =
    singleBinding.includes('bolt') || doubleBinding.includes('bolt')

  return eitherIsBolt
})

let singleBoltExample = {
  Damage: 0,
  HideFlags: 1,
  honing_progress: 300,
  id: 'd7f385be-9a8a-49f5-8dc0-a69326773be6',
  'single/basic_handle_material': 'basic_handle/stick',
  'single/binding': 'single/binding',
  'single/binding_material': 'single_binding/bolt',
  'single/earthpiercer_material': 'earthpiercer/earthpiercer',
  'single/handle': 'single/basic_handle',
  'single/head': 'single/earthpiercer',
}

let doubleBoltExample = {
  Damage: 0,
  HideFlags: 1,
  'double/basic_hammer_left_material': 'basic_hammer/iron',
  'double/basic_hammer_right_material': 'basic_hammer/iron',
  'double/basic_handle_material': 'basic_handle/spruce',
  'double/binding': 'double/binding',
  'double/binding_material': 'double_binding/bolt',
  'double/handle': 'double/basic_handle',
  'double/head_left': 'double/basic_hammer_left',
  'double/head_right': 'double/basic_hammer_right',
  honing_progress: 440,
  id: '531db836-53ae-46c8-84d7-30756a940233',
}
