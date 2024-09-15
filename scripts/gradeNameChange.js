const conditionLabels = document.querySelector("#dataInput > div:nth-child(5)").querySelectorAll("label");

function gradeNameChange() {
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
}