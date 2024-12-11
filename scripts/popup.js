const buttons = document.querySelectorAll('footer button');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const buttonName = button.id.slice(0, -6);
		sessionStorage.setItem('selectedButton', buttonName);
		window.location.href = `./${buttonName}.html`;
	});
});

window.addEventListener('load', () => {
	const selectedButton = sessionStorage.getItem('selectedButton') || 'counters';

	buttons.forEach(button => {
		const buttonName = button.id.slice(0, -6);

		if (buttonName === selectedButton) {
			button.classList.add('selected');
			button.querySelector('img').classList.add('selected');
		} else {
			button.classList.remove('selected');
			button.querySelector('img').classList.remove('selected');
		}
	});
});