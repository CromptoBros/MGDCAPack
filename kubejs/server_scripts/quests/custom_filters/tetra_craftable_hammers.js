$ItemFiltersAPI.registerCustomFilter('craftable_hammers', (itemstack) => {
  const craftableTiers = [
    'granite',
    'spruce',
    'stone',
    'oak',
    'diorite',
    'dark_oak',
    'birch',
    'andesite',
    'jungle',
    'acacia',
  ]

  const leftMaterial = getTetraPartMaterial(
    itemstack,
    'tetra:modular_double',
    'double/basic_hammer_left_material'
  )

  const rightMaterial = getTetraPartMaterial(
    itemstack,
    'tetra:modular_double',
    'double/basic_hammer_right_material'
  )

  if (leftMaterial == null || rightMaterial == null) return false

  let leftCraftable = false
  let rightCraftable = false

  for (let tier of craftableTiers) {
    if (leftMaterial.contains(`/${tier}`)) leftCraftable = true
    if (rightMaterial.contains(`/${tier}`)) rightCraftable = true
  }

  return leftCraftable && rightCraftable
})
