import "./Book.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

// import { selectProductsArray } from "../../store/products/product.selector";

function Book({ book }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  return (
    <li className="book">
      <div className="book__img" onClick={() => navigate(`/book/${book.id}`)}>
        <img src={book.img} alt={book.name} />
      </div>
      <div className="book__name">
        <p>{book.name}</p>
      </div>
      <div className="book__price">
        <p>₹ {book.price}</p>
      </div>

      {cartItems.filter((item) => item.id === book.id).length > 0 ? (
        <button className="btn-gotocart" onClick={() => navigate("/checkout")}>
          Go to Cart
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => dispatch(addItemToCart(cartItems, book))}
        >
          <AiOutlineShoppingCart className="btn-logo" /> Buy Now
        </button>
      )}
    </li>
  );
}

export default Book;
