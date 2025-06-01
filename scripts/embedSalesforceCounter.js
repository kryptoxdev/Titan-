function embedSalesforceCounter() {
	// Function to handle saving input values to Chrome storage
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

	// Element creation
	let navbar = document.querySelector("#titanContent > div:nth-child(1) > div.hidden.md\\:flex.md\\:shrink-0 > div > div.shrink-0.flex.bg-gray-700.p-4");

	if (navbar) {
		navbar.classList.add("flex-col");

		const counterDiv = document.createElement("div");
		counterDiv.classList.add("space-y-1");

		const headerContainer = document.createElement("div");
		headerContainer.classList.add("flex", "justify-between", "items-center", "pb-1");

		const salesforceHeader = document.createElement("p");
		salesforceHeader.textContent = "Salesforce";
		salesforceHeader.classList.add("text-gray-300", "text-md", "font-medium");
		headerContainer.appendChild(salesforceHeader);

		const resetButton = document.createElement("button");
		resetButton.id = "resetButton";
		resetButton.textContent = "Reset";
		resetButton.classList.add(
			"bg-gray-500", "hover:bg-gray-800", "py-1", "px-2", "rounded", "text-xs", "text-white"
		);
		headerContainer.appendChild(resetButton);

		counterDiv.appendChild(headerContainer);

		const salesforceCounter = document.createElement("div");
		salesforceCounter.id = "salesforceCounter";
		salesforceCounter.classList.add("pb-3");

		const lastCountDiv = document.createElement("div");
		const lastCountInput = document.createElement("input");
		lastCountInput.id = "salesforceLast";
		lastCountInput.type = "number";
		lastCountInput.classList.add("bg-gray-700", "border-0", "text-gray-300", "w-20", "h-8");

		const lastCountLabel = document.createElement("small");
		lastCountLabel.textContent = "Last Count";
		lastCountLabel.classList.add("text-gray-300", "text-sm", "font-medium", "px-2");

		lastCountDiv.appendChild(lastCountInput);
		lastCountDiv.appendChild(lastCountLabel);

		const currentCountDiv = document.createElement("div");
		currentCountDiv.classList.add("pt-2");

		const currentCountInput = document.createElement("input");
		currentCountInput.id = "salesforceCurrent";
		currentCountInput.type = "number";
		currentCountInput.classList.add("bg-gray-700", "border-0", "text-gray-300", "w-20", "h-8");

		const currentCountLabel = document.createElement("small");
		currentCountLabel.textContent = "Current Count";
		currentCountLabel.classList.add("text-gray-300", "text-sm", "font-medium", "px-2");

		currentCountDiv.appendChild(currentCountInput);
		currentCountDiv.appendChild(currentCountLabel);

		salesforceCounter.appendChild(lastCountDiv);
		salesforceCounter.appendChild(currentCountDiv);

		counterDiv.appendChild(salesforceCounter);

		// Data handling
		chrome.storage.sync.get([currentCountInput.id, lastCountInput.id], (result) => {
			currentCountInput.value = result[currentCountInput.id] || 0;
			lastCountInput.value = result[lastCountInput.id] || 0;
		});

		navbar.prepend(counterDiv);

		handleEdit(currentCountInput);
		handleEdit(lastCountInput);

		chrome.storage.onChanged.addListener((changes, areaName) => {
			if (areaName === 'sync') {
				if (changes.salesforceCurrent) {
					currentCountInput.value = changes.salesforceCurrent.newValue || 0;
				}
				if (changes.salesforceLast) {
					lastCountInput.value = changes.salesforceLast.newValue || 0;
				}
			}
		});

		resetButton.addEventListener("click", () => {
			chrome.storage.sync.set({
				[lastCountInput.id]: currentCountInput.value,
				[currentCountInput.id]: 0
			});
		});

		document.addEventListener('keydown', (event) => {
			chrome.storage.sync.get('salesforceKeybind', (result) => {
				if (event.key.toUpperCase() === result.salesforceKeybind) {
					chrome.storage.sync.set({
						[lastCountInput.id]: currentCountInput.value,
						[currentCountInput.id]: 0
					});
				}
			});
		});

	} else {
		console.warn("Navbar element not found. The counter cannot be displayed.");
	}
}