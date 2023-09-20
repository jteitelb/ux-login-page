const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const termsCheckbox = document.getElementById("agree-terms");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const termsError = document.getElementById("terms-error");

const signupButton = document.getElementById("signup");

function stringError(string, minLength = 0) {
  if (/[^a-zA-z]/.test(string)) {
    return "must only contain letters";
  }
  if (string.length < minLength) {
    return `must have at least ${minLength} characters`;
  }
  return "";
}

function validateName() {
  const error = stringError(nameInput.value, 6);
  if (error) {
    nameError.innerHTML = "Name " + error;
    return false;
  }
  nameError.innerHTML = "";
  return true;
}

function validateEmail() {
  const email = emailInput.value;
  if (email.match(/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/)) {
    emailError.innerHTML = "";
    return true;
  }
  emailError.innerHTML = "Invalid email address";
  return false;
}

function validatePassword() {
  const error = stringError(passwordInput.value, 8);
  if (error) {
    passwordError.innerHTML = "Password " + error;
    return false;
  }
  passwordError.innerHTML = "";
  return true;
}

function validateTerms() {
  if (!termsCheckbox.checked) {
    termsError.innerHTML = "must agree";
    return false;
  }
  termsError.innerHTML = "";
  return true;
}

nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
termsCheckbox.addEventListener("blur", validateTerms);

signupButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked signup - checking values:");
  const validName = validateName();
  const validEmail = validateEmail();
  const validPassword = validatePassword();
  const agreeTerms = validateTerms();
  const formData = {};
  if (validName && validEmail && validPassword && agreeTerms) {
    formData.name = nameInput.value;
    formData.email = emailInput.value;
    formData.password = passwordInput.value;
    formData.agreed = termsCheckbox.checked;
    alert(JSON.stringify(formData));
    document.getElementById("login-form").reset();
  } else {
    console.error("signup: invalid inputs");
  }
});
