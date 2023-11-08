let quests = [
  // [rewardID, taskID, name]
  ['282A4644D547CEBD', '74B88AE14B2AE2FF', 'Craftable Hammers'],
  ['51A2682EBE7A91B0', '5900934DD94FD4CF', 'Basic Schematics'],
  ['52C34B42C1BD3808', '3D08C02FFA325E7E', 'Tools of War'],
  ['5EC1DC7F4E77B95E', '117872F91AE2E0E4', 'Treatises'],
  ['2480514B48894778', '6EC9FD29436D1262', 'Honing'],
  ['148EB74599A20EC0', '2DE1C0DEECC152A8', 'Dolabras'],
  ['652AE5DF03483BA4', '29CFC29271E40881', 'Extractor'],
  ['61BB649311D93798', '40F07D90B0C5C0C6', 'Scanning Holosphere'],
  ['57BD2DB24939D74B', '060F3E8E9D66B377', 'Bolts'],
  ['796917EC311A6C6A', '10A8927F82770AD5', 'Stonecutter'],
  ['0676249EBA60E877', '3356C4A22F67BAFD', 'Earthpiercer'],
  ['796A4FE37FA3D084', '5BA3D7CA85CED182', 'Unbreakable Charm'],
  ['2BA2257C86C75C35', '1A06E525C84CE43F', 'Broom Brushes'],
  ['5AB3C42185129817', '44529455C112A9A9', 'Broom Rods'],
  ['1715D994868FBA05', '4A86A1768A1E7BA9', 'Broom Caps'],
]

quests.forEach(([rewardID, taskID, name]) => {
  FTBQuestsEvents.customTask(taskID, (task) => {
    task.setMaxProgress(1)
  })

  FTBQuestsEvents.customReward(rewardID, (reward) => {
    let player = reward.getEntity()

    console.log(
      `${player
        .getName()
        .getString()} triggered the reward ${rewardID}, completing task ${taskID} - ${name}`
    )

    let task = getQuestObject(player.level, taskID)

    setQuestProgress(player, task, 1)
  })

  console.log(
    `${name} quest: Mapping custom reward ${rewardID} to custom task ${taskID}`
  )
})
