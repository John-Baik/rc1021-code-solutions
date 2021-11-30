const fs = require('fs');
const data = require('./data');
const notes = data.notes;
const index = process.argv[3];

delete notes[index];

const stringify = JSON.stringify(data, null, 2);

fs.writeFile('data.json', stringify, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
