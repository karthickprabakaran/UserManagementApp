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

const deleteUserById = async (id) => {
    try {
        const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        return result.rowCount;
    } catch (error) {
        console.log(error);
    }
}

const forgotPassword = async (email) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1',[email]);
        return result.rows[0];
    } catch (error) {
        console.log(error);
    }
};

const createUser = async (name,email, password, role = 'user') => {
    try {
        const result = await pool.query(
            `INSERT INTO users(name,email, password, role) VALUES($1, $2, $3, $4) RETURNING *`,
            [name, email, password, role]
        );
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error('Failed to create user');
    }
};



module.exports = {
    getAllUsers,
    getUserByEmail,
    deleteUserById,
    forgotPassword,
    createUser
};