const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('/Users/karthickprabakaran/Projects/UserManagementApp/src/views/index.ejs');
});



module.exports = router;