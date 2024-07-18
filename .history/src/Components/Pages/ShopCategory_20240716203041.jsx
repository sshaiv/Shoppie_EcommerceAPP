import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdowm_icon from '../Assets/dropdown_icon.png'
import Item from '../Item/Item';


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
        Sort by <img src={dropdowm_icon} alt="" />
      </div>
    </div>

    <div className="shopcategory-products">
      {all_product.map((item,i)=>{
        if(props.category===item.category){
        return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        }
      })}
    </div>



    </div>
  );
}

export default ShopCategory;
