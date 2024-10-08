import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 20 },
];

function ProductList({ onAddToCart }) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
