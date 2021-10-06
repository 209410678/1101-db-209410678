const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_78',
    password: '0000',
    port: '5432',
})
pool.query('SELECT * from category_78', (err, res) => {
    console.log(JSON.stringify(res.rows));
    pool.end();
})

module.exports = pool;