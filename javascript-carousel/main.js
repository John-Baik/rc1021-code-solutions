var next = document.getElementById('next');
var previous = document.getElementById('previous');
var image = document.querySelectorAll('.image');
var bubbleContainer = document.querySelector('.row3');
var bubbles = document.querySelectorAll('.far');
var index = 0;
var interval = setInterval(nextImage, 3000);

next.addEventListener('click', nextImage);

function nextImage() {
  index++;
  if (index < 5) {
    image[index].setAttribute('class', 'image');
    image[index - 1].setAttribute('class', 'image hidden');
    bubbles[index].className = 'far fa-circle active';
    bubbles[index - 1].className = 'far fa-circle';
  } else {
    image[index - 1].setAttribute('class', 'image hidden');
    index = 0;
    image[index].setAttribute('class', 'image');
    bubbles[index].className = 'far fa-circle active';
    bubbles[image.length - 1].className = 'far fa-circle';
  }
  clearInterval(interval);
  interval = setInterval(nextImage, 3000);
}

previous.addEventListener('click', function (event) {
  index--;
  if (index >= 0) {
    image[index].setAttribute('class', 'image');
    image[index + 1].setAttribute('class', 'image hidden');
    bubbles[index].className = 'far fa-circle active';
    bubbles[index + 1].className = 'far fa-circle';
  } else {
    image[index + 1].setAttribute('class', 'image hidden');
    index = image.length - 1;
    image[index].setAttribute('class', 'image');
    bubbles[image.length - 1].className = 'far fa-circle active';
    bubbles[0].className = 'far fa-circle';
  }
  clearInterval(interval);
  interval = setInterval(nextImage, 3000);
});

bubbleContainer.addEventListener('click', function (event) {
  if (event.target.matches('.far')) {
    var data = event.target.getAttribute('id');
    for (var i = 0; i < bubbles.length; i++) {
      if (bubbles[i].getAttribute('id') === data) {
        bubbles[i].className = 'far fa-circle active';
        image[index].className = 'image hidden';
        image[i].className = 'image';
        index = i;
      } else {
        bubbles[i].className = 'far fa-circle';
      }
    }
  }
  clearInterval(interval);
  interval = setInterval(nextImage, 3000);
});
