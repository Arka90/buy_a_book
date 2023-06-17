import "./Home.css";
function Home() {
  return (
    <div className="category-container">
      <div className="category romance">
        <div className="category-text">
          <p className="category-heading">ROMANCE</p>
          <p className="buy-now">Buy Now</p>
        </div>
      </div>
      <div className="category self-help">
        <div className="category-text">
          <p className="category-heading">SELF HELP</p>
          <p className="buy-now">Buy Now</p>
        </div>
      </div>
      <div className="category used">
        <div className="category-text">
          <p className="category-heading">USED</p>
          <p className="buy-now">Buy Now</p>
        </div>
      </div>
      <div className="category investment">
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
