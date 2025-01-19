const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const port = 3000;
const bodyParser = require('body-parser');
const auth = require('./src/routes/auth');
const homeRoutes = require('./src/routes/home');



app.use('/auth',auth);


app.use('/',homeRoutes);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});