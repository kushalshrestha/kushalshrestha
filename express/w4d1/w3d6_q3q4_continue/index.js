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

app.use('/products', productsRoute);

app.get('/', (req, res) => {
  res.redirect('/products');
});
app.listen(3000);
