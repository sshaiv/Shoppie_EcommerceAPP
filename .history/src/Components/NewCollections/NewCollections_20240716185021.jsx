import React from 'react'
import './NewCollections.css'
import NewCollections from '../Assets/NewCollections.png'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {NewCollections.map((item.i)=>{
            return <ITEM/>

        })}
      </div>
    </div>
  )
}

export default NewCollections;
