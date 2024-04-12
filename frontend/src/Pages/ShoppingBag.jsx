import React, {useState} from 'react';
import './CSS/ShoppingBag.css';
import P3 from '../Pages/images/p3.png';
import P4 from '../Pages/images/p4.png';

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
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <button
                className="count-btn"
                onClick={() => handleIncrement(item.id)}
              >
                +
              </button>
              <button
                className="count-btn"
                onClick={() => handleDecrement(item.id)}
              >
                -
              </button>
              <p className="price">Price: ${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
