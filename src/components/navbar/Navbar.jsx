import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <p className="navbar__logo-text">📕📚 BuyABook</p>
      </div>
      <div className="navbar__links">
        <a href="www">All Books</a>
        <a href="www">LogIn</a>
        <div className="cart">
          <AiOutlineShoppingCart className="cart-logo" />
          <div className="total-price">Rs. 500</div>
          <div className="total-items">5</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
