const fs = require('fs');
const data = require('./data');
const notes = data.notes;
const id = data.nextId;
const input = process.argv[3];

notes[id] = input;
data.nextId++;

const stringify = JSON.stringify(data, null, 2);

fs.writeFile('data.json', stringify, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
