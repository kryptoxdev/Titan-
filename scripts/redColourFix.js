function debounce(func, wait) {
	let timeout;
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), wait);
	};
}

const dropdown = document.querySelector("select[id='colourSelect']");
const colourText = document.querySelector("#dataInput > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div > p");

function redColourFix() {
	if (colourText.innerHTML.includes('(product)red')) {
		dropdown.value = 'Red';
	}
}

const debouncedRedColourFix = debounce(redColourFix, 750);

dropdown.addEventListener('change', () => {
	debouncedRedColourFix();
});

const colourObserver = new MutationObserver((mutations) => {
	mutations.forEach((mutation) => {
		if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
			debouncedRedColourFix();
		}
	});
});

colourObserver.observe(dropdown, { attributes: true, attributeFilter: ['value'] });
