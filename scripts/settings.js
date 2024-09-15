function redColourFixSettings() {
	debouncedRedColourFix();
}

function switchBezelRearSettings() {
	switchBezelRear();
}

function processCounterSettings() {
	processCounter();
}

function gradeNameChangeSettings() {
	gradeNameChange();
}

const currentUrl = window.location.href;

chrome.storage.sync.get(['redColourFix', 'processedCounter', 'switchBezelRear', 'gradeNameChange'], function (result) {
	const redColourFix = result.redColourFix;
	const processedCounter = result.processedCounter;
	const switchBezelRear = result.switchBezelRear;
	const gradeNameChange = result.gradeNameChange;
	
	if (currentUrl.startsWith("http://localhost:3000/phonecheck")) {
		if (redColourFix) {
			redColourFixSettings();
		}
		
		if (switchBezelRear) {
			switchBezelRearSettings();
		}
		
		if (gradeNameChange) {
			gradeNameChangeSettings();
		}
		
		if (processedCounter) {
			processCounterSettings();
		}
	}
});