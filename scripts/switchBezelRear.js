let rearGroup = document.querySelector("#conditions > div > div.bg-white.overflow-hidden.sm\\:rounded-md > ul > li:nth-child(2) > div > div");
let bezelGroup = document.querySelector("#conditions > div > div.bg-white.overflow-hidden.sm\\:rounded-md > ul > li:nth-child(3) > div > div");

function switchBezelRear() {
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

observer.observe(rearGroup, { attributes: true, attributeFilter: ['style'] });
observer.observe(bezelGroup, { attributes: true, attributeFilter: ['style'] });