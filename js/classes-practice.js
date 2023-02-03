class Person {
  static family = 'Sopranos';

  static pi() {
    return 3.14;
  }

  constructor(name, age) {
    this.setName(name);
    this.setAge(age);
  }

  //getter and setters
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  printInfo() {
    return console.log(this.getName() + ', ' + this.getAge());
  }
}

// let p = new Person('Kushal', 20);
// console.log(p);
// p.printInfo();
// p.name = 'Kushal Shrestha'; // here name is a setter i.e name() and not the property.
// p.age = 10; // here age is a property
// console.log(p);
// p.setName('Kushal Man Shrestha');
// console.log(p);

class Student extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.setId(id);
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  printInfo() {
    return console.log(super.printInfo() + ', ' + this.getId());
  }
}

let s = new Student('Kushal Shr', 30, 1010);
console.log(s.printInfo());
console.log(s);

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.setSalary(salary);
  }

  getSalary() {
    return this.salary;
  }

  setSalary(salary) {
    this.salary = salary;
  }
}

let e = new Employee('Mary', 64, 20000);
console.log(e);
console.log(Person.family); //accessing static property
console.log(Person.pi());

// adding later static method
Person.newStaticMethod = function () {
  return '1000 N 4th St';
};
Person.address = '100- N 4th St'; // static variable but this will give issue;

console.log(Person.newStaticMethod());
console.log(Person.address);
console.log(Student.address);
Student.address = 'Satdobato, Lalitpur';
console.log(Student.address);

/*
console.log('===exam=====');
class Computer {
  constructor(ram, cpu, storage) {
    this.ram = ram;
    this.cpu = cpu;
    this.storage = storage;
  }

  runProgram(program) {
    console.log('running: ' + program);
  }
}

class Laptop extends Computer {
  constructor(ram, cpu, storage, battery) {
    super(ram, cpu, storage);
    this.battery = battery;
  }

  carryAround() {
    console.log(
      'carrying laptop: cpu' + this.cpu +
        ' ram: ' + this.ram +
        ' storage: ' + this.storage +
        ' battery: ' + this.battery
    );
  }
}

let l = new Laptop('8GB RAM', 'CPU', '512HD', 'BATTERY');
console.log(l.runProgram('MS-WORD'));
console.log(l.carryAround());

*/
