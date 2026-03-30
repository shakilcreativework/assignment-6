import React from 'react';

const GradientTextBtn = ({name, icon}) => {
    return (
        <button className="flex gap-2 bg-transparent transition-all border border-[#4f39f6] text-sm md:text-base font-bold py-2.5 lg:py-[11.5px] px-4 rounded-full text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]">
            {
                icon ? icon : ''
            }
            {name}
        </button>
    );
};

export default GradientTextBtn;