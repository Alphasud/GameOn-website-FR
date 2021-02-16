
import { validateFirstName, validateLastName, validateEmail, validateBirthdate, validateTournament, validateCity, validateCheckbox } from './validators.js';
import {closeModal} from '../components/modal.js';



// Form Elements
const form = document.getElementById('form');
const firstName = document.getElementById('first');
const thankYouContainer = document.querySelector('.thank-you-container');
const thankYouContainerChildren = thankYouContainer.children;


//Submit the form 
form.addEventListener('submit', function (event) { 
  event.preventDefault();
 // this function validate all the inputs
  if (validateInputs()) {// If the form is valid (=true) then 
    //-------------------------------------------------------------//
    //-----------You could put your AJAX request here--------------//
    //-----------------------------------------------------------//
    form.style.display = 'none'; //Form is hidden
    const realName = firstName.value;
    thankYouContainer.style.display = 'flex';
    const thankYouMessage = document.createElement('p'); //Create a p element
    thankYouMessage.className = "thank-you-message"; // With this class
    thankYouContainer.appendChild(thankYouMessage); // add element to container in html
    thankYouMessage.innerHTML = `Merci ${realName}, <br> nous avons bien reçu vos informations.`; //Personalize the message
    const closeButton = document.createElement('button'); // create close button
    closeButton.className = 'button button-modal'; // add class to button for styling
    closeButton.innerHTML = 'Fermer'; // add text to button
    thankYouContainer.appendChild(closeButton); // add button to container
    closeButton.addEventListener('click', function (event) { //Listen to click on button
      event.stopPropagation;
      form.style.display = ''; //Form is shown again
      thankYouContainer.style.display = 'none';
      Array.from(thankYouContainerChildren).forEach(child => { child.remove() });
      form.reset(); //Form is reset
      closeModal(); //Modal is closed
    });
  }
  
});

//This function validates all the inputs and return isFormValid on true if all the inputs are OK 
function validateInputs() {  // if not, it returns isFormValid on false.
  if (validateFirstName()
    && validateLastName()
    && validateEmail()
    && validateBirthdate()
    && validateTournament()
    && validateCity()
    && validateCheckbox()) {
    return true;
  } else {
    return false;
  }
    
}
  
