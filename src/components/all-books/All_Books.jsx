import "./All_Books.css";
import Book from "../book/Book";
function AllBooks({ data }) {
  return (
    <div className="all-book-container">
      <ul className="all-book-list">
        {data.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}

export default AllBooks;
