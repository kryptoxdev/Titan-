const currentUrl = window.location.href;

function handleSettings(setting, functionName) {
	if (chrome.storage.sync && setting === true) {
		functionName();
	}
}

chrome.storage.sync.get(['redColourFix', 'processedCounter', 'switchBezelRear', 'gradeNameChange'], (result) => {
	if (currentUrl.startsWith("http://localhost:3000/phonecheck")) {
		handleSettings(result.redColourFix, redColourFix);
		handleSettings(result.processedCounter, processCounter);
		handleSettings(result.switchBezelRear, switchBezelRear);
		handleSettings(result.gradeNameChange, gradeNameChange);
	}
});