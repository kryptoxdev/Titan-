function switchBezelRear() {
	let rearGroup = document.querySelector("#rearRow");
	let bezelGroup = document.querySelector("#bezelRow");
	
	rearGroup.style.position = "relative";
	 bezelGroup.style.position = "relative";
	
	rearGroup.style.top = "54px";
	bezelGroup.style.top = "-54px";
}