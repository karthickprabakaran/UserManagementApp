const express = require('express');
const { user } = require('pg/lib/defaults');

const router = express.Router();

const {login} = require('../controllers/userController');




router.get('/login', (req, res) => {
    res.render('/Users/karthickprabakaran/Projects/UserManagementApp/src/views/login.ejs');    
});

router.get('/logout', (req, res) => {
    res.redirect('/');    
});

router.post('/login',login); 

router.get('/signup', (req, res) => {
    res.render('/Users/karthickprabakaran/Projects/UserManagementApp/src/views/signUp.ejs');    
});


router.get('/forgotpassword', (req, res) => {
    res.render('/Users/karthickprabakaran/Projects/UserManagementApp/src/views/forgotPassword.ejs');    
});




module.exports = router;