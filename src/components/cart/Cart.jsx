import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
function Cart() {
  const Navigate = useNavigate();

  return (
    <div className="cart" onClick={() => Navigate("/checkout")}>
      <AiOutlineShoppingCart className="cart-logo" />
      <div className="total-price">₹ 500</div>
      <div className="total-items">5</div>
    </div>
  );
}

export default Cart;
