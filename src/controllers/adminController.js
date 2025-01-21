const { getAllUsers, deleteUserById } = require('../models/userModel');

const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.render('users', { users });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching users');
    }
};

const deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const result = await deleteUserById(userId);

        if (result === 1) {
            console.log(`User with ID ${userId} deleted successfully.`);
            res.redirect('/auth/login'); 
        } else {
            console.log(`User with ID ${userId} not found.`);
            res.status(404).send('User not found.');
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { getUsers, deleteUser };


