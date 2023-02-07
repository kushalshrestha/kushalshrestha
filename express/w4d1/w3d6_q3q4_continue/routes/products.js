const express = require('express');
const router = express.Router();
const session = require('express-session');
const bparser = require('body-parser');
const app = express();
app.use(bparser.urlencoded());
app.use(session({ secret: 'mysupersecretstring' }));

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
const shoppingcartList = [
  {
    id: 324,
    name: 'Lenovo Ideapag 1i',
    price: '159.98',
    description: '14.0 inch, Pentium N5030',
    qty: 1,
  },
  {
    id: 4389,
    name: 'MSI GF63 Thin Gaming Laptop',
    price: '559',
    description: '15.6 inch FHD Display',
    qty: 2,
  },
];

router.get('/', (req, res) => {
  //   res.send('Products List');
  res.render('list.ejs', { products: productList });
});
router.get('/product', (req, res) => {
  let selectedProduct;
  const index = parseInt(req.query.index);
  for (product of productList) {
    if (product.id == index) {
      selectedProduct = product;
      break;
    }
  }
  res.render('product.ejs', { product: selectedProduct });
});

router.post('/shoppingcart', (req, res) => {
  let cart = [];
  if (req.session.cart) {
    cart = req.session.cart;
  }
  const product = productList.filter(x => x.id == req.body.id)[0];
  cart.push(product);
  req.session.cart = cart;
  res.render('shoppingcart.ejs', { productList: cart });
});

module.exports = router;
