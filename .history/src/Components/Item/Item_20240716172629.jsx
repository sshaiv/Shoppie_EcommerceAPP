import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.ima} alt="" />
    </div>
  )
}

export default Item
