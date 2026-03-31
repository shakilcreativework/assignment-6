import React from 'react';
import Cart from './Cart';

const Carts = ({addCarts}) => {
    const totalPrice = addCarts.reduce(
        (total, product) => total + (product?.price || 0),
        0
    );

    return (
        <div className='border-2 border-gray-100 p-3 md:p-5 lg:p-6 rounded-lg'>
            <h3 className=' text-xl lg:text-2xl font-bold text-[#101727] mb-6'>Your Cart</h3>
            <div className='space-y-4'>
                {
                    addCarts.map((product, idx) => <Cart key={idx} product={product} />)
                }
            </div>
            <div className='flex justify-between items-center mt-6'>
                <p className='text-[#627382] font-medium text-sm md:text-base'>Total:</p>
                <p className='text-[#101727] font-bold text-lg md:text-xl lg:text-2xl'>$<span>{totalPrice}</span></p>
            </div>
            <div className='mt-6'>
                <button className='w-full text-sm md:text-base transition-all font-bold text-white py-2.5 lg:py-3 px-4 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Carts;