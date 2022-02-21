const express = require('express');

const bodyParser = require('body-parser');

const db = require('./db/queries');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
});

db.connect()
  .then((res) => {
    console.log('Connected to database');
    app.listen(process.env.PORT || 3000);
    const port = process.env.PORT || 3000;
    console.log(`Server listening on port: ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
