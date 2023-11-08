Ponder.registry((ponder) => {
	ponder
		.create([
			'mob_grinding_utils:saw',
			'darkutils:vector_plate',
			'darkutils:vector_plate_fast',
			'darkutils:vector_plate_extreme',
			'mob_grinding_utils:dreadful_dirt',
			'mob_grinding_utils:absorption_hopper',
			'mob_grinding_utils:ender_inhibitor_on'
		])
		.scene(
			'mgu_farm',
			'Mob Grinding Utils mob farm',
			'ftbuniversity:mgu_farm',
			(scene, util) => {
				scene.showStructure()
				scene.scaleSceneView(0.65)

				scene.idle(10)
				scene.text(
					60,
					'Mob Grinding Utils makes mob farms much easier to make!'
				)
				scene.idle(70)
				scene.text(50, "Here's a simple example")
				scene.idle(60)

				scene.world.hideSection([0, 0, 0, 8, 4, 0], Facing.NORTH)
				scene.world.hideSection([0, 0, 1, 0, 4, 8], Facing.WEST)
				scene.world.hideSection([0, 5, 0, 8, 6, 8], Facing.UP)
				scene.idle(20)

				scene.addKeyframe()
				scene.idle(10)

				scene
					.text(65, 'Monsters spawn on Dreadful Dirt', [1.5, 0.25, 4.5])
					.placeNearTarget()
				scene.idle(75)

				scene
					.text(75, 'Vector Plates move mobs standing on them', [4.5, 1, 4.5])
					.placeNearTarget()
				scene.idle(85)

				scene
					.text(
						75,
						'The Mob Masher damages anything touching it',
						[4.5, 1.5, 7.5]
					)
					.placeNearTarget()
				scene.idle(85)

				scene.addKeyframe()
				scene.idle(5)

				let skeleton = scene.world.createEntity(
					'minecraft:skeleton',
					[4.5, 1, 6.75]
				)
				scene.idle(20)

				for (let i = 0; i < 3; i++) {
					scene.world.modifyEntity(skeleton, (e) => e.animateHurt())
					scene.idle(20)
				}

				scene.world.removeEntity(skeleton)
				let bone = scene.world.createItemEntity(
					[4.5, 1.25, 6.75],
					util.vector.of(-0.07, 0.4, 0),
					'minecraft:bone'
				)
				let bow = scene.world.createItemEntity(
					[4.5, 1.25, 6.75],
					util.vector.of(-0.07, 0.4, -0.07),
					'minecraft:bow'
				)
				let arrow = scene.world.createItemEntity(
					[4.5, 1.25, 6.75],
					util.vector.of(0, 0.4, -0.07),
					'minecraft:arrow'
				)

				scene.idle(20)
				for (let i of [bone, bow, arrow]) scene.world.removeEntity(i)

				scene
					.text(
						60,
						'The Absorption Hopper picks up items and xp',
						[4.5, 4.5, 7.5]
					)
					.placeNearTarget()
				scene.idle(70)
				scene.text(60, 'You can set it to push into an adjacent inventory')
				scene.idle(70)

				scene.addKeyframe()
				scene.idle(10)

				let enderman = scene.world.createEntity(
					'minecraft:enderman',
					[4.5, 1, 6.75]
				)
				scene.idle(20)

				for (let i = 0; i <= 1; i++) {
					scene.world.modifyEntity(enderman, (e) => e.animateHurt())
					scene.idle(20)
				}
				scene.text(
					110,
					'The Enderman Inhibitor prevents Endermen from teleporting away',
					[4.5, 3.5, 7.95]
				)
				for (let i = 0; i < 7; i++) {
					scene.world.modifyEntity(enderman, (e) => e.animateHurt())
					scene.idle(20)
				}
				scene.world.removeEntity(enderman)

				scene.idle(20)

				scene.world.showSection([1, 5, 1, 8, 6, 8], Facing.DOWN)
				scene.idle(20)

				scene.addKeyframe()
				scene.idle(10)

				scene.text(
					95,
					'Dreadful Dirt turns off when lit, so you can use Redstone Lamps to toggle it'
				)
				scene.idle(105)

				scene.text(
					105,
					"There's no real size limit, the only bottleneck is how fast you can kill what spawns"
				)
				scene.idle(115)

				scene.text(75, 'With Upgrades, your Mob Masher can have Sharpness 10')
				scene.idle(85)
			}
		)
})
