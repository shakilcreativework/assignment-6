import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='max-w-300 mx-auto text-white px-4 lg:px-0'>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10 lg:gap-4 pt-30 pb-20'>
                <div className=' col-span-2 md:col-span-4 lg:col-span-2 space-y-4'>
                    <h2
                        className="text-3xl md:text-4xl font-extrabold"
                        >
                        DigiTools
                    </h2>
                    <p className='text-sm md:text-base font-normal text-white/60 lg:w-[80%]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div className='space-y-4'>
                    <h4 className='text-[20px] font-medium'>Product</h4>
                    <ul className='space-y-2'>
                        <li className='list-none'><a className='text-sm md:text-base font-normal text-white/60' href="">Features</a></li>
                        <li className='list-none'><a className='text-sm md:text-base font-normal text-white/60' href="">Pricing</a></li>
                        <li className='list-none'><a className='text-sm md:text-base font-normal text-white/60' href="">Templates</a></li>
                        <li className='list-none'><a className='text-sm md:text-base font-normal text-white/60' href="">Integrations</a></li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h4 className='text-[20px] font-medium'>Company</h4>
                    <ul className='space-y-2'>
                        <li className='list-none'><a className='text-sm md:text-base font-normal text-white/60' href="">About</a></li>
                        <li className='list-none'><a className='text-sm md:text-base font-normal text-white/60' href="">Blog</a></li>
                        <li className='list-none'><a className='text-sm md:text-base font-normal text-white/60' href="">Careers</a></li>
                        <li className='list-none'><a className='text-sm md:text-base font-normal text-white/60' href="">Press</a></li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h4 className='text-[20px] font-medium'>Resources</h4>
                    <ul className='space-y-2'>
                        <li className='list-none'><a className='text-sm md:text-base font-normal text-white/60' href="">Documentation</a></li>
                        <li className='list-none'><a className='text-sm md:text-base font-normal text-white/60' href="">Help Center</a></li>
                        <li className='list-none'><a className='text-sm md:text-base font-normal text-white/60' href="">Community</a></li>
                        <li className='list-none'><a className='text-sm md:text-base font-normal text-white/60' href="">Contact</a></li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h4 className='text-[20px] font-medium'>Social Links</h4>
                    <ul className=' flex gap-4 space-y-2'>
                        <li className='list-none w-8 h-8 bg-white rounded-full flex justify-center items-center'>
                            <a href=""><FaInstagram className='text-black text-lg' /></a>
                        </li>
                        <li className='list-none w-8 h-8 bg-white rounded-full flex justify-center items-center'>
                            <a href=""><FaFacebook className='text-black text-lg' /></a>
                        </li>
                        <li className='list-none w-8 h-8 bg-white rounded-full flex justify-center items-center'>
                            <a href=""><FaXTwitter className='text-black text-lg' /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className='text-white/10' />
            <div className='flex flex-col md:flex-row justify-start md:justify-between py-5 gap-5 lg:gap-4'>
                <span className='text-xs md:text-sm font-normal text-white/60 md:text-start text-center lg:text-start'>© 2026 Digitools. All rights reserved.</span>
                <div>
                    <ul className='flex justify-center md:justify-normal gap-4 space-y-2'>
                        <li className='list-none'><a className='text-xs md:text-sm font-normal text-white/60' href="">Features</a></li>
                        <li className='list-none'><a className='text-xs md:text-sm font-normal text-white/60' href="">Pricing</a></li>
                        <li className='list-none'><a className='text-xs md:text-sm font-normal text-white/60' href="">Templates</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;