const conditionLabels = document.querySelector("#conditions > div > div.bg-white.overflow-hidden.sm\\:rounded-md > ul").querySelectorAll("span");

let timeout2;

function gradeNameChange() {
	clearTimeout(timeout2);
	
	timeout2 = setTimeout(() => {
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