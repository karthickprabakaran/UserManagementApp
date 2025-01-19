const express = require('express');

const router = express.Router();

//step 1: import the required modules 

// write the logic for the login route

// test the login route 

// write the ejs file for the login page



router.get('/login', (req, res) => {
    res.send('Login page');    
});

router.get('/signup', (req, res) => {
    res.send('signup page');    
});




module.exports = router;