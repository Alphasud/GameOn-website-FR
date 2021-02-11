const icon = document.querySelector('.icon');

icon.addEventListener('click', function (event) {
  event.stopPropagation();
  editNav();
});

function editNav() {
  var myTopNav = document.getElementById("myTopnav");
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive";
  } else {
    myTopNav.className = "topnav";
  }
}