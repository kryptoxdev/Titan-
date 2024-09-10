function redColourFixSettings() {
	redColourFix();
}

function switchBezelRearSettings() {
	switchBezelRear();
}

chrome.storage.sync.get(['redColourFix', 'processedCounter', 'switchBezelRear'], function (result) {
	const redColourFix = result.redColourFix;
	const processedCounter = result.processedCounter;
	const switchBezelRear = result.switchBezelRear;
	
	if (redColourFix) {
		redColourFixSettings();
	}
	
	if (switchBezelRear) {
		switchBezelRearSettings();
	} 
});