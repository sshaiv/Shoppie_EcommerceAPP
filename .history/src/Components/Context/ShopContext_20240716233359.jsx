import React, { createContext } from 'react';
import all_product from '../Assets/all_products';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };

const getDefaultCart=()=>{
  let cart={};
  for
}

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
