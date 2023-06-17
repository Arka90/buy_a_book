import "./Book.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Book({ book }) {
  return (
    <li className="book">
      <div className="book__img">
        <img src={book.img} alt={book.name} />
      </div>
      <div className="book__name">
        <p>{book.name}</p>
      </div>
      <div className="book__price">
        <p>₹ {book.price}</p>
      </div>
      <button className="btn">
        <AiOutlineShoppingCart className="btn-logo" /> Buy Now
      </button>
    </li>
  );
}

export default Book;
