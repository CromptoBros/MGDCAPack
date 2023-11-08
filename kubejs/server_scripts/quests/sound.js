let ignoredQuests = [
  '720A64DB6423C204', //First quest
]

FTBQuestsEvents.completed((event) => {
  let questObject = event.getObject()

  if (
    questObject.class.getSimpleName() === 'Quest' &&
    questObject.getQuestChapter() != '0D69F10811DE3819' &&    // Useful Things quest chapter
    questObject.getQuestChapter() != '3D07FA7DC9E67813'       // Invisible Background Quests chapter
  ) {
    let players = event.getNotifiedPlayers()
    for (let player of players) {
      let playerName = player.getName().getString()
      player.server.runCommandSilent(
        `/playsound ftbuniversity:quest_completed master ${playerName} ${player.getX()} ${player.getY()} ${player.getZ()}`
      )

      // let questTitle = event.getObject().title
      // questTitle = questTitle.slice(1, questTitle.length-1)
      // player.runCommandSilent(`title ${name} title ${JSON.stringify({text: event.})}`)
    }
  }
})
