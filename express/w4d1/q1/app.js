const express = require('express');
const path = require('path');
const app = express();
const bparser = require('body-parser');
app.use(bparser.urlencoded());

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/css', express.static(path.join(__dirname, 'css')));

let cookieList = [];

app.get('/', (req, res) => {
  res.render('add_cookie_form', { cookieList: req.cookies });
});

app.post('/addCookie', (req, res) => {
  const request = req.body;
  res.cookie(request.key, request.value);
  res.redirect('/');
});

app.listen(3000);
