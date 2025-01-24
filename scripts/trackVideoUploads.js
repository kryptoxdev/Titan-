function trackVideoUploads() {
	let currentStatus = false;
	
    if (window.location.href.includes("/image_upload")) {
        const saveButton = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div > main > div > div > div > form > div.mx-5.pt-5 > div > button.ml-3.inline-flex.justify-center.rounded-md.border.border-transparent.bg-indigo-600.py-2.px-4.text-sm.font-medium.text-white.shadow-sm.hover\\:bg-indigo-700.focus\\:outline-none.focus\\:ring-2.focus\\:ring-indigo-500.focus\\:ring-offset-2");

        saveButton.addEventListener("click", () => {
            chrome.runtime.sendMessage({ action: 'videoUploaded' });
        });
    }

    if (!window.location.href.includes("/image_upload")) {
        const detailsElement = document.querySelector("#results > div > div.bg-white.mb-10.pb-10.px-4.py-5.sm\\:px-6.sm\\:rounded-md.lg\\:h-75vh.overflow-scroll > div.grid.grid-cols-3.gap-2 > div:nth-child(1) > p:nth-child(5)");
        let currentImei = document.querySelector("#imei-checker > div.bg-white.overflow-hidden.sm\\:rounded-md.divide-y.divide-gray-200 > div > div > div.mt-4.shrink-0.sm\\:mt-0.sm\\:ml-5.w-1\\/2 > div > div > input").value;

        chrome.runtime.sendMessage({ action: 'productScanned', imei: currentImei });

        detailsElement.innerText = 'Video: ';

        const elementSplit = document.createElement('span');

        chrome.storage.local.get('imeiHistory', (result) => {
            const imeiHistory = result.imeiHistory || [];
            if (imeiHistory.includes(currentImei)) {
                elementSplit.innerText = 'Uploaded';
                elementSplit.style.color = 'green';
				currentStatus = true;
            } else {
                elementSplit.innerText = 'Not uploaded';
                elementSplit.style.color = 'red';
				currentStatus = false;
            }
        });

        detailsElement.appendChild(elementSplit);

        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (request.action === 'updateVideoStatus') {
                if (request.status === 'Uploaded') {
                    elementSplit.innerText = 'Uploaded';
                    elementSplit.style.color = 'green';
					currentStatus = true;
                }
            }
        });
    }

    if (!window.location.href.includes("/image_upload")) {
        const elementSplit = document.querySelector("#results > div > div.bg-white.mb-10.pb-10.px-4.py-5.sm\\:px-6.sm\\:rounded-md.lg\\:h-75vh.overflow-scroll > div.grid.grid-cols-3.gap-2 > div:nth-child(1) > p:nth-child(5) > span"); // Select the span element

        const videoObserver = new MutationObserver((mutationsList, observer) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    if (!elementSplit.textContent === 'Uploaded' || !elementSplit.textContent === 'Not uploaded') {
                        if(currentStatus === true) {
							elementSplit.innerText = 'Uploaded';
							elementSplit.style.color = 'green';
						} else {
							elementSplit.innerText = 'Not uploaded';
							elementSplit.style.color = 'red';
						}
                    }
                }
            });
        });

        videoObserver.observe(elementSplit, { childList: true }); 
    }
}