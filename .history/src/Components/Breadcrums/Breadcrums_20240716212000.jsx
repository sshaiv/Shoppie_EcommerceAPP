import React from 'react'
import './Breadcrum.css'
import arror_icon from '../Assets/arrow_icon.png'

const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='breadcrums'>
      HOME <img src={arror_icon} alt="" />SHOP <img src={a} alt="" />
    </div>
  )
}

export default Breadcrums
