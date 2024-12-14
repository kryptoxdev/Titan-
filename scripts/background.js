let originalTab;
let imeiHistory = [];
let currentImei;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === 'productScanned') {
		currentImei = request.imei;
		
		originalTab = sender.tab.id
	}
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === 'videoUploaded') {
		chrome.tabs.query({ currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(originalTab, { action: 'updateVideoStatus', status: 'Uploaded' });
			
			imeiHistory.push(currentImei);
			
			if (imeiHistory.length > 15) {
				imeiHistory.shift();
			}
			
			chrome.storage.local.set({imeiHistory: imeiHistory});
		});
	}
});