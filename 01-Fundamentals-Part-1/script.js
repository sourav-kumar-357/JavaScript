
/*
let js = 'amazing';
// console.log(40 + 67 - 87);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let Jonas_Matilda = "JM";
let _new = 77;
let name = "Jonas";

// Naming Conventions
let myFisrtJob = "programmer";
let myCurrentJob = "Teacher";

let Job1 = 'programmer';
let Job2 = 'Teacher';

console.log(myCurrentJob);

let Country = "India";
let Continent = "Asia";
let population = "300 M";

console.log("Continent is " + Continent);
console.log("Country is " + Country);
console.log("The population is " + population);
*/

/*
// Datatypes
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 'Jonas');
console.log(typeof 23);

javascriptIsFun = "Yes!"
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/* 
// Coding Challenge of 7
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof language);
*/

/*
// Types of Declaring a variables
let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 2000;

var job = "Programmer";
job = "Teachers";
*/

/*
// Basics Operators
const now = 2037;
const ageJonas = now -1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas*2, ageJonas/10, 2**3);
// 2**3 means that the 2 to the power of 3 which is equal to 2 * 2 * 2

const firstName = "Sourav";
const lastName = "Kumar";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1 = 101
x--;
x--;
console.log(x);

console.log(ageJonas > ageSarah); // >,<,>=,<=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019);
*/

/*
// Operators Precedence 
const now = 2037;
const ageJonas = now -1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(now - 1991 > now - 2019);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah)/2;
console.log(ageJonas, ageSarah, averageAge);
*/


/*
//Coding Challenges Part 01
// Solving by taking data - 01
const marksWeight1 = 78;
const marksHeight1 = 1.69;

const johnWeight1 = 92;
const JohnHeight1 = 1.95;

let markBMI1 = marksWeight1/(marksHeight1 ** 2);
let johnBMI1 = johnWeight1/(JohnHeight1 ** 2);

let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markBMI1, johnBMI1, markHigherBMI1);


// Solving by taking data - 01
const marksWeight2 = 95;
const marksHeight2 = 1.88;

const johnWeight2 = 85;
const JohnHeight2 = 1.76;

let markBMI2 = marksWeight2/(marksHeight2 ** 2);
let johnBMI2 = johnWeight2/(JohnHeight2 ** 2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markBMI2, johnBMI2, markHigherBMI2);
*/

/*
// Strings 
const firstName = "Sourav";
const job = "Teacher";
const birtYear = 2006;
const year = 2025;

const jonas = "I am " + firstName + ", a " + (year - birtYear) + " years old person, with a profession of " + job;
console.log(jonas);

const jonasNew = `I am ${firstName}, a ${year - birtYear} years old ${job}`;
console.log(jonasNew);

console.log(`Just a normal String......`);

console.log('String with \n multiple\n line');
console.log(`This is a
multiple line 
comment`);
*/

/*
// if and else block 
const age = 12;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving License");
} else {
    console.log("sarah can have a driving License after " + (18 - age) + " years");
}


let century;
const birthYear = 1991;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/


/*
//Coding Challenges Part 01
// Solving by taking data - 01
const marksWeight1 = 78;
const marksHeight1 = 1.69;

const johnWeight1 = 92;
const JohnHeight1 = 1.95;

let markBMI1 = marksWeight1/(marksHeight1 ** 2);
let johnBMI1 = johnWeight1/(JohnHeight1 ** 2);

if (johnBMI1 > markBMI1) {
    console.log("John has a higher BMI index (" + johnBMI1 + ") than marks BMI (" + markBMI1 + ")");
} else {
    console.log("Mark has a higher BMI index (" + markBMI1 + ") than Johns BMI (" + johnBMI1 + ")");
}


// Solving by taking data - 01
const marksWeight2 = 95;
const marksHeight2 = 1.88;

const johnWeight2 = 85;
const JohnHeight2 = 1.76;

let markBMI2 = marksWeight2/(marksHeight2 ** 2);
let johnBMI2 = johnWeight2/(JohnHeight2 ** 2);

if (johnBMI2 > markBMI2) {
    console.log("John has a higher BMI index (" + johnBMI2 + ") than marks BMI (" + markBMI2 + ")");
} else {
    console.log("Mark has a higher BMI index (" + markBMI2 + ") than Johns BMI (" + johnBMI2 + ")");
}
*/


/*
// Type conversion 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+ 180);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23), 23);


// Type Coercion
console.log('I am ' + 23 + " years old");
console.log('I am ' + String(23) + " years old");
console.log('20' - '30' + 40);
console.log('20' * '5');

// Guess the Number
let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/*
// 5 falsy values : 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0; // here this zero get converted to False as 0 is a falsy value
if (money) {
    console.log("Don't spend it all ");
} else {
    console.log("You should get a job");
}

// Defining the Height yet Showcasing that it is not defined
let height = 0;
if (height) {
    console.log("YaY! The height is defined");
} else {
    console.log("The height is not defined");
}
*/

/*
// equality Operators
const age = '18';
if (age === 18) {
    console.log("You just became an adult : D(Strict)");
} 

if (age == 18) {
    console.log("You just Became an Adult : D(Loose)");
}

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);


// Difference between == and ===
if (favourite === 23) { // 23 === 23  -> False
    console.log('Cool, 23 is an amazing number!');
} else if (favourite === 7) {
    console.log("7 is also a cool number !");
}  else if (favourite === 9) {
    console.log("7 is also a cool number !");
}  else {
    console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) {
    console.log("Why not 23 ?");
}
*/


/*
// AND Operators 
const hasDriversLicense = true;
const hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

const hasDriversLicense1 = false;
const hasGoodVision1 = false;
console.log(hasDriversLicense1 && hasGoodVision1);
console.log(hasDriversLicense1 || hasGoodVision1);

const hasDriversLicense2 = false;
const hasGoodVision2 = true;
console.log(hasDriversLicense2 && hasGoodVision2);
console.log(hasDriversLicense2 || hasGoodVision2);

const hasDriversLicense3 = true;
const hasGoodVision3 = true;
console.log(hasDriversLicense3 && hasGoodVision3);
console.log(hasDriversLicense3 || hasGoodVision3);
*/



// Coding Challenges 3