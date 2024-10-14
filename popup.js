'use strict';

let popup = {};

let btnGroup = document.querySelector("#btnGroup");
let openTitanButton = document.querySelector("button[id='openTitanLink']");
let resetCounterButton = document.querySelector("button[id='resetCounter']");
let processCounterSwitch = document.querySelector("#processedCounter");

let processNumbersDiv = document.getElementById("processNumbers");
let processDivChildren = processNumbersDiv.querySelectorAll("*");
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
	currentCount.value = result.processCount || 0;
	lastCount.value = result.lastCount || 0;
});

lastCount.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		lastCount.blur();
	}
});

lastCount.addEventListener("blur", function() {
	chrome.storage.sync.set({ lastCount: lastCount.value });
})

currentCount.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		currentCount.blur();
	}
});

currentCount.addEventListener("blur", function() {
	chrome.storage.sync.set({ processCount: currentCount.value });
})


chrome.storage.sync.get(['processedCounter'], (result) => {
	processDivChildren.forEach((element) => {
		element.hidden = !result.processedCounter;
	});

	if (result.processedCounter) {
		processNumbersDiv.classList.add('numberContainer', 'py-2');
		btnGroup.classList.remove('fixed-bottom');
		resetCounterButton.hidden = false;
	} else {
		processNumbersDiv.classList.remove('numberContainer', 'py-2');
		btnGroup.classList.add('fixed-bottom');
		resetCounterButton.hidden = true;
	}
});

chrome.storage.sync.onChanged.addListener((changes) => {
	if (changes.processCount) {
		currentCount.textContent = changes.processCount.newValue || 0;
	}
});

processCounterSwitch.addEventListener("click", () => {
	location.reload();
})

resetCounterButton.addEventListener("click", () => {
	chrome.storage.sync.set({ processCount: 0, lastCount: currentCount.value });

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