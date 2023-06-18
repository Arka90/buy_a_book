import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="category-container">
      <div
        className="category romance"
        onClick={() => navigate("/category/love")}
      >
        <div className="category-text">
          <p className="category-heading">ROMANCE</p>
          <p className="buy-now">Buy Now</p>
        </div>
      </div>
      <div
        className="category self-help"
        onClick={() => navigate("/category/self-help")}
      >
        <div className="category-text">
          <p className="category-heading">SELF HELP</p>
          <p className="buy-now">Buy Now</p>
        </div>
      </div>
      <div
        className="category used"
        onClick={() => navigate("/category/used-books")}
      >
        <div className="category-text">
          <p className="category-heading">USED</p>
          <p className="buy-now">Buy Now</p>
        </div>
      </div>
      <div
        className="category investment"
        onClick={() => navigate("/category/financial")}
      >
        <div className="category-text">
          <p className="category-heading">INVESTMENT</p>
          <p className="buy-now">Buy Now</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

// https://static.vecteezy.com/system/resources/thumbnails/009/740/424/original/red-love-heart-element-particle-flowing-on-pink-background-romantic-cg-abstract-glitter-for-valentine-and-wedding-free-video.jpg
