import React from 'react'
import './Footer.css'
import footer_logo from '../'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      
      </div>
    </div>
  )
}

export default Footer
