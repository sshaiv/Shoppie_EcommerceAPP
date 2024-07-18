// Rename the component to something else, e.g., NewCollectionsComponent
import React from 'react';
import './NewCollections.css';
import New_Collection from '../Assets/New_Collections'; // Renamed import
import Item from '../Item/Item'
const NewCollectionsComponent = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {NewCollectionImage.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
}

export default NewCollectionsComponent;
