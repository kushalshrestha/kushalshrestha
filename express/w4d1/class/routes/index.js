var express = require('express');
var router = express.Router();
const inventory = require('../models/inventory');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Welcome to the WAP store!', items: inventory });
});

module.exports = router;
