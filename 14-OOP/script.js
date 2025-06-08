'use strict';


//===========================================================================================================================================================//

// CONSTRUCTOR FUNCTION AND NEW OPERATOR 
const Person = function(firstName, birthYear) {
    // Instances properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    this.calcAge = function(){
      console.log(2025 - birthYear);
    };
};

const Jonas = new Person('Jonas', 2005);
console.log(Jonas);

/*
1. New {} is created
2. function is called, this = {}
3. {} linked to prototype
4. function automatically return {}
*/

const Sara = new Person('Sara', 2007);
const Mike = new Person('mike', 2006);
console.log(Sara, Mike);

console.log(Sara instanceof Person);


//===========================================================================================================================================================//

// PROTOTYPES
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

Sara.calcAge();
Mike.calcAge();

console.log(Mike.__proto__);
console.log(Sara.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Sara));
console.log(Person.prototype.isPrototypeOf(Jonas));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects
Person.prototype.species = 'Homo Sapiens';
console.log(Sara.species, Mike.species);

console.log(Mike.hasOwnProperty('firstName'));
console.log(Sara.hasOwnProperty('species'));


//===========================================================================================================================================================//

// PROTOTYPAL INHERITANCE 
console.log(Anshu.__proto__);

console.dir(Person.prototype.constructor);

// Object.prototype (top of prototype chain)
console.log(Sara.__proto__.__proto__);
console.log(Sara.__proto__.__proto__.__proto__);

// new Array === []
const arr = [3, 6, 6, 5, 6, 9, 9]; 
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.unique());

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

/*
const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
*/

//===========================================================================================================================================================//

// Coding Challenge 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('Toyota', 120);
const mercedes = new Car('Tesla', 95);

Tesla.accelerate();
Tesla.accelerate();
Tesla.brake();
Tesla.accelerate();


//===========================================================================================================================================================//


// Class expression

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonCl('Sourav Kumar', 2006);
console.log(Sara);
jessica.calcAge();
console.log(Mike.age);

console.log(Sara.__proto__ === PersonCl.prototype);

jessica.greet();

const walter = new PersonCl('Riyanshu Sharma', 2005);


//===========================================================================================================================================================//

// Creating Objects
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const Jay = Object.create(PersonProto);
console.log(Jay);
Jay.name = 'Jay';
Jay.birthYear = 2004;
Jay.calcAge();

console.log(Jay.__proto__ === PersonProto);

const Anubhav = Object.create(PersonProto);
Akanksha.init('Anubhav', 1979);
Akanksha.calcAge();

const Vijay = Object.create(PersonProto);
Amit.init('Aisha', 1979);
Amit.calcAge();


//===========================================================================================================================================================//

// getter and Setter
const account = {
  owner: 'Jonas',
  movements: [20, 53, 20, 37],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


//===========================================================================================================================================================//

// Coding Challenge 2
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
    
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() { 
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
    
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford); 
*/


//===========================================================================================================================================================//

// Inheritance between Classes
Person = function(firstName, birthYear) {
   
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const Student = function(firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const Akanksha = new Student('Jonas', 1991, 'geography');
Akanksha.introduce();
Akanksha.calcAge();

console.log(Akanksha instanceof Student);
console.log(Akanksha instanceof Person);
console.log(Akanksha instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(Akanksha.__proto__);
console.log(Akanksha.__proto__.__proto__);


//===========================================================================================================================================================//

// Coding Challenge 03
Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const Kanchan = new EV('Kanchan', 144, 15);
Kanchan.chargeBattery(87);
console.log(Kanchan);
Kanchan.brake();
Kanchan.accelerate();



//===========================================================================================================================================================//

// OBJECT.CREATE
Jonas = Object.create(PersonProto);

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I do ${this.Job}`);
};

PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, Job) {
  PersonProto.init.call(this, firstName, birthYear);
  this.Job = Job;
};

const Sourav = Object.create(StudentProto);
Sourav.init('Sourav', 1991, 'Teaching');
Sourav.introduce();
Sourav.calcAge();
