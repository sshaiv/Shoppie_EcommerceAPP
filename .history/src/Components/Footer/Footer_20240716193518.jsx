import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/footer_logo.png'
import insta_logo from '../Assets/insta_logo.png'
import whatsapp_logo from '../Assets/whatsapp_logo.png'
import pinterest_logo 



const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
