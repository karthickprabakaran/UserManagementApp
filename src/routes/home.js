const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('you should either login or register');
});



module.exports = router;