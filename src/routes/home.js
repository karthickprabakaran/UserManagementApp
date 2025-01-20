const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('/Users/karthickprabakaran/Projects/UserManagementApp/src/views/index.ejs');
});

router.get('/dashboard', (req, res) => {
  res.render('/Users/karthickprabakaran/Projects/UserManagementApp/src/views/userDashboard.ejs');
});



module.exports = router;