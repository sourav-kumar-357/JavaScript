
//=================================================================================================================================================//

// --------------------- Get Element By ID --------------------//

const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList);


//=================================================================================================================================================//

// --------------------- Get Element By Class --------------------//

const titles = document.getElementsByClassName('title');
console.log(titles);
console.log(titles[0]);
console.log(titles[1]);


//=================================================================================================================================================//

// --------------------- Get Element By Tag name --------------------//

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
console.log(lis[1]);
console.log(lis[2]);
console.log(lis[3]);

// For loop to access all the elements
console.log('\nFor loop to access all the elements ');
for (let index = 0; index < lis.length; index++) {
     const element = lis[index];
     console.log(element);
}

