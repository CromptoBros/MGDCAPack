let getTetraPartMaterial = (itemstack, tetraItem, part) => {
  const item = itemstack.getIdLocation()
  const mod = item.getNamespace()

  if (mod != 'tetra' || item != tetraItem) return null

  const nbt = itemstack?.nbt

  return nbt.getString(part)
}

let tetraHasPart = (itemstack, tetraItem, part) => {
  let partMaterial = getTetraPartMaterial(itemstack, tetraItem, part)

  return partMaterial != null && partMaterial != ''
}

let getTetraPart = (itemstack, part) => {
  const item = itemstack.getIdLocation()
  const mod = item.getNamespace()

  if (mod != 'tetra' || itemstack?.nbt == null) return null

  const nbt = itemstack?.nbt

  return nbt.getString(part)
}
