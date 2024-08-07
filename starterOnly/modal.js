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
const closeButtons = document.querySelectorAll(".close-btn");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
closeButtons.forEach((btn) => btn.addEventListener("click", closeModal));

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// form validation
function validate(event) {
  event.preventDefault();

  // First name validation
  const firstNameInput = document.getElementById("first");
  const firstNameError = document.getElementById("error-name");
  const firstName = firstNameInput.value;
  let isError = false;

  if (firstName.length < 2) {
    firstNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstNameInput.classList.add("error-message-input");
    isError = true;
  } else {
    firstNameError.innerHTML = "";
    firstNameInput.classList.remove("error-message-input");
    isError = false;
  }

  // Last name validation
  const lastNameInput = document.getElementById("last");
  const lastNameError = document.getElementById("error-lastName");
  const lastName = lastNameInput.value;
  if (lastName.length < 2) {
    lastNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastNameInput.classList.add("error-message-input");
    isError = isError && true;
  } else {
    lastNameError.innerHTML = "";
    lastNameInput.classList.remove("error-message-input");
    isError = isError && false;
  }

  // email validation
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("error-email");
  let email = emailInput.value;
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+");
  if (emailRegExp.test(email)) {
    emailError.innerHTML = "";
    emailInput.classList.remove("error-message-input");
    isError = false;
  } else {
    emailError.innerHTML = "Veuillez entrer un email valide.";
    emailInput.classList.add("error-message-input");
    isError = true;
  }
  // error message of birth date
  const birthdateInput = document.getElementById("birthdate");
  const birthdateError = document.getElementById("birth-error");
  const birthdate = birthdateInput.value;

  if (!birthdate) {
    birthdateError.innerHTML = "Veuillez entrer votre date de naissance.";
    birthdateInput.classList.add("error-message-input");
    isError = isError && true;
  } else {
    birthdateError.innerHTML = "";
    birthdateInput.classList.remove("error-message-input");
    isError = isError && false;
  }

  // number of Competition validation
  const nbrCompetitions = document.getElementById("quantity");
  const errorNbr = document.getElementById("error-nbr");
  const nbr = nbrCompetitions.value;
  if (nbr < 0 || nbr > 99 || !nbr) {
    errorNbr.innerHTML =
      "Le nombre de compétition doit être compris entre 0 et 99.";
    nbrCompetitions.classList.add("error-message-input");
    isError = true;
  } else {
    errorNbr.innerHTML = "";
    nbrCompetitions.classList.remove("error-message-input");
    isError = false;
  }

  // input radio validation
  let radioInputs = document.querySelectorAll('input[name = "location"]');
  const locationError = document.getElementById("location-error");
  const selectedLocation = document.querySelector(
    'input[name="location"]:checked'
  );
  if (!selectedLocation) {
    locationError.innerHTML = "Vous devez sélectionner un emplacement.";
    isError = true;
  } else {
    locationError.innerHTML = "";
    isError = false;
  }
  let locationChecked = false;
  for (let i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].checked) {
      locationChecked = true;
      break;
    }
  }
  if (locationChecked === false) {
  }

  // general conditions box validation
  const generalConditions = document.getElementById("checkbox1");
  const checkboxError = document.getElementById("checkbox-error");
  if (!generalConditions.checked) {
    checkboxError.innerHTML =
      "Vous devez accepter les conditions d'utilisation.";
    isError = true;
  } else {
    checkboxError.innerHTML = "";
    isError = false;
  }
  if (generalConditions.checked === false) {
  }

  // show the thank you message
  if (!isError) {
    const thankYouMessage = document.getElementById("thankYouMessage");
    const form = document.querySelector("form");

    form.classList.add("hidden");
    thankYouMessage.classList.remove("hidden");
  }
}
