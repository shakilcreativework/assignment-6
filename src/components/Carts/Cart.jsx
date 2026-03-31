import React from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { toast } from 'react-toastify';

const Cart = ({product, setAddCarts, addCarts}) => {
    // console.log(typeof product, typeof setAddCarts);
    const {name, price, icon} = product;

    // remove tools from carts page
    const removeTool = (passTool) => {
        const filterToolToRemove = addCarts.filter(tool => tool.id !== passTool.id);
        setAddCarts(filterToolToRemove);
        toast(`Tool removed from your cart 🛒
            ${passTool.name}`);
    };

    return (
        <div className='flex justify-between items-center gap-3 md:gap-4 bg-[#f9fafc] p-4 md:p-5 lg:p-6 rounded-lg'>
           <div className='flex items-center gap-2.5 md:gap-4 lg:gap-5'>
                <div className='w-16 lg:w-20 h-16 lg:h-20 bg-white rounded-full p-3 md:p-4'>
                    <img src={icon} alt="" />
                </div> 
                <div className='space-y-1.5'>
                    <h4 className='text-[#101727] text-sm md:text-base lg:text-lg font-semibold'>{name}</h4>
                    <p className='text-[#627382] font-medium text-sm md:text-base'>$<span>{price}</span></p>
                </div>
           </div>
           <button onClick={() => removeTool(product)} className='text-[#ff3980] font-bold text-2xl cursor-pointer'><RiDeleteBin6Fill /></button>
        </div>
    );
};

export default Cart;