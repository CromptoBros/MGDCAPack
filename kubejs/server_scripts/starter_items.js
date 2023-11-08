let akashic = Item.of(
  'akashictome:tome',
  '{"akashictome:data":{advancedperipherals:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}},ae2:{Count:1b,id:"ae2:guide"},alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},botania:{Count:1b,id:"botania:lexicon"},engineersdecor:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"engineersdecor:engineersdecor_manual"}},evilcraft:{Count:1b,id:"evilcraft:origins_of_darkness"},ftbquests:{Count:1b,id:"ftbquests:book"},hexcasting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"hexcasting:thehexbook"}},immersiveengineering:{Count:1b,id:"immersiveengineering:manual"},integratedtunnels:{Count:1b,id:"integrateddynamics:on_the_dynamics_of_integration",tag:{"akashictome:displayName":{text:\'{"translate":"item.integrateddynamics.on_the_dynamics_of_integration"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.integrateddynamics.on_the_dynamics_of_integration"}]}\'}}},laserio:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"laserio:laseriobook"}},littlelogistics:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"littlelogistics:guide"}},modularrouters:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"modularrouters:book"}},naturesaura:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}},pneumaticcraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}},rftoolsbase:{Count:1b,id:"rftoolsbase:manual",tag:{"akashictome:displayName":{text:\'{"translate":"item.rftoolsbase.manual"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.rftoolsbase.manual"}]}\'}}},statues:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"statues:statues"}}},"akashictome:is_morphing":1b}'
)

let startingItems = [akashic]

PlayerEvents.loggedIn((event) => {
  if (!event.player.stages.has('starting_items')) {
    event.player.stages.add('starting_items')
    for (let item of startingItems) {
      event.player.give(item)
    }
  }
})

ServerEvents.recipes((recipe) => {
  recipe.shapeless(akashic, ['minecraft:dirt'])
})
