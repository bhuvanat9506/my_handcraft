import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<CollectionPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}
