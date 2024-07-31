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
const btnClose = document.querySelector("button.close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
btnClose.addEventListener("click", closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// form validation
function validate(event) {
  event.preventDefault();

  // First name validation
  const firstNameInput = document.getElementById("first");
  const firstName = firstNameInput.value;
  if (firstName.length < 2) {
    console.log("Erreur prénom doit être minimum 2 lettres");
  }

  // Last name validation
  const lastNameInput = document.getElementById("last");
  const lastName = lastNameInput.value;
  if (lastName.length < 2) {
    console.log("Erreur nom doit être minimum 2 lettres");
  }

  // email validation
  const emailInput = document.getElementById("email");
  let email = emailInput.value;
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+");
  if (emailRegExp.test(email)) {
    console.log("Email valide");
  } else {
    console.log("Erreur email non valide");
  }

  // number of Competition validation
  const nbrCompetitions = document.getElementById("quantity");
  const nbr = nbrCompetitions.value;
  if (nbr < 0 || nbr > 99 || !nbr) {
    console.log("Erreur nombre de compétition doit être compris entre 0 et 99");
  }

  // input radio validation
  let radioInputs = document.querySelectorAll('input[name = "location"]');
  let locationChecked = false;
  for (let i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].checked) {
      locationChecked = true;
      break;
    }
  }
  if(locationChecked === false) {
    console.log("Erreur vous devez choisir une localisation");
  }

  // general conditions box validation
  const generalConditions = document.getElementById("checkbox1");
  if (generalConditions.checked === false) {
    console.log("Erreur vous devez accepter les conditions générales");
  }
}
