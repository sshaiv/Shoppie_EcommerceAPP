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
        <span>Showing 1-12 </span> out of 36 products
      </p>

      <div className="shopcategory-sort">
        
      </div>
    </div>





    </div>
  );
}

export default ShopCategory;
