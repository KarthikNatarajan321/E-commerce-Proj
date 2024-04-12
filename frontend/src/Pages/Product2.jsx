import React from 'react';
import './CSS/Product2.css';
import P1 from '../Pages/images/p1.png';
import P2 from '../Pages/images/p2.png';
import P3 from '../Pages/images/p3.png';
import P4 from '../Pages/images/p4.png';
import Prod from '../Pages/images/product.png';
import { Link } from 'react-router-dom';

const Product1 = () => {
  const handleSimilarProductClick = (productName) => {
    // Your logic for handling the click event goes here
    console.log(`Clicked on ${productName}`);
  };

  return (
    <div className='product-container'>
      <div className='group-parent'>
        <div className='group'>
          <div className='parent'>
            <img className="P1" src={P1} alt=""/>
            <img className="P2" src={P2} alt=""/>
            <img className="P3" src={P3} alt=""/>
            <img className="P4" src={P4} alt=""/>
            <img className="Prod" src={Prod} alt=""/>
          </div>
        </div>
        <div className='productdisplay-right'>
          <h1>Green T-Shirt</h1>
          <div className='productdisplay-right-prices'>
            <div className='productdisplay-right-price-old'>₹800</div>
            <div className='productdisplay-right-price-new'>₹750</div>
          </div>
          <div className='productdisplay-right-discription'>
            A superb classy t-shirt with a cool image.
          </div>
          <div className='productdisplay-right-size'>
            <h1>Select Size</h1>
            <div className='productdisplay-right-sizes'>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button>Add To Cart</button>
        </div>
      </div>
      <div className="similar-products">
        <h2>Similar Products</h2>
        <div className="similar-products-row">
          <div className="similar-product" onClick={() => handleSimilarProductClick('Red T-Shirt')}>
          <Link to="/product">
            <img src={P1} alt=""/>
          </Link>    
            <p>Blue T-Shirt</p>
            <p>₹700</p>
          </div>
          <div className="similar-product" onClick={() => handleSimilarProductClick('Green T-Shirt')}>
          <Link to="/product1">  
            <img src={P2} alt=""/>
          </Link>  
            <p>Red T-Shirt</p>
            <p>₹800</p>
          </div>
          <div className="similar-product" onClick={() => handleSimilarProductClick('Yellow T-Shirt')}>
          <Link to="/product3">
            <img src={P3} alt=""/>
          </Link>  
            <p>Yellow T-Shirt</p>
            <p>₹850</p>
          </div>
          <div className="similar-product" onClick={() => handleSimilarProductClick('Black T-Shirt')}>
          <Link to="/product4">
            <img src={P4} alt=""/>
          </Link> 
            <p>Black T-Shirt</p>
            <p>₹950</p>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Product1;
