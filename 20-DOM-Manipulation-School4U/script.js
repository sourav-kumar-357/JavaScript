console.log("hello javascript");

//=================================================================================================================================================//

// --------------------- INTRODUCTION  --------------------//

/*
There are 4 phases of DOM manipulation

1. DOM (Document Object Model) ✅
2. Selection of HTML elements ✅
3. How to change or manipulate HTML ✅
4. manipulating CSS
4. Events Listeners (Event ko kaise suna jayega )
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