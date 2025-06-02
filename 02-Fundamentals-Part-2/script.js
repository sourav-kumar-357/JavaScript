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