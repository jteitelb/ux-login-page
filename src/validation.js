const formValidators = {
  name: (name) => getStringError(name, 6),
  email: (email) => (/.+@.+\..{2,}/.test(email) ? "" : "Invalid email"),
  password: (pass) => getStringError(pass, 8),
  "agree-terms": (agree) => (agree ? "" : "Must agree"),
};

/*  Given an input element from the DOM, 
    validate the value and update the error text.
    Returns true if valid, and false if there was an error 
*/
export default function validateField(inputElement) {
  const errorEl =
    inputElement.parentNode.getElementsByClassName("form-error")[0];
  const value =
    inputElement.type == "checkbox" ? inputElement.checked : inputElement.value;

  const error = formValidators[inputElement.id](value);

  errorEl.innerText = error;
  return !error;
}

function getStringError(string, minLength = 0) {
  if (/[^a-zA-z0-9]/.test(string)) {
    return "must only contain letters and numbers";
  }
  if (string.length < minLength) {
    return `must have at least ${minLength} characters`;
  }
  return "";
}
