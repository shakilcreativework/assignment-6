import React from 'react';
import { FaCheck } from "react-icons/fa6";

const Card = ({product}) => {
    console.log(product);
    const {id, name, description, price, period, tag, tagType, features, icon} = product;
    // console.log(name);
    return (
        <div className='flex flex-col justify-between gap-3 border-2 rounded-lg border-[#f2f2f2] p-4 relative'>
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
                <button className=' w-full text-sm md:text-base transition-all font-bold text-white py-2.5 lg:py-3 px-4 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]'>Buy Now</button>
            </div>
        </div>
    );
};

export default Card;