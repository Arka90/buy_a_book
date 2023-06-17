// import books from "./data.json";

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Auth from "./components/auth/Auth";
import AllBooks from "./components/all-books/All_Books";
import Checkout from "./components/checkout/Checkout";
import data from "./data.json";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/all_books" element={<AllBooks data={data} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
