const dropdown = document.querySelector("#testing_color > div > div > div.mt-4.shrink-0.sm\\:mt-0.sm\\:ml-5.w-1\\/2 > div > select"); //Copy JS path for the colour select
const colourText = document.querySelector("#testing_color > div > div > div.truncate > div.mt-2.flex > div > p"); //Copy JS path for colour subtext
const buttons = Array.from(document.querySelectorAll("input[class='button']")); //Change class to match buttons or something on those lines

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
