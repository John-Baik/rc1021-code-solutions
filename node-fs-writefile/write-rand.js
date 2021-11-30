const fs = require('fs');
const path = 'random.txt';
const data = (Math.floor(Math.random() * 100)).toString();

fs.writeFile(path, data, err => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('data written successfully');
  }
});
