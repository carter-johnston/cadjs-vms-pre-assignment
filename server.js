const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const routes = require('./routes');

const app = express();

app.set('trust proxy', 1);
app.use(cookieSession({
  name: 'session',
  keys: ['kktvsa4b7ny', 'v82bt578f23'],
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes());

app.listen(3000, () =>
{
  console.log("listening on Port 3000!")
})