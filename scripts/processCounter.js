function processCounter() {
	let processForm = document.querySelector("#dataInput"); //Change to process form ID, or copy JS path

	processForm.addEventListener('submit', (event) => {
		let deviceIMEI = document.querySelector("#imei").value; //Change to IMEI input box ID, or copy JS path

		chrome.storage.sync.get(['deviceIMEIs', 'processCount'], (result) => {
			let imeiList = result.deviceIMEIs || [];
			let processCount = result.processCount || 0;

			if (!imeiList.includes(deviceIMEI)) {
				imeiList.push(deviceIMEI);
				processCount++;
				
				if (imeiList.length > 5) {
					imeiList.shift();
				}
				
				chrome.storage.sync.set({ deviceIMEIs: imeiList, processCount: processCount });
			}
		});
	});
}