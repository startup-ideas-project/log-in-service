const { Client } = require('pg');
const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'local_dev',
  password: 'root',
  port: 5432,
})

module.exports = {client};