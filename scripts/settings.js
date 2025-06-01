const currentUrl = window.location.href;

function handleSettings(setting, functionName) {
	if (chrome.storage.sync && setting === true) {
		if (typeof functionName === 'function') {
			functionName();
		} else {
			return;
		}
	}
}

chrome.storage.sync.get(['switchBezelRear', 'videoUploadButton', 'embedProcessCounter', "embedSalesforceCounter"], (result) => {
	if (!currentUrl.includes("/image_upload")) {
		handleSettings(result.switchBezelRear, typeof switchBezelRear !== 'undefined' ? switchBezelRear : null);
		handleSettings(result.videoUploadButton, typeof videoUploadButton !== 'undefined' ? videoUploadButton : null);
		handleSettings(result.embedProcessCounter, typeof embedProcessCounter !== 'undefined' ? embedProcessCounter : null);
		handleSettings(result.embedSalesforceCounter, typeof embedSalesforceCounter !== 'undefined' ? embedSalesforceCounter : null);
	}
});