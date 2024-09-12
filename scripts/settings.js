function redColourFixSettings() {
	redColourFix();
}

function switchBezelRearSettings() {
	switchBezelRear();
}

function processCounterSettings() {
	processCounter();
}

const currentUrl = window.location.href;

chrome.storage.sync.get(['redColourFix', 'processedCounter', 'switchBezelRear'], function (result) {
	const redColourFix = result.redColourFix;
	const processedCounter = result.processedCounter;
	const switchBezelRear = result.switchBezelRear;
	
	if (currentUrl.startsWith("http://localhost:3000/phonecheck")) {
		if (redColourFix) {
			redColourFixSettings();
		}
		
		if (switchBezelRear) {
			switchBezelRearSettings();
		}
	}
	
	if (processedCounter) {
		processCounterSettings();
	}
});
