import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) => 
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      ));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const addToWishlist = (product) => {
    if (!wishlistItems.find((x) => x.id === product.id)) {
      setWishlistItems([...wishlistItems, product]);
    } else {
      setWishlistItems(wishlistItems.filter((x) => x.id !== product.id));
    }
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} wishlistCount={wishlistItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} addToWishlist={addToWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;