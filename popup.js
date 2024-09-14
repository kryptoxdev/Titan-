'use strict';

let popup = {};

let openTitanButton = document.querySelector("button[id='openTitanLink']");
let resetCounterButton = document.querySelector("button[id='resetCounter']");

let currentCount = document.getElementById("currentCount");
let lastCount = document.getElementById("lastCount");

let settingsOwner = document.getElementById('settings');
let settingsGroup = settingsOwner.querySelectorAll('input');

chrome.storage.sync.get(['redColourFix', 'processedCounter', 'switchBezelRear', 'gradeNameChange'], function (result) {
	settingsGroup.forEach(setting => {
		setting.checked = result[setting.id] || false;
	});
});

settingsOwner.addEventListener('change', function (event) {
	const settingName = event.target.id;
	const settingValue = event.target.checked;
	chrome.storage.sync.set({ [settingName]: settingValue }, function () {
		console.log('Setting saved:', settingName, settingValue);
	});
});

chrome.storage.sync.get(["processCount", "lastCount"], (result) => {
	currentCount.textContent = result.processCount || 0;
	lastCount.textContent = result.lastCount || 0;
});

chrome.storage.sync.onChanged.addListener((changes) => {
	if (changes.processCount) {
		currentCount.textContent = changes.processCount.newValue || 0;
	}
});

resetCounterButton.addEventListener("click", () => {
	chrome.storage.sync.set({ processCount: 0, lastCount: currentCount.textContent });
	
	location.reload();
});

popup._onLinkClicked = function (event) {
	if (event.button === 0 || event.button === 1) {
		chrome.tabs.create({
			'url': 'https://titan.webuyanyphone.com',
			'active': (event.button === 0)
		})
	}
}

openTitanButton.addEventListener('mouseup', popup._onLinkClicked);