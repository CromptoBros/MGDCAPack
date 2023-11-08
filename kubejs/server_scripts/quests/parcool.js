FTBQuestsEvents.customTask('5A74FF4EE62B2BC5', (event) => {
  event.setCheckTimer(20)
  event.setCheck((task, player) => {
    if (player.isSprinting()) {
      task.progress++
    }
  })
})
