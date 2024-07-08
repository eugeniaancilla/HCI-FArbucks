const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validation();
});

function validation(){
    const emailVal = email.value;
    const passwordVal = password.value;

    if(emailVal == ''){
        setErrorFor(email, 'Please enter your email');
    }

    if(passwordVal == ''){
        setErrorFor(password, 'Please enter your password');
    }
}

function setErrorFor(input, message) {
    const formdiv = input.parentElement;
    const small = formdiv.querySelector('small');

    // error message
    small.innerText = message;

    // add error class
    formdiv.className = 'formdiv error';
}