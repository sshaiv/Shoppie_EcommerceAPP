import React from "react";
import "./ProductDisplay.css";
import star_icon from '../Assets/star_icon.png';
import star_dullicon from '../Assets/star_dullicon.png';

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Thumbnail" />
          <img src={product.image} alt="Thumbnail" />
          <img src={product.image} alt="Thumbnail" />
          <img src={product.image} alt="Thumbnail" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="Main product" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_dullicon} alt="Dull star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          This stylish and versatile {product.name} is perfect for any occasion. Made from high-quality materials, it offers both comfort and durability. Whether you're dressing up for a night out or keeping it casual, this piece will elevate your wardrobe.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size-options">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category:</span> Women, T-Shirt, Crop</p>
        <p className="productdisplay-right-category"><span>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
