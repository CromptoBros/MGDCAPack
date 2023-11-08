EntityEvents.death((event) => {
  let killed = event.entity
  let player = event.source.player

  if (killed == null || player == null) return

  if (
    killed.getType().contains('mekanismadditions:baby') &&
    player.isPlayer()
  ) {
    let pData = player.persistentData
    pData.mekBabiesKilled = (pData.mekBabiesKilled ?? 0) + 1
    switch (pData.mekBabiesKilled) {
      case 3:
      case 6:
      case 9:
        player.tell("Mekanism's baby mobs can be disabled!")
        player.tell('See the mob toggles quest in Misc-er')
    }
  }
})
