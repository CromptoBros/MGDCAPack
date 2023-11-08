let withComma = (i) => i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

ItemEvents.tooltip((event) => {
  //Compressium
  for (let i = 1; i <= 9; i++) {
    event.add(RegExp(`compressium.*_${i}`), Text.gray(`Holds ${withComma(Math.pow(9, i))}`))
  }

  event.addAdvanced('naturesaura:effect_powder', (item, advanced, text) => {
    const type = item?.nbt?.effect

    if (type == 'naturesaura:ore_spawn') {
      text.add(Text.aqua('Enables "Mineral Emassing"'))
    } else if (type == 'naturesaura:plant_boost') {
      text.add(Text.red('Prevents "Vegetational Increase"'))
    } else if (type == 'naturesaura:animal') {
      text.add(Text.aqua('Enables "Increase of Fertility"'))
    } else if (type == 'naturesaura:cache_recharge') {
      text.add(Text.red('Prevents "Natural Storage"'))
    } else if (type == 'naturesaura:nether_grass') {
      text.add(Text.red('Prevents "Crimson Overgrowth"'))
    }
  })

  event.addAdvanced('naturesaura:aura_bottle', (item, advanced, text) => {
    const type = item?.nbt?.stored_type
    text.add(Text.gray('Contains Aura from:'))
    if (type == 'naturesaura:overworld') {
      text.add(Text.green('• Overworld'))
    } else if (type == 'naturesaura:nether') {
      text.add(Text.red('• Nether'))
    } else if (type == 'naturesaura:end') {
      text.add(Text.lightPurple('• End'))
    } else if (type == 'naturesaura:other') {
      text.add(Text.gold('• Other'))
    } else {
      text.add(Text.gray('• Unknown'))
    }
  })

  event.addAdvanced('soulshards:soul_shard', (item, advanced, text) => {
    const kills = item?.nbt?.binding?.kills

    let tier =
      kills >= 1024
        ? 5
        : kills >= 512
        ? 4
        : kills >= 256
        ? 3
        : kills >= 128
        ? 2
        : kills >= 64
        ? 1
        : 0

    if (tier == 0) {
      text.add(Text.red("• Can't spawn mobs until tier 1!"))
      return
    }

    let checksPlayer = [1, 2, 3].includes(tier)
    let checksLight = [1, 2, 3, 4].includes(tier)
    let checksRedstone = tier == 5

    let spawnCount =
      tier == 1
        ? 2
        : tier == 2
        ? 4
        : tier == 3
        ? 4
        : tier == 4
        ? 4
        : tier == 5
        ? 6
        : 0

    let cooldown =
      tier == 1
        ? 400
        : tier == 2
        ? 200
        : tier == 3
        ? 100
        : tier == 4
        ? 100
        : tier == 5
        ? 40
        : 0

    if (checksLight) {
      text.add(Text.red('• Checks light'))
    } else {
      text.add(Text.gold("• Doesn't check light"))
    }

    if (checksPlayer) {
      text.add(Text.red('• Needs player nearby'))
    } else {
      text.add(Text.gold("• Doesn't need player"))
    }

    if (checksRedstone) {
      text.add(Text.gold('• Can be disabled with Redstone'))
    }

    text.add(Text.gold(`• Spawns ${spawnCount}`))
    text.add(Text.gold(`• Cooldown is ${cooldown}t`))
  })

  for (let item of global.removedBecauseBugged) {
    event.add(item, Text.red('Item disabled due to bugs'))
  }

  event.add('mekanismgenerators:solar_generator', Text.green('Generates 17.6 FE/t'))
  event.add('mekanismgenerators:advanced_solar_generator', Text.green('Generates 105.6 FE/t'))

  let moreSolars = [
    ['advanced', 52.8],
    ['hybrid', 158.4],
    ['ultimate_hybrid', 475.2],
    ['quantum', 1425.6],
    ['spectral', 4276.8],
    ['singular', 12830.4],
    ['light_absorbing', 38491.2],
    ['photonic', 115473.6],
    ['creative', 346420.8],
  ]
  for (let [tier, amount] of moreSolars) {
    event.add(
      `solarpanels:${tier}_solar_panel`,
      Text.green(`Generates ${withComma(amount)} FE/t`)
    )
  }

  event.add('advancedperipherals:inventory_manager', Text.red('Disabled to prevent stealing from Schools'))
})
