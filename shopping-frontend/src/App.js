import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>Shopping App</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
