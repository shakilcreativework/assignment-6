import React from 'react';
import { FaCheck } from "react-icons/fa6";

const Card = ({product, addCartItems, activeBtn}) => {
    // console.log(activeBtn);
    const {name, description, price, period, tag, features, icon} = product;
    // console.log(name);
    return (
        <div className='flex flex-col justify-between gap-3 border-2 rounded-lg border-[#f2f2f2] p-4 relative'>

            <div>
                {
                    tag === "new" ? 
                    <span className='text-sm capitalize text-[#0a883e] bg-[#0a883e]/10 py-1 px-4 rounded-full font-medium absolute right-2 top-2'>{tag}</span> 
                    : tag === "popular" ? 
                    <span className='text-sm capitalize text-[#4f39f6] bg-[#4f39f6]/10 py-1 px-4 rounded-full font-medium absolute right-2 top-2'>{tag}</span>
                    : tag === "best seller" ? 
                    <span className='text-sm capitalize text-[#bb4d00] bg-[#bb4d00]/10 py-1 px-4 rounded-full font-medium absolute right-2 top-2'>{tag}</span>
                    :
                    ''
                }
            </div>
            <div className='w-15 h-15 border border-gray-300 rounded-full p-3'>
                <img src={icon} alt="" />
            </div>
            <h3 className='text-[#101727] font-bold text-lg'>{name}</h3>
            <p className='text-sm text-[#627382]'>{description}</p>
            <h3 className='text-[24px] font-bold'>$<span className='text-[#101727]'>{price}</span><span className='text-sm font-normal text-[#627382]'>/{period}</span></h3>
            <div className='space-y-4'>
                <p className='space-y-2'>
                {
                    features.map((fea, idx) =>  <span className='flex gap-2 text-sm text-[#627382] items-center' key={idx}><FaCheck className='text-[#30b868]' /> {fea}</span>)
                } 
                </p>
                <button onClick={() => addCartItems(product)} className={`w-full text-sm md:text-base transition-all font-bold text-white py-2.5 lg:py-3 px-4 rounded-full ${activeBtn === product.id ? 
                    'bg-green-500'
                    :
                    'bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]'
                }`}>{activeBtn === product.id ?
                    <span className='flex justify-center items-center gap-2'><FaCheck /> Added to cart!</span>
                    :
                    'Buy Now'
                }
                    </button>
            </div>
        </div>
    );
};

export default Card;