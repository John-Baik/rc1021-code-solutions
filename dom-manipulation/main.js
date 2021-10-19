var clicks = 0;

var button = document.querySelector('.hot-button');
var count = document.querySelector('.click-count');

button.addEventListener('click', function (event) {
  var temperature;
  clicks++;
  if (clicks < 4) {
    temperature = 'cold';
  } else if (clicks < 7) {
    temperature = 'cool';
  } else if (clicks < 10) {
    temperature = 'tepid';
  } else if (clicks < 13) {
    temperature = 'warm';
  } else if (clicks < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  button.className = 'hot-button ' + temperature;
  count.textContent = 'Clicks: ' + clicks;
});
