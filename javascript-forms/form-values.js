var contactForm = document.querySelector('#contact-form');
var form = document.forms[0];

contactForm.addEventListener('submit', noDefault);

function noDefault(event) {
  var object = {};
  event.preventDefault();
  object.name = form.elements.name.value;
  object.email = form.elements.email.value;
  object.message = form.elements.message.value;
  console.log('messageData', object);
  form.reset();
}
