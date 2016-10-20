import React from 'react';

//RegistryItem Component gets itemDetails from where it is
//'called' in RegistryList.js

export default ( {itemDetails, markAsPurchased} ) => (
    <div onClick={() => markAsPurchased(itemDetails.id)}>
        <h1>Item name: <span>{itemDetails.name}</span></h1>
        <h2>Item price: <span>{itemDetails.price}</span></h2>
    </div>
);
