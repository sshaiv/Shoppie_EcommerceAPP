import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/`}> <img src={props.image} alt="" /> </Link>
      
    <p>{props.name}</p>
    <div className="item-prices">
      div
    </div>
    </div>
  );
}

export default Item;
