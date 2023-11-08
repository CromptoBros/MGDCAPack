FTBQuestsEvents.customTask('6EBC9B90EC72698A', (event) => {
  event.setMaxProgress(1)
})

//Invisible quest, completes after 25min
FTBQuestsEvents.customReward('162B910743DC8A52', (reward) => {
  let player = reward.getEntity()
  let questObject = FTBQuests.getObject(player.level, '3D783F2EC10EA6F8')
  if (questObject == null) return
  if (!FTBQuests.getData(player).isCompleted(questObject)) {
    player.tell(
      Text.red("It's been 25 minutes and you haven't completed any quests!")
    )
    player.tell(
      Text.gold(
        'You have to complete the quest "Reading Rainbow" in Getting Started!'
      )
    )
    player.tell(
      Text.gold(
        'Then you have to unlock chapters using the "Mod Introductions" quest chapter!'
      )
    )
  }
})
