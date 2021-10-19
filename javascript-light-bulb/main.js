var i = 0;
var circle = document.querySelector('.circle');
var container = document.querySelector('.container');

circle.addEventListener('click', glow);

function glow(event) {
  var darkCircle = '-dark';
  var darkContainer = '-dark';
  if (i % 2 === 0) {
    circle.className = 'circle' + darkCircle;
    container.className = 'container' + darkContainer;
    i++;
  } else {
    circle.className = 'circle';
    container.className = 'container';
    i++;
  }
}
