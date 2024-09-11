const dropdown = document.querySelector("select[id='colourSelect']");
const colourText = Array.from(document.querySelectorAll('div'))
		.find(el => el.textContent === 'product(red)');

function redColourFix() {
	if (colourText) {
		dropdown.value = 'Red';
	}
}

dropdown.addEventListener('change', () => {
	redColourFix();
});