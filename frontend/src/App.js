import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Help from './Pages/Help';
import ContactUs from './Pages/ContactUs';
import ShoppingBag from './Pages/ShoppingBag';
import Home from './Pages/Home';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Product from './Pages/Product';
import Product1 from './Pages/Product1';
import Product2 from './Pages/Product2';
import Product3 from './Pages/Product3';
import Product4 from './Pages/Product4';
function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/shoppingbag" element={<ShoppingBag />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product1" element={<Product1 />} />
            <Route path="/product2" element={<Product2 />} />
            <Route path="/product3" element={<Product3 />} />
            <Route path="/product4" element={<Product4 />} />
          </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
