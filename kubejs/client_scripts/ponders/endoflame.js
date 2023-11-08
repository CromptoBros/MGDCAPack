Ponder.registry((ponder) => {
	ponder
		.create('botania:endoflame')
		.scene(
			'endoflame_automation',
			'Automating the Endoflame',
			'ftbuniversity:endoflame',
			(scene, util) => {
				scene.showBasePlate()
				scene.world.setBlock([3, 1, 3], 'botania:endoflame', false)
				scene.world.showSection([3, 1, 3], Facing.DOWN)

				scene.idle(20)

				scene.text(50, 'Endoflames are the most basic Mana-generating flower')

				scene.idle(60)

				scene.world.setBlock([3, 1, 5], 'botania:mana_spreader', true)
				scene.world.setBlock([1, 1, 5], 'botania:mana_pool', true)
				scene.world.showSection([3, 1, 5, 1, 1, 5], Facing.DOWN)

				scene
					.text(80, 'Endoflames use furnace fuel to fill their Mana Spreader')
					.attachKeyFrame()

				scene.idle(70)

				const coal1 = scene.world.createItemEntity(
					Vec3(3.5, 3, 2.5),
					Vec3(0, 0, 0),
					'minecraft:coal'
				)

				scene.idle(20)

				scene.world.modifyEntity(coal1, (e) => {
					e.kill()
				})

				scene.particles
					.simple(20, 'minecraft:cloud', [3.25, 1.25, 2.25])
					.scale(0.2)
					.area([3.75, 1.75, 2.75])
				scene.particles
					.simple(55, 'minecraft:small_flame', [3.25, 1.4, 3.25])
					.area([3.75, 1.6, 3.75])

				scene.world.modifyBlockEntityNBT([1, 1, 5], (nbt) => {
					nbt.mana = 290160
				})

				scene.idle(30)

				scene.text(35, 'Automating it is simple')

				scene.idle(40)

				scene.world.hideSection([3, 1, 5, 1, 1, 5], Facing.UP)
				scene.world.hideSection([3, 1, 3], Facing.UP)
				scene.idle(20)
				scene.world.setBlocks([3, 1, 5, 1, 1, 5], 'air', false)
				scene.world.setBlock([3, 1, 3], 'minecraft:oak_pressure_plate', false)

				scene.world.setBlock([1, 1, 3], 'botania:endoflame', false)
				scene.world.showSection([0, 1, 0, 6, 6, 6], Facing.DOWN)

				scene.idle(10)

				scene
					.text(60, 'This setup will keep it running indefinitely')
					.attachKeyFrame()

				scene.idle(70)

				scene.text(40, 'Whenever the Hopper has fuel...')

				const coal2 = scene.world.createItemEntity(
					Vec3(4.5, 3.75, 3.5),
					Vec3(0, 0, 0),
					'minecraft:coal'
				)
				scene.idle(4)
				const coal3 = scene.world.createItemEntity(
					Vec3(4.5, 3.75, 3.5),
					Vec3(0, 0, 0),
					'minecraft:coal'
				)
				scene.idle(4)
				scene.world.modifyEntity(coal2, (e) => {
					e.kill()
				})
				const coal4 = scene.world.createItemEntity(
					Vec3(4.5, 3.75, 3.5),
					Vec3(0, 0, 0),
					'minecraft:coal'
				)
				scene.idle(4)
				scene.world.modifyEntity(coal3, (e) => {
					e.kill()
				})
				const coal5 = scene.world.createItemEntity(
					Vec3(4.5, 3.75, 3.5),
					Vec3(0, 0, 0),
					'minecraft:coal'
				)
				scene.idle(4)
				scene.world.modifyEntity(coal4, (e) => {
					e.kill()
				})
				const coal6 = scene.world.createItemEntity(
					Vec3(4.5, 3.75, 3.5),
					Vec3(0, 0, 0),
					'minecraft:coal'
				)
				scene.idle(4)
				scene.world.modifyEntity(coal5, (e) => {
					e.kill()
				})
				const coal7 = scene.world.createItemEntity(
					Vec3(4.5, 3.75, 3.5),
					Vec3(0, 0, 0),
					'minecraft:coal'
				)
				scene.idle(4)
				scene.world.modifyEntity(coal6, (e) => {
					e.kill()
				})
				scene.idle(4)
				scene.world.modifyEntity(coal7, (e) => {
					e.kill()
				})

				scene.idle(24)

				scene.text(
					50,
					"it'll push into the Open Crate, which drops it on the Pressure Plate."
				)

				const coal8 = scene.world.createItemEntity(
					Vec3(3.5, 1.75, 3.5),
					Vec3(0, 0, 0),
					'minecraft:coal'
				)

				scene.idle(60)
				scene.text(60, 'This powers the Hopper, stopping it from sending more.')
				scene.world.modifyBlock(
					[4, 1, 3],
					(state) => state.with('power', '15'),
					false
				)
				scene.world.modifyBlock(
					[5, 2, 3],
					(state) => state.with('power', '14'),
					false
				)
				scene.world.modifyBlock(
					[3, 1, 3],
					(state) => state.with('powered', true),
					false
				)

				scene.idle(70)

				scene.text(40, 'The Endoflame burns the fuel...').attachKeyFrame()
				scene.idle(30)
				scene.world.modifyEntity(coal8, (e) => {
					e.kill()
				})
				scene.world.modifyBlock(
					[4, 1, 3],
					(state) => state.with('power', '0'),
					false
				)
				scene.world.modifyBlock(
					[5, 2, 3],
					(state) => state.with('power', '0'),
					false
				)
				scene.world.modifyBlock(
					[3, 1, 3],
					(state) => state.with('powered', false),
					false
				)
				scene.particles
					.simple(20, 'minecraft:cloud', [3.25, 1.25, 3.25])
					.scale(0.2)
					.area([3.75, 1.75, 2.75])
				scene.particles
					.simple(55, 'minecraft:small_flame', [1.25, 1.4, 3.25])
					.area([1.75, 1.6, 3.75])
				scene.idle(25)

				scene.text(50, '...depowering the Hopper so more fuel can be dropped!')
				const coal9 = scene.world.createItemEntity(
					Vec3(3.5, 1.75, 3.5),
					Vec3(0, 0, 0),
					'minecraft:coal'
				)
				scene.idle(4)
				scene.world.modifyBlock(
					[4, 1, 3],
					(state) => state.with('power', '15'),
					false
				)
				scene.world.modifyBlock(
					[5, 2, 3],
					(state) => state.with('power', '14'),
					false
				)
				scene.world.modifyBlock(
					[3, 1, 3],
					(state) => state.with('powered', true),
					false
				)

				scene.idle(80)
				scene.text(
					70,
					'This one stays until the Endoflame is ready for more, and then the cycle repeats.'
				)

				scene.idle(80)
				scene
					.text(
						110,
						'This setup scales perfectly! It can power as many Endoflames as you can fit into the area'
					)
					.attachKeyFrame()

				scene.idle(60)
				let ignoredBlocks = [
					[3, 1, 1],
					[3, 1, 3],
					[4, 1, 3],
					[5, 1, 3],
					[3, 2, 3],
					[4, 2, 3],
					[5, 2, 3],
				]

				let counter = 0
				for (let x = 6; x >= 0; x--) {
					for (let z = 6; z >= 0; z--) {
						for (let y = 1; y < 7; y++) {
							let blockPos = [x, y, z]
							if (
								!ignoredBlocks.some(
									(b) =>
										b[0] == blockPos[0] &&
										b[1] == blockPos[1] &&
										b[2] == blockPos[2]
								)
							) {
								scene.world.setBlock(
									blockPos,
									'botania:floating_endoflame',
									false
								)
								counter++
								if (counter % 2 == 0) scene.idle(1)
							}
						}
					}
				}
			}
		)
})
