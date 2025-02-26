const express = require('express');
const { user } = require('pg/lib/defaults');

const router = express.Router();

const {login, resetPassword, signUp} = require('../controllers/userController');

const {deleteUser} = require('../controllers/adminController');




router.post('/signup',signUp);


router.post('/deleteuser/:id', deleteUser);

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


router.get('/forgot-password', (req, res) => {
    res.render('/Users/karthickprabakaran/Projects/UserManagementApp/src/views/forgotPassword.ejs');    
});

router.post('/forgot-password', resetPassword);    





module.exports = router;