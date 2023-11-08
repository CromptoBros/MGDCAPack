StartupEvents.registry('item', (item) => {
  item
    .create('modpack_logo')
    .rarity('epic')
    .texture('ftbuniversity:items/crest')
})

StartupEvents.registry('block', (block) => {
  block.create('leave_school', 'detector').detectorId('leave_school')
})
