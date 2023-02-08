const express = require('express');
const app = express();
const bparser = require('body-parser');
const productsRoute = require('./routes/products');
const path = require('path');
const session = require('express-session');

app.use(session({ secret: 'mysupersecretstring' }));

app.use(bparser.urlencoded());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'styles')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/layouts', express.static(path.join(__dirname, 'layouts')));
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

app.use('/products', productsRoute);

const productList = [
  {
    id: 324,
    name: 'Lenovo Ideapag 1i',
    price: '159.98',
    description: '14.0 inch, Pentium N5030',
  },
  {
    id: 4389,
    name: 'MSI GF63 Thin Gaming Laptop',
    price: '559',
    description: '15.6 inch FHD Display',
  },
];

app.get('/', (req, res) => {
  res.redirect('/products');
});

app.get('/deletecookies', (req, res) => {
  res.cookie('cart', 0, { maxAge: 0 });
  res.redirect('/');
});

app.post('/cart', (req, res) => {
  console.log('req.query', req.query);
  console.log('req.body', req.body);
  let cart = [];
  console.log('req.body', req.body);

  if (req.session.cart) {
    cart = req.session.cart;
  }
  const product = productList.filter(x => x.id == parseInt(req.query.id))[0];
  cart.push(product);
  req.session.cart = cart;
  console.log('output', req.session.cart);
  res.send({ productList: cart });
});

app.listen(3000);
