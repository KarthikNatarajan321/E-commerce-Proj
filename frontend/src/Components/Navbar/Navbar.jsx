import React, { useState } from 'react'
import'./Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {


  const [menu,setMenu] = useState("login");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <Link to='/'><img src={logo} alt="" onClick={() => setMenu("home")}/></Link>  
    </div>
      <ul className='nav-menu'>
      <li onClick={()=>{setMenu("login")}}>
    <Link style={{textDecoration:'none', color: menu === "login" ? 'white' : 'white'}} to='/login'>Login</Link>
  </li>
  <li onClick={()=>{setMenu("help")}}>
    <Link style={{textDecoration:'none', color: menu === "help" ? 'white' : 'white'}} to='/help'>Help</Link>
  </li>
  <li onClick={()=>{setMenu("contactus")}}>
    <Link style={{textDecoration:'none', color: menu === "contactus" ? 'white' : 'white'}} to='/contactus'>Contact Us</Link>
  </li>
  <li onClick={()=>{setMenu("shoppingbag")}}>
    <Link style={{textDecoration:'none', color: menu === "shoppingbag" ? 'white' : 'white'}} to='/shoppingbag'>Shopping Bag(0)</Link>
  </li>
  </ul> 
    </div>
  )
}

export default Navbar
