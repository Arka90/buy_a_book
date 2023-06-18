import "./Checkout.css";
import CartItem from "../cart-item/Cart-item";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  function handelCheckout() {}

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: Rs{cartTotal}</span>

      <button onClick={handelCheckout} className="btn-checkout">
        Checkout
      </button>
    </div>
  );
}

export default Checkout;
