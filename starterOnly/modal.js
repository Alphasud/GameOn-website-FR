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

// Form Elements
const form = document.getElementById('form');
const errorMessage = document.getElementById('error_message');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const mail = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const tournaments = document.getElementById('quantity');
const city = document.querySelectorAll('input[name="location"]:checked');

const newYork = document.getElementById('location1');
const sanFrancisco = document.getElementById('location2');
const seattle = document.getElementById('location3');
const chicago = document.getElementById('location4');
const boston = document.getElementById('location5');
const portland = document.getElementById('location6');

//Validation Colors
const green = '#4CAF50'
const red = '#F44336'



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
  //if (
  //validateFirstName() &&
  //  validateLastName() &&
  //  validateEmail() &&
 //   validateBirthdate() &&
 //   validateTournament() &&
    validateCity()
 // ) {
    
  //}
});

// VALIDATION FUNCTIONS :

function validateFirstName() {
  //Check if it's empty
  if (checkIfEmpty(firstName)) return;
  //Check for number of letters
  if (checkNumberOfLetters(firstName)) return;
  return true;
}

function validateLastName() {
  //Check if it's empty
  if (checkIfEmpty(lastName)) return;
  //Check for number of letters
  if (checkNumberOfLetters(lastName)) return;
  return true;
}

function validateEmail() {
  if (checkIfEmpty(mail)) return;
  if (emailFormat(mail)) return;
  return true;
}

function validateBirthdate() {
  if (checkIfEmpty(birthDate)) return;
  if (checkIfAdult(birthDate)) return;
  return true;
}

function validateTournament() {
  if (checkIfEmpty(tournaments)) return;
  if (numberFormat(tournaments)) return;
  return true;
}

function validateCity() {
  if (checkIfRadioChecked()) return;
  return true;
 }
  
function checkIfRadioChecked() {
  if (city != null) {
    return true;
  } else {
    return false;
  }

}

function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {    //Trim is in case people just enter a space.
    // Set field as Invalid
    setInvalid(field, `Le champs ci-dessus ne doit pas être vide.`);
    return true;
  } else {
    // Set field as Valid
    setValid(field);
    return false;
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
  } else {
    setValid(field);
  }
}

function checkIfAdult(field) {
  var age = getAge(field.value);
  if (age >= 18) {
    setValid(field);
  } else {
    setInvalid(field, 'Vous devez avoir plus de 18 ans pour participer.');
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
  //field.nextElementSibling.style.color = green;
}









