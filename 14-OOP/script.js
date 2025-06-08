'use strict';

//===========================================================================================================================================================//

// --------------------- CONSTRUCTOR FUNCTION AND NEW OPERATOR --------------------//

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