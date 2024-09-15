const dropdown = document.querySelector("select[id='colourSelect']"); //Copy JS path for the colour select
const colourText = document.querySelector("#dataInput > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div > p"); //Copy JS path for colour subtext
const buttons = Array.from(document.querySelectorAll("input[class='btn-check']")); //Change class to match buttons or something on those lines

let timeout;

function redColourFix() {
	clearTimeout(timeout);

	timeout = setTimeout(() => {
		if (colourText.textContent.toLowerCase().includes('(product)red')) {
			dropdown.value = 'Red';
		}
	}, 750);
}

dropdown.addEventListener('change', redColourFix);
buttons.forEach(button => button.addEventListener('click', redColourFix));