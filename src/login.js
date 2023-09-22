import validateField from "./validation.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

function handleLogin(event) {
  event.preventDefault();

  const formDataEntries = new FormData(event.target.form).entries();
  const jsonData = Object.fromEntries(formDataEntries);

  const validEmail = validateField(emailInput);
  const validPassword = validateField(passwordInput);

  if (validEmail && validPassword) {
    alert(JSON.stringify(jsonData));
  }
}

function handleBlur(event) {
  validateField(event.target);
}

emailInput.addEventListener("blur", handleBlur);
passwordInput.addEventListener("blur", handleBlur);
loginButton.addEventListener("click", handleLogin);
