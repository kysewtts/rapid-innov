const { Pool } = require('pg');

const pool = new Pool({
  user: 'ujjwalprakash',
  host: 'localhost',
  database: 'rapid',
  password: '',
  port: process.env.DB_PORT,
});

module.exports = pool;
