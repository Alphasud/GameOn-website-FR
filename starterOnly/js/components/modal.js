// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const close = document.querySelector('.close');
const thankYouContainer = document.querySelector('.thank-you-container');
const textControl = document.querySelectorAll('.text-control');
const helpText = document.querySelectorAll('.help-text');


//Launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log(textControl);
 // textControl.classList.remove('text-control'); //Reset validation style
 // textControl.classList.add('non');
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
  textControl.className = 'text-control'; //Reset validation style
  helpText.innerHTML = ''; //Reset error message
  closeModal(); // Modal is closed
});


export { closeModal };