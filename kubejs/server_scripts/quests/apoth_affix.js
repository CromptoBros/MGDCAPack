$ItemFiltersAPI.registerCustomFilter('affix_items', (itemstack) => {
  let nbt = itemstack?.nbt

  if (nbt == null) return false
  let affix_data = nbt.getCompound('affix_data')

  return !affix_data.isEmpty()
})

let exampleSword = {
  Damage: 0,
  affix_data: {
    affixes: { 'apotheosis:sword/attribute/violent': 0.79497105 },
    name: '{"color":"#808080","translate":"misc.apotheosis.affix_name.two","with":[{"translate":"affix.apotheosis:sword/attribute/violent"},"",""]}',
    rarity: 'common',
  },
}

FTBQuestsEvents.customReward('10881A8E2F8E4932', (reward) => {
  let player = reward.entity
  const { server } = reward

  let resetReward = () => {
    server.scheduleInTicks(5, () => {
      server.runCommandSilent(
        `/ftbquests change_progress ${player.username} reset 10881A8E2F8E4932`
      )
    })
  }

  try {
    let heldItem = player.getMainHandItem()
    let heldItemNbt = heldItem?.nbt

    if (heldItem == 'minecraft:air') {
      player.tell(`§cYou must be holding an item!`)
      resetReward()
      return
    }

    if (heldItemNbt == null) {
      player.tell(`§cThis item cannot be affixed!`)
      resetReward()
      return
    }

    let nbtString = heldItemNbt.toString()
    let hasAffixes = nbtString.includes('affix_data')
    if (hasAffixes) {
      player.tell(`§cYou already have an affix on this item!`)
      resetReward()
      return
    }

    let itemIsAffixable = false
    for (let reg of [
      /sword/,
      /axe/,
      /pickaxe/,
      /shovel/,
      /hoe/,
      /bow/,
      /crossbow/,
      /trident/,
      /shield/,
      /helmet/,
      /chestplate/,
      /leggings/,
      /boots/,
    ]) {
      if (heldItem.toString().match(reg)) {
        itemIsAffixable = true
      }
    }

    if (!itemIsAffixable) {
      player.tell(`§cThis item cannot be affixed!`)
      resetReward()
      return
    }

    player.tell('§6Affixing item!')
    server.runCommandSilent(
      `/execute as ${player.username} run apoth lootify rare`
    )
  } catch (error) {
    player.tell(`§c${error}`)
    resetReward()
    return
  }
})
