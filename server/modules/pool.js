const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
    database: 'koala',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
});

pool.on('connect', () => {
    console.log('Postgres connected!');
});

pool.on('error', (error) => {
    console.log('Postgres error!', error);
});

module.exports = pool;