const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const pool = require('./utils/db');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine', 'ejs');

const port = 3000;
const auth = require('./src/routes/auth');
const homeRoutes = require('./src/routes/home');
const admin = require('./src/routes/admin');



app.use('/auth',auth);
app.use('/admin',admin);


app.use('/',homeRoutes);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});