### Namaste :pray:

- :student: I'm a masters student right now.
- :book: I'm currently learning "CS472 Web Application Programming".
- :computer: I'm a software engineer with 7+ years of experience, mostly in data field.
- :speech_balloon: Ask me about SQL, JAVA, PHP, JS.
- :link: Here's my [LinkedIn Profile](https://www.linkedin.com/in/kushal-shrestha).
- :soccer: Game made for me: Football and Basketball.
- :guitar: I like playing guitar.

## NODE RESOURCES

# Node Installation

Node tutorial :

`npm install -g nodemon`

`nodemon node/nodetest.js`

`localhost:3000`

Express tutorial :

`nodemon server.js`

- Express Assignment:

* w3d5 assignment

  `nodemon express/w3d5/q1/index.js`

  `nodemon express/w3d5/q1/index.js`

  `nodemon express/w3d5/q1/index.js`

  `nodemon express/w3d5/q1/index.js`

* w3d6 assignment
  `nodemon express/w3d6/q1/index.js`

  `nodemon express/w3d6/q2/index.js`

  `nodemon express/w3d6/q3q4/index.js`

* w4d1 class exercise + assignment
  `nodemon express/w4d1/class/app.js`

  `nodemon express/w4d1/q1/app.js`

  `nodemon express/w4d1/w3d5q4_continue`

# EJS + Dog Template

`npm install ejs --save`

# Express

`npm install express -save`

`npm install cookie-parser -save`

`npm install express-session --save`

Resource to follow: https://blog.logrocket.com/how-to-use-ejs-template-node-js-application/#:~:text=EJS%20(Embedded%20JavaScript%20Templating)%20is,your%20Node%20application%20with%20EJS.

# Cookie & Sessions Note:

model/product.js

```
module.exports = class Product{
  constructor(name, description, price, image){
    this.name = name;
    this.description = description;
    this.price = price;
    this.images = image;
  }

  toString(){
    return this.name +  " : " + this.description + ". Price : " + this.price;
  }
}
```

model/inventory.js

```
const prod = require('./product');

[
  new prod("Starbucks K-Cup", "Named from our first store. Nestle uses Starbucks coffee", 43.04, "http://amazon.com/image_path"),
  new prod("Starbucks K-Cup", "Named from our first store. Nestle uses Starbucks coffee", 43.04, "http://amazon.com/image_path"),
  new prod("Starbucks K-Cup", "Named from our first store. Nestle uses Starbucks coffee", 43.04, "http://amazon.com/image_path"),
  new prod("Starbucks K-Cup", "Named from our first store. Nestle uses Starbucks coffee", 43.04, "http://amazon.com/image_path"),
  new prod("Starbucks K-Cup", "Named from our first store. Nestle uses Starbucks coffee", 43.04, "http://amazon.com/image_path"),
]

```

index.ejs

```
<!DOCTYPE html>
....contd

<p>Welcom to <%= title %>
<div id="inventory">
  <% for (item in items) {}>

    <div class="product">
    <a href="/product?index=<%=item%>">
      <h3><%= items[item].name %></h3>
      <img src="<%= items[item].image %>">
      <h5><%= items[item].price %></h5>
    </a>

    </div>


  {%>}
</div>

```

```

const session = require('express-session'); // npm install express-session --save


const bparser = require('body=parser');
app.use(bparser.urlencoded());
app.use(session({secret : "mysupersecretstring"}));

const inventory = require('../models/inventory);

let cart = []; //saving in the server, need to replace with - saving in client side

router.get('/', function(req, res, next) {
  ... {title: .... , item: .....}
});


app.get('/product', (req, res)=>{
  const index = parseInt(req.query.index);
  res.render('product', {product: inventory[index]})
});

app.post('/cart', (req, res) => {
  const name = req.body.p;
  // cart.push(inventory.filter(x=> x.name == name)[0]);  // used this while saving in the server
  const product = inventory.filter(x=> x.name == name)[0];

  if(req.cookies.cart) { //req.session.cart
    res.cookies.cart.push(product); //res.session.cart.push(product)
  } else {
    res.coookie('cart', [product]);
  }
  res.redirect('/cart');   //QUESTION: when post why redirect??
});

app.get('/cart', (req, res)=>{
  //res.render('cart', {cart: cart}); // used this while saving in the server
  let cart=[];
  if(req.cookies.cart) { //req.session.cart
    cart = req.cookies.cart; //req.session.cart
  }

  res.render('cart', {cart: cart});
});

app.get('/deletecookies', (req,res)=>{
  res.cookie('cart', 0, {maxAge:0}); // res -> b/c want to make changes on the client side
  res.redirect('/');
})




```

product.ejs

```
<!DOC....>


  <div class="product">
    <form action="/cart" method="post">
    <h3><%=product.name %></h3>
    <img src=<%= product.image %>
    <input type="hidden" name="p" value=<%= product.name%>/>
    <input type="submit" value="Add to cart">
    </form>

  </div>



```

cart.ejs

```

```

## Session Cookie

## Persistent Cookie - at one point it will expire

{maxAge: 7*24*60*60*1000}

## Session

- stored on server

## Miscellenous

- install chrome extension -> cookie tab browser
