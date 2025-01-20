const express = require('express');

const router = express.Router();

const getUsers = async (req, res) => {
    try {
        //const users = await getAllUsers();
        //res.render('users', {users});
        console.log("success1");
        
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    getUsers
};