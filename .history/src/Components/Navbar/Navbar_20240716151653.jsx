import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
const [menu,setMenu]=useState("shop");

  return (
    <div>
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt="Logo" />
          <p>Shopper</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop </Link>{menu==="shop"? <hr/> :<></>}   </li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}  to='/mens'>Mens</Link> {menu==="shop"? <hr/> :<></>} </li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}  to='/womens'>Womens </Link> {menu==="shop"? <hr/> :<></>} </li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link> {menu==="shop"? <hr/> :<></>} </li>
        </ul>

        <div className="nav-login-cart">
          <Link to='/login'>  <button>Login</button></Link>
       <Link to='/cart'>   <img src={cart_icon} alt="" /></Link>  
      <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
