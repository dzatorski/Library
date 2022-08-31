const books = [];
let title = document.querySelector(`.title-input`);
let pages = document.querySelector(`.pages-input`);
const readStatus = document.querySelector(`.read`);
const addBook = document.querySelector(`.addBook`);
const bookLibrary = document.querySelector(`.book-pages`);
let authorInp = document.querySelector(`.author-input`);
let coverImg = document.querySelector(`.cover-input`);

function Book(name, pages, author, status, cover) {
  this.name = name;
  this.pages = pages;
  this.author = author;
  this.status = status;
  this.cover = cover;
  this.info = function () {
    return `${name} is written by ${author}, it has ${pages} pages in total. You ${status} it.`;
  };
}
const render = () => {
  books.forEach((book) => {
    const htmlTemplate = `
    <div class="page">
    <img
      class="book-image"
      src="${book.cover}"
    />
    <div class="title">Title: ${book.name}</div>
    <div class="author">Author: ${book.author}</div>
    <div class="pages">Pages: ${book.pages}</div>
    <div class="read"><button class="read-button">Read</button></div>
    </div>
    `;
    bookLibrary.insertAdjacentHTML("beforeend", htmlTemplate);
  });
};

const theHobbit = new Book(`The Hobbit`, 310, `J.R.R. Tolkien`, `read`);

console.log(theHobbit.info());

addBook.addEventListener(`click`, () => {
  let titleName = title.value;
  let pagesNum = pages.value;
  let authorName = authorInp.value;
  let cover = coverImg.value;
  books.push(new Book(titleName, pagesNum, authorName, `read`, cover));
  console.log(books);
  render();
});
