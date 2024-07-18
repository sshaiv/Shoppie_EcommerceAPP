// Rename the component to something else, e.g., NewCollectionsComponent
import React from 'react';
import './NewCollections.css';
// import NewCollectionImage from '../Assets/NewCollectionsImage.png'; // Renamed import
import Item from '../Item/Item'
const NewCollectionsComponent = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
}

export default NewCollectionsComponent;
