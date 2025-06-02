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