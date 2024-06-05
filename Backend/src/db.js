require('dotenv').config();

const { Pool } = require('pg');

// Connect to the database
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

// Export connection 
module.exports = {
    query: (text, params) => pool.query(text, params),
};