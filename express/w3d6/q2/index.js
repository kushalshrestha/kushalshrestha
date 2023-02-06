const express = require('express');
const app = express();
const bparser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bparser.urlencoded());
app.use(express.json()); // send json object

app.use((req, res, next) => {
  console.log('Middleware Called');
  console.log('REQUESTED URL : ' + req.url);
  next();
});

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'form.html'));
  res.render('form.ejs');
});

app.post('/result', (req, res) => {
  let p = req.body;
  // res.send(`Welcome ${p.name}!! You're ${p.age} years old.`);
  res.render('form-output', { name: p.name, age: p.age });
});

app.listen(3000, () => console.log('Server is running on port 3000...'));
