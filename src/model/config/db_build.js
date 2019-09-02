const { readFileSync } = require('fs');
const { join } = require('path');
const dbConnection = require('./db_connection');

const sql = readFileSync(join(__dirname, 'db_build.sql')).toString();

module.exports = dbConnection.query(sql);
