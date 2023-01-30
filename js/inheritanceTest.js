String.prototype.filter = function (...string) {
  let filterString = this.split(' ');

  filterString = filterString.filter(item => !string.includes(item));
  return filterString.join(' ');
};
console.log('1. ' + 'This house is not nice!'.filter('not'));

describe('Filter Function to String Object', function () {
  it('should remove the passed word from string', function () {
    let actual = 'This house is not nice!';
    let expected = 'This house is nice!';
    assert.equal(actual.filter('not'), expected);
  });
});

Array.prototype.bubbleSort = function () {
  for (let j = 0; j < this.length; j++) {
    for (let i = 0; i < this.length - j - 1; i++) {
      if (this[i] > this[i + 1]) {
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
      }
    }
  }
  return this;
};

console.log('2. ' + [6, 4, 0, 3, -2, 1].bubbleSort());

describe('BubbleSort Function to Array Object', function () {
  it('should sort the element of an array', function () {
    let actual = [6, 4, 0, 3, -2, 1];
    let expected = [-2, 0, 1, 3, 4, 6];
    assert.equal(actual.bubbleSort().join(), expected.join());
  });
});

var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.describe = function () {
  return this.name + ', ' + this.age + ' years old.';
};

function Teacher() {}

Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  return `${this.name} is now teaching ${subject}`;
};
let teacher = new Teacher();
teacher.initialize('John', 28);

console.log('3. ' + teacher.teach('Java'));
