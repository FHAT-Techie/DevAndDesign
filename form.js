document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('form');
    let fullName = document.querySelector('#name');
    let email = document.querySelector('#email');
    let phone = document.querySelector('#phone');
    let nameWarn = document.querySelector('#warningName');
    let emailWarn = document.querySelector('#warningEmail');
    let phoneWarn = document.querySelector('#warningphone');
    let btn = document.querySelector('button');

    let storeUsers = [];

    let nameValid = false;
    let emailValid = false;
    let phoneValid = false;

    fullName.addEventListener('blur', function(event) {
        nameValid = nameValidation();
    });

    email.addEventListener('blur', function(event) {
        emailValid = emailValidator();
    });

    phone.addEventListener('blur', function(event) {
        phoneValid = phoneValidator();
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (nameValid && emailValid && phoneValid) {
            let userDetails = {
                userFullName: fullName.value,
                userEmailAdd: email.value,
                userPhoneNumber: phone.value
            };

            storeUsers.unshift(userDetails);
            console.log(storeUsers);

            form.reset();
            nameValid = emailValid = phoneValid = false; // Reset validation flags
        }
    });

    function nameValidation() {
        let userName = fullName.value.trim();
        if (userName.length === 0) {
            nameWarn.textContent = 'Enter a full name';
            fullName.style.border = '2px solid #ff0000';
            return false;
        } else if (!userName.match(/^[a-zA-Z]+(?: [a-zA-Z]+)*(?:[-'][a-zA-Z]+)*$/)) {
            nameWarn.textContent = 'Enter alphabetical characters only';
            fullName.style.border = '2px solid #ff0000';
            return false;
        } else {
            nameWarn.textContent = ''; // Clear any previous warning
            fullName.style.border = '2px solid green';
            return true;
        }
    }

    function emailValidator() {
        let userEmail = email.value.trim();
        if (userEmail.length === 0) {
            emailWarn.textContent = 'Enter your email';
            email.style.border = '2px solid #ff0000';
            return false;
        } else if (!userEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            emailWarn.textContent = 'Enter a valid email address';
            email.style.border = '2px solid #ff0000';
            return false;
        } else {
            emailWarn.textContent = ''; // Clear any previous warning
            email.style.border = '2px solid green';
            return true;
        }
    }

    function phoneValidator() {
        let userPhone = phone.value.trim();
        if (userPhone.length === 0) {
            phoneWarn.textContent = 'Enter your phone number';
            phone.style.border = '2px solid #ff0000';
            return false;
        } else if (!userPhone.match(/^(?:\+?\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/) || userPhone.length !== 11) {
            phoneWarn.textContent = 'Enter a valid phone number';
            phone.style.border = '2px solid #ff0000';
            return false;
        } else {
            phoneWarn.textContent = ''; // Clear any previous warning
            phone.style.border = '2px solid green';
            return true;
        }
    }
});