const form = document.getElementById('form');
const namee = document.getElementById('namee');
const genderGroup = document.getElementById("gender");
const genderM = document.getElementById("male");
const genderF = document.getElementById("female");
const dob = document.getElementById("dob");
const email = document.getElementById('email');
const city = document.getElementById("city");
const address = document.getElementById("address");
const password = document.getElementById('password');
const passwordval = document.getElementById('passwordval');
const agree = document.getElementById('agree');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validation();
});

function validation() {
    const nameVal = namee.value;
    const dobVal = dob.value;
    const emailVal = email.value;
    const cityVal = city.value;
    const addressVal = address.value;
    const passwordVal = password.value;
    const passwordvalVal = passwordval.value;

    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(nameVal == '') {
        setErrorFor(namee, 'Please fill in your name');
    }

    if(genderM.checked == false && genderF.checked == false){
        setErrorFor(genderGroup, 'Please select a gender');
    }

    if(dobVal == ''){
        setErrorFor(dob, 'Please enter your date of birth');
    }
    
    if(emailVal == ''){
        setErrorFor(email, 'Please fill in your email');
    }
    else if(!emailVal.includes("@") || !emailVal.includes('.')){
        setErrorFor(email, 'Email is not valid');
    }

    if(cityVal == ''){
        setErrorFor(city, 'Please enter a city');
    }

    if(addressVal == 'Enter your address'){
        setErrorFor(address, 'Please enter your address');
    }

    if(passwordVal == ''){
        setErrorFor(password, 'Please create a password');
    }
    else if(!passwordVal.match(numbers) || !passwordVal.match(upperCase) || passwordVal.length < 8){
        setErrorFor(password, 'Password must contain at least 8 characters, 1 uppercase, and 1 number');
    }

    if(passwordvalVal == ''){
        setErrorFor(passwordval, 'Please confirm your password');
    }
    else if(passwordvalVal !== passwordVal){
        setErrorFor(passwordval, 'Password does not match');
    }

    if(agree.checked == false){
        setErrorFor(agree, 'You must agree to the terms and conditions');
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