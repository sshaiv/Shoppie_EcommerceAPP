import React from 'react'
import './NewCollections.css'
import NewCollections from '../Assets/NewCollections.png'
import Item from '../Item/Item'


const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {NewCollections.map((item.i)=>{
            return <ITEM key={i} id={item.id} name={item.name} />

        })}
      </div>
    </div>
  )
}

export default NewCollections;
