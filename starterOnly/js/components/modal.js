// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const close = document.querySelector('.close');
const thankYouContainer = document.querySelector('.thank-you-container');
const textControlInvalid = document.getElementsByClassName('invalid');
const helpText = document.querySelectorAll('.help-text');


//Launch modal form
function launchModal() {
  modalbg.style.display = "block";
  helpText.innerHTML = ''; //Reset error message
  form.reset();
}

//Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//Close modal event
close.addEventListener('click', function (event) {
  event.stopPropagation();
  form.style.display = ''; // Form is shown
  form.reset(); // Form fields are reset
  thankYouContainer.style.display = 'none';
  resetStyle();
  closeModal(); // Modal is closed
});

function resetStyle() {
  for (var i = 0; i < textControlInvalid.length; i++) {
    textControlInvalid[i].classList.remove('invalid');
  }
  for (var x = 0; x < helpText.length; x++) {
    helpText[x].innerHTML = '';
  }
}

export { closeModal };
