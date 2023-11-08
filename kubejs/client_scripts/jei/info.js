JEIEvents.information((event) => {
	const infos = [
		[
			'mob_grinding_utils:dreadful_dirt',
			'\n\nCreated by using a Rotten Egg on Dirt/Grass',
		],
		[
			'mob_grinding_utils:delightful_dirt',
			'\n\nCreated by using a Golden Egg on Dirt/Grass',
		],
		[
			'mob_grinding_utils:rotten_egg',
			'Created by feeding GM Chicken Feed Cursed to a Chicken',
		],
		[
			'mob_grinding_utils:golden_egg',
			'Created by feeding Nutritious Chicken Feed to a Chicken',
		],
		[
			/spawn_egg/,
			[
				'Can be crafted using GM Chicken Feed',
				' ',
				'See its quest in Misc -> Mob Grinding',
			],
		],
		[
			Item.of(
				'tetra:holo',
				'{"holo/core":"holo/core","holo/core_material":"frame/dim","holo/frame":"holo/frame","holo/frame_material":"core/ancient","holo/repo":"holo/repo","holo/repo_material":"repo/default","holo/scanner":"holo/scanner","holo/scanner_material":"scanner/default"}'
			),
			'One is given when you first make a Hammer, but another recipe has been added.',
		],
		[
			'#ftbuniversity:tetra_salvage_items',
			"Can be found in Tetra's Ancient Ruins, by salvaging certain blocks",
		],
		['tetra:geode', 'Drops when mining certain stones, which sparkle'],
		[/tetra:pristine/, 'Possible drop from shattering Geodes in the Workbench'],
		[
			'evilcraft:origins_of_darkness',
			'Feed a Darkened Mob to an animal, and then throw a book at it',
		],
		[
			'evilcraft:dark_power_gem',
			'Throw a Dark Gem into a pool of at least 5 buckets of liquid Blood',
		],
		[
			'evilcraft:hardened_blood_shard',
			'Mine Hardened Blood while holding a Flint and Steel',
		],
		['minecraft:dead_bush', 'Shear a Sapling'],
		['evilcraft:dark_gem_crushed', 'Mine Dark Ore with Fortune'],
		['ars_nouveau:drygmy_shard', "Drygmys can be summoned with Nature's Aura!"],
		[
			'ars_nouveau:whirlisprig_shards',
			"Whirlisprigs can be summoned with Nature's Aura!",
		],
		[
			'ars_nouveau:starbuncle_shards',
			"Starbuncles can be summoned with Nature's Aura!",
		],
		[
			'naturesaura:gold_leaf',
			'Get by harvesting Golden Leaves, which you get by using Brilliant Fiber on Leaves and then allowing it to spread.',
		],
		[
			'naturesaura:vacuum_bottle',
			'Get by using a Bottle and Cork in an area with massively low Aura',
		],
		[
			'naturesaura:end_flower',
			'Grows on the main End Island when the Dragon dies',
		],
		[
			'naturesaura:birth_spirit',
			'Has a chance of dropping if two animals breed in an area with excess Aura',
		],
		['hexcasting:amethyst_dust', 'Drops from Amethyst Clusters'],
		[
			'hexcasting:charged_amethyst',
			'Rare drop from Amethyst Clusters. Chance increases with Fortune.',
		],
	]

	for (let info of infos) {
		event.addItem(info[0], info[1])
	}

	let candleEnchants = [
		['white', ['minecraft:unbreaking']],
		['orange', ['minecraft:fire_protection']],
		['magenta', ['minecraft:knockback', 'minecraft:punch']],
		['light_blue', ['minecraft:feather_falling']],
		[
			'yellow',
			['minecraft:looting', 'minecraft:fortune', 'minecraft:luck_of_the_sea'],
		],
		['lime', ['minecraft:blast_protection']],
		['pink', ['minecraft:silk_touch', 'minecraft:channeling']],
		['gray', ['minecraft:bane_of_arthropods']],
		['light_gray', ['minecraft:protection']],
		[
			'cyan',
			['minecraft:respiration', 'minecraft:loyalty', 'minecraft:infinity'],
		],
		['purple', ['minecraft:sweeping', 'minecraft:multishot']],
		[
			'brown',
			[
				'minecraft:efficiency',
				'minecraft:sharpness',
				'minecraft:lure',
				'minecraft:power',
				'minecraft:impaling',
				'minecraft:quick_charge',
			],
		],
		[
			'blue',
			[
				'minecraft:aqua_affinity',
				'minecraft:depth_strider',
				'minecraft:riptide',
			],
		],
		['green', ['minecraft:thorns', 'minecraft:piercing']],
		['red', ['minecraft:fire_aspect', 'minecraft:flame']],
		['black', ['minecraft:smite', 'minecraft:projectile_protection']],
	]

	for (let pair of candleEnchants) {
		let candle = `minecraft:${pair[0]}_candle`
		let enchants = pair[1]

		let listOfEnchants = []

		for (let enchant of enchants) {
			let enchantName = enchant.split(':')[1]

			//Convert a snake_case string to a fancy string
			let fancyEnchantName = enchantName
				.split('_')
				.map((word) => word[0].toUpperCase() + word.slice(1))
				.join(' ')

			listOfEnchants.push(fancyEnchantName)
		}

		event.addItem(
			candle,
			`When used with the Matrix Enchanter, increases odds of getting:\n• ${listOfEnchants.join(
				'\n• '
			)}`
		)
	}
})
