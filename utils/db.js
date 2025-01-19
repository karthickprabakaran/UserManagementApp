const {client} = require('pg');
const { user } = require('pg/lib/defaults');


const Client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'userManagement',
    password: 'root',
    port: 5432,
});

client.connect().then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

module.exports = client;