EntityEvents.death((event) => {
  const { entity, source } = event

  if (source == null || entity == null) return

  let player = source.player

  if (player == null) return

  if (!player.isPlayer()) return

  let killBossTask = getQuestObject(player?.level, '64EA8B16516E28E4')

  if (isQuestComplete(player, killBossTask)) return

  let entityWasBoss = entity.nbt.toString().includes('apoth.boss')

  if (entityWasBoss) {
    setQuestProgress(player, killBossTask, 1)
  }
})

FTBQuestsEvents.customTask('64EA8B16516E28E4', (event) => {
  event.setMaxProgress(1)
})
