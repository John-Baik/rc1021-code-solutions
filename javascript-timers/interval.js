function update() {
  var h1 = document.querySelector('h1');
  if (h1.textContent !== '1') {
    h1.textContent--;
  } else {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}

var interval = setInterval(update, 1000);
