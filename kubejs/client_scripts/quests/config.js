const $AppleSkinConfig = Java.loadClass('squeek.appleskin.ModConfig')

NetworkEvents.dataReceived('config_quest_ask', (event) => {
  const showFoodValuesInTooltipAlways =
    $AppleSkinConfig.ALWAYS_SHOW_FOOD_VALUES_TOOLTIP.get()

  const changed = showFoodValuesInTooltipAlways !== true

  console.log('Client has been asked if its config has been set')
  console.log(`The default value is "true" and it's currently set to "${showFoodValuesInTooltipAlways}"`)
  console.log(`Thus, sending back "${changed}"`)

  event.player.sendData('config_quest_answer', {
    answer: changed,
  })
})
