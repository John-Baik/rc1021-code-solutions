var modal = document.querySelector('.modal');
var container = document.querySelector('.container-none');

modal.addEventListener('click', ad);

function ad(event) {
  var i = 0;
  if (i % 2 === 0) {
    container.className = 'container-ad';
  } else {
    container.className = 'container-none';
  }
}

var no = document.querySelector('.no');
no.addEventListener('click', negative);

function negative(event) {
  var i = 0;
  if (i % 2 === 0) {
    container.className = 'container-none';
  }
}
