import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="Shop Category Banner" />

    <div className="shopcategory-indexSort">
      <p>
        span
      </p>
    </div>





    </div>
  );
}

export default ShopCategory;
