'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}
if (hasDriversLicense) {
    console.log("I can drive");
}

// const interface = 'Audio';
// const private = 534;
*/


/*
// Functions
function logger() {
    console.log('My name is Jonas');
}
// calling invoking or running a function
logger();
logger();
logger();

// Second Functions
function fruitProcessors(apples, oranges ) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessors(5, 0));

const appleOrangeJuice = fruitProcessors(2, 4);
console.log(appleOrangeJuice);
*/


/*
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

console.log(calcAge1(1991));

const calAge2 = function (birthYear) {
    return 2025 - birthYear;
}

console.log(calAge2(2006));
*/

/*
// Arrow Function
const calAge2 = function (birthYear) {
    return 2025 - birthYear;
}

// Arrow Function
const calAge3 = birthYear => 2025 - birthYear;
console.log(calAge2(2006), calAge3(2006));

const yearsUntilRetirements = (birthYear, name) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${name} retires in ${retirement} years`;
}

console.log(yearsUntilRetirements(2006, "Jonas"));
console.log(yearsUntilRetirements(2000, "Bob"));
*/


/*
// Function calls Functions

function cutFruitPices (fruit) {
    return fruit * 4;
}
function fruitProcessors(apples, oranges ) {
    const applePices = cutFruitPices(apples);
    const orangePices = cutFruitPices(oranges);

    const juice = `Juice with ${applePices} piese of apples and ${orangePices} piece of oranges`;
    return juice;
}

console.log(fruitProcessors(2, 3));
*/


/*
//Function calling Function
const calAge = function (birthYear) {
    return 2025 - birthYear;
}
const yearsUntilRetirements = function (birthYear, name) {
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${name} retires in ${retirement} years! `);
        return retirement;
    } else {
        console.log(`${name} has already retired !`);
        return -1;
    }

    // return `${name} retires in ${retirement} years`;
}

console.log(yearsUntilRetirements(1991, 'Jonas'));
console.log(yearsUntilRetirements(1920, 'Sourav'));
*/


/*
// Coding Challenge 01
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let scoreDolphins = calcAverage(0, 0, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);


// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/


/*
// Arrays 
const friend1 = 'Adii';
const friend2 = 'Sourav';
const friend3 = 'Vikas';

const friends = ['Riya', 'Priya', 'suman'];
console.log(friends);

const years = new Array(1996, 2001, 2005);
console.log(years);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Asif';
console.log(friends)

const firstName = 'Mukund';
const Anshu = [firstName, 'Kumar', 2025-2005, 'Student', friends ];
console.log(Anshu.length);
console.log(Anshu);


// Exercise
const calcAge = function (birthYear) {
    return 2025-birthYear;
}

const year = [1900, 1996, 2000, 2005, 2010] ;

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);
const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(age);
*/


/*
// Basics Arrays operators

// Add new elements 
const friends = ['Riya', 'Priya', 'suman'];
const newLength = friends.push('Jaya');
console.log(friends);
console.log(newLength);

friends.unshift('Ansh');
console.log(friends);

// Remove elements
friends.pop(); //last
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

friends.push(23);
console.log(friends.includes('Ansh'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
friends.push('Gadha');
console.log(friends.includes('Gadha'));

if (friends.includes('Priya')) {
    console.log('You have a friend called Priya');
}
*/


/*
// Coding Challenge #2
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/



/*
// OBJECTS
//DOT vs BRACKET NOTATION


// OBJECTS

//This is a normal array
const Anshu = [
    'Anshu',
    'Sharma',
    2025-2006,
    'Student',
    ['Vasu', 'Farhan', 'Asif']
]
console.log(Anshu);

// This is a Function
const Sourav = {
    firstName: 'Sourav',
    lastName: 'Kumar',
    age: 2025-2006,
    profession: 'Student',
    friends: ['Vasu', 'Farhan', 'Asif']
};
console.log(Sourav);
*/



/*
// Dot vs bracket Notations

// This is a Function
const Sourav = {
    firstName: 'Sourav',
    lastName: 'Kumar',
    age: 2025-2006,
    profession: 'Student',
    friends: ['Vasu', 'Farhan', 'Asif']
};
console.log(Sourav);

// This is the dot notation
console.log(Sourav.firstName);

// This is the Bracket notation
console.log(Sourav['lastName']);

// Complete use of Bracket notation
const nameKey = 'Name';
console.log(Sourav['first' + nameKey]);
console.log(Sourav['last' + nameKey]);

//console.log(Sourav.('last' + nameKey)) --> Wrong way

const intrestedIn = prompt('What do you want to know about Sourav ? Choose between firstname, lastname, age, job, and friends');

if (Sourav[intrestedIn]) {
    console.log(Sourav[intrestedIn]);
} else {
    console.log("Wrong request choose between firstname, lastname, age, job, and friends");
}

// using both the notations
Sourav.location = 'India';
Sourav['State'] = 'Jharkhand';
console.log(Sourav);
*/


/*
// Challenges 
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

john.calcBMI();
mark.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/


/*
// Iteration
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');


// for loop keeps running while condition is true
for(let rep = 1; rep <=30; rep++) {
    console.log(`Lifting wights repetition ${rep}`);
}

*/

/*
//LOOPING, ARRAYS, BREAKING CONDITION
const Anshu = [
    'Anshu',
    'Sharma',
    2025-2005,
    'Student',
    ['Aditya', 'Indu', 'Riyanshu']
];
const types = [];

// console.log(Anshu[0])
// console.log(Anshu[1])
// ...
// console.log(Anshu[4])
// jonas[5] does NOT exist

for (let i = 0; i <Anshu.length; i++) {

  // Reading from Anshu array
  console.log(Anshu[i], typeof Anshu[i]);

  // Filling types array
  // types[i] = typeof Anshu[i];
  types.push(typeof Anshu[i]);
}
console.log(types);

// another example
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}
console.log(ages);
*/


/*
//LOOPING BACKWARDS
  const Anshu = [
    'Anshu',
    'Sharma',
    2025-2005,
    'Student',
    ['Aditya', 'Indu', 'Riyanshu']
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = Anshu.length - 1; i >= 0; i--) {
  console.log(i, Anshu[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
*/


/*
// WHILE LOOP
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) { 
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/

/*
// CODING CHALLENGE #4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/




/*
<<<-------------------------[ Completed ]----------------------------->>>
*/