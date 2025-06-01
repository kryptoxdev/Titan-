if (window.location.href.includes('/retest/')) {
	
	function findSalesforceButton() {
        const buttons = document.querySelectorAll('button');
        for (const button of buttons) {
            if (button.textContent.trim().toLowerCase().includes('process') && !button.disabled) {
			};
        }
        return document.querySelector("#process_button");
    }

	let salesforceButton = findSalesforceButton();

	salesforceButton.addEventListener('click', (event) => {
		let deviceIMEI = document.querySelector("#imei").value;

		chrome.storage.sync.get(['deviceIMEIs', 'salesforceCurrent'], (result) => {
			let imeiList = result.deviceIMEIs || [];
			let salesforceCount = result.salesforceCurrent || 0;

			if (!imeiList.includes(deviceIMEI)) {
				imeiList.push(deviceIMEI);
				salesforceCount++;

				if (imeiList.length > 5) {
					imeiList.shift();
				}

				chrome.storage.sync.set({ deviceIMEIs: imeiList, salesforceCurrent: salesforceCount });
			}
		});
	});
}
