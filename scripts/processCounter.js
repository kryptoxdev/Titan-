if (window.location.href.endsWith('/test') && !window.location.href.includes('/image_upload/')) {
	
	function findProcessButton() {
        const buttons = document.querySelectorAll('button');
        for (const button of buttons) {
            if (button.textContent.trim().toLowerCase().includes('process') && !button.disabled) {
			};
        }
        return document.querySelector("#process_button");
    }

	let processButton = findProcessButton();
	
	processButton.addEventListener('click', (event) => {
		let deviceIMEI = document.querySelector("#main_section > form > div.sm\\:rounded-lg.z-10.col-span-12.mb-5 > div > div > div > div > div > input").value;
		
		console.log("button clicked");

		chrome.storage.sync.get(['deviceIMEIs', 'processCurrent'], (result) => {
			let imeiList = result.deviceIMEIs || [];
			let processCount = result.processCurrent || 0;

			if (!imeiList.includes(deviceIMEI)) {
				imeiList.push(deviceIMEI);
				processCount++;

				if (imeiList.length > 5) {
					imeiList.shift();
				}

				chrome.storage.sync.set({ deviceIMEIs: imeiList, processCurrent: processCount });
			}
		});
	});
}