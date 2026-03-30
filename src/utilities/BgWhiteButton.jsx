import React from 'react';

const BgWhiteButton = ({name}) => {
    return (
        <div className='bg-white w-fit rounded-full'>
            <button className="bg-transparent transition-all text-sm md:text-base font-bold py-3 px-4 text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]">
            {name}
        </button>
        </div>
    );
};

export default BgWhiteButton;