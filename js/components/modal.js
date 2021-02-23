// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const close = document.querySelector('.close');
const thankYouContainer = document.querySelector('.thank-you-container');
const textControlInvalid = document.querySelectorAll('.text-control');
const helpText = document.querySelectorAll('.help-text');
const thankYouContainerChildren = thankYouContainer.children;


//Launch modal form
function launchModal() {
  modalbg.style.display = "block";
  resetStyle();
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
  Array.from(thankYouContainerChildren).forEach(child => { child.remove() });
  form.style.display = ''; // Form is shown
  form.reset(); // Form fields are reset
  thankYouContainer.style.display = 'none';
  resetStyle();
  closeModal(); // Modal is closed
});

function resetStyle() {
  for (var i = 0; i < textControlInvalid.length; i++) {
    textControlInvalid[i].style.border = 'none';
  }
  for (var x = 0; x < helpText.length; x++) {
    helpText[x].innerHTML = '';
  }
}

export { closeModal };
