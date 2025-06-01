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
