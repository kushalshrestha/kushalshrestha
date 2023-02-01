function printInfo() {
  console.log('This is our first NodeJS file');
}
printInfo();
// now we need to call this js file from somewhere.
// node nodetest.js

const studentClass = require('./Student');
// console.log(studentClass); [class Student]

let student1 = new studentClass('Melun Husk', 51231);
console.log(student1);

const http = require('http');

let server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('Home Page');
  }
  if (req.url == '/customers') {
    res.end('Customers Page');
  }
  if (req.url == '/products') {
    res.end('Products Pages');
  }
});

server.listen(3000, () => {
  console.log('Server is running.....');
}); // second param is optional

/*
npm -i nodemon ---> any changes when saved, automatically restart the server
TODO: try installing nodemon globally --> sudo npm install -g nodemon
*/
