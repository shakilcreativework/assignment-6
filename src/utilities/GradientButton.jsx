import React from 'react';

const GradientButton = ({name}) => {
    return (
        <button className=' text-sm md:text-base transition-all font-bold text-white py-3 px-4 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]'>{name}</button>
    );
};

export default GradientButton;