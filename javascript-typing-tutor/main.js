var i = 0;
var span = document.querySelectorAll('span');

window.addEventListener('keydown', keyboard);

function keyboard(event) {
  var letter = span[i].textContent;
  if (event.key === letter) {
    span[i].className = 'green';
    i++;
    span[i].className = 'current';
  } else if (event.key !== letter) {
    span[i].classList.add('red');
  }
}
