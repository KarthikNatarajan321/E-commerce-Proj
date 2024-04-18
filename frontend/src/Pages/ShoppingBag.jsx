import React, { useState } from 'react';
import './CSS/ShoppingBag.css';
import P3 from '../Pages/images/p3.png';
import P4 from '../Pages/images/p4.png';
import plus from '../Pages/images/plus-square.svg';
import minus from '../Pages/images/dash-square.svg';

const cartItems = [
  {
    id: 1,
    name: "Product 1",
    image: P4,
    price: 19.99,
    quantity: 2
  },
  {
    id: 2,
    name: "Product 2",
    image: P3,
    price: 29.99,
    quantity: 1
  },
  {
    id: 3,
    name: "Product 3",
    image: P4,
    price: 49.99,
    quantity: 8
  }
];

function ShoppingCart() {
  const [items, setItems] = useState(cartItems);
  
  // Calculate totals
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.00; // Flat shipping rate
  const tax = subtotal * 0.06; // Assume a 6% tax rate
  const estimatedTotal = subtotal + shipping + tax;

  const handleIncrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : null
          : item
      ).filter(Boolean)
    );
  };

  return (
    <div className="shopping-bag-container">
      <div className='product-details'>
      <div className="heads">
        <p className='product_head'>Product</p>
        <p className='price_head'>Price</p>
        <p className='total_head'>Total</p>
      </div>
      <div className="cart-container">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <div className='btn-container'>
              <button className="count-btn" onClick={() => handleIncrement(item.id)}>
                <img className='plus-minus-btn' src={plus} alt="plus"/>
              </button>
              <button className="count-btn" onClick={() => handleDecrement(item.id)}>
                <img className='plus-minus-btn' src={minus} alt="minus" />
              </button>
              </div>
            </div>
            <p className="price">${item.price.toFixed(2)}</p>
            <p className="total_price">${(item.price*item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      </div>
      {/* Summary Section */}
      <div className="summary-container">
        <h2 className='summary-head'>Summary</h2>

        <div className="promo-code-section">
            <p>Promo Code:</p>
            <input type="text" placeholder="Enter promo code" />
            <button>Apply</button>
        </div>

        <div className="total-section">
            <p>Subtotal:</p>
            <p>${subtotal.toFixed(2)}</p>
        </div>

        <div className="total-section">
            <p>Shipping:</p>
            <p>$5.00</p>
        </div>

        <div className="total-section">
            <p>Tax:</p>
            <p>${tax.toFixed(2)}</p>
        </div>

        <div className="total-section est-total" style={{ fontWeight: 'bold' }}>
            <p>Estimated Total:</p>
            <p>${estimatedTotal.toFixed(2)}</p>
        </div>

        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
