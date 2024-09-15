const currentUrl = window.location.href;

function handleSettings(setting, functionName) {
	if (chrome.storage.sync && setting === true) {
		functionName();
	}
}

chrome.storage.sync.get(['redColourFix', 'processedCounter', 'switchBezelRear', 'gradeNameChange'], (result) => {
	if (currentUrl.startsWith("https://titan.webuyanyphone.com/tradeinproduct")) {
		handleSettings(result.redColourFix, redColourFix);
		handleSettings(result.processedCounter, processCounter);
		handleSettings(result.switchBezelRear, switchBezelRear);
		handleSettings(result.gradeNameChange, gradeNameChange);
	}
});