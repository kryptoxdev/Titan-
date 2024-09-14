'use strict';

let popup = {};

let openTitanElement = document.querySelector('button');
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

popup._onLinkClicked = function (event) {
	if (event.button === 0 || event.button === 1) {
		chrome.tabs.create({
			'url': 'https://titan.webuyanyphone.com',
			'active': (event.button === 0)
		})
	}
}

openTitanElement.addEventListener('mouseup', popup._onLinkClicked);