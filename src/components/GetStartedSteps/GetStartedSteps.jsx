import React from 'react';
import { FiUser } from "react-icons/fi";
import { BsBoxSeamFill } from "react-icons/bs";
import { IoRocketSharp } from "react-icons/io5";

const GetStartedSteps = () => {
    return (
        <div className="max-w-300 mx-auto px-4 lg:px-0">
            <div className="text-center space-y-4">
              <h2 className=" text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101727]">
                Get Started in 3 Steps
              </h2>
              <p className=" text-sm md:text-base font-normal text-[#627382]">
                Start using premium digital tools in minutes, not hours.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="bg-white px-4 py-20 rounded-xl relative">
                <span className="flex justify-center items-center text-sm capitalize bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white w-8 h-8 rounded-full font-bold absolute right-5 top-5">
                  01
                </span>
                <div className="text-center space-y-4">
                  <span className="mx-auto flex justify-center items-center text-4xl capitalize w-20 h-20 text-[#4f39f6] bg-[#4f39f6]/10 rounded-full font-bold">
                    <FiUser />
                  </span>
                  <h3 className="text-[#101727] md:text-lg lg:text-2xl font-bold">
                    Create Account
                  </h3>
                  <p className=" text-sm md:text-base font-normal text-[#627382]">
                    Sign up for free in seconds. No credit card required to get
                    started.
                  </p>
                </div>
              </div>
              <div className="bg-white px-4 py-20 rounded-xl relative">
                <span className="flex justify-center items-center text-sm capitalize bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white w-8 h-8 rounded-full font-bold absolute right-5 top-5">
                  02
                </span>
                <div className="text-center space-y-4">
                  <span className="mx-auto flex justify-center items-center text-4xl capitalize w-20 h-20 text-[#4f39f6] bg-[#4f39f6]/10 rounded-full font-bold">
                    <BsBoxSeamFill />
                  </span>
                  <h3 className="text-[#101727] md:text-lg lg:text-2xl font-bold">
                    Choose Products
                  </h3>
                  <p className=" text-sm md:text-base font-normal text-[#627382]">
                    Browse our catalog and select the tools that fit your needs.
                  </p>
                </div>
              </div>
              <div className="bg-white px-4 py-20 rounded-xl relative">
                <span className="flex justify-center items-center text-sm capitalize bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white w-8 h-8 rounded-full font-bold absolute right-5 top-5">
                  03
                </span>
                <div className="text-center space-y-4">
                  <span className="mx-auto flex justify-center items-center text-4xl capitalize w-20 h-20 text-[#4f39f6] bg-[#4f39f6]/10 rounded-full font-bold">
                    <IoRocketSharp />
                  </span>
                  <h3 className="text-[#101727] md:text-lg lg:text-2xl font-bold">
                    Start Creating
                  </h3>
                  <p className=" text-sm md:text-base font-normal text-[#627382]">
                    Download and start using your premium tools immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
    );
};

export default GetStartedSteps;