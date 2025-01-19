const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const port = 3000;


app.get('/', (req, res) => {
  res.sendFile('/Users/karthickprabakaran/Projects/UserManagementApp/views/index.html');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});