function switchBezelRear() {
	let rearGroup = document.querySelector("#rearRow");
	let bezelGroup = document.querySelector("#bezelRow");

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

observer.observe(document.querySelector('#rearRow'), { attributes: true, attributeFilter: ['style'] });
observer.observe(document.querySelector('#bezelRow'), { attributes: true, attributeFilter: ['style'] });