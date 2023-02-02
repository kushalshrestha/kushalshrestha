const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Middleware Called');
  console.log('LOCALIZED REQUESTED URL : ' + req.url);
  next();
});
router.get('/', (req, res) => {
  res.send('Books Home Page');
});
router.get('/bestsellers', (req, res) => {
  res.send('Best Sellers Page');
});
router.get('/romance', (req, res) => {
  res.send('Romance Page');
});
router.get('/adventure', (req, res) => {
  res.send('Adventure Page');
});

module.exports = router;
