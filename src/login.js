import { stringError, validEmail, validPassword } from "./validation.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("remember-me");

const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

const loginButton = document.getElementById("login-button");

function getLoginFormData() {
  return {
    email: emailInput.value,
    password: passwordInput.value,
    remember: rememberCheckbox.checked,
  };
}

function updateErrors() {
  const { email, password } = getLoginFormData();
  emailError.innerHTML =
    !email || validEmail(email) ? "" : "Invalid email address";
  passwordError.innerHTML =
    !password || validPassword(password)
      ? ""
      : "password " + stringError(password, 8);
  if (emailError.innerHTML || passwordError.innerHTML) {
    loginButton.classList.add("inactive-button");
  } else {
    loginButton.classList.remove("inactive-button");
  }
}

emailInput.addEventListener("blur", updateErrors);
passwordInput.addEventListener("blur", updateErrors);

loginButton.addEventListener("click", (event) => {
  event.preventDefault();

  const formData = getLoginFormData();
  const { email, password } = formData;

  if (validEmail(email) && validPassword(password)) {
    alert(JSON.stringify(formData));
    document.getElementById("login-form").reset();
  } else {
    console.error("login: invalid inputs");
  }

  /* extra hints if tried to submit empty values */
  if (!email) {
    emailError.innerHTML = "email cannot be empty";
  }
  if (!password) {
    passwordError.innerHTML = "password cannot be empty";
  }
});
