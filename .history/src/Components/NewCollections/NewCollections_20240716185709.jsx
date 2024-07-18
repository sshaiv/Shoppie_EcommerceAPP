// Rename the component to something else, e.g., NewCollectionsComponent
import React from 'react';
import './NewCollections.css';
import NewCollectionsImage from '../Assets/NewCollections.png'; // Renamed import

const NewCollectionsComponent = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {data_product.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
}

export default NewCollectionsComponent;
