BlockEvents.placed((event) => {
  let server = Utils.getServer()

  const { block, level, entity } = event

  if (!entity.isPlayer) return
  
  const windmill = 'mekanismgenerators:wind_generator'

  let isWindmill = (block) => block.toString().includes(windmill)

  if (!isWindmill(block)) return

  let WINDMILL_CHECK_RADIUS = 18

  let nearbyWindmills = 0
  for (let y = -3; y <= 3; y++) {
    for (let x = -WINDMILL_CHECK_RADIUS; x <= WINDMILL_CHECK_RADIUS; x++) {
      for (let z = -WINDMILL_CHECK_RADIUS; z <= WINDMILL_CHECK_RADIUS; z++) {
        let offsetBlock = block.offset(x, y, z)
        if (isWindmill(offsetBlock)) nearbyWindmills++
      }
    }
  }

  const ACCEPTABLE_WINDMILL_COUNT = 6

  if (nearbyWindmills > ACCEPTABLE_WINDMILL_COUNT) {
    let randomNumber = Math.random()

    console.info(randomNumber)

    if (randomNumber > 0.25) return

    entity.tell(Text.red('OH, SO YOU LIKE WIND DO YOU??'))
    server.runCommandSilent(
      `execute in ${level.getDimension()} run summon alexsmobs:guster ${entity.getX()} ${entity.getY()} ${entity.getZ()} {CustomName:'[{"text":"Wind Generator Spam"}]'}`
    )
  }
})
