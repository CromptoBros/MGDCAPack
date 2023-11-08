//Grabs the event, and allows it to be used in other scripts.
//Used in /kubejs/server_scripts/quests/create_train.js

ForgeEvents.onEvent(
  'net.minecraftforge.event.entity.EntityMountEvent',
  (event) => {
    if (global['net.minecraftforge.event.entity.EntityMountEvent'])
      global['net.minecraftforge.event.entity.EntityMountEvent'](event)
  }
)
