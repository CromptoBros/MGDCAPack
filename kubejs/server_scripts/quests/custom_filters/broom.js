$ItemFiltersAPI.registerCustomFilter('broom_rods', (itemstack) => {
  return isPart(itemstack, 'rod')
})

$ItemFiltersAPI.registerCustomFilter('broom_caps', (itemstack) => {
  return isPart(itemstack, 'cap')
})

$ItemFiltersAPI.registerCustomFilter('broom_brushes', (itemstack) => {
  return isPart(itemstack, 'brush')
})

function isPart(itemstack, part) {
  if (itemstack.getIdLocation().toString() != 'evilcraft:broom_part')
    return false

  let nbt = itemstack?.nbt
  if (nbt == null) return false

  return nbt.toString().includes(part)
}
