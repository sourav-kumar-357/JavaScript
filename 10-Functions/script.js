'use strict';

const bookings = [];

const createBoking = function(flightNum,
    numPassenger = 1 , price = 199){
        //ES5
        //numPassengers = numPassenger || 1;
        // price = price || 199;

    const bookings = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);

};

createBooking|('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);


createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const adii = {
    namme: 'Adii Roy',
    passport: 24739479284
}

const checkIn = function( flightNum, passenger) {
flightNum = 'LH999';
passenger.name = 'Mr', + passenger.name;
if(passeneger.passport === 24739479284) {
    alert('Checked in')
} else {
    alert('Wrong passport!')
}
};
checkIn(flight, adii);
console.log(flight);
console.log(adii);

//Is the same as doing

const flightNum = flight ;
const passenger = adii;



const newPassport = function(person) {
    person.passport = Math.trunc(Math.random()* 1000000000);
}; 

newPassport(adii);
checkIn(flight.adii);

const oneword = function(str) {
    return str.replace( /  /g, '').toLowerCase();
};


//Higher- order function

const transformer = function(str, fn) {
    console.log('Original string: ${str}');
    console.log('Transformed strings: ${fn(str)}');

    console.log('Transformed by: ${fn.name}');
};
    
transformer('JavaScript is the best!', upperFirstWord)
;
transformer('Javascript is the best!', oneword);



// JS uses callbacks all the time

const high5 = function() {
    console.log() ;

}

document.body.addEventListener('click', high5);


/// important lecture /part of js



const greet = function(greeting) {
    return function(name){
        console.log('${greeting} ${name}');
    }
}



const greeterHey = greet('Hey');
greeterHey('adii');
greeterHey('shanaya');

greet('Hello')('adii');


//challenge
const greetArr = greeting => name => console.log('${greeting}. ${name}');

greetArr('Hi')('adii');


// THE CALL AND APPLY METHODS 

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'adii roy');
lufthansa.book(635, 'shanaya');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Doesn't work
// book(23, 'adii roy');

book.call(eurowings, 23, 'adii roy');
console.log(eurowings);

book.call(lufthansa, 23, 'shanaya');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(shyt, 583, 'cutu Cooper');
console.log(shyt);

// Apply method

const flightData = [583, 'adii Cooper'];
book.apply(shyt, flightData);
console.log(shyt);

book.call(shyt, ...flightData);




// The bind method

// book.call(eurowings, 23,'shanaya');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(shyt);

bookEW(23, 'fineshyt');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('adii roy');
bookEW23('cutu');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));



              //****   CHALLENGE-1 ****//

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section smile emoji
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 7]

// Immediately invoked function expression(IIFE)

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE

(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);



   //**** Closures ****//

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);



                      //*****  More Examples of Closures  *****//

                              //***** Example - 1 *****//

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);


const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
boardPassengers(180, 3); 

//**** Challenge - 2 ****//
(function (){
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click',function(){
    header.style.color = 'blue';
  });
});