// script.js
const books = [
  { title: "Analyse 1", category: "Analyse" },
  { title: "Algèbre linéaire", category: "Algèbre" },
  { title: "Théorie des nombres", category: "Théorie" },
  { title: "Géométrie différentielle", category: "Géométrie" },
  { title: "Probabilités et statistiques", category: "Statistiques" },
];

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");

function displayBooks(filteredBooks) {
  bookList.innerHTML = "";
  filteredBooks.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} (${book.category})`;
    bookList.appendChild(li);
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.category.toLowerCase().includes(searchTerm),
  );
  displayBooks(filteredBooks);
});

// Afficher tous les livres au chargement
displayBooks(books);
