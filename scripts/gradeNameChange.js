const conditionLabels = document.querySelector("#dataInput > div:nth-child(5)").querySelectorAll("label");

let gradeNameTimeout;

function gradeNameChange() {
	conditionLabels.forEach(label => {
		var textContent = label.textContent.trim();
		switch (textContent) {
			case 'None':
				label.textContent = 'A+';
				break;
			case 'Light':
				label.textContent = 'A';
				break;
			case 'Moderate':
				label.textContent = 'B';
				break;
			case 'Heavy':
				label.textContent = 'C';
		}
	})
}

const gradeNameObserver = new MutationObserver((mutations) => {
	mutations.forEach((mutation) => {
		console.log(mutation.type);
		if (mutation.type === 'childList') {
			gradeNameChange();
		}
	});
});

conditionLabels.forEach(label => {
	gradeNameObserver.observe(label, { characterData: false, attributes: false, childList: true, subtree: false });
});