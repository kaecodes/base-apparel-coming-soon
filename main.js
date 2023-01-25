const error = document.getElementById('error'); 
const errorIcon = document.getElementById('error-icon'); 
let emailFormat = /\S+@\S+\.\S+/; 

function validateForm(inputText) {
  if (inputText.value == '') {
    error.innerHTML = 'Email cannot be blank.'
    errorIcon.classList.add('active'); 
    return false; 
  } else if (!inputText.value.match(emailFormat)) {
    error.innerHTML = 'Please provide a valid email.'
    errorIcon.classList.toggle('active'); 
    return false; 
  } else if (inputText.value.match(emailFormat)) {
    errorIcon.classList.remove('active'); 
    return true; 
  }
}