
const form = document.getElementsByClassName("form")[0];
const btnSubmit = document.querySelector("#btn-submit")
	
// Exercise 6
form.addEventListener('submit', e => {

	//preventing reload if error
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN");
	let fEmail = document.getElementById("fEmail");
	let fPassword = document.getElementById("fPassword");
	let fAddress  = document.getElementById("fAddress");
	let fPhone  = document.getElementById("fPhone");

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorLastN = document.getElementById("errorLastN");  
	let errorEmail = document.getElementById("errorEmail");  
	let errorPassword = document.getElementById("errorPassword");  
	let errorAddress = document.getElementById("errorAddress");  
	let errorPhone = document.getElementById("errorPhone");  

	//Regex
	const regEx = { 
		regEmail : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
		regPassword: /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{3,8}$/,
		regPhone:  /^\+34\d{9}$/,
		regNames: /^[A-Za-z\s]*$/
	}

	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || !fName.value.match(/^[A-Za-z\s]*$/) || fName.value.length < 3){
		fName.classList.add('is-invalid')
		error++;
		fName.focus()
	}

	if(fLastN.value == "" || !fLastN.value.match(/^[A-Za-z\s]*$/)|| fLastN.value.length < 3){
		fLastN.classList.add('is-invalid')
		error++;
		fLastN.focus()
		
	}

	if(fEmail.value == "" || !fEmail.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)|| fEmail.value.length < 3){
		fEmail.classList.add('is-invalid')
		error++;
		fEmail.focus()
		
	}

	if(fPassword.value == "" || !fPassword.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{3,8}$/)||fPassword.value.length < 3){
		fPassword.classList.add('is-invalid')
		error++;
		fPassword.focus()
	
	}

	if(fAddress.value == "" || fAddress.value.length < 3){
		fAddress.classList.add('is-invalid')
		error++;
		fAddress.focus()
		
	}

	if(fPhone.value == "" ||!fPhone.value.match(/^[0-9]{9}$/)){
		fPhone.classList.add('is-invalid')
		error++;
		fPhone.focus()
		
	}
	 
	if(error>0){
			e.preventDefault()
	}else{
		alert('Saved!✔')
		
	
	}

	}
)
