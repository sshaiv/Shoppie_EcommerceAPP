import React from 'react'
import './Navbar.css'
import logo
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
<div className='nav-logo'>
<img src="{logo}" alt="" />
<p>Shopper</p>
</div>
      </div>
    </div>
  )
}

export default Navbar
