if (window.location.href.includes('tweaks')) {
	let settingsOwner = document.getElementById('settings');
	let settingsGroup = settingsOwner.querySelectorAll('input');

	console.log(settingsGroup);
	
	chrome.storage.sync.get(['switchBezelRear', 'trackVideoUploads'], function (result) {
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
}