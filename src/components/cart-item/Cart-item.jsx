import "./Cart-item.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  removeItemFromCart,
  incQuantity,
  decQuantity,
} from "../../store/cart/cart.action";

function CartItem({ cartItem }) {
  const { name, img, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handelDelete = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const handelIncrease = () => {
    dispatch(incQuantity(cartItems, cartItem));
  };

  const handelDecrease = () => {
    dispatch(decQuantity(cartItems, cartItem));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={img} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={handelDecrease}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handelIncrease}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={handelDelete}>
        &#10005;
      </div>
    </div>
  );
}

export default CartItem;
