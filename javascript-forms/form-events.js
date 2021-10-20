var username = document.querySelector('#user-name');
var email = document.querySelector('#user-email');
var message = document.querySelector('#user-message');

function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

username.addEventListener('focus', handleFocus);

email.addEventListener('blur', handleBlur);

message.addEventListener('input', handleInput);
