const client = require('../../utils/db');



const getAllUsers = async () => {
    try {
        const result = await client.query('SELECT * FROM users');
        return result.rows;
    } catch (error) {
        console.log(error);
    }
};




module.exports = {getAllUsers};