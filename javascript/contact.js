
const form = document.getElementById("form");
const name = document.getElementById("Username");
const email = document.getElementById("email");
const phnno= document.getElementById("phnno");

form.addEventListener('submit',e=>{

	const form = document.getElementById("form");
	checkInput();
});

function checkInput(){
	const Usernamevalue = Username.value.trim();
	const emailvalue = email.value.trim();
	const phnnovalue = phnno.value.trim();
	

	if(Usernamevalue === ''){
		setError(Username,'Username cannot be blank');
	}
	else{
		setSuccess(Username);
	}

	
	if(emailvalue === ''){
		setError(email,'email cannot be blank');
	}
	else if (!isEmail(emailvalue))
	{
		setError(email,'Not a valid Email');
	}
	else{
		setSuccess(email);
	}

}

function setError(input,message){
	const contact_section = input.parentElement;
	const small = contact_section.querySelector('small');
	contact_section.className = 'contact_section error';
	small.innerText=message;
}

function isemail(email){
      return  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.) +([a-zA-Z0-9]{2,4})+$/.test(email);
}