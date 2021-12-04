const fs = require('fs');
const express = require('express');
const app = express();
const data = require('./data.json');
const notes = data.notes;
const jsonMiddleWare = express.json();

app.get('/api/notes', (req, res) => {
  const array = [];
  for (const property in notes) {
    array.push(notes[property]);
  }
  res.status(200).json(array);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!id || id < 0 || Number.isInteger(id) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.status(200).json(notes[id]);
  }
});

app.use(jsonMiddleWare);

app.post('/api/notes', (req, res) => {
  const body = req.body;
  const newNote = {};
  if (!body.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  newNote.id = data.nextId;
  newNote.content = body.content;
  notes[newNote.id] = newNote;
  data.nextId++;
  const stringify = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', stringify, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Unexpected error occurrred' });
    } else {
      res.status(201).json(newNote);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!id || id < 0 || Number.isInteger(id) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  } else if (!notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
    return;
  }
  delete notes[req.params.id];
  const stringify = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', stringify, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Unexpected error occurrred' });
    } else {
      res.sendStatus(204);
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  if (!id || id < 0 || Number.isInteger(id) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  } else if (!body.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  } else if (!notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
    return;
  }
  notes[id].content = body.content;
  const stringify = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', stringify, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Unexpected error occurrred' });
    } else {
      res.status(200).json(notes[id]);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
