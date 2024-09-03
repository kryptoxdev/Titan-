const colourText = Array.from(document.querySelectorAll('div'))
	.find(el => el.textContent === 'product(Red)');
const dropdown = document.querySelector("select[id='colourSelect']");

if (colourText) {
	dropdown.value = 'Red';
}