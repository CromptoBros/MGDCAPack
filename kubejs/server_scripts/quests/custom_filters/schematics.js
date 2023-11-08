$ItemFiltersAPI.registerCustomFilter('basic_scroll', (itemstack) =>
  checkScrollType(itemstack, 'sword/')
)
$ItemFiltersAPI.registerCustomFilter(
  'treatise_scroll',
  (itemstack) =>
    checkScrollType(itemstack, '_expertise') ||
    checkScrollType(itemstack, '_efficiency')
)
$ItemFiltersAPI.registerCustomFilter('war_scroll', (itemstack) =>
  checkScrollType(itemstack, 'warforge/')
)
$ItemFiltersAPI.registerCustomFilter('hone_scroll', (itemstack) =>
  checkScrollType(itemstack, 'hone/')
)

let checkScrollType = (itemstack, searched) => {
  const item = itemstack.getIdLocation()

  if (item != 'tetra:scroll_rolled') return false

  const nbt = itemstack?.nbt
  const scrollType = nbt?.BlockEntityTag?.data[0]?.key

  return scrollType.includes(searched)
}

let exampleBasic = {
  BlockEntityTag: {
    data: [
      {
        glyphs: [4, 1, 0, 5],
        intricate: 0,
        key: 'sword/throwing_knife',
        material: 1,
        ribbon: 'b8ced9',
        schematics: ['tetra:sword/throwing_knife'],
      },
    ],
  },
}

let exampleTreatise = {
  BlockEntityTag: {
    data: [
      {
        effects: ['tetra:gem_expertise'],
        glyphs: [14, 13, 14, 15],
        intricate: 0,
        key: 'gem_expertise',
        material: 0,
        ribbon: '2bffee',
      },
    ],
  },
}

let exampleWar = {
  BlockEntityTag: {
    data: [
      {
        details: 'warforge',
        glyphs: [6, 7, 11, 7],
        intricate: 0,
        key: 'warforge/adze',
        material: 2,
        ribbon: '8559b3',
        schematics: ['tetra:warforge/adze'],
      },
    ],
  },
}

let exampleHone = {
  BlockEntityTag: {
    data: [
      {
        glyphs: [15, 14, 15, 15],
        intricate: 1,
        key: 'hone/gild_1',
        material: 2,
        ribbon: 'c9ae69',
        schematics: ['tetra:hone/gild_1'],
      },
    ],
  },
}
