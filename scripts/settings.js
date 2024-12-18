const currentUrl = window.location.href;

function handleSettings(setting, functionName) {
	if (chrome.storage.sync && setting === true) {
		functionName();
	}
}

chrome.storage.sync.get(['switchBezelRear', 'trackVideoUploads'], (result) => {
	if (!currentUrl.includes("/image_upload/")) {
		handleSettings(result.switchBezelRear, switchBezelRear);
	}
	
	handleSettings(result.trackVideoUploads, trackVideoUploads);
});