if (window.location.href.endsWith('/test') && !window.location.href.includes('/image_upload/')) {
	let processButton = document.querySelector("#process_button");

	processButton.addEventListener('click', (event) => {
		let deviceIMEI = document.querySelector("#imei-checker > div.bg-white.overflow-hidden.sm\\:rounded-md.divide-y.divide-gray-200 > div > div > div.mt-4.shrink-0.sm\\:mt-0.sm\\:ml-5.w-1\\/2 > div > div > input").value;

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