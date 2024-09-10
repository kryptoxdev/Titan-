function redColourFixSettings() {
	redColourFix();
}

function switchBezelRearSettings() {
	switchBezelRear();
}

chrome.storage.sync.get(['redColourFix', 'switchBezelRear'], function (result) {
	const redColourFix = result.redColourFix;
	const switchBezelRear = result.switchBezelRear;
	
	if (redColourFix) {
		redColourFixSettings();
	}
	
	if (switchBezelRear) {
		switchBezelRearSettings();
	} 
});