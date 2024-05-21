const signupForm = document.querySelector('#signup-form');
const errorMsg = document.querySelector('#error-msg');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const password = document.querySelector('#signupPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const submitBtn = document.querySelector('#submitBtn');


firstName.addEventListener('blur', validateFirstName);
lastName.addEventListener('blur', validateLastName);
email.addEventListener('blur', validateEmail);
phoneNumber.addEventListener('blur', validatePhone);
password.addEventListener('blur', validatePassword);
confirmPassword.addEventListener('blur', reValidatePassword);

firstName.addEventListener('input', () => {
    verifyInput(firstName, firstName.value.length < 3 || firstName.value.length === 0, '#firstNameError');
});

lastName.addEventListener('input', () => {
    verifyInput(lastName, lastName.value.length < 3 || lastName.value.length === 0, '#lastNameError');
});

email.addEventListener('input', () => {
    const testMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    verifyInput(email, !testMail.test(email.value) || email.value.length === 0, '#emailError');
});



function verifyInput(inputName, condition, errorRef) {
    if (condition) {
        inputName.classList.remove('valid');
        return false;
    }
    
    inputName.classList.add('valid');
    document.querySelector(`${errorRef}`).style.display = 'none';
    return true;
}


password.addEventListener('input', () => {
//    if (validatePassword()) {
//     confirmPassword.disabled = false;
//     confirmPassword.classList.remove('form-control-disabled');
//     confirmPassword.parentElement.classList.remove('form-control-disabled');
//     } else {
//         confirmPassword.disabled = true;
//         confirmPassword.classList.add('form-control-disabled');
//         confirmPassword.parentElement.classList.add('form-control-disabled');
    

//     }

   if (verifyInput(password, password.value.length < 8, '#passwordError')) {
        confirmPassword.disabled = false;
        confirmPassword.classList.remove('form-control-disabled');
        confirmPassword.parentElement.classList.remove('form-control-disabled');
    } else {
        confirmPassword.disabled = true;
        confirmPassword.classList.add('form-control-disabled');
        confirmPassword.parentElement.classList.add('form-control-disabled');
    }

});

confirmPassword.addEventListener('input', () => {
    if (reValidatePassword()) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('form-control-disabled');

     } else {
         submitBtn.disabled = true;
         submitBtn.classList.add('form-control-disabled');
     }
 });


signupForm.addEventListener('submit', (event) => {
    let isValid = true;
    let firstNameValid = true
    let lastNameValid = true
    let emailValid = true
    let passwordValid = true
    let confirmPasswordValid = true
    firstNameValid = validateFirstName();
    lastNameValid = validateLastName();
    emailValid = validateEmail();
    validatePhone();
    passwordValid = validatePassword();
    confirmPasswordValid = reValidatePassword();

    if (!firstNameValid || !lastNameValid || !emailValid || !passwordValid || !confirmPasswordValid) {
        event.preventDefault();
        alert('oops! try again :(');
        return;
    }

    alert('you have created an account successfully!');
    this.reset();
});


function validateFirstName() {
    let isValid = true;

    if (firstName.value.length === 0) {
        firstName.classList.remove('invalid');
        firstName.classList.remove('valid');
        document.querySelector('#firstNameError').style.display = 'none';
        return false;
    }

    if (firstName.value.length < 3) {
        isValid = false;
        firstName.classList.add('invalid');
        firstName.classList.remove('valid');
        document.querySelector('#firstNameError').style.display = 'block';
    } else {
        firstName.classList.remove('invalid');
        document.querySelector('#firstNameError').style.display = 'none';
    }

    if (firstName.value.length > 2) {
        firstName.classList.add('valid');
        firstName.classList.remove('invalid');
    }

    return isValid;
}

function validateLastName() {
    let isValid = true;

    if (lastName.value.length === 0) {
        lastName.classList.remove('invalid');
        lastName.classList.remove('valid');
        document.querySelector('#lastNameError').style.display = 'none';
        return false;
    }

    if (lastName.value.length < 3) {
        isValid = false;
        lastName.classList.add('invalid');
        lastName.classList.remove('valid');
        document.querySelector('#lastNameError').style.display = 'block';
    } else {
        lastName.classList.remove('invalid');
        document.querySelector('#lastNameError').style.display = 'none';
    }

    if (lastName.value.length > 2) {
        lastName.classList.add('valid');
        lastName.classList.remove('invalid');

    }

    return isValid;
}

function validateEmail() {
    let isValid = true;
    const testMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.value.length === 0) {
        email.classList.remove('invalid');
        email.classList.remove('valid');
        document.querySelector('#emailError').style.display = 'none';
        return false;
    }

    if (!testMail.test(email.value)) {
        isValid = false;
        email.classList.add('invalid');
        email.classList.remove('valid');
        document.querySelector('#emailError').style.display = 'block';
    } else {
        email.classList.remove('invalid');
        document.querySelector('#emailError').style.display = 'none';
    }

    if (testMail.test(email.value)) {
        email.classList.add('valid');
        email.classList.remove('invalid');
    }

    return isValid;
}

function validatePhone() {
    if(phoneNumber.value) {
        phoneNumber.classList.add('valid')
    } else {
        phoneNumber.classList.remove('valid')

    }
}

function validatePassword() {
    let isValid = true;

    if (password.value.length === 0) {
        password.classList.remove('invalid');
        password.classList.remove('valid');
        document.querySelector('#passwordError').style.display = 'none';
        return false;
    }

    if (password.value.length < 8) {
        isValid = false;
        password.classList.add('invalid');
        password.classList.remove('valid');
        console.log('here');
        document.querySelector('#passwordError').style.display = 'block';
    } else {
        password.classList.remove('invalid');
        document.querySelector('#passwordError').style.display = 'none';
    }

    // if (password.value.length > 4) {
    //     password.classList.add('valid');
    //     password.classList.remove('invalid');

    // }

    return isValid;
}

function reValidatePassword() {
    let isValid = true;

    if (confirmPassword.value.length === 0) {
        confirmPassword.classList.remove('invalid');
        confirmPassword.classList.remove('valid');
        document.querySelector('#confirmPasswordError').style.display = 'none';
        return false;
    }

    if (password.value !== confirmPassword.value) {
        isValid = false
        confirmPassword.classList.add('invalid');
        confirmPassword.classList.remove('valid');
        document.querySelector('#confirmPasswordError').style.display = 'block';
    } else {
        confirmPassword.classList.remove('invalid');
        document.querySelector('#confirmPasswordError').style.display = 'none';
    }

    if (password.value === confirmPassword.value) {
        confirmPassword.classList.add('valid');
        confirmPassword.classList.remove('invalid');
    }

    return isValid;
}













function setRealViewportHeight() {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
// window.addEventListener('orientation-change', setRealViewportHeight);
document.addEventListener('DOMContentLoaded', () => {

    setRealViewportHeight();
    window.addEventListener('resize', setRealViewportHeight);
});

window.addEventListener('load', () => {
    confirmPassword.disabled = true;
    submitBtn.disabled = true;
    // firstName.focus();
})