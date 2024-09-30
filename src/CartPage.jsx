import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './cartSlice';
import './CartPage.css'; // Importing the CSS

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increaseQuantity = (item) => {
    dispatch(addToCart(item));
  };

  const decreaseQuantity = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cart.items.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.thumbnail} alt={item.title} className="thumbnail" />
            <div className="item-details">
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)} className="quantity-btn">
                  -
                </button>
                <button onClick={() => increaseQuantity(item)} className="quantity-btn">
                  +
                </button>
              </div>
              <p className="total-price">Total: ${item.totalPrice.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total Quantity: {cart.totalQuantity}</h2>
        <h2>Total Amount: ${cart.totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CartPage;
