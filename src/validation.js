function stringError(string, minLength = 0) {
  if (/[^a-zA-z]/.test(string)) {
    return "must only contain letters";
  }
  if (string.length < minLength) {
    return `must have at least ${minLength} characters`;
  }
  return "";
}

function validName(name) {
  return !stringError(name, 6);
}

function validPassword(password) {
  return !stringError(password, 8);
}

function validEmail(email) {
  return email.match(/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/);
}

export { stringError, validName, validEmail, validPassword };
