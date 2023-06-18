import { useParams } from "react-router-dom";
import Book from "../book/Book";
function Category({ data }) {
  const { category } = useParams();

  const filteredData = data.filter((book) => book.category === category);

  return (
    <div>
      <ul className="all-book-list">
        {filteredData.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </ul>
    </div>
  );
}

export default Category;
