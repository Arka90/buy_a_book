import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__logo-text">
          📕📚 BuyABook
        </Link>
      </div>
      <div className="navbar__links">
        <Link to="all_books">All Books</Link>
        <Link to="/auth">LogIn</Link>
        <Cart />
      </div>
    </nav>
  );
}

export default Navbar;
