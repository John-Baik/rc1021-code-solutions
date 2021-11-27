let count = 3;

const interval = setInterval(update, 1000);
function update() {
  if (count !== 0) {
    console.log(count);
    count -= 1;
  } else {
    clearInterval(interval);
    console.log('Blast off!');
  }
}
