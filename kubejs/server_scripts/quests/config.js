PlayerEvents.loggedIn((event) => {
  const { player, level } = event

  const questObject = getQuestObject(level, '1906676DEB48B3A4')
  const isComplete = isQuestComplete(player, questObject)

  if (isComplete) return

  console.log(
    `Asking ${event.player.name.getString()}'s client if they've set their config...`
  )
  event.player.sendData('config_quest_ask')
})

NetworkEvents.dataReceived('config_quest_answer', (event) => {
  const { player, level, data } = event

  const answer = data.answer

  console.log(`Received answer from client. Got answer "${answer}"`)

  if (answer == 0) {
    console.log('Client has not set their config.')
    return
  }

  const questObject = getQuestObject(level, '1906676DEB48B3A4')
  setQuestProgress(player, questObject, answer ? 1 : 0)
})
