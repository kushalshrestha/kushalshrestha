const express = require('express');
const app = express();
const bparser = require('body-parser');
const booksroute = require('./router');
const path = require('path');
app.set('view engine');

app.use(bparser.urlencoded());
app.use(express.json()); // send json object
app.use('/pics', express.static(path.join(__dirname, 'images')));

console.log('======================');
app.use((req, res, next) => {
  console.log('Middleware Called');
  console.log('REQUESTED URL : ' + req.url);
  next();
});

app.use('/books', booksroute);

app.get('/chicken', (req, res) => {
  //   res.send('Chicken Page');
  console.log(__dirname);
  res.sendFile(path.join(__dirname, '/pages/', 'chicken.html'));
});

app.post('/dog', (req, res) => {
  console.log('In DOG!');
  res.redirect('/dog');
});

app.get('/dog', (req, res) => {
  res.send('Test Page');
});

app.get('/test', (req, res) => {
  res.send('Test Page');
});
app.get('/redirect', (req, res) => {
  res.redirect('/chicken');
});
app.get('/externalRedirect', (req, res) => {
  res.redirect('http://www.google.com/search?q=dog');
});

//two same routes - first one is taken (like if, else condition)
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('*', (req, res) => {
  res.status(404);
  res.send('Page not found');
});

app.use((req, res) => {
  res.status(404).res.send('Page not found');
});

app.listen(3000, () => console.log('Server is running on port 3000...'));
console.log('======================');
