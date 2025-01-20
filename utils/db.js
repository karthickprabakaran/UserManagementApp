const {Pool} = require('pg');
const { user } = require('pg/lib/defaults');


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root',
    port: 5432,
});

pool.connect().then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

module.exports = pool;