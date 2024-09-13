const dropdown = document.querySelector("select[id='colourSelect']");
const colourText = document.querySelector("#dataInput > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div > p");
const buttons = Array.from(document.querySelectorAll("input[class='btn-check']"));

function debounce(func, wait) {
	let timeout;
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), wait);
	};
}

function redColourFix() {
	if (colourText.innerHTML.includes('(product)red')) {
		dropdown.value = 'Red';
	}
}

const debouncedRedColourFix = debounce(redColourFix, 750);

dropdown.addEventListener('change', () => {
	debouncedRedColourFix();
});

buttons.forEach(button => {
	button.addEventListener('click', () => {
		debouncedRedColourFix();
	});
});