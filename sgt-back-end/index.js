const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const jsonMiddleWare = express.json();

app.use(jsonMiddleWare);

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from grades
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.post('/api/grades', (req, res) => {
  const body = req.body;
  const score = Number(req.body.score);
  if (!body.name || !body.course || !body.score) {
    res.status(400).json({ error: 'Entry must contain a "name", "course", and "score"' });
    return;
  } else if (!score || score > 100) {
    res.status(400).json({ error: 'Invalid integer' });
    return;
  } else if (score <= 0) {
    res.status(400).json({ error: 'Score must be a positive integer' });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  const values = [body.name, body.course, body.score];
  db.query(sql, values)
    .then(result => {
      const grades = result.rows;
      res.status(201).json(grades);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const body = req.body;
  const id = Number(req.params.gradeId);
  const score = Number(req.body.score);
  if (!id) {
    res.status(400).json({ error: 'Invalid id' });
    return;
  } else if (!body.name || !body.course || !body.score) {
    res.status(400).json({ error: 'Entry must contain a name, course, and score' });
    return;
  } else if (!score) {
    res.status(400).json({ error: 'Invalid integer' });
    return;
  }
  const sql = `
    update "grades"
      set "name" = $1,
      "course" = $2,
      "score" = $3
    where "gradeId" = $4
    returning *
  `;
  const values = [body.name, body.course, body.score, id];
  db.query(sql, values)
    .then(result => {
      const grades = result.rows[0];
      if (!grades) {
        res.status(404).json({ error: 'gradeId does not exist' });
        return;
      }
      res.status(200).json(grades);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  if (!id || id < 0) {
    res.status(400).json({ error: 'Invalid id' });
    return;
  }
  const sql = `
  delete from "grades"
    where "gradeId" = $1
    returning *;
  `;
  const values = [id];
  db.query(sql, values)
    .then(result => {
      const grades = result.rows[0];
      if (!grades) {
        res.status(404).json({ error: 'gradeId does not exist' });
        return;
      }
      res.status(204).json(grades);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server running on port 3000');
});
