
//=================================================================================================================================================//

// --------------------- Get Element By ID --------------------//

const search = document.getElementById('search-books');
let bookList = document.getElementById('book-list');

console.log(search, bookList);


//=================================================================================================================================================//

// --------------------- Get Element By Class --------------------//

let titles = document.getElementsByClassName('title');
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


//=================================================================================================================================================//

// --------------------- Converting a non-Array to an Array --------------------//

console.log(Array.isArray(titles));
titles = Array.from(titles); // -->> This will covert the titles to an array in no time
console.log(Array.isArray(titles));
// Now converted to an Array


//=================================================================================================================================================//

// --------------------- Querry selector --------------------//

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

var books = document.querySelector('#book-list li .name');
console.log(books);

books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(function(book){
  console.log(book);
});


//=================================================================================================================================================//

// --------------------- Changing text and html content --------------------//

const books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
  book.textContent += ' (Book title)';
});

bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML content</p>';

//=================================================================================================================================================//

// --------------------- Nodes --------------------//

const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

//=================================================================================================================================================//

// --------------------- Traversing the DOM part 1 --------------------//

const bookList = document.querySelector('#book-list');

console.log('book list parent element:', bookList.parentElement);
console.log('book list parent node:', bookList.parentNode);

console.log('all node children:');
Array.from(bookList.childNodes).forEach(function(node){
  console.log(node);
});

console.log('all element children:');
Array.from(bookList.children).forEach(function(node){
  console.log(node);
});

titles = bookList.querySelectorAll('.name');

console.log('Book titles:');
Array.from(titles).forEach(function(title){
  console.log(title.textContent);
});

//=================================================================================================================================================//

// --------------------- Traversing the DOM part 2 --------------------//



//=================================================================================================================================================//

// --------------------- Events --------------------//



//=================================================================================================================================================//

// --------------------- Events bubling --------------------//



//=================================================================================================================================================//

// --------------------- Interacting with Forms --------------------//



//=================================================================================================================================================//

// --------------------- Creating elements --------------------//



//=================================================================================================================================================//

// --------------------- Styles and Classes --------------------//



//=================================================================================================================================================//

// --------------------- Attributes --------------------//



//=================================================================================================================================================//

// --------------------- CheckBoxes and Change events --------------------//



//=================================================================================================================================================//

// --------------------- Custom Search Filter --------------------//



//=================================================================================================================================================//

// --------------------- Tabbed Contents --------------------//



//=================================================================================================================================================//

// --------------------- DOMContentLoader event  --------------------//



//=================================================================================================================================================//

// ---------------------  --------------------//