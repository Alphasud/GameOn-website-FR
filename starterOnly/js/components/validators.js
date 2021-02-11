
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const mail = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const tournaments = document.getElementById('quantity');
const city = document.querySelectorAll('input[name="location"]');

// Checkbox elements and related pop up text
const radioText = document.querySelector('.radio-text');
const radioZone = document.getElementById('radio-zone');

const checkboxOne = document.getElementById('checkbox1');
const checkText = document.querySelector('.check-text');

//Bad Validation Color
const red = '#F44336'



// VALIDATION FUNCTIONS :
//These functions validate field datas according to what was asked. Function are launched on focus out

firstName.addEventListener('focusout', function (event) { event.stopPropagation; validateFirstName()});
function validateFirstName() {
  //Check if it's empty and if number of letters is appropriate and return true or false.
  if (checkIfEmpty(firstName) && checkNumberOfLetters(firstName)) return true;
  return false;
}


lastName.addEventListener('focusout', function (event) { event.stopPropagation; validateLastName()});
function validateLastName() {
  //Check if it's empty and if number of letters is appropriate and return true or false.
  if (checkIfEmpty(lastName) && checkNumberOfLetters(lastName)) return true;
  return false;
}

mail.addEventListener('focusout', function (event) { event.stopPropagation; validateEmail()});
function validateEmail() {
  //check if email is correct
  if (checkIfEmpty(mail) && emailFormat(mail)) return true;
  return false;
}

birthDate.addEventListener('focusout', function (event) { event.stopPropagation; validateBirthdate()});
function validateBirthdate() {
  //chekc if birthdate is correct
  if (checkIfEmpty(birthDate) && checkIfAdult(birthDate)) return true;
  return false;
}

tournaments.addEventListener('focusout', function (event) { event.stopPropagation; validateTournament()});
function validateTournament() {
  //check if tournaments is correct
  if (checkIfEmpty(tournaments) && numberFormat(tournaments)) return true;
  return false;
}


function validateCity() {
  //check if a city is checked 
  if (checkIfRadioChecked()) return true;
  return false;
}
 
function validateCheckbox() {
  //check if a checkbox is checked 
  if (checkboxChecked()) return true;
  return false;
}

// FUNCTIONS NEEDED TO APPLY STYLE TO CHECKBOXES AND RADIO BUTTON IN CASE OF INCORRECT INPUT
function checkIfRadioChecked() {
  for (var i = 0; i < city.length; i++) { // Loop inside the city const 
    if (city[i].checked) { // One by one check if city is checked and if one is checked
      unApplyStyleToRadioButtons(); // this function remove the error styling if any
      return true;
    }
  }
  applyStyleToRadioButtons(); // This function add error styling
  return false;
}

function checkboxChecked() { //Check if checkbox is checked
  if (checkboxOne.checked) {
    unApplyStyleToCheckbox(); //If checked, remove error style if any
    return true;
  } else {
    applyStyleToCheckbox(); //If not checked, add error style
    return false;
  }
}

function applyStyleToCheckbox() { //Add error message to checkboxes
  checkText.style.display = 'block'; //Error message element is shown
  checkText.innerHTML = `Vous devez accepter les conditions d'utilisation.`; // Text is added to it
  checkText.style.color = red; // Text is put in red
}

function unApplyStyleToCheckbox() { //Remove error styling by hiding the error message element
  checkText.style.display = 'none'; 
}

function applyStyleToRadioButtons() { //Add error message to radio buttons
  radioText.innerHTML = 'Veuillez cocher une case'; //Message
  radioText.style.color = red; //Text in red
  radioZone.style.border = '2px solid red'; //Add border around all radio buttons
  radioZone.style.borderRadius = '10px';
  radioZone.style.paddingRight = '5px';
}

function unApplyStyleToRadioButtons() { // Remove error styling from radio buttons
  radioText.innerHTML = '';
  radioText.style.color = null;
  radioZone.style.border = null;
  radioZone.style.borderRadius = null;
  radioZone.style.paddingRight = null;
}

function checkIfEmpty(field) { //Check if field is empty
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

function checkNumberOfLetters(field) { //Check for number of letter and set field to valid or not
  if (isEnoughLetter(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `Le champs '${field.name}' doit contenir 2 lettres minimum.`);
    return false;
  }
}

function emailFormat(field) { //Check if address format is correct
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

function numberFormat(field) { //Check if a number or not with NotaNumber function
  if (isNaN(field.value)) {
    setInvalid(field, `Veuillez entrer un caractère numérique`);
    return false;
  } else {
    setValid(field);
    return true;
  }
}

function checkIfAdult(field) { //Check for age using the date (must be over 18)
  var age = getAge(field.value);
  if (age >= 18) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, 'Vous devez avoir plus de 18 ans pour participer.');
    return false;
  }
}

function getAge(value) { //Calculate the person's age
  var today = new Date(); //Today's date
  var dayOfBirth = new Date(value); // Date indicated by user
  var ageYear = today.getFullYear() - dayOfBirth.getFullYear(); // Current year - year of birth
  var ageMonth = today.getMonth() - dayOfBirth.getMonth(); //Current month - month of birth
  if (ageMonth < 0 || (ageMonth === 0 && today.getDate() < dayOfBirth.getDate())) { // If the year is OK, we check with month, if month is OK, check with days
    ageYear--; //Decrement age
  }
  return ageYear;
}


function isEmpty(value) { //Check for empty field
  if (value === '') return true;
  return false;
}
  
function isEnoughLetter(value) { //Check if number of letter is enought
  if (value.length >= 2) return true;
  return false;
}

function setInvalid(field, message) { //This function set an invalid style to the next element
  //field.className = 'text-control invalid';
  field.classList.add('invalid');
  field.nextElementSibling.innerHTML = message;
  field.nextElementSibling.style.color = red;
}

function setValid(field) { //This function set a valid style to the next element
  //field.className = 'text-control valid';
  field.classList.add('valid');
  field.nextElementSibling.innerHTML = '';
}



export { validateFirstName, validateLastName, validateEmail, validateBirthdate, validateTournament, validateCity, validateCheckbox };







