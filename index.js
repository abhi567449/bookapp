const list_api_url = "https://books-backend.p.goit.global/books/category-list";

const list = [];
function fetchList() {
  list.push(fetch(list_api_url).then((response) => response.json()));
}
fetchList();
const container = document.querySelector(".main");
const navList = document.querySelector(".nav-filter");

const ul = document.createElement("ul");

const booksDiv = document.querySelector(".books");

const books = [];
fetchBooksByApi();
let initial_display_Count = 3;
function fetchBooksByApi() {
  let books_api_url = "https://books-backend.p.goit.global/books/top-books";
  books.push(fetch(books_api_url).then((response) => response.json()));

  render()
  function render()
  {
    Promise.all(books).then((items) => {
      items.forEach((val) => {
        val.forEach((vals) => {
          const bookDiv = document.createElement("div");
  
          bookDiv.classList.add('book-div')
  
          const listPtag = document.createElement("p");
          
          let expand = false
          
          let display = expand?val.lenght:initial_display_Count
          listPtag.style.fontSize = "15px";
          listPtag.innerText = vals.list_name;
          
          booksDiv.appendChild(listPtag);
          vals.books.slice(0,display).forEach(book =>
          {
            const imgDiv = document.createElement("div");
            const imgtag = document.createElement("img");
            imgtag.classList.add('book-image')
            imgtag.src = book.book_image;
            imgDiv.appendChild(imgtag)
            bookDiv.appendChild(imgDiv);
          }
          )
          
          
          booksDiv.appendChild(bookDiv);
  
          const seeMore_button = document.createElement("button");
          seeMore_button.innerText = 'See More'
          seeMore_button.addEventListener('click', ()=>
          {
            expand = true;
            render()
          })
          booksDiv.appendChild(seeMore_button);
  
        });
      });
    });
  
    const bookDiv = document.createElement("div");
    const listPtag = document.createElement("p");
  }
  }
  

Promise.all(list).then((items) => {
  const li = document.createElement("li");
  li.innerText = "All Categories";
  ul.appendChild(li);

  items.forEach((val) => {
    val.forEach((vals) => {
      const li = document.createElement("li");
      li.innerText = vals.list_name;
      ul.appendChild(li);
    });
  });
});

navList.appendChild(ul);
