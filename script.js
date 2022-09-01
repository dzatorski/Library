const books = [
  {
    name: `The Hobbit`,
    author: `J.R.R Tolkien`,
    pages: 310,
    status: `read`,
    cover: `https://images-na.ssl-images-amazon.com/images/I/51uYlDqoIyL._SY344_BO1,204,203,200_QL70_ML2_.jpg`,
  },
];
let title = document.querySelector(`.title-input`);
let pages = document.querySelector(`.pages-input`);
const readBtn = document.querySelector(`.read-button`);
const addBook = document.querySelector(`.add-book-button`);
const bookLibrary = document.querySelector(`.book-pages`);
let authorInp = document.querySelector(`.author-input`);
let coverImg = document.querySelector(`.cover-input`);
let page = document.querySelector(`.page`);
const modal = document.querySelector(`.modal`);
const modalButton = document.querySelector(`.open-modal-btn`);
const closeButton = document.querySelector(`.close`);

modalButton.addEventListener(`click`, () => {
  modal.style.display = `block`;
});
closeButton.addEventListener(`click`, () => {
  modal.style.display = `none`;
});
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
function Book(name, pages, author, status, cover) {
  this.name = name;
  this.pages = pages;
  this.author = author;
  this.status = status;
  this.cover = cover;
  this.read = function () {
    if (status === `read`) {
      status = `not read`;
    }
    status = `read`;
  };
  this.info = function () {
    return `${name} is written by ${author}, it has ${pages} pages in total. You ${status} it.`;
  };
}
const render = () => {
  bookLibrary.innerHTML = ``;
  books.forEach((book) => {
    const htmlTemplate = `
    <div class="page">
    <span class="remove-book">&times;</span>
    <img
      class="book-image"
      src="${book?.cover}"
    />
    <div class="title">Title: ${book.name}</div>
    <div class="author">Author: ${book.author}</div>
    <div class="pages">Pages: ${book.pages}</div>
    <div class="status">Status ${book.status}</div>
    <div class="read"><button class="read-button">Read</button></div>
    </div>
    `;
    bookLibrary.insertAdjacentHTML("afterbegin", htmlTemplate);
  });
};
render();
addBook.addEventListener(`click`, () => {
  let titleName = title.value;
  let pagesNum = pages.value;
  let authorName = authorInp.value;
  let cover = coverImg.value;
  let status = `not read`;

  books.push(new Book(titleName, pagesNum, authorName, status, cover));
  render();
  authorInp.value = ``;
  coverImg.value = ``;
  title.value = ``;
  pages.value = ``;
  modal.style.display = `none`;
});
readBtn.addEventListener(`click`, () => {
  if (readBtn.style.backgroundColor === `red`) {
    readBtn.style.backgroundColor = `green`;
  } else readBtn.style.backgroundColor = `red`;
});
