const pool = require('../../utils/db');



const getAllUsers = async () => {
    try {
        const result = await pool.query('SELECT * FROM users');
        return result.rows;
    } catch (error) {
        console.log(error);
    }
};

const getUserByEmail = async (email) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1',[email]);
        return result.rows[0];
    } catch (error) {
        console.log(error);
    }
};




module.exports = {
    getAllUsers,
    getUserByEmail
};