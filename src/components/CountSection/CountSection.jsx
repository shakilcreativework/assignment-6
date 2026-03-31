import React from 'react';

const CountSection = () => {
    return (
        <div className='max-w-300 mx-auto px-4 lg:px-0'>
            <div className='flex justify-around items-center gap-4 py-10 lg:py-15'>
                <div>
                    <h1 className='font-extrabold text-[40px] md:text-[50px] lg:text-[60px] text-white'>50K+</h1>
                    <p className='text-white/60 text-base md:text-lg lg:text-xl'>Active Users</p>
                </div>
                <span className='w-px h-12.5 bg-gray-100/60 rounded-full'></span>
                <div>
                    <h1 className='font-extrabold text-[40px] md:text-[50px] lg:text-[60px] text-white'>200+</h1>
                    <p className='text-white/60 text-base md:text-lg lg:text-xl'>Premium Tools</p>
                </div>
                <span className='w-px h-12.5 bg-gray-100/60 rounded-full'></span>
                <div>
                    <h1 className='font-extrabold text-[40px] md:text-[50px] lg:text-[60px] text-white'>4.9</h1>
                    <p className='text-white/60 text-base md:text-lg lg:text-xl'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default CountSection;