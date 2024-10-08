import React from 'react';

function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;
