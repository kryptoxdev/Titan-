if (window.location.href.includes('tweaks')) {
	let settingsOwner = document.getElementById('settings');
	let settingsGroup = settingsOwner.querySelectorAll('input');
	let changeInputProcess = document.getElementById('changeInputProcess');
	let changeInputSalesforce = document.getElementById('changeInputSalesforce');
	let currentKeybindProcess = "";
	let currentKeybindSalesforce = "";

	chrome.storage.sync.get(['switchBezelRear', 'videoUploadButton', 'embedProcessCounter', 'embedSalesforceCounter'], function (result) {
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

	// Helper for loading and saving keybinds
	function setupKeybindInput(input, storageKey, currentKeybindVar) {
		chrome.storage.sync.get(storageKey, (result) => {
			let loadedKeybind = result[storageKey];
			if (loadedKeybind === undefined || loadedKeybind === null) {
				chrome.storage.sync.set({ [storageKey]: input.value });
				loadedKeybind = input.value;
			}
			input.value = loadedKeybind;
		});

		input.addEventListener("keydown", (event) => {
			event.preventDefault();
			const disallowedKeys = /^[a-zA-Z0-9]$/.test(event.key);
			if (disallowedKeys || event.key === "-") {
				input.value = "";
				input.placeholder = "Invalid key.";
				return;
			} else {
				input.value = event.key.toUpperCase();
				chrome.storage.sync.set({ [storageKey]: input.value }, () => {
					input.blur();
				});
			}
		});

		input.addEventListener('focus', () => {
			if (storageKey === 'processKeybind') currentKeybindProcess = input.value;
			if (storageKey === 'salesforceKeybind') currentKeybindSalesforce = input.value;
			input.value = '';
			input.placeholder = "Press a key..";
		});

		input.addEventListener("blur", () => {
			if (input.value === "" || input.value === "Press a key..." || input.value === "Invalid key.") {
				if (storageKey === 'processKeybind') input.value = currentKeybindProcess;
				if (storageKey === 'salesforceKeybind') input.value = currentKeybindSalesforce;
			}
		});
	}

	// Setup both keybind inputs
	setupKeybindInput(changeInputProcess, 'processKeybind', currentKeybindProcess);
	setupKeybindInput(changeInputSalesforce, 'salesforceKeybind', currentKeybindSalesforce);
}