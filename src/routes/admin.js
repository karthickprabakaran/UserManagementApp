const express = require('express');
const { getUsers, deleteUser } = require('../controllers/adminController');
const router = express.Router();

router.get('/getusers', getUsers);
router.get('/users', getUsers);

     
router.post('/deleteuser/:id', deleteUser); 

module.exports = router;
