'use strict';

let popup = {};

function handleEdit(input) {
	input.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			input.blur();
		}
	});

	input.addEventListener("blur", () => {
		let trimmedValue = input.value.replace(/^0+(?!$)/, '');

		input.value = trimmedValue || 0;
		chrome.storage.sync.set({ [input.id]: input.value });
	});
}

document.addEventListener('DOMContentLoaded', () => {
	const counterElements = document.querySelectorAll('div[id$=Counter]');

	counterElements.forEach(counterSection => {
		const currentCount = counterSection.querySelector('input[id$=Current]');
		const lastCount = counterSection.querySelector('input[id$=Last]');
		const resetButton = counterSection.previousElementSibling.querySelector('#resetButton');

		chrome.storage.sync.get([currentCount.id, lastCount.id], (result) => {
			currentCount.value = result[currentCount.id] || 0;
			lastCount.value = result[lastCount.id] || 0;
		});

		resetButton.addEventListener("click", () => {
			chrome.storage.sync.set({ [currentCount.id]: 0, [lastCount.id]: currentCount.value });
			location.reload();
		});

		handleEdit(currentCount);
		handleEdit(lastCount);
	});
});