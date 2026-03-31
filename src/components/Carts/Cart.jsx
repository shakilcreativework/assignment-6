import React from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";

const Cart = ({product}) => {
    // console.log(addCarts);
    const {name, price, icon} = product;

    return (
        <div className='flex justify-between items-center gap-3 md:gap-4 bg-[#f9fafc] p-4 md:p-5 lg:p-6 rounded-lg'>
           <div className='flex items-center gap-2.5 md:gap-4 lg:gap-5'>
                <div className='w-16 lg:w-20 h-16 lg:h-20 bg-white rounded-full p-3 md:p-4'>
                    <img src={icon} alt="" />
                </div> 
                <div>
                    <h4 className='text-[#101727] md:text-lg lg:text-xl font-semibold'>{name}</h4>
                    <p className='text-[#627382] font-medium text-sm md:text-base'>$<span>{price}</span></p>
                </div>
           </div>
           <button className='text-[#ff3980] font-bold text-2xl cursor-pointer'><RiDeleteBin6Fill /></button>
        </div>
    );
};

export default Cart;