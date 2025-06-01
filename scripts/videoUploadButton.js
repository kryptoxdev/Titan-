function videoUploadButton() {
	if (window.location.href.endsWith('/test') && !window.location.href.includes('/image_upload/')) {
		let uploadButton = document.querySelector("#results > div > div.bg-white.mb-10.pb-10.px-4.py-5.sm\\:px-6.sm\\:rounded-md.lg\\:h-75vh.overflow-scroll > div.grid.grid-cols-2.gap-2 > div:nth-child(2) > a");
		
		console.log(uploadButton.innerText);
		
		if (uploadButton.innerText === "UPLOAD VIDEO/PHOTO") {
			uploadButton.innerText = "Upload";
		};
	}
}

if (!window.location.href.includes("/image_upload")) {
	const videoButtonObserver = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.type === 'childList' || mutation.type === 'characterData') {
				console.log("observed");
				videoUploadButton();
			}
		});
	});

	videoButtonObserver.observe(document.querySelector("#results > div > div.bg-white.mb-10.pb-10.px-4.py-5.sm\\:px-6.sm\\:rounded-md.lg\\:h-75vh.overflow-scroll > div.grid.grid-cols-2.gap-2 > div:nth-child(2) > a"), { childList: true, characterData: true, subtree: true });
}