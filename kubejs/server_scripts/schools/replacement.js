FTBSchools.replaceBlock((event) => {
  //Triggered when a DATA structure block with the tag "ftbschools:[getTag return value]" is loaded in a structure
  switch (event.getTag()) {
    case 'botania/corporea/exoflame': {
      //Structure block is tagged with "ftbschools:botania/corporea/exoflame"
      corporeaExoflame(event)
      break
    }
    case 'sfm/clicker1': {
      sfmClicker1(event)
      break
    }
    case 'sfm/clicker2': {
      sfmClicker2(event)
      break
    }
    case 'sfm/drawer1': {
      drawer(event, 'west', 1, [['minecraft:stone', 512]], 1)
      break
    }
    case 'sfm/drawer2': {
      drawer(
        event,
        'east',
        2,
        [
          ['minecraft:stone', 512],
          ['minecraft:dirt', 512],
        ],
        1
      )
      break
    }
    case 'sfm/clicker3': {
      sfmClicker3(event)
      break
    }
    case 'sfm/clicker4': {
      sfmClicker4(event)
      break
    }
    case 'sfm/furnaceChest': {
      sfmFurnaceChest(event)
      break
    }
    case 'sfm/clicker5': {
      sfmClicker5(event)
      break
    }
    case 'sfm/clicker6': {
      sfmClicker6(event)
      break
    }
  }
})

let corporeaExoflame = (event) => {
  let position = event.getAbsolutePos()
  const { x, y, z } = position

  event.replaceWith(`botania:floating_exoflame{posX:${x},posY:${y},posZ:${z}}`)
}

let clicker = (event, nbt, facing) => {
  event.replaceWith(`clickmachine:auto_clicker[facing=${facing}]${nbt}`)
}

let sfmClicker1 = (event) => {
  let position = event.getAbsolutePos()
  const { x, y, z } = position

  let nbt = `{
		inv: {
			Items: [
				{
					Count: 1,
					Slot: 0,
					id: 'sfm:labelgun',
					tag: {
						'sfm:active_label': 'rightDrawer',
						'sfm:labels': {
							leftDrawer: [{ X: ${x}, Y: ${y + 1}, Z: ${z - 1} }],
							rightDrawer: [{ X: ${x}, Y: ${y + 1}, Z: ${z + 1} }],
						},
					},
				},
			],
			Size: 1,
		},
		name: '1aaron5',
		right_click: 1,
		sneak: 0,
		speed_index: 4,
	}`.trim()

  clicker(event, nbt, 'up')
}

let sfmClicker2 = (event) => {
  let position = event.getAbsolutePos()
  const { x, y, z } = position

  let nbt = `{
		inv: {
			Items: [
				{
					Count: 1,
					Slot: 0,
					id: 'sfm:labelgun',
					tag: {
						'sfm:active_label': 'outputDrawers',
						'sfm:labels': {
							inputDrawer: [{ X: ${x}, Y: ${y + 1}, Z: ${z - 1} }],
							outputStone: [
								{ X: ${x}, Y: ${y + 1}, Z: ${z + 1} },
								{ X: ${x}, Y: ${y + 1}, Z: ${z + 2} },
							],
							outputDirt: [
								{ X: ${x}, Y: ${y + 1}, Z: ${z + 3} },
								{ X: ${x}, Y: ${y + 1}, Z: ${z + 4} },
							]
						},
					},
				},
			],
			Size: 1,
		},
		name: '1aaron5',
		right_click: 1,
		sneak: 0,
		speed_index: 4,
	}`.trim()

  clicker(event, nbt, 'up')
}

let drawer = (event, direction, type, items, creative) => {
  switch (type) {
    case 1: {
      if (items.length != 1) {
        console.error('Wrong amount of items for drawer type 1')
        console.error(`Expected 1, got ${items.length}`)
        return
      }

      if (items[0].length != 2) {
        console.error(`Wrong amount of arguments for drawer type 1`)
        console.error(`Expected 2, got ${items[0].length}`)
        console.error(items[0])
        return
      }

      let item = items[0][0]
      let amount = items[0][1]

      if (creative == 1) {
        let nbt = `{
					storageUpgrades:{
						Items:[{
							Count:1,Slot:0,id:"functionalstorage:creative_vending_upgrade"
						}],
						Size:4
					},
					handler: {
						BigItems: {
							0: {
								Amount: ${amount},
								Stack: { Count: 64, id: '${item}', tag: { data_model: {} } },
							},
						},
					}
				}`.trim()

        event.replaceWith(
          `functionalstorage:oak_1[subfacing=${direction}]${nbt}`
        )
      } else {
        let nbt = `{
					handler: {
						BigItems: {
							0: {
								Amount: ${amount},
								Stack: { Count: 64, id: '${item}', tag: { data_model: {} } },
							},
						},
					}}
				}`.trim()

        event.replaceWith(
          `functionalstorage:oak_1[subfacing=${direction}]${nbt}`
        )
      }
      break
    }
    case 2: {
      if (items.length != 2) {
        console.error('Wrong amount of items for drawer type 2')
        console.error(`Expected 2, got ${items.length}`)
        return
      }

      for (let i = 0; i < items.length; i++) {
        if (items[i].length != 2) {
          console.error(
            `Wrong amount of arguments for drawer type 2, argument ${i}`
          )
          console.error(`Expected 2, got ${items[i].length}`)
          console.error(items[i])
          return
        }
      }

      let item1 = items[0][0]
      let amount1 = items[0][1]

      let item2 = items[1][0]
      let amount2 = items[1][1]

      if (creative == 1) {
        let nbt = `{
					isCreative: 1,
					storageUpgrades:{
						Items:[{
							Count:1,Slot:0,id:"functionalstorage:creative_vending_upgrade"
						}],
						Size:4
					},
					handler: {
						BigItems: {
							0: {
								Amount: ${amount1},
								Stack: { Count: 64, id: '${item1}'},
							},
							1: {
								Amount: ${amount2},
								Stack: { Count: 64, id: '${item2}'},
							}
						},
					}
				}`.trim()

        event.replaceWith(
          `functionalstorage:oak_2[subfacing=${direction}]${nbt}`
        )
      } else {
        let nbt = `{
					handler: {
						BigItems: {
							0: {
								Amount: ${amount1},
								Stack: { Count: 64, id: '${item1}'},
							},
							1: {
								Amount: ${amount2},
								Stack: { Count: 64, id: '${item2}'},
							}
						},
					}
				}`.trim()

        event.replaceWith(
          `functionalstorage:oak_2[subfacing=${direction}]${nbt}`
        )
      }

      break
    }
    case 4: {
      if (items.length != 4) {
        console.error('Wrong amount of items for drawer type 4')
        console.error(`Expected 4, got ${items.length}`)
        return
      }

      for (let i = 0; i < items.length; i++) {
        if (items[i].length != 2) {
          console.error(
            `Wrong amount of arguments for drawer type 4, argument ${i}`
          )
          console.error(`Expected 2, got ${items[i].length}`)
          console.error(items[i])
          return
        }
      }

      let item1 = items[0][0]
      let amount1 = items[0][1]
      let item2 = items[1][0]
      let amount2 = items[1][1]
      let item3 = items[2][0]
      let amount3 = items[2][1]
      let item4 = items[3][0]
      let amount4 = items[3][1]

      if (creative == 1) {
        let nbt = `{
					isCreative: 1,
					storageUpgrades:{
						Items:[{
							Count:1,Slot:0,id:"functionalstorage:creative_vending_upgrade"
						}]
						,Size:4
					},
					handler: {
						BigItems: {
							0: {
								Amount: ${amount1},
								Stack: { Count: 64, id: '${item1}'},
							},
							1: {
								Amount: ${amount2},
								Stack: { Count: 64, id: '${item2}'},
							},
							3: {
								Amount: ${amount3},
								Stack: { Count: 64, id: '${item3}'},
							},
							4: {
								Amount: ${amount4},
								Stack: { Count: 64, id: '${item4}'},
							}
						},
					}
				}`.trim()

        event.replaceWith(
          `functionalstorage:oak_4[subfacing=${direction}]${nbt}`
        )
      } else {
        let nbt = `{
					handler: {
						BigItems: {
							0: {
								Amount: ${amount1},
								Stack: { Count: 64, id: '${item1}'},
							},
							1: {
								Amount: ${amount2},
								Stack: { Count: 64, id: '${item2}'},
							},
							3: {
								Amount: ${amount3},
								Stack: { Count: 64, id: '${item3}'},
							},
							4: {
								Amount: ${amount4},
								Stack: { Count: 64, id: '${item4}'},
							}
						},
					}
				}`.trim()

        event.replaceWith(
          `functionalstorage:oak_4[subfacing=${direction}]${nbt}`
        )
      }
      break
    }
  }
}

let sfmClicker3 = (event) => {
  let position = event.getAbsolutePos()
  const { x, y, z } = position

  let nbt = `{
		inv: {
			Items: [
				{
					Count: 1,
					Slot: 0,
					id: 'sfm:labelgun',
					tag: {
						'sfm:active_label': 'b',
						'sfm:labels': {
							a: [{ X: ${x}, Y: ${y + 1}, Z: ${z - 1} }],
							b: [{ X: ${x}, Y: ${y + 1}, Z: ${z + 1} }],
						},
					},
				},
			],
			Size: 1,
		},
		name: '1aaron5',
		right_click: 1,
		sneak: 0,
		speed_index: 4,
	}`.trim()

  clicker(event, nbt, 'up')
}

