Ponder.registry((ponder) => {
	ponder
		.create([
			'mekanism:electrolytic_separator',
			'mekanism:purification_chamber',
			'mekanism:crusher',
		])
		.scene(
			'mek_3x',
			'Mekanism 3X Ore Processing',
			'ftbuniversity:mek_3x',
			(scene, util) => {
				scene.showBasePlate()
				scene.idle(10)

				scene.text(60, '3x processing onwards is much more complex.')
				scene.idle(70)

				scene.world.showSection([2, 1, 3, 2, 2, 4], Facing.DOWN)
				scene.idle(10)
				scene.addKeyframe()

				scene.text(60, 'The Electrolytic Separator converts Water...')
				scene.idle(70)

				scene.world.showSection([3, 1, 3], Facing.DOWN)
				scene.idle(10)
				scene.text(30, '...into Oxygen...')
				scene.idle(40)

				scene.world.showSection([1, 1, 3], Facing.DOWN)
				scene.idle(10)
				scene.text(30, '...and Hydrogen.')
				scene.idle(40)

				scene.text(
					70,
					'Both of these Chemical Tanks were configured to output in the direction of the Separator.'
				)
				scene.idle(80)

				scene.text(
					60,
					'Only Oxygen is used in this step, but Hydrogen is needed later.'
				)
				scene.idle(70)

				scene.world.showSection([2, 1, 2, 4, 1, 2], Facing.DOWN)
				scene.addKeyframe()
				scene.idle(10)

				scene.text(
					80,
					'The Purification Chamber uses Oxygen to convert Ores...'
				)
				scene.idle(60)
				let inputItem = scene.world.createItemEntity(
					[4.9, 1.25, 2.5],
					[0, 0, 0],
					'minecraft:iron_ore'
				)
				scene.idle(30)
				scene.world.removeEntity(inputItem)

				scene.text(60, '...into thrice as many Clumps.')
				let clumps = scene.world.createItemEntity(
					[2.9, 1.25, 2.5],
					[0, 0, 0],
					'3x mekanism:clump_iron'
				)
				scene.idle(70)

				scene.world.showSection([0, 1, 2, 1, 1, 2], Facing.DOWN)
				scene.addKeyframe()
				scene.idle(10)

				scene.text(60, 'The Crusher will convert each Clump...')
				scene.world.removeEntity(clumps)
				scene.idle(70)

				scene.text(60, '...into a Dust.')
				scene.idle(10)
				let output = scene.world.createItemEntity(
					[0.9, 1.25, 2.5],
					[0, 0, 0],
					'mekanism:dirty_dust_iron'
				)
				scene.idle(30)
			}
		)
})
