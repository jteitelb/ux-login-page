import validateField from "./validation.js";

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const termsCheckbox = document.getElementById("agree-terms");
const signupButton = document.getElementById("signup-button");

function handleSignup(event) {
  event.preventDefault();

  const formDataEntries = new FormData(event.target.form).entries();
  const jsonData = Object.fromEntries(formDataEntries);

  const validName = validateField(nameInput);
  const validEmail = validateField(emailInput);
  const validPassword = validateField(passwordInput);
  const validTerms = validateField(termsCheckbox);

  if (validName && validEmail && validPassword && validTerms) {
    alert(JSON.stringify(jsonData));
  }
}

function handleBlur(event) {
  validateField(event.target);
}

nameInput.addEventListener("blur", handleBlur);
emailInput.addEventListener("blur", handleBlur);
passwordInput.addEventListener("blur", handleBlur);
termsCheckbox.addEventListener("click", handleBlur);
signupButton.addEventListener("click", handleSignup);
