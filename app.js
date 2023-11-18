const dialog = document.querySelector('dialog');
const showButton = document.querySelector('#toggle-button');
const submit = document.querySelector('#confirmBtn');
const form = document.querySelector('form');
const card = document.querySelector('#book');

//Book information'
const title = document.querySelector("#book-title");
const author = document.querySelector("#book-author");
const pages = document.querySelector("#book-pages");
const read = document.querySelector("#read");


function clear() {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
}
//library array 

let library = [];

function render(){
    card.innerHTML = "";
    
    library.forEach(book => {
        console.log(book.title);
        const title = document.createElement('p');
        title.innerText = book.title;
        const author = document.createElement('p');
        author.innerText = book.author;
        const pages = document.createElement('p');
        pages.innerText = book.pages;
        const read = document.createElement('p');
        let isRead = "";
        book.read == true  ? isRead = "The book has been read" : "The book hasn't been read";
        read.innerText = isRead;

        console.log(isRead);

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
    });
}


//Book constructor

const Book = function (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Open the dialog 
showButton.addEventListener('click', () => {
    dialog.showModal();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
        //instantiate the book constructor using the input values to create an object
        const book = new Book(title.value, author.value, pages.value, read.checked);
        dialog.close();
        clear();

        //add the object to the array
        library.push(book);
        render();

        console.log(book);
        console.table(library);
})
// get values from form 
// submit.addEventListener('click', (e) => {
//     e.preventDefault();
//     const book = new Book(title.value, author.value, pages.value, read.checked);
//     dialog.close();
//     clear();
//     console.log(book);
// });


