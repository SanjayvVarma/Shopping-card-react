
import React, { useState } from 'react';
import ProductList from '../components/productList';
import Cart from '../components/cart';
import './style.css';

const Products = [
  { id: 1, name: 'Apple', price: 100 },
  { id: 2, name: 'Redmi', price: 200 },
  { id: 3, name: 'Lenovo', price: 300 },
  { id: 4, name: 'vivo v5', price: 400 },
  { id: 5, name: 'onePlus', price: 500 },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item

      ));
    } else {
      setCart([...cart, { product: product, quantity: 1 }]);
    }
  };

  const removeFromCart = product => {
    const updatedCart = cart.map(item =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  return (
    <div className="shopping-cart-container">
      <div className="product-list-container">
        <ProductList products={Products} addToCart={addToCart}  removeFromCart={removeFromCart} cart={cart}/>
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default ShoppingCart;

