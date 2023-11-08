//Create Train quest - Travel 1000 blocks linearly
FTBQuestsEvents.customTask('69FE7AE2FF779BAD', (event) => {
  const DISTANCE_TO_TRAVEL = 1000
  event.setMaxProgress(DISTANCE_TO_TRAVEL)
})

//Create Train quest - Go through a portal
FTBQuestsEvents.customTask('6976C815B68518C8', (event) => {
  event.setMaxProgress(1)
})

const $Player = Java.loadClass('net.minecraft.world.entity.player.Player')

global['net.minecraftforge.event.entity.EntityMountEvent'] = (event) => {
  const { entityMounting, entityBeingMounted, level, mounting } = event

  if (level.isClientSide() || !mounting) return

  let riderIsPlayer = entityMounting instanceof $Player
  let vehicleIsTrain =
    entityBeingMounted.getType() == 'create:carriage_contraption'

  if (!riderIsPlayer || !vehicleIsTrain) return

  let player = entityMounting

  let linearTask = getQuestObject(level, '69FE7AE2FF779BAD')
  let dimensionTask = getQuestObject(level, '6976C815B68518C8')

  if (
    isQuestComplete(player, linearTask) &&
    isQuestComplete(player, dimensionTask)
  )
    return

  let startingPosition = new Vec3(player.x, player.y, player.z)
  let startingDimension = level.dimension

  let check = () => {
    player.server.scheduleInTicks(20, () => {
      if (player.getVehicle() == null) {
        //Reset the Linear task progress, but not the dimension task since that's either completed or not.
        setQuestProgress(player, linearTask, 0)
        return
      }

      let currentDimension = player.level.dimension

      if (startingDimension != currentDimension) {
        setQuestProgress(player, dimensionTask, 1)
        return
      }

      let currentPosition = new Vec3(player.x, player.y, player.z)
      let distanceTraveled = currentPosition.distanceTo(startingPosition)
      setQuestProgress(player, linearTask, distanceTraveled)

      check()
    })
  }

  check()
}
