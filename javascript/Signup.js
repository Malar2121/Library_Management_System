const form = document.getElementById("form");
const sliitid = document.getElementById("sliitid");
const email = document.getElementById("email");
const contactno = document.getElementById("contactno");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const sliitidValue = sliitid.value.trim();
    const emailValue = email.value.trim();
    const contactnoValue = contactno.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(sliitidValue === ''){
        setError(sliitid, 'Sliit ID Cannot Be Blank');
    }
    else{
        setSuccess(sliitid);
    }

    if(emailValue === ''){
        setError(email, 'Email Cannot Be Blank');
    }
    else if(!isEmail(emailValue))
    {
        setError(email, 'Not a valid Email');
    }
    else
    {
        setSuccess(email);
    }

    if(contactnoValue === ''){
        setError(contactno, 'Contact No Cannot Be Blank');
    }
    else{
        setSuccess(contactno);
    }

    if(usernameValue === ''){
        setError(username, 'User Name Cannot Be Blank');
    }
    else{
        setSuccess(username);
    }

    if(passwordValue === ''){
        setError(password, 'Password Cannot Be Blank');
    }
    else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, 'Please Confirm Password');
    }
    else if(passwordValue !== password2Value){
        setError(password2,'Password Not Match')
    }
    else{
        setSuccess(password2);
    }

    function setError(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccess(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function isEmail(email){
        return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
    }

}