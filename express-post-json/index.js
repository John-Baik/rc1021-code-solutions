const express = require('express');
const app = express();
const grades = {};
let nextId = 1;

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const property in grades) {
    array.push(grades[property]);
  }
  res.json(array);
});

app.post('/api/grades', (req, res) => {
  const body = req.body;
  const newGrade = {};
  newGrade.id = nextId;
  newGrade.name = body.name;
  newGrade.course = body.course;
  newGrade.score = body.score;
  grades[nextId] = newGrade;
  nextId++;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
