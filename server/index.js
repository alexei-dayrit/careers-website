require('dotenv/config');
const express = require('express');
const pg = require('pg');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');

const app = express();
const jsonMiddleware = express.json();
app.use(jsonMiddleware);
app.use(staticMiddleware);

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/team_members', (req, res, next) => {
  const sql = `
    select "memberId",
           "name",
           "title",
           "picture"
      from "team"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/jobs', (req, res, next) => {
  const sql = `
    select "jobId",
           "title",
           "url"
      from "jobs"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/job/:jobId', (req, res, next) => {
  const jobId = parseFloat(req.params.jobId);
  const { name, email, linkedIn } = req.body;
  const sql = `
    insert into "applicants" ("jobId", "name", "email", "linkedIn")
      values($1, $2, $3, $4)
      returning *;
  `;
  const params = [jobId, name, email, linkedIn];
  db.query(sql, params)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
