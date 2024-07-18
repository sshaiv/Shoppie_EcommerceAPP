import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdowm_icon from '../Assets/dropdown_icon.png'

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
        Sort by <img src={} alt="" />
      </div>
    </div>





    </div>
  );
}

export default ShopCategory;
