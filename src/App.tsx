import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "./assets/fonts/Inter-3.19/InterWeb/inter.css";
import Home from './pages/Home';
import CartPage from './pages/Cart';
import MenuPage from './pages/Menu';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Home />}> </Route>
             <Route path="/Cart" element={<CartPage />}> </Route>
            <Route path="/Menu" element={<MenuPage />}> </Route> 
          </Routes>
      </Router>
    </div>
  );
}

export default App;