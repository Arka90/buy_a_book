import { useState } from "react";
import "./Filter.css";
import { AiOutlineSearch } from "react-icons/ai";
function Filter({ category, onCategoryChange, onSearchChange }) {
  const [search, setSearch] = useState("");

  return (
    <div className="search__filter">
      <select value={category} onChange={(e) => onCategoryChange(e)}>
        <option value="all">All</option>
        <option value="love">Romance</option>
        <option value="self-help">Self-Help</option>
        <option value="financial">Investment</option>
        <option value="used-books">Used</option>
        <option value="available">Available</option>
      </select>

      <div className="search-box-container">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="search-box"
          placeholder="Search..."
        />
        <button className="search-btn" onClick={() => onSearchChange(search)}>
          <AiOutlineSearch className="search-icon" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
