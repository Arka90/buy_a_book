import "./All_Books.css";
import Book from "../book/Book";
import Filter from "../filter/Filter";
import { useState } from "react";
function AllBooks({ data }) {
  const [category, setCategory] = useState("all");
  // const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  function handelCategoryChange(e) {
    setCategory(e.target.value);

    if (e.target.value === "all") {
      setFilteredData(data);
      return;
    }

    if (e.target.value === "available") {
      const byStock = data.filter((book) => book.stocks > 0);

      setFilteredData(byStock);
      return;
    } else {
      const byCategory = data.filter(
        (book) => e.target.value === book.category
      );

      setFilteredData(byCategory);
    }
  }

  function handelSearchChange(search) {
    const searchRes = filteredData.filter((book) => book.name.includes(search));

    setFilteredData(searchRes);
  }

  return (
    <div className="all-book-container">
      <Filter
        category={category}
        onCategoryChange={handelCategoryChange}
        onSearchChange={handelSearchChange}
      />
      <ul className="all-book-list">
        {filteredData.length <= 0 ? (
          <div className="error-in-search">
            Sorry We don't have That Currenly
          </div>
        ) : (
          filteredData.map((book) => <Book key={book.id} book={book} />)
        )}
      </ul>
    </div>
  );
}

export default AllBooks;
