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
          </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
