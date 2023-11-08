//priority: 100
// Slightly higher than mob_spawns, so this runs before that
// because if that script ran first, mobHasData would always be true

const $InteractionHand = Java.loadClass('net.minecraft.world.InteractionHand')
const $EquipmentSlot = Java.loadClass(
  'net.minecraft.world.entity.EquipmentSlot'
)

let coolThingsChest = Item.of('ftbquests:lootcrate', '{type:"cool_things"}')

EntityEvents.spawned((event) => {
  const { entity } = event
  let entityType = entity.getType()

  if (entityType != 'minecraft:zombie' && entityType != 'minecraft:slime') {
    return
  }

  // From /server_scripts/mob_spawns.js
  // Prevents it from re-rolling every time the mob is "spawned", which also includes chunk reloading
  let mobHasData = entity.persistentData.contains('already_spawned')
    ? entity.persistentData.getBoolean('already_spawned')
    : false

  if (mobHasData) return

  // 5% chance of happening
  if (Math.random() > 0.05) return

  switch (entityType) {
    case 'minecraft:zombie': {
      let offHand = entity.getItemInHand($InteractionHand.OFF_HAND)

      if (!offHand.isEmpty()) return

      entity.setItemInHand($InteractionHand.OFF_HAND, coolThingsChest)
      entity.setGuaranteedDrop($EquipmentSlot.OFFHAND)

      console.log('Gave a Zombie a Cool Things™ chest!')

      break
    }
    case 'minecraft:slime': {
      if (entity.slimyboyos$getAbsorbedItem().isEmpty()) {
        entity.slimyboyos$setAbsorbedItem(coolThingsChest)

        console.log('Gave a Slime a Cool Things™ chest!')

      }

      break
    }
  }
})
