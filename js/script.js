'use strict';

const inputField = document.querySelector('.search-form__input-field');
const searchIcon = document.querySelector('.search-form__icon');
const letterNumber = document.querySelector('.number');
const divNumber = document.querySelector('.search-form__input div')

document.addEventListener('mousedown', (event) => {
	if (event.target.closest('.search-form__icon')) {
		toggleClass();
	}
	else if (!event.target.matches('.search-form__input-field')) {
		removeClass();
	}
});
document.addEventListener('keyup', (event) => {
	if (event.key === 'Escape') {
		removeClass();
	}
});
document.addEventListener('input', (event) => {
	if (event.target.matches('.search-form__input-field')) {
		letterNumber.innerHTML = inputField.value.length;
	}
});

function removeClass() {
	inputField.classList.remove('disable');
	divNumber.classList.remove('disable');
}
function toggleClass() {
	inputField.classList.toggle('disable');
	divNumber.classList.toggle('disable');
}