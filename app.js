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
    read.checked = true;
}
//library array 


let library = [{
    title: 'Lean Gains',
    author: 'Martin Berkhan',
    pages: 200,
    read: true
}];

function render() {
    card.innerHTML = "";

    library.forEach((book, i) => {
        const bookContainer = document.createElement('div');
        bookContainer.className = "inner-book";
        const deleteBtn = document.createElement('button');
        deleteBtn.className = ".delete-btn";
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener('click', () => {
            library.splice(i, 1);

            console.table(library);

            render();
        });



        const readBtn = document.createElement('button');
        readBtn.className = ".read-btn";
        readBtn.innerText = "Update Read Status"

        const title = document.createElement('h1');
        title.innerText = book.title;
        const author = document.createElement('p');
        author.innerText = book.author;
        const pages = document.createElement('p');
        pages.innerText = book.pages;
        const read = document.createElement('p');
        let isRead = "";

        if (book.read === true) {
            isRead = "This book has been read";

        }
        else {
            isRead = "This has not been read";
        }

        read.innerText = isRead;


        readBtn.addEventListener('click', () => {
            if (book.read === true) {
                book.read = false;
            } else {
                book.read = true;
            }
            console.log(book.read);

            render();
        });



        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(read);
        bookContainer.appendChild(readBtn);
        bookContainer.appendChild(deleteBtn);

        card.appendChild(bookContainer);
    });
}

render();

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
})

