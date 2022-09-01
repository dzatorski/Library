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
const readBtn = document.querySelector(`.read-button-modal`);
const addBook = document.querySelector(`.add-book-button`);
const bookLibrary = document.querySelector(`.book-pages`);
let authorInp = document.querySelector(`.author-input`);
let coverImg = document.querySelector(`.cover-input`);
let page = document.querySelector(`.page`);
const modal = document.querySelector(`.modal`);
const modalButton = document.querySelector(`.open-modal-btn`);
const closeButton = document.querySelector(`.close`);
let removeBook = document.querySelectorAll(`.remove-book`);
const refreshUi = () => {
  authorInp.value = ``;
  coverImg.value = ``;
  title.value = ``;
  pages.value = ``;
  readStat = `not read`;
  readBtn.style.backgroundColor = `red`;
};

//Opening modal
modalButton.addEventListener(`click`, () => {
  modal.style.display = `block`;
  refreshUi();
});
//Closing modal with x button
closeButton.addEventListener(`click`, () => {
  modal.style.display = `none`;
  refreshUi();
});
//Closing modal when clicking outside the modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    refreshUi();
  }
};
//Creating book objects from the input of the user
function Book(name, pages, author, status, cover) {
  this.name = name;
  this.pages = pages;
  this.author = author;
  this.status = status;
  this.cover = cover;
}
//Function that adds eventlisteners to buttons and removes specific book from library
const removeBookFunc = () => {
  removeBook.forEach((book, index) => {
    removeBook[index].addEventListener(`click`, () => {
      console.log(`log`);
      books.splice(index, 1);
      render();
    });
  });
};

const readFunc = () => {
  readBtnAll.forEach((book, index) => {
    readBtnAll[index].addEventListener(`click`, () => {
      if (books[index].status === `not read`) {
        books[index].status = `read`;
      } else books[index].status = `not read`;
      render();
    });
  });
};
//Function responsible for rendering the books in the library and adding functionality to created pages.
const render = () => {
  bookLibrary.innerHTML = ``;

  books.forEach((book, index) => {
    book.index = index;
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
    <div class="status">Status: ${book.status}</div>
    <div class="read"><button class="read-button">Read</button></div>
    </div>
    `;
    bookLibrary.insertAdjacentHTML("beforeend", htmlTemplate);
    removeBook = document.querySelectorAll(`.remove-book`);
    readBtnAll = document.querySelectorAll(`.read-button`);
  });
  removeBookFunc();
  readFunc();
};
render();
let readStat = `not read`;
readBtn.addEventListener(`click`, () => {
  if (readStat === `not read`) {
    readStat = `read`;
    readBtn.style.backgroundColor = `green`;
    console.log(`green`);
    render();
  } else if (readStat === `read`) {
    readStat = `not read`;
    readBtn.style.backgroundColor = `red`;
    console.log(`red`);
    render();
  }
});

addBook.addEventListener(`click`, () => {
  let titleName = title.value;
  let pagesNum = pages.value;
  let authorName = authorInp.value;
  let cover = coverImg.value;
  let status = readStat;

  books.push(new Book(titleName, pagesNum, authorName, status, cover));
  render();
  refreshUi();
  modal.style.display = `none`;
});
