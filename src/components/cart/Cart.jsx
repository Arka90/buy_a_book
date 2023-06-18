import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { selectCartCount } from "../../store/cart/cart.selector";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

import "./Cart.css";
function Cart() {
  const Navigate = useNavigate();

  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="cart" onClick={() => Navigate("/checkout")}>
      <AiOutlineShoppingCart className="cart-logo" />
      <div className="total-price">₹ {cartTotal}</div>
      <div className="total-items">{cartCount}</div>
    </div>
  );
}

export default Cart;
