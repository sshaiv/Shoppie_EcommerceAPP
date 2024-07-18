import React from 'react';
import './Item.css';


const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item">
      <Link></Link>
      <img src={image} alt={name} />
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
