const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.DB_HOST,
  database: process.env.PG_DEFAULT_DB,
  password: process.env.PG_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;
