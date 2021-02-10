function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const modalBody = document.querySelector('.modal-body');

// Form Elements
const form = document.getElementById('form');
const errorMessage = document.getElementById('error_message');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const mail = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const tournaments = document.getElementById('quantity');
const city = document.querySelectorAll('input[name="location"]');

const newYork = document.getElementById('location1');
const sanFrancisco = document.getElementById('location2');
const seattle = document.getElementById('location3');
const chicago = document.getElementById('location4');
const boston = document.getElementById('location5');
const portland = document.getElementById('location6');

const radioText = document.querySelector('.radio-text');
const radioZone = document.getElementById('radio-zone');

const checkboxOne = document.getElementById('checkbox1');
const checkText = document.querySelector('.check-text');

const thankYou = document.querySelector('.thank-you-message');

//Validation Colors
const green = '#4CAF50'
const red = '#F44336'

let isFormValid = false;

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//Close modal event
close.addEventListener('click', function (event) {
  event.stopPropagation();
  closeModal();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  validateInputs();
  if (isFormValid == true)
   {
    form.remove();
    thankYou.style.display = 'flex';

  } else {
    
  }
});

function validateInputs() {
  if (validateFirstName()
    && validateLastName()
    && validateEmail()
    && validateBirthdate()
    && validateTournament()
    && validateCity()
    && validateCheckbox()) {
    isFormValid = true;
    return isFormValid;
  } else {
    isFormValid = false;
    return isFormValid;
  }
    
  }


// VALIDATION FUNCTIONS :

function validateFirstName() {
  //Check if it's empty nd if number of letters is appropriate and return true or false.
  if (checkIfEmpty(firstName) && checkNumberOfLetters(firstName)) return true;
  return false;
}

function validateLastName() {
  //Check if it's empty nd if number of letters is appropriate and return true or false.
  if (checkIfEmpty(lastName) && checkNumberOfLetters(lastName)) return true;
  return false;
}


function validateEmail() {
  if (checkIfEmpty(mail) && emailFormat(mail)) return true;
  return false;
}

function validateBirthdate() {
  if (checkIfEmpty(birthDate) && checkIfAdult(birthDate)) return true;
  return false;
}

function validateTournament() {
  if (checkIfEmpty(tournaments) && numberFormat(tournaments)) return true;
  return false;
}

function validateCity() {
  if (checkIfRadioChecked()) return true;
  return false;
}
 
function validateCheckbox() {
  if (checkboxChecked()) return true;
  return false;
}
  
function checkIfRadioChecked() {
  for (var i = 0; i < city.length; i++) {
    if (city[i].type === 'radio' && city[i].checked) {
      unApplyStyleToRadioButtons();
      return true;
    }
  }
  applyStyleToRadioButtons();
  return false;
}

function checkboxChecked() {
  if (checkboxOne.checked) {
    unApplyStyleToCheckbox();
    return true;
  } else {
    applyStyleToCheckbox();
    return false;
  }
}

function applyStyleToCheckbox() {
  checkText.style.display = 'block';
  checkText.innerHTML = `Vous devez accepter les conditions d'utilisation.`;
  checkText.style.color = red;
}

function unApplyStyleToCheckbox() {
  checkText.style.display = 'none';
}

function applyStyleToRadioButtons() {
  radioText.innerHTML = 'Veuillez cocher une case';
  radioText.style.color = red;
  radioZone.style.border = '2px solid red';
  radioZone.style.borderRadius = '10px';
  radioZone.style.paddingRight = '5px';
}

function unApplyStyleToRadioButtons() {
  radioText.innerHTML = '';
  radioText.style.color = null;
  radioZone.style.border = null;
  radioZone.style.borderRadius = null;
  radioZone.style.paddingRight = null;
}

function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {    //Trim is in case people just enter a space.
    // Set field as Invalid
    setInvalid(field, `Le champs ci-dessus ne doit pas être vide.`);
    return false;
  } else {
    // Set field as Valid
    setValid(field);
    return true;
  }
}

function checkNumberOfLetters(field) {
  if (isEnoughLetter(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `Le champs '${field.name}' doit contenir 2 lettres minimum.`);
    return false;
  }
}

function emailFormat(field) {
  let regEx;
  regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (field.value.match(regEx)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `Veuillez entrer une adresse mail valide.`);
    return false;
  }
}

function numberFormat(field) {
  if (isNaN(field.value)) {
    setInvalid(field, `Veuillez entrer un caractère numérique`);
    return false;
  } else {
    setValid(field);
    return true;
  }
}

function checkIfAdult(field) {
  var age = getAge(field.value);
  if (age >= 18) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, 'Vous devez avoir plus de 18 ans pour participer.');
    return false;
  }
}

function getAge(value) {
  var today = new Date(); //Today's date
  var dayOfBirth = new Date(value); // Date indicated by user
  var ageYear = today.getFullYear() - dayOfBirth.getFullYear();
  var ageMonth = today.getMonth() - dayOfBirth.getMonth();
  if (ageMonth < 0 || (ageMonth === 0 && today.getDate() < dayOfBirth.getDate())) {
    ageYear--;
  }
  return ageYear;
}


function isEmpty(value) {
  if (value === '') return true;
  return false;
}
  
function isEnoughLetter(value) {
  if (value.length >= 2) return true;
  return false;
}

function setInvalid(field, message) {
  field.className = 'text-control invalid';
  field.nextElementSibling.innerHTML = message;
  field.nextElementSibling.style.color = red;
}

function setValid(field) {
  field.className = 'text-control valid';
  field.nextElementSibling.innerHTML = '';
}









