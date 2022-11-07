
const form = document.querySelector(".form");
// const btnSubmit = document.querySelector("#btn-submit")

// Exercise 6
if(form){
form.addEventListener('submit', e => {
	//preventing reload if error
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN");
	let fEmail = document.getElementById("fEmail");
	let fPassword = document.getElementById("fPassword");
	let fAddress = document.getElementById("fAddress");
	let fPhone = document.getElementById("fPhone");

	//Regex
	const regEx = {
		regEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
		regPassword: /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{3,8}$/,
		regPhone: /^\d{9,14}$/,
		regNames: /^[A-Za-z\s]*$/,
		regAddress: /^[A-Za-z0-9'\.\-\s\,]{3,80}$/,
	}
	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value == "" || !fName.value.match(regEx.regNames) || fName.value.length < 3) {
		fName.classList.add('is-invalid')
		error++;
		fName.focus()
	} else {
		if (fName.value.match(regEx.regNames)) {
			fName.classList.remove('is-invalid')
			fName.classList.add('is-valid')
		}
	}
	if (fLastN.value == "" || !fLastN.value.match(regEx.regNames) || fLastN.value.length < 3) {
		fLastN.classList.add('is-invalid')
		error++;
		fLastN.focus()
	} else {
		if (fLastN.value.match(regEx.regNames)) {
			fLastN.classList.remove('is-invalid')
			fLastN.classList.add('is-valid')
		}
	}
	if (fEmail.value == "" || !fEmail.value.match(regEx.regEmail) || fEmail.value.length < 3) {
		fEmail.classList.add('is-invalid')
		error++;
		fEmail.focus()
	} else {
		if (fEmail.value.match(regEx.regEmail)) {
			fEmail.classList.remove('is-invalid')
			fEmail.classList.add('is-valid')
		}
	}
	if (fPassword.value == "" || !fPassword.value.match(regEx.regPassword) || fPassword.value.length < 3) {
		fPassword.classList.add('is-invalid')
		error++;
		fPassword.focus()
	} else {
		if (fPassword.value.match(regEx.regPassword)) {
			fPassword.classList.remove('is-invalid')
			fPassword.classList.add('is-valid')
		}
	}
	if (fAddress.value == "" || !fAddress.value.match(regEx.regAddress) || fAddress.value.length < 3) {
		fAddress.classList.add('is-invalid')
		error++;
		fAddress.focus()
	} else {
		if (fAddress.value.match(regEx.regAddress)) {
			fAddress.classList.remove('is-invalid')
			fAddress.classList.add('is-valid')
		}
	}
	if (fPhone.value == "" || !fPhone.value.match(regEx.regPhone)) {
		fPhone.classList.add('is-invalid')
		error++;
		fPhone.focus()

	} 
	else {
		if (fPhone.value.match(regEx.regPhone)) {
			fPhone.classList.remove('is-invalid')
			fPhone.classList.add('is-valid')
		}
	}
	if (error > 0) {
		e.preventDefault()
	} else {
		alert('Saved!✔')
	}
})}

	// Get the error elements
	// let errorName = document.getElementById("errorName");
	// let errorLastN = document.getElementById("errorLastN");
	// let errorEmail = document.getElementById("errorEmail");
	// let errorPassword = document.getElementById("errorPassword");
	// let errorAddress = document.getElementById("errorAddress");
	// let errorPhone = document.getElementById("errorPhone");