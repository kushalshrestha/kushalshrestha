const express = require('express');
const app = express();
const bparser = require('body-parser');
const path = require('path');
const session = require('express-session');

app.use(bparser.urlencoded());
app.use(express.json()); // send json object
app.use(session({ secret: 'mysupersecretstring' }));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.use((req, res, next) => {
  console.log('Middleware Called');
  console.log('REQUESTED URL : ' + req.url);
  next();
});

app.get('/', (req, res) => {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 6 && hour <= 18) {
    app.use(
      '/css/style.css',
      express.static(path.join(__dirname, 'css', 'day.css'))
    );
  } else {
    app.use(
      '/css/style.css',
      express.static(path.join(__dirname, 'css', 'night.css'))
    );
  }

  res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/output', (req, res) => {
  let request = req.body;
  let name = request.name;
  let age = request.age;
  req.session.userInfo = { username: name, age: age };
  res.redirect('/output');
});

app.get('/output', (req, res) => {
  let name = 'Anonymous';
  let age = 0;
  if (req.session.userInfo) {
    name = req.session.userInfo.username;
    age = req.session.userInfo.age;
  }
  res.send(`Welcome ${name}!!! You're ${age} years old.`);
});

app.listen(3000, () => console.log('Server is running on port 3000...'));
