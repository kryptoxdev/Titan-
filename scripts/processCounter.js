function processCounter() {
	window.onload=function() {
		let processForm = document.getElementById('dataInput');
		let processKey = 'processedCount'
	
		processForm.addEventListener('submit', (event) => {
			let deviceIMEI = document.getElementById('deviceIMEI');
			
			if (localStorage.getItem(`${deviceIMEI}`)) {
				console.log('Already processed!')
			} else {
				localStorage.setItem(`${deviceIMEI}`, true);
				
				let processedCounter = parseInt(localStorage.getItem(processKey)) || 0;
				processedCounter++;
				localStorage.setItem(processKey, processedCounter);
				
				console.log("Device added to storage.");
			}
			
			console.log("Event triggered");
		});
	}
}

function processCounter() {
	let processForm = document.querySelector("#dataInput");
	
	processForm.addEventListener('submit', (event) => {
		let deviceIMEI = document.querySelector("#imei");
		
		chrome.storage.sync.get([])
		
		chrome.storage.sync.set({   }, function () {
		
		});
	});
}