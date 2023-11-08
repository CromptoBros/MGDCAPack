$ItemFiltersAPI.registerCustomFilter('unbreakable_charm', (itemstack) => {
  if (itemstack.getIdLocation() != 'apotheosis:potion_charm') return false
  return itemstack.nbt.toString().includes('Unbreakable:1b')
})

let exampleCharm = {
  Damage: 0,
  Potion: 'alexsmobs:lava_vision',
  Unbreakable: 1,
}
