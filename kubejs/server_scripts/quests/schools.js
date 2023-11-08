let schoolQuests = {
  'ftbuniversity:ae2/channels': '4E539FBE57BC35FF',
  'ftbuniversity:ae2/p2p': '1F6D1208E72AA5C3',
  'ftbuniversity:ae2/planes': '4E98608A9E3B42F0',
  'ftbuniversity:ae2/spatial_storage': '2E87EFFA45256009',
  'ftbuniversity:botania/altar_automation': '5783589BF8E0FBEC',
  'ftbuniversity:botania/corporea': '20A3DE242CE59688',
  'ftbuniversity:botania/dandelifeon': '0ED13D557034B3B0',
  'ftbuniversity:botania/rannuncarpus': '6C3E4E15775B7E9D',
  'ftbuniversity:create/deployer_recipes': '0471945A70C2D1EC',
  'ftbuniversity:create/farm': '693E4F9A13F8CA1D',
  'ftbuniversity:create/ore_processing': '6E56046AF9FCE548',
  'ftbuniversity:mekanism/logistical_transporters': '6C90E1BA095089D6',
  'ftbuniversity:misc/laserio': '0D236AC2BC406D70',
  'ftbuniversity:misc/sfm': '44A10091A39C7CFF',
  'ftbuniversity:rftools/shields': '00250E49088A64B7',
}

for (let id of Object.values(schoolQuests)) {
  FTBQuestsEvents.customTask(id, (event) => {
    event.setMaxProgress(1)
  })
}

FTBSchools.enterSchool((event) => {
  let player = event.entity
  let school = event.school
  let type = school.type.id

  let quest = getQuestObject(player.level, schoolQuests[type])

  if (quest != null) {
    setQuestProgress(player, quest, 1)
  }
})
