const pt = {
  x: 4,
  y: 3,
  mult: function (x, y) {
    return x * y;
  },
};

console.log(pt.x + ' ' + pt.y); // 4 3
console.log(pt.mult); // f (x,y) ....
console.log(pt.mult()); // NaN -> since undefined * undefined

var x = 10;
var y = 30;

const pt1 = {
  x: 4,
  y: 3,
  mult: function (x, y) {
    return this.x * this.y;
  },
};

console.log(pt1.mult()); // 12

const pt3 = {
  x: 4,
  y: 3,
  mult: (x, y) => {
    return this.x * this.y;
  },
};

console.log(pt3.mult()); // 300 b/c arrow function will live inside 'window' object

/* 'this' inside vs outside object */
function foo() {
  console.log(this);
}
const bob = {
  log: function () {
    console.log(this);
  },
};
console.log(this); //window object
foo(); // this refers to the global window object
bob.log(); // {log : f.....} // refers to the object bob

/* this inside a function (-> window) */
function sam() {
  this.newvar = 'hello';
}

// console.log(newvar); //Uncaught ReferenceError: newvar is not defined
sam();
console.log(newvar); //hello

var a = {
  name: '',
  log: function () {
    this.name1 = 'Hello';
    console.log(this.name1);
    var setFrench = function (newname) {
      console.log(this);
      console.log('setFrench called and newname : ' + newname);
      this.name1 = newname; // this will create a variable named 'name1' in window i.e window.name1 = 'Bonjour'
      console.log(this);
    };
    setFrench('Bonjour');
    console.log(this.name1); // still will be Hello since the
  },
};
a.log();

/* this inside arrow function (ES6) - solution for legacy & self pattern problem */
const ad = {
  x: 1,
  y: 3,
  name: '',
  log: function () {
    this.name = 'Hello';
    console.log(this.name); //Hello
    const setFrench = newname => (this.name = newname);
    setFrench('Bonjour');
    console.log(this.name); //Bonjour // this will refer to surrounding lexical scope inside arrow function
  },
  mult: (x, y) => {
    console.log(this.x, this.y);
    return this.x * this.y;
  },
  mult1: function (x, y) {
    console.log(this.x, this.y);
    return this.x * this.y;
  },
};

ad.log();
ad.mult();
ad.mult1();

/* .bind(), .call(), .apply() 
  .bind() -> when you want a function to be called back later with a certain context
  .call() & .apply() -> when you want to invoke the function immediately and modify the context
  */
var username = 'Kushal';
let objectx = {
  name: 'objectX',
  id: 23432,
  printInfo: function (a, b) {
    console.log(this.username);
  },
};

let objecty = {
  username: 'Anil',
  password: 'secret',
};
objectx.printInfo(this.username); //undefined
let z = objectx.printInfo.bind(objecty); // does only binding but no execution
z(); // Anil
objectx.printInfo.call(objecty); //Anil
objectx.printInfo.apply(objecty); //Anil

var me = {
  first: 'Tina',
  last: 'Xing',
  getFullName: function () {
    return this.first + ' ' + this.last;
  },
};

var you = {
  first: 'Rujan',
  last: 'Xing',
};

console.log(me.getFullName.apply(you)); //Rujan Xing
console.log(me.getFullName.bind(you)); //only returns a function
console.log(me.getFullName.bind(you)()); //Rujan Xing

/* JS does not provide private methods but possible to emulate with closures 
  IIFE Module pattern
  (function(params) {
  
  })(params);
  
  (function(params){
  
  }(params))
  */

// old: 3 globals
var count = 0;
function incr(n) {
  count += n;
}
function reset() {
  count = 0;
}
incr(4);
incr(2);
console.log('count: ' + count);

// new: 0 globals
(function () {
  var count = 0;
  function incr(n) {
    count += n;
  }
  function reset() {
    count = 0;
  }
  incr(4);
  incr(2);
  console.log('count: ' + count);
})();

//////////////////////////////////

var funcs = [];
for (var i = 0; i < 5; i++) {
  funcs[i] = function () {
    return i;
  };
}
console.log(funcs[0]()); //5
console.log(funcs[1]()); //5
console.log(funcs[2]()); //5
console.log(funcs[3]()); //5
console.log(funcs[4]()); //5

//////////////////////////////////
var helper2 = function (n) {
  return function () {
    return n;
  };
};

var funcs = [];
for (var i = 0; i < 5; i++) {
  funcs[i] = helper2(i);
}
console.log(funcs[0]()); //0
console.log(funcs[1]()); //1
console.log(funcs[2]()); //2
console.log(funcs[3]()); //3
console.log(funcs[4]()); //4

//////////////////////////////////
var helper3 = function (n) {
  return function () {
    return n;
  };
};

var funcs = [];
for (var i = 0; i < 5; i++) {
  funcs[i] = helper3(i);
}
console.log(funcs[0]()); //0
console.log(funcs[1]()); //1
console.log(funcs[2]()); //2
console.log(funcs[3]()); //3
console.log(funcs[4]()); //4
////////////////////////////
var funcs = [];
for (var i = 0; i < 5; i++) {
  funcs[i] = (function (n) {
    return function () {
      // return a closure
      return n;
    };
  })(i);
}

console.log(funcs[0]()); //0
console.log(funcs[1]()); //1
console.log(funcs[2]()); //2
console.log(funcs[3]()); //3
console.log(funcs[4]()); //4

/* Module Pattern*/

/* widely used in single page web apps */
const module = (function () {
  const privateArray = [];
  const privateFunction = function (text) {
    // private
    console.log(text);
  };
  const someFunction = function (text) {
    // public
    privateFunction(text);
  };
  const anotherFunction = function (item) {
    // public
    privateArray.push(item);
    console.log(privateArray);
  };
  return {
    func1: someFunction,
    func2: anotherFunction,
  };
})();

console.log(module); // {someMethod: ... , anotherMethod: ....}

/* Accessing Private Functions & Variables*/
module.func1('Hello Kushal!');
module.func2('adfs');

// Extending module
module.func3 = function () {
  console.log('public or private method check it');
};

/* ASSIGNMENT */
