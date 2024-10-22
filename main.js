let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputName = document.querySelector('.js-input-name'),
    inputLastName = document.querySelector('.js-input-last_name'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPhone = document.querySelector('.js-input-phone'),
    inputCheckbox = document.querySelector('.js-input-checkbox');


function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateName(name){
    let re=/^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/;
    return re.test(String(name).toLowerCase());
}


function validateCountry(country) {
    let re = new RegExp('.co$');
    return re.test(String(country).toLowerCase());
}

function validatePhone(phone) {
    if(phone.length<9||phone.length>9){
        console.log('phone number not valid')
        return false;
    }else{
     let re = /^[0-9\s]*$/;
    return re.test(String(phone));    
    }
   
}

form.onsubmit = function (test) {
    let emailVal = inputEmail.value,
    nameVal =inputName.value,
        phoneVal = inputPhone.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');

        } else {
            input.classList.remove('error');
        
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }
    if(!validateName(nameVal)){
        console.log('name not valid');
        inputName.classList.add('error');
        return false;
    }else{
        inputName.classList.remove('error');
    }
    

    if(!validateEmail(emailVal)) {
        console.log('email not valid');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }
    

    if (validateCountry(emailVal)) {
        console.log('email from Columbia');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if (!validatePhone(phoneVal)) {
        console.log('phone not valid');
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
    }

    if(!inputCheckbox.checked) {
        console.log('checkbox not checked');
        inputCheckbox.classList.add('error');
        return false;
    } else {
        inputCheckbox.classList.remove('error')
    }


}
