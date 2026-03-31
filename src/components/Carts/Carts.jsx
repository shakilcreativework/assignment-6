import React from 'react';
import Cart from './Cart';

const Carts = ({addCarts}) => {

    return (
        <div className='border-2 border-gray-100 p-3 md:p-5 lg:p-6 rounded-lg'>
            <h3 className=' text-xl lg:text-2xl font-bold text-[#101727] mb-6'>Your Cart</h3>
            <div className='space-y-4'>
                {
                    addCarts.map((product, idx) => <Cart key={idx} product={product} />)
                }
            </div>
        </div>
    );
};

export default Carts;