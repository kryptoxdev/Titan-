const conditionLabels = document.querySelector("#conditions > div > div.bg-white.overflow-hidden.sm\\:rounded-md > ul").querySelectorAll("span");

let gradeNameTimeout;

function gradeNameChange() {
	clearTimeout(gradeNameTimeout);
	
	gradeNameTimeout = setTimeout(() => {
		conditionLabels.forEach(label => {
		const textContent = label.textContent.trim();
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
	}, 400);
}