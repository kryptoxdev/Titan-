function switchBezelRear() {
	let rearGroup = document.querySelector("#rearRow"); // Copy JS path to rear housing group
	let bezelGroup = document.querySelector("#bezelRow"); // Copy JS path to bezel group

	rearGroup.style.position = "relative";
	bezelGroup.style.position = "relative";

	rearGroup.style.top = "72px";
	bezelGroup.style.top = "-72px";
}

const observer = new MutationObserver((mutations) => {
	mutations.forEach((mutation) => {
		if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
			switchBezelRear();
		}
	});
});

observer.observe(document.querySelector('#rearRow'), { attributes: true, attributeFilter: ['style'] });
observer.observe(document.querySelector('#bezelRow'), { attributes: true, attributeFilter: ['style'] });