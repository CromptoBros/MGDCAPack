Ponder.registry((ponder) => {
	ponder
		.create([
			'mekanism:chemical_infuser',
			'mekanism:chemical_injection_chamber',
		])
		.scene(
			'mek_4x',
			'Mekanism 4X Ore Processing',
			'ftbuniversity:mek_4x',
			(scene, util) => {
				scene.world.showSection([2, 1, 3], Facing.DOWN)
				scene.showBasePlate()

				scene.idle(10)

				scene.text(
					70,
					'The Chemical Infuser makes Hydrogen Chloride by combining...'
				)
				scene.idle(70)

				scene.world.showSection([3, 1, 3], Facing.DOWN)
				scene.idle(15)
				scene.text(50, '...Hydrogen from the previous step...')
				scene.idle(60)
				scene.world.showSection([1, 1, 3], Facing.DOWN)
				scene.text(
					60,
					'...as well as Chlorine, which needs a Thermal Evaporation Plant.'
				)
				scene.idle(70)

				scene.text(
					70,
					'Both of these Chemical Tanks were configured to output in the direction of the Separator.'
				)
				scene.idle(80)

				scene.world.showSection([0, 1, 2, 4, 1, 2], Facing.DOWN)
				scene.idle(10)

				scene.addKeyframe()
				scene.idle(10)

				scene.text(
					70,
					'This Hydrogen Chloride is used in the Chemical Injection Chamber.'
				)
				scene.idle(80)

				let inputItem = scene.world.createItemEntity(
					[4.9, 1.25, 2.5],
					[0, 0, 0],
					'minecraft:iron_ore'
				)
				scene.text(40, 'It converts one ore...')
				scene.idle(50)

				scene.world.removeEntity(inputItem)
				scene.idle(10)

				scene.text(70, '...into 4 Shards.')
				let outputItem = scene.world.createItemEntity(
					[1.9, 1.25, 2.5],
					[0, 0, 0],
					'4x mekanism:shard_iron'
				)
				scene.idle(80)

				scene.world.hideSection([0, 1, 0, 4, 1, 4], Facing.UP)
				scene.idle(15)
				scene.world.setBlocks([0, 1, 0, 3, 1, 4], 'air', false)
				scene.world.setBlock([2, 0, 3], 'mekanismadditions:gray_plastic', false)
				scene.world.setBlocks(
					[1, 0, 2, 3, 0, 2],
					'mekanism:creative_energy_cube',
					false
				)
				scene.world.setBlock([3, 1, 2], 'mekanism:purification_chamber', false)
				scene.world.setBlock([2, 1, 2], 'mekanism:crusher', false)
				scene.world.setBlock([1, 1, 2], 'mekanism:enrichment_chamber', false)
				scene.world.setBlock(
					[0, 1, 2],
					'immersiveengineering:conveyor_extract',
					false
				)
				scene.world.modifyBlock(
					[0, 1, 2],
					(state) => state.with('facing', 'west'),
					false
				)
				scene.world.showSection([0, 1, 0, 4, 1, 4], Facing.DOWN)
				scene.idle(15)

				scene.addKeyframe()
				scene.idle(10)

				scene.text(
					80,
					'Each Shard has to go through all the previous steps before it can be smelted.'
				)
				scene.idle(90)
			}
		)
})
