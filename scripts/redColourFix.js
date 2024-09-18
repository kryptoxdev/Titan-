const dropdown = document.querySelector("#testing_color > div > div > div.mt-4.shrink-0.sm\\:mt-0.sm\\:ml-5.w-1\\/2 > div > select");
const colourText = document.querySelector("#testing_color > div > div > div.truncate > div.mt-2.flex > div > p");
const buttons = Array.from(document.querySelectorAll("input[class='button']"));

let timeout;

function redColourFix() {
	timeout = setInterval(() => {
		if (colourText.textContent.toLowerCase().includes('red')) {
			dropdown.value = 'red';
		}
	}, 750);
}

dropdown.addEventListener('change', () => {
	clearTimeout(timeout);
})