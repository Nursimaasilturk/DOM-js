// var sk = document.querySelector("#book-list li:nth-child(2) .name");
// // #book-list li:nth-child(2) .name gitmek istediğimiz elemana dıştan içe doğru
// // çevreleyen elemenaların id veya class isimlerini yazarız.
// // console.log(sk);
// var books = document.querySelector("#book-list li .name");
// books = document.querySelectorAll("#book-list li .name");
// //console.log(books);
// Array.from(books).forEach(function (book) {
//   //console.log(book.textContent);
//   book.textContent += " (book title)";
// });

// const bookList = document.querySelector("#book-list");
// //console.log(bookList.innerHTML);
// //bookList.innerHTML = "<h3>Nursimanın Kitap Listesi </h3>";
// // sadece alttaki kod yazılırsa book-list elemnetinin sonuna aşağıdaki satırı ekler
// bookList.innerHTML += "<p>Nursimanın Kitap Koleksiyonu</p>";
// const banner = document.querySelector("#page-banner");
// console.log("#page-banner tipii:", banner.nodeType);
// console.log("#page-banner ismi:", banner.nodeName);
// console.log("#page-banner çocuk noda sahip mi:", banner.hasChildNodes());
// const clonedBanner = banner.cloneNode(false);
// console.log(clonedBanner);

// const bookList = document.querySelector("#book-list");
// console.log(bookList.parentNode);
// //console.log(bookList.parentElement);
// console.log(bookList.childNodes);
// console.log(bookList.children);

// const bookList = document.querySelector("#book-list");
// console.log(bookList.nextElementSibling);
// console.log(bookList.previousElement);
// bookList.previousElementSibling.querySelector("p").innerHTML +=
//   "<br/> Burada hayat var";
// var h2 = document.querySelector("#book-list ");
// h2.addEventListener("click", function (e) {
//   console.log(e.target);
//   console.log(e);
// });
// var btns = document.querySelectorAll("#book-list .delete");
// Array.from(btns).forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   });
// });
// const link = document.querySelector("#page-banner a");
// link.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("gidilen", e.target.textContent, "engellendi.");
// });
const list = document.querySelector("#book-list ul");
const forms = document.forms;
//console.log(list);

// deleting books
list.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

const addForm = forms["add-book"];
addForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // add text content
  bookName.textContent = value;
  deleteBtn.textContent = "delete";

  // add classes
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});
// hide Books
const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function (e) {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
});

// filter books
const searchBar = document.forms["search-book"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
  Array.from(books).forEach(function (book) {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});

// tabbed content
const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");

tabs.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach(function (panel) {
      if (panel == targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});
