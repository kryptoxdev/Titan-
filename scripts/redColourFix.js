const dropdown = document.querySelector("select[id='colourSelect']");
const colourText = document.querySelector("#dataInput > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div > p");
const buttons = Array.from(document.querySelectorAll("input[class='btn-check']"));

let timeout;

function redColourFix() {
	timeout = setInterval(() => {
		if (colourText.textContent.toLowerCase().includes('red')) {
			dropdown.value = 'Red';
		}
	}, 750);
}

dropdown.addEventListener('change', () => {
	clearTimeout(timeout);
})