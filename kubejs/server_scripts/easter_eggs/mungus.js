//Observe Mungus quest, in invisible chapter
FTBQuestsEvents.customReward('589E652BCE1C19B2', (event) => {
  let player = event.getEntity()

  let server = Utils.getServer()

  server.scheduleInTicks(14, () => {
    player.paint({
      amogus1: {
        type: 'rectangle',
        texture: 'ftbuniversity:textures/easter_eggs/amogus1.png',
        w: '$screenW',
        h: '$screenH',
      },
    })

    server.scheduleInTicks(2, () => {
      player.paint({
        amogus1: { remove: true },
        amogus2: {
          type: 'rectangle',
          texture: 'ftbuniversity:textures/easter_eggs/amogus2.png',
          w: '$screenW',
          h: '$screenH',
        },
      })

      server.scheduleInTicks(3, () => {
        player.paint({ amogus2: { remove: true } })
      })
    })
  })
})
