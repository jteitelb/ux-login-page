import {
  stringError,
  validName,
  validEmail,
  validPassword,
} from "./validation.js";

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const termsCheckbox = document.getElementById("agree-terms");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const termsError = document.getElementById("terms-error");

const signupButton = document.getElementById("signup-button");

function validSignupForm({ name, email, password, terms }) {
  return (
    validName(name) && validEmail(email) && validPassword(password) && terms
  );
}

function getSignupFormData() {
  return {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    terms: termsCheckbox.checked,
  };
}

function updateErrors() {
  const { name, email, password } = getSignupFormData();
  nameError.innerHTML =
    !name || validName(name) ? "" : "name " + stringError(name, 6);
  emailError.innerHTML =
    !email || validEmail(email) ? "" : "Invalid email address";
  passwordError.innerHTML =
    !password || validPassword(password)
      ? ""
      : "password " + stringError(password, 8);
}

nameInput.addEventListener("blur", updateErrors);
emailInput.addEventListener("blur", updateErrors);
passwordInput.addEventListener("blur", updateErrors);

signupButton.addEventListener("click", (event) => {
  event.preventDefault();

  const formData = getSignupFormData();
  const { name, email, password, terms } = formData;

  termsError.innerHTML = terms ? "" : "must agree";

  if (validSignupForm(formData)) {
    alert(JSON.stringify(formData));
    document.getElementById("login-form").reset();
  } else {
    console.error("signup: invalid inputs");
  }

  /* extra hints if tried to submit empty values */
  if (!name) {
    nameError.innerHTML = "name cannot be empty";
  }
  if (!email) {
    emailError.innerHTML = "email cannot be empty";
  }
  if (!password) {
    passwordError.innerHTML = "password cannot be empty";
  }
});
