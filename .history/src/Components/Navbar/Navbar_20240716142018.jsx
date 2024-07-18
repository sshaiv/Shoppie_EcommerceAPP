import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt="Logo" />
          <p>Shopper</p>
        </div>
        <div className='nav-cart'>
          <img src={cart_icon} alt="Cart" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
