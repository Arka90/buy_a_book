import "./Checkout.css";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
        // <CartItem key={cartItem.id} cartItem={cartItem} />
        <h1>{cartItem.name}</h1>
      ))}
      <span className="total">Total: Rs{cartTotal}</span>
    </div>
  );
}

export default Checkout;
