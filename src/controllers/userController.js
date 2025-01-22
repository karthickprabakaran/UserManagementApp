const { getAllUsers, getUserByEmail,forgotPassword } = require('../models/userModel');

const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const users = await getAllUsers();
        const user = await getUserByEmail(email);

        console.log(user);

        if (!user) {
            return res.status(400).send('User not found');
        }

        if (user.password !== password) {
            return res.status(401).send('Incorrect password');
        }

        if (user.role === 'Admin') {
            console.log("Admin logged in");
            return res.status(200).render('/Users/karthickprabakaran/Projects/UserManagementApp/src/views/adminDashboard.ejs', {
                userName: user.name,
                userEmail: user.email,
                userRole: user.role,
                allUsers: users 
            });
        }

        console.log("Successfully logged in");

        res.status(200).render('/Users/karthickprabakaran/Projects/UserManagementApp/src/views/userDashboard.ejs', {
            userName: user.name,
            userEmail: user.email,
            userRole: user.role
        });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).send('Internal server error');
    }

    
};

const resetPassword = async (req, res) => {
    const email = req.body.email;

    try {
        const user = await forgotPassword(email);

        if (!user) {
            return res.status(400).send('User not found');
        }

        res.status(200).send('Password reset link sent to your email');
    } catch (error) {
        console.error("Error during password reset:", error);
        return res.status(500).send('Internal server error');
    }
}

module.exports = {
    login,
    resetPassword
};
