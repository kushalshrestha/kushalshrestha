const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('/', (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  const css = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
  res.render('index', {
    time: date.toTimeString(),
    css: css,
  });
});
app.listen(3000);
