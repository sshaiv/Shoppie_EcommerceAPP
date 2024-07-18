import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdowm_icon from '../Assets/dropdown_icon.png';
import Item from '../Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const filteredProducts = all_product.filter(item => item.category === props.category);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="Shop Category Banner" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {filteredProducts.length > 0 ? '1-12' : '0'} </span> out of {filteredProducts.length} products
        </p>

        <div className="shopcategory-sort">
          Sort by <img src={dropdowm_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default ShopCategory;
