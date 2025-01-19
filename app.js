const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const port = 3000;
const bodyParser = require('body-parser');
const loginRoutes = require('./src/routes/login');
const homeRoutes = require('./src/routes/home');



app.use('/auth',loginRoutes);


app.use('/',homeRoutes);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});