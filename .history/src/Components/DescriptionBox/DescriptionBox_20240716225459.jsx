import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Rewiews (122)</div>
      </div>

      <div className="descriptionbox-description">
        <p>Ecommerce, which stands for “electronic commerce,” is the buying and selling of products and services over the internet. This includes all types of industries, such as retail, electronics, grocery, education, entertainment, delivery, and more.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
