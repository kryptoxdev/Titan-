const settingsGroup = ['redColourFix', 'processedCounter', 'switchBezelRear'];

settingsGroup.forEach(setting => {
	console.log(localStorage.getItem(setting));
	if (localStorage.getItem(setting) === 'true') {
		if (setting === 'redColourFix') {
			redColourFix();
		} else if (setting === 'processedCounter') {
			// Call processedCounter function
		} else if (setting === 'switchBezelRear') {
			switchBezelRear();
		} else {
			console.log('All settings disabled');
		}
	}
})