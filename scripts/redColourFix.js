const dropdown = document.querySelector("select[id='colourSelect']");
const colourText = document.querySelector("#dataInput > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div > p");

function redColourFix() {
	if (colourText.innerHTML.includes('(product)red')) {
		dropdown.value = 'Red';
	}
}

dropdown.addEventListener('change', () => {
	redColourFix();
});