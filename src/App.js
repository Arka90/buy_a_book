// import books from "./data.json";

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Auth from "./components/auth/Auth";
import AllBooks from "./components/all-books/All_Books";
import Checkout from "./components/checkout/Checkout";
import Category from "./components/category/Category";
import BookDetails from "./components/book-details/Book-Details";
import data from "./data.json";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/all_books" element={<AllBooks data={data} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/category/:category" element={<Category data={data} />} />
        <Route path="/book/:id" element={<BookDetails data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
