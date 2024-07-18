import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/arrow_icon.png';

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className='breadcrums'>
      HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /> {product.name}
    </div>
  );
}

export default Breadcrums;
