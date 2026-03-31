import React from 'react';
import Card from './Card';

const Cards = ({productsData, addCartItems}) => {
    // console.log(productsData);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                productsData.map((product, index) => <Card key={index} addCartItems={addCartItems} product={product} />)
            }
        </div>
    );
};

export default Cards;