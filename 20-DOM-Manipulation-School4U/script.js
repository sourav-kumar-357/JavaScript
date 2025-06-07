console.log("hello javascript");

//=================================================================================================================================================//

// --------------------- INTRODUCTION  --------------------//

/*
1. DOM (Document Object Model) ✅
2. Selection of HTML elements ✅
3. How to change or manipulate HTML ✅
4. manipulating CSS ✅
5. Events Listeners (Event ko kaise suna jayega ) ✅

*/


//=================================================================================================================================================//

// --------------------- Select elements from html --------------------//

let headings = document.querySelector("h1");
console.log(headings);

let para = document.querySelector('p');
console.log(para);


//=================================================================================================================================================//

// --------------------- Manipulate HTML elements --------------------//

headings.innerHTML = 'I am Gukesh D from India';
para.innerHTML = 'Jo karna hai yaha parr kro, kamre me kya karna hai ?? Mai v dekhunga na';


//=================================================================================================================================================//

// --------------------- Manipulate CSS --------------------//

let headings1 = document.querySelector('h1');
headings1.style.backgroundColor = 'Green';

// manipulating CSS 
let para1 = document.querySelector('p');
para1.style.backgroundColor = 'brown';


//=================================================================================================================================================//

// --------------------- Events Listners --------------------//

let h1 = document.querySelector('h1');

// For adding even listners we ahve to write down addEventListners
// eventlistners take two parameters 
// addEventListners('event', function() {})

h1.addEventListener('click', () => {
     h1.style.backgroundColor = 'yellow'; // on click it will change the color
     h1.style.color = 'black'; // on click it will change the color
     h1.innerHTML = 'Meri girlFriend bahut he jyada sundar hai ';
})