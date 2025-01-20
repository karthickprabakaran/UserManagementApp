const express = require('express');
const {getUsers} = require('../controllers/adminController');

const router = express.Router();


router.get('/getusers', getUsers);





module.exports = router;