import { useEffect, useState } from "react";


function BooksAPI() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);


  useEffect(() => {
    if (searchQuery.length < 2) {
      setBooks([]);
      setShowDropdown(false);
      returns;
    }

    setSearchLoading(true);
    setShowDropdown(true);

    const timer = setTimeout(() => {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      )
        .then((res) => res.json())
        .then((data) => {
          setBooks(data.items || []);
        })
        .catch((err) => console.error(err))
        .finally(() => setSearchLoading(false));
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setSearchQuery(book.volumeInfo.title);
    setShowDropdown(false);

  };

  return (
    <div style={{ width: "400px", margin: "40px auto" }}>

      <input
        type="text"
        placeholder="Search for a book..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: "100%", padding: "10px" }}
      />
      <p>{books.length}</p>


      {showDropdown && (
        <div style={{ border: "1px solid #ccc", marginTop: "5px", position: "absolute", background: "#fff", width: "50%", zIndex: 1000 }}>
          {searchLoading ? (
            <p>Searching...</p>
          ) : (
            books.map((book) => (
              <div
                key={book.id}
                onClick={() => handleBookSelect(book)}
                style={{ padding: "10px", cursor: "pointer" }}
              >
                {book.volumeInfo.title}
              </div>
            ))
          )}
        </div>
      )}


      {selectedBook && (
        <div style={{ marginTop: "20px" }}>
          <h2>{selectedBook.volumeInfo.title}</h2>
          <p>{selectedBook.volumeInfo.authors?.join(", ")}</p>
          <p>{selectedBook.volumeInfo.description}</p>
          {selectedBook.volumeInfo.imageLinks?.thumbnail && (
            <img
              src={selectedBook.volumeInfo.imageLinks.thumbnail}
              alt="book"
            />
          )}
        </div>
      )}


    </div>
  );
}

export default BooksAPI;