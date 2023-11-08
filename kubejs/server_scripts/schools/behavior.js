FTBSchools.enterSchool((event) => {
  event.player.data.ftbquests.locked = true
  event.player.tell('Use "/school leave" to leave!')
})
FTBSchools.leaveSchool((event) => {
  event.player.data.ftbquests.locked = false
})

BlockEvents.detectorPowered('leave_school', (event) => {
  let nearbyPlayers = event.block.playersInRadius

  for (let player of nearbyPlayers) player.runCommand('/school leave')
})

FTBSchools.loadSchools((event) => {
  const badCommands = [
    'tp',
    'tpa',
    'tpaccept',
    'tpahere',
    'home',
    'sethome',
    'spawn',
    'setworldspawn',
    'warp',
    'setwarp',
    'back',
    'rtp',
    'back',
    'sg'
  ]

  for (let command of badCommands) {
    event.disableCommand(command)
  }
})
