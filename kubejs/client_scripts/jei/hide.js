JEIEvents.hideItems((event) => {
	
	for (let item of global.itemsToRemove) {
		event.hide(item)
	}

	event.hide([/ae2:facade/])
})
