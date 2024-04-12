import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt=""/>
      </div>
      <div className='footer-links'>
        <li>Facebook</li>
        <li>Whatsapp</li>
        <li>Youtube</li>
      </div>
      <div className='footer-copyright'>
       <hr />
       <p>Privacy Policy / Terms Of Use</p>    
    </div>  
    </div>
  )
}

export default Footer