let sfmClicker4 = (event) => {
  let position = event.getAbsolutePos()
  const { x, y, z } = position

  let nbt = `{
		inv: {
			Items: [
				{
					Count: 1,
					Slot: 0,
					id: 'sfm:labelgun',
					tag: {
						'sfm:active_label': 'furnace',
						'sfm:labels': {
							chest: [{ X: ${x}, Y: ${y + 1}, Z: ${z - 1} }],
							furnace: [{ X: ${x}, Y: ${y + 1}, Z: ${z + 1} }],
						},
					},
				},
			],
			Size: 1,
		},
		name: '1aaron5',
		right_click: 1,
		sneak: 0,
		speed_index: 4,
	}`.trim()

  clicker(event, nbt, 'up')
}

let sfmFurnaceChest = (event) => {
  let nbt = `{
		Items: [
			{ Count: 64, Slot: 0, id: 'minecraft:coal' },
			{ Count: 64, Slot: 1, id: 'minecraft:coal' },
			{ Count: 64, Slot: 2, id: 'minecraft:coal' },
			{ Count: 64, Slot: 3, id: 'minecraft:iron_ore' },
			{ Count: 64, Slot: 4, id: 'minecraft:iron_ore' },
			{ Count: 64, Slot: 5, id: 'minecraft:iron_ore' },
		]
	}`.trim()

  event.replaceWith(`minecraft:chest[facing=west]${nbt}`)
}

let sfmClicker5 = (event) => {
  let position = event.getAbsolutePos()
  const { x, y, z } = position

  let nbt = `{
		inv: {
			Items: [
				{
					Count: 1,
					Slot: 0,
					id: 'sfm:labelgun',
					tag: {
						'sfm:active_label': 'a',
						'sfm:labels': {
							a: [{ X: ${x}, Y: ${y + 1}, Z: ${z - 1} }],
							b: [{ X: ${x}, Y: ${y + 1}, Z: ${z + 1} }],
						},
					},
				},
			],
			Size: 1,
		},
		name: '1aaron5',
		right_click: 1,
		sneak: 0,
		speed_index: 4,
	}`.trim()

  clicker(event, nbt, 'up')
}

let sfmClicker6 = (event) => {
  let position = event.getAbsolutePos()
  const { x, y, z } = position

  let nbt = `{
		inv: {
			Items: [
				{
					Count: 1,
					Slot: 0,
					id: 'sfm:labelgun',
					tag: {
						'sfm:labels': {
							crusher: [{ X: ${x - 5}, Y: ${y + 2}, Z: ${z + 3} }],
							electroSep: [{ X: ${x - 1}, Y: ${y + 2}, Z: ${z + 3} }],
							enrichment: [{ X: ${x - 6}, Y: ${y + 2}, Z: ${z + 3} }],
							feSource: [{ X: ${x}, Y: ${y + 2}, Z: ${z + 2} }],
							feUser: [
								{ X: ${x - 1}, Y: ${y + 2}, Z: ${z + 3} },
								{ X: ${x - 4}, Y: ${y + 2}, Z: ${z + 3} },
								{ X: ${x - 5}, Y: ${y + 2}, Z: ${z + 3} },
								{ X: ${x - 6}, Y: ${y + 2}, Z: ${z + 3} },
								{ X: ${x - 5}, Y: ${y + 1}, Z: ${z + 2} },
							],
							hydrogen: [{ X: ${x - 3}, Y: ${y + 2}, Z: ${z + 3} }],
							itemInput: [{ X: ${x}, Y: ${y + 2}, Z: ${z} }],
							itemOutput: [{ X: ${x - 6}, Y: ${y + 1}, Z: ${z + 2} }],
							oxygen: [{ X: ${x - 2}, Y: ${y + 2}, Z: ${z + 3} }],
							pureChamber: [{ X: ${x - 4}, Y: ${y + 2}, Z: ${z + 3} }],
							smelter: [{ X: ${x - 5}, Y: ${y + 1}, Z: ${z + 2} }],
							waterSource: [{ X: ${x}, Y: ${y + 2}, Z: ${z + 1} }],
						},
					},
				},
			],
			Size: 1,
		},
		name: '1aaron5',
		right_click: 1,
		sneak: 0,
		speed_index: 4,
	}`.trim()

  clicker(event, nbt, 'up')
}
