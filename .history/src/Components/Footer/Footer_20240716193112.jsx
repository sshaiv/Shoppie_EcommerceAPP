import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/footer_logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default Footer
