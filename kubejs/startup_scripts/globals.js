global.itemsToRemove = [
  /prefab.*swift/,
  /prefab.*sickle/,
  /prefab.*compressed_stone/,
  /prefab.*compressed_dirt/,
  /prefab.*compressed_obsidian/,
]

global.removedBecauseBugged = [
  'naturesaura:fortress_finder',
  'naturesaura:end_city_finder',
  'naturesaura:outpost_finder',
  '@effortlessbuilding',
  'integrateddynamics:facade'
]

global.debug = true

global.capFirst = (input) => {
  return input.charAt(0).toUpperCase() + input.slice(1)
}
