const fs = require('fs');
const note = 'note.txt';

fs.writeFile(note, process.argv[2], err => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('data written successfully');
  }
});
