import React from 'react'
import './RelatedProduct.css'

const RelatedProduct = () => {
  return (
    <div>
     

const RelatedProduct = ({ product }) => {
  return (
    <div className="related-product">
      <img className="related-product-image" src={product.image} alt={product.name} />
      <div className="related-product-details">
        <h2 className="related-product-name">{product.name}</h2>
        <p className="related-product-price">${product.price}</p>
        <button className="related-product-button">View Details</button>
      </div>
 
 

    </div>
  )
}

export default RelatedProduct
