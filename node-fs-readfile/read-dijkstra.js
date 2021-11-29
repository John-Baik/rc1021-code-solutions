const fs = require('fs');
const dij = 'dijkstra.txt';

fs.readFile(dij, 'utf8', (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
  }
});
