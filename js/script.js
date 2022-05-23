const form = document.querySelector(".form");

const firstNameInput = document.querySelector("#firstName");
const firstNameCtrl = document.querySelector(".form__ctrl:first-of-type");
const firstNameError = document.querySelector(
	".form__ctrl:first-of-type+.error__msg"
);

const lastNameInput = document.querySelector("#lastName");
const lastNameCtrl = document.querySelector(".form__ctrl:nth-of-type(2)");
const lastNameError = document.querySelector(
	".form__ctrl:nth-of-type(2)+.error__msg"
);

const emailInput = document.querySelector("#email");
const emailCtrl = document.querySelector(".form__ctrl:nth-of-type(3)");
const emailError = document.querySelector(
	".form__ctrl:nth-of-type(3)+.error__msg"
);
const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const passwordInput = document.querySelector("#password");
const passwordCtrl = document.querySelector(".form__ctrl:last-of-type");
const passwordError = document.querySelector(
	".form__ctrl:last-of-type+.error__msg"
);

form.onsubmit = submitFormat;

function submitFormat(event) {
	event.preventDefault();

	if (firstNameInput.value === "") {
		firstNameCtrl.classList.add("error");
		firstNameError.textContent = "First Name cannot be empty";
	} else {
		firstNameCtrl.classList.remove("error");
		firstNameError.textContent = "";
	}

	if (lastNameInput.value === "") {
		lastNameCtrl.classList.add("error");
		lastNameError.textContent = "Last Name cannot be empty";
	} else {
		lastNameCtrl.classList.remove("error");
		lastNameError.textContent = "";
	}

	if (emailInput.value === "") {
		emailCtrl.classList.add("error");
		emailError.textContent = "Email Address cannot be empty";
	} else if (!emailReg.test(emailInput.value)) {
		emailCtrl.classList.add("error");
		emailError.textContent = "Looks like this is not an email";
	} else {
		emailCtrl.classList.remove("error");
		emailError.textContent = "";
	}

	if (passwordInput.value === "") {
		passwordCtrl.classList.add("error");
		passwordError.textContent = "Last Name cannot be empty";
	} else {
		passwordCtrl.classList.remove("error");
		passwordError.textContent = "";
	}
}
