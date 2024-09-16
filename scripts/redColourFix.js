const dropdown = document.querySelector("#testing_color > div > div > div.mt-4.shrink-0.sm\\:mt-0.sm\\:ml-5.w-1\\/2 > div > select");
const colourText = document.querySelector("#testing_color > div > div > div.truncate > div.mt-2.flex > div > p");
const buttons = Array.from(document.querySelectorAll("input[class='button']"));

let timeout;

function redColourFix() {
	clearTimeout(timeout);

	timeout = setTimeout(() => {
		if (colourText.textContent.toLowerCase().includes('(product)red')) {
			dropdown.value = 'red';
		}
	}, 750);
}

dropdown.addEventListener('change', redColourFix);
buttons.forEach(button => button.addEventListener('click', redColourFix));