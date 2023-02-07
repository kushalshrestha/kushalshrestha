var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const inventory = require('./models/inventory');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var animalRouter = require('./routes/animal');
const bparser = require('body-parser');
const session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({ secret: 'mysupersecretstring' }));
app.use(bparser.urlencoded());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/animals', animalRouter);

app.get('/product', (req, res) => {
  const index = parseInt(req.query.index);
  res.render('product', { product: inventory[index] });
});

app.post('/cart', (req, res) => {
  const name = req.body.p;
  const product = inventory.filter(x => x.name.split(' ')[0] == name)[0];
  let cart = [];
  if (req.session.cart) {
    cart = req.session.cart;
  }
  cart.push(product);
  req.session.cart = cart;
  //res.cookie('cart', cart, {maxAge: 7*24*60*60 *1000});
  res.redirect('/cart');
});

app.get('/deletecookies', (req, res) => {
  res.cookie('cart', 0, { maxAge: 0 });
  res.redirect('/');
});

app.get('/cart', (req, res) => {
  let cart = [];
  if (req.session.cart) cart = req.session.cart;
  res.render('cart', { cart: cart });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3000, () => console.log('Server is running....'));
module.exports = app;
