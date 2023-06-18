import { useParams } from "react-router-dom";
import "./Book-Details.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  incQuantity,
  decQuantity,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

function BookDetails({ data }) {
  const { id } = useParams();

  const book = data.find((el) => el.id === id);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isPresent = cartItems.find((el) => el.id === book.id);

  return (
    <div className="book-details-container">
      <div className="action-container">
        <div className="book-img">
          <img src={book.img} alt={book.name} />
        </div>
        <div className="book-actions">
          <h3 className="book-title">{book.name}</h3>
          <div className="inc_dec">
            <AiFillCaretLeft
              className="controlls"
              onClick={() => dispatch(decQuantity(cartItems, book))}
            />
            <span className="oncart">{isPresent ? isPresent.quantity : 0}</span>
            <AiFillCaretRight
              className="controlls"
              onClick={() => dispatch(incQuantity(cartItems, book))}
            />
          </div>
          <div className="book-btn">
            {isPresent ? (
              <button
                className="btn-remove"
                onClick={() => dispatch(removeItemFromCart(cartItems, book))}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="btn-buy-now"
                onClick={() => dispatch(addItemToCart(cartItems, book))}
              >
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="description-container">
        <p className="description">{book.description}</p>
      </div>
    </div>
  );
}

export default BookDetails;
