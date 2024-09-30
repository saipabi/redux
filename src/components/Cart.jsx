// src/components/Cart.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, setCartItems } from '../features/cart/cartSlice';
// import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    // Simulate fetching the JSON data
    const productData = {
        "products": [
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "images": [
                    "https://www.istockphoto.com/photo/rose-gold-apple-iphone-6s-with-ios-9-dynamic-wallpaper-gm503742830-82737173?searchscope=image%2Cfilm",
                    "https://i.dummyjson.com/data/products/1/2.jpg",
                    "https://i.dummyjson.com/data/products/1/3.jpg",
                    "https://i.dummyjson.com/data/products/1/4.jpg",
                    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                ]
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/2/1.jpg",
                    "https://i.dummyjson.com/data/products/2/2.jpg",
                    "https://i.dummyjson.com/data/products/2/3.jpg",
                    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                ]
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 1249,
                "discountPercentage": 15.46,
                "rating": 4.09,
                "stock": 36,
                "brand": "Samsung",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/3/1.jpg"
                ]
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 280,
                "discountPercentage": 17.91,
                "rating": 4.3,
                "stock": 123,
                "brand": "OPPO",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/4/1.jpg",
                    "https://i.dummyjson.com/data/products/4/2.jpg",
                    "https://i.dummyjson.com/data/products/4/3.jpg",
                    "https://i.dummyjson.com/data/products/4/4.jpg",
                    "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
                ]
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 499,
                "discountPercentage": 10.58,
                "rating": 4.09,
                "stock": 32,
                "brand": "Huawei",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/5/1.jpg",
                    "https://i.dummyjson.com/data/products/5/2.jpg",
                    "https://i.dummyjson.com/data/products/5/3.jpg"
                ]
            }
        ]
    }
;

    dispatch(setCartItems(productData.products));
  }, [dispatch]);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div>
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} />
            <div className="cart-item-title">{item.title}</div>
            <div className="cart-item-price">${item.price}</div>
            <div className="cart-quantity">
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            </div>
            <div className="cart-item-total">Total: ${item.price * item.quantity}</div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total Quantity: {totalQuantity}</h2>
        <h2>Total Amount: ${totalAmount}</h2>
      </div>
    </div>
  );
};

export default Cart;
