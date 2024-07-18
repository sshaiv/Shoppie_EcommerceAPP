import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/`}> <img src={props.im} alt="" /> </Link>
      
      <div className="item-details">
        <p className="item-name">{name}</p>
        <p className="item-price">
          <span className="item-old-price">${old_price}</span>
          <span>${new_price}</span>
        </p>
      </div>
    </div>
  );
}

export default Item;
