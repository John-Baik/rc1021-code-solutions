const express = require('express');
const app = express();
const path = require('path');

const join = path.join(__dirname, 'public');

app.use(express.static(join));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
