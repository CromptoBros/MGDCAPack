Ponder.registry((ponder) => {
	ponder
		.create(['mekanism:enrichment_chamber'])
		.scene(
			'mek_2x',
			'Mekanism 2X Ore Processing',
			'ftbuniversity:mek_2x',
			(scene, util) => {
				scene.showStructure()

				scene.idle(10)

				scene.text(
					80,
					'Mekanism allows you to process ore through up to 5 steps, quintupling your output.'
				)
				scene.idle(90)

				scene.text(50, 'This Ponder series will go through each step.')
				scene.idle(60)

				scene.addKeyframe()
				scene.idle(10)

				scene.text(70, 'The Enrichment is the simplest, doubling your ores.')
				scene.idle(80)

				scene.addKeyframe()
				scene.idle(10)

				let inputItem = scene.world.createItemEntity(
					[4.9, 1.25, 2.5],
					[0, 0, 0],
					'minecraft:iron_ore'
				)
				scene.idle(20)

				scene.text(40, 'Give it ores...')
				scene.world.removeEntity(inputItem)
				scene.idle(55)

				scene.text(60, '...and it gives you twice as many Dust.')
				scene.idle(10)
				let outputItem = scene.world.createItemEntity(
					[1.85, 1.25, 2.5],
					[0, 0, 0],
					'2x mekanism:dust_iron'
				)
				scene.idle(30)
			}
		)
})
