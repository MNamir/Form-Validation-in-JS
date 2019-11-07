const firstName = document.forms["myform"]["firstname"];
const lastName = document.forms["myform"]["lastname"];
const email = document.forms["myform"]["email"];
const mobileNo = document.forms["myform"]["tel"];
const password = document.forms["myform"]["password"];
const conifrmPassword = document.forms["myform"]["confirmpassword"];
const phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const emailId = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;
const allInput = document.getElementsByTagName('input');
const submit = document.getElementById("btn");
const alertDanger = document.getElementById("alert-danger");
const alertSuccess = document.getElementById("alert-success");
firstName.onblur = function () {  // Validate FirstName
    if (firstName.value == "" || firstName == null) {
        firstName.classList.add("is-invalid");
        firstName.classList.remove("is-valid");
    } else {
        firstName.classList.add("is-valid");
        firstName.classList.remove("is-invalid");
    }

};

lastName.onblur = function () {   // Validate LastName
    if (lastName.value == "" || lastName == null) {
        lastName.classList.add("is-invalid");
        lastName.classList.remove("is-valid");
    } else {
        lastName.classList.add("is-valid");
        lastName.classList.remove("is-invalid");
    }
};

email.onblur = function () {  // Validate E-mail Address
    if (email.value.match(emailId)) {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
    } else {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
    }
};

mobileNo.onblur = function () {    // Validate MobileNo.
    if (mobileNo.value.match(phoneNum)) {
        mobileNo.classList.add("is-valid");
        mobileNo.classList.remove("is-invalid");
    } else {
        mobileNo.classList.add("is-invalid");
        mobileNo.classList.remove("is-valid");
    }
};

password.onblur = function () {   // Validate Password
    if (
        password.value.length >= 8 &&
        password.value.match(lowerCaseLetters) &&
        password.value.match(upperCaseLetters) &&
        password.value.match(numbers)
    ) {
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
    } else {
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
    }
};

conifrmPassword.onblur = function () {  // Validate ConfirmPassword
    if (conifrmPassword.value == password.value && password.value !== "") {
        conifrmPassword.classList.add("is-valid");
        conifrmPassword.classList.remove("is-invalid");
    } else {
        conifrmPassword.classList.add("is-invalid");
        conifrmPassword.classList.remove("is-valid");
    }
};


// onSubmit validate Whole from is valid or not
function validateform() {
    if (firstName.value == "" || firstName == null) { // Validate FirstName
        firstName.classList.add("is-invalid");
        firstName.classList.remove("is-valid");
    } else {
        firstName.classList.add("is-valid");
        firstName.classList.remove("is-invalid");
    }

    if (lastName.value == "" || lastName == null) {  // Validate LastName
        lastName.classList.add("is-invalid");
        lastName.classList.remove("is-valid");
    } else {
        lastName.classList.add("is-valid");
        lastName.classList.remove("is-invalid");
    }

    if (email.value.match(emailId)) {   // Validate E-mail Address
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
    } else {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
    }

    if (mobileNo.value.match(phoneNum)) {  // Validate MobileNo.
        mobileNo.classList.add("is-valid");
        mobileNo.classList.remove("is-invalid");
    } else {
        mobileNo.classList.add("is-invalid");
        mobileNo.classList.remove("is-valid");
    }

    if (  // Validate Password
        password.value.length >= 8 &&
        password.value.match(lowerCaseLetters) &&
        password.value.match(upperCaseLetters) &&
        password.value.match(numbers)
    ) {
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
    } else {
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
    }
    if (conifrmPassword.value == password.value && password.value !== "") {  // Validate ConfirmPassword
        conifrmPassword.classList.add("is-valid");
        conifrmPassword.classList.remove("is-invalid");
    } else {
        conifrmPassword.classList.add("is-invalid");
        conifrmPassword.classList.remove("is-valid");
    }
    var i;
    for (i = 0; i < allInput.length; i++) {  // Validate button if all inputs are valid & Alert Message
        const valid = allInput[i].classList.contains("is-valid");
        console.log(valid)
        if (valid === false) {
            submit.classList.remove("btn-primary");
            submit.classList.remove("btn-success");
            submit.classList.add("btn-danger");
            break;
        } else {
            submit.classList.remove("btn-primary");
            submit.classList.remove("btn-danger");
            submit.classList.add("btn-success");
        }
    }

}


// Enable Submit Button if all inputs are valid function
const disableBtn = () => {
    var i;
    for (i = 0; i < allInput.length; i++) {
        const valid = allInput[i].classList.contains("is-valid");
        console.log(valid)
        if (valid === false) {
            submit.disabled = true;
            break;
        }
        else {
            submit.disabled = false;
        }
    }

}


// call Enable Submit Button if all inputs are valid
var i;
for (i = 0; i < allInput.length; i++) {
    allInput[i].addEventListener('blur', disableBtn);
}
