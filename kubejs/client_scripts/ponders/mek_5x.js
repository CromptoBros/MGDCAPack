Ponder.registry((ponder) => {
	ponder
		.create([
			'mekanism:chemical_oxidizer',
			'mekanism:rotary_condensentrator',
			'mekanism:chemical_dissolution_chamber',
			'mekanism:chemical_washer',
			'mekanism:chemical_crystallizer',
		])
		.scene(
			'mek_5x',
			'Mekanism 5X Ore Processing',
			'ftbuniversity:mek_5x',
			(scene, util) => {
				scene.showBasePlate()
				scene.idle(10)

				scene.text(
					70,
					'As the final step, 5x processing is by far the most complex.'
				)
				scene.idle(80)

				scene.world.showSection([4, 1, 4, 5, 2, 4], Facing.DOWN)
				scene.text(
					70,
					'First, feed a Chemical Oxidizer some Sulfur, to make Sulfur Dioxide.'
				)
				scene.idle(80)

				scene.addKeyframe()
				scene.idle(10)

				scene.world.showSection([2, 1, 4, 3, 1, 4], Facing.DOWN)
				scene.world.showSection([3, 1, 3], Facing.DOWN)
				scene.text(60, 'Combine it with more Oxygen to make Sulfur Trioxide.')
				scene.idle(70)
				scene.text(
					60,
					'This Chemical Tank was configured to output to the Infuser.',
					[2.5, 1.5, 4.5]
				)
				scene.idle(70)

				scene.addKeyframe()
				scene.idle(10)

				scene.world.showSection([0, 2, 3, 1, 1, 3], Facing.DOWN)
				scene.world.showSection([0, 1, 2], Facing.DOWN)
				scene.idle(20)
				scene.text(
					70,
					'Feed Water to a Rotary Condenstrator to make Water Vapor'
				)
				scene.idle(80)

				scene.addKeyframe()
				scene.idle(10)
				scene.world.showSection([2, 1, 3], Facing.DOWN)
				scene.text(
					70,
					'Combine the Sulfur Trioxide and Water Vapor to make Sulfuric Acid.'
				)
				scene.idle(80)

				scene.text(
					60,
					'This Chemical Tank was configured to output to the Infuser.',
					[3.5, 1.5, 3.5]
				)
				scene.idle(70)

				scene.addKeyframe()
				scene.idle(10)

				scene.world.showSection([2, 1, 2, 5, 1, 2], Facing.DOWN)
				scene.idle(15)

				let inputItem = scene.world.createItemEntity(
					[5.9, 1.25, 2.5],
					[0, 0, 0],
					'minecraft:iron_ore'
				)
				scene.text(
					90,
					'Combine Ores with Sulfuric Acid to get Dirty Ore Slurry'
				)
				scene.idle(50)
				scene.world.removeEntity(inputItem)
				scene.idle(50)

				scene.addKeyframe()
				scene.idle(10)

				scene.world.showSection([1, 1, 2], Facing.DOWN)
				scene.text(
					70,
					'Wash the Dirty Slurry with Water to make Clean Ore Slurry'
				)
				scene.idle(80)

				scene.world.showSection([1, 1, 1], Facing.DOWN)
				scene.text(
					70,
					'The Chemical Crystallizer will convert Clean Ore Slurry into Ore Crystals.'
				)
				scene.idle(80)
				scene.text(
					70,
					'For each Ore that goes through, you end up with 5 Crystals.'
				)
				scene.idle(80)
				scene.text(
					70,
					'Like the previous step, these Crystals have to go through the other three machines before they can be smelted.'
				)
				scene.idle(80)
			}
		)
})
