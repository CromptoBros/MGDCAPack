ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event

  event.register(
    Commands.literal('university').then(
      Commands.argument('arg1', Arguments.STRING.create(event)).executes(
        (ctx) => {
          const arg1 = Arguments.STRING.getResult(ctx, 'arg1')

          switch (arg1) {
            case 'easteregg_roach':
              return roach(ctx)
            case 'reading_rainbow':
              return readingRainbow(ctx)
            default:
              return 0
          }
        }
      )
    )
  )
})

let readingRainbow = (ctx) => {
  let readingRainbowObject = getQuestObject(
    ctx.source.level,
    '77644C0CE27AE33A'
  )
  let player = ctx.source.player

  setQuestProgress(player, readingRainbowObject, 1)
  return 1
}

let roach = (ctx) => {
  let server = ctx.source.getServer()
  let position = ctx.source.getPosition()
  let level = ctx.source.getLevel()
  let dimension = ctx.source.getLevel().getDimension()

  server.runCommandSilent(
    `execute in ${dimension} run summon alexsmobs:cockroach ${position.x()} ${position.y()} ${position.z()} {Dancing:1,Maracas:1,DeathLootTable:"minecraft:empty"}`
  )

  let entities = level.getEntitiesWithin(
    AABB.of(
      position.x() - 2,
      position.y() - 2,
      position.z() - 2,
      position.x() + 2,
      position.y() + 2,
      position.z() + 2
    )
  )
  for (let entity of entities) {
    if (entity.getType() == 'alexsmobs:cockroach') {
      server.scheduleInTicks(300, () => {
        entity.setSecondsOnFire(20)
      })
      server.scheduleInTicks(700, () => {
        entity.kill()
      })
    }
  }
  return 1
}
