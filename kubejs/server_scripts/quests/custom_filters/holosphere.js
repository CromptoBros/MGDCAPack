$ItemFiltersAPI.registerCustomFilter('holosphere_scanner', (itemstack) => {
  if (itemstack.getIdLocation() != 'tetra:holo') return false

  //getTetraPartMaterial() doesn't work since the nbt is an int, not a string
  let hasScanner = itemstack.nbt
    .toString()
    .includes('holo/scanner:scanner/sweeper')

  return hasScanner
})

let scannerNBT = {
  HideFlags: 1,
  'holo/core': 'holo/core',
  'holo/core_material': 'frame/dim',
  'holo/frame': 'holo/frame',
  'holo/frame_material': 'core/ancient',
  'holo/repo': 'holo/repo',
  'holo/repo_material': 'repo/default',
  'holo/scanner': 'holo/scanner',
  'holo/scanner:scanner/sweeper': 0,
  'holo/scanner_material': 'scanner/default',
  honing_progress: 850,
  id: 'ae511c98-11d4-418d-b212-1dcb3a9169b8',
}

let defaultHolo = {
  'holo/core': 'holo/core',
  'holo/core_material': 'frame/dim',
  'holo/frame': 'holo/frame',
  'holo/frame_material': 'core/ancient',
  'holo/repo': 'holo/repo',
  'holo/repo_material': 'repo/default',
  'holo/scanner': 'holo/scanner',
  'holo/scanner_material': 'scanner/default',
}
