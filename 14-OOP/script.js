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
