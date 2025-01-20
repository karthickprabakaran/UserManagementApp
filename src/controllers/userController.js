const {getAllUsers, getUserByEmail} = require ('../models/userModel');




const login = async (req, res) => {
    const email = req.body.email;
    console.log(email);    
    const password = req.body.password;

    try {
        const user = await getUserByEmail(email);
        if (!user) {
            return res.status(400).send('User not found');
        }
        console.log("Successfully logged in");

        return res.status(200).send('User found, logged in successfully');

    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).send('Internal server error');
    }
};









module.exports = 
{
    login
}