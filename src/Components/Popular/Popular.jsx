import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
// import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => (
          <div className="item" key={i}>
            <img src={item.image} alt={item.name} />
            <div className="name">{item.name}</div>
            <div className="price">
              <span className="old-price">${item.old_price}</span>
              <span className="new-price">${item.new_price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
