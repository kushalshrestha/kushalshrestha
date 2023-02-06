const express = require('express');
const router = express.Router();

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
router.post('/addtocart', (req, res) => {
  console.log(req.body);
  res.send('Product added');
});
router.get('/shoppingcart', (req, res) => {
  res.render('shoppingcart.ejs', { productList: shoppingcartList });
});

module.exports = router;
