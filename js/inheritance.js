let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // true

delete rabbit.jumps;

console.log(rabbit.jumps); // null , because in absence of method inside rabbit, it inherits the method from 'animal'

delete animal.jumps;

console.log(rabbit.jumps); // undefined. Both 'rabbit' and 'animal' won't have property jumps

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log('======Searching algorithm=========');
console.log(pockets.pen);

let animal1 = {
  name: 'animal',
  eat() {
    this.full = true;
  },
};

let rabbit1 = {
  name: 'rabbit',
  __proto__: animal1,
};

console.log(rabbit1);
rabbit1.eat(); // this.full modifies rabbits
console.log(rabbit1);

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// This one found the food
speedy.eat('apple');
console.log(speedy.stomach); // apple
// This one also has it, why? fix please.
console.log(lazy.stomach); // apple

function Rabbit2() {}
Rabbit2.prototype = {
  eats: true,
};

let rabbit2 = new Rabbit2();

console.log(rabbit2.eats); // true

Rabbit2.prototype = {};
console.log(rabbit2.eats); // b/c there's a change in prototype only later after 'rabbit2' is created
Rabbit2.prototype.eats = false;
console.log(rabbit2.eats); // true

delete rabbit.eats;

console.log(rabbit.eats); // undefined
console.log('===Native Properties===');
console.log(Function);

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log('Hello!');
}

f.defer(1000);

let animal3 = {
  eats: true,
};

let rabbit3 = Object.create(animal3);
console.log(rabbit3);
