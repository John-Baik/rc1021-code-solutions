var modal = document.querySelector('.modal');
var container = document.querySelector('.container-none');

modal.addEventListener('click', ad);

function ad(event) {
  container.className = 'container-ad';
}

var no = document.querySelector('.no');
no.addEventListener('click', negative);

function negative(event) {
  container.className = 'container-none';
}
