PlayerEvents.tick((event) => {
  if (event.level.time % 20 != 0) return

  const { player, level, server } = event

  const position = player.blockPosition()
  const fluid = level.getFluidState(position)
  const fluidName = fluid.getFluidType().toString()

  if (
    fluidName.includes('oil') ||
    fluidName === 'immersiveengineering:creosote'
  ) {
    const potion = player.potionEffects
    potion.add('alexsmobs:oiled', 4 * 20)
    potion.add('minecraft:slow_falling', 12 * 20)
  }
})
