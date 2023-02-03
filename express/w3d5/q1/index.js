const express = require('express');
const app = express();
app.get('/', (req, res) => {
  console.log(req.query.name);
  let q = req.query;
  let name = q.name;
  let age = q.age;
  if (!name) {
    name = 'person';
  }
  if (!age) {
    age = "We don't know your age :[";
  } else {
    age = "You're age is : " + age;
  }
  res.send(`Welcome ${name}. ${age}`);
});
app.listen(3000);
