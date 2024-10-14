function switchBezelRear() {
	let rearGroup = document.querySelector("#rearHousing");
	let bezelGroup = document.querySelector("#bezels");

	rearGroup.style.position = "relative";
	bezelGroup.style.position = "relative";

	rearGroup.style.top = "54px";
	bezelGroup.style.top = "-54px";
}

const observer = new MutationObserver((mutations) => {
	mutations.forEach((mutation) => {
		if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
			switchBezelRear();
		}
	});
});

observer.observe(document.querySelector("#rearHousing"), { attributes: true, attributeFilter: ['style'] });
observer.observe(document.querySelector("#bezels"), { attributes: true, attributeFilter: ['style'] });