'use strict';

let popup = {};

let openTitanElement = document.querySelector('button');
let settingsOwner = document.getElementById('settings');
let settingsGroup = settingsOwner.querySelectorAll('input');

settingsGroup.forEach(input => {
	var savedState = localStorage.getItem(input.id);
	if (savedState === 'true') {
		input.setAttribute('checked', 'checked');
	} else {
		input.removeAttribute('checked');
	}
});

settingsOwner.addEventListener('change', function(event) {
	settingsGroup.forEach(input => {
		localStorage.setItem(`${input.id}`, input.checked);
	});
});

popup._onLinkClicked = function (event) {
	if(event.button === 0 || event.button === 1) {
		chrome.tabs.create({
			'url': 'https://titan.webuyanyphone.com',
			'active': (event.button === 0)
		})
	}
}

openTitanElement.addEventListener('mouseup', popup._onLinkClicked);