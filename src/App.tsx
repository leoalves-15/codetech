import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/fonts/Inter-3.19/InterWeb/inter.css";
import Home from "./pages/Home";
import CartPage from "./pages/Cart";
import MenuPage from "./pages/Menu";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Cart" element={<CartPage />}/>
          <Route path="/Menu" element={<MenuPage />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
