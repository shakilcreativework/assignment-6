import React from 'react';

const Workflow = () => {
    return (
        <div className="max-w-300 mx-auto px-4 lg:px-0">
            <div className="text-center space-y-4">
              <h2 className=" text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#ffffff]">
                Premium Digital Tools
              </h2>
              <p className=" text-sm md:text-base font-normal text-[#ffffff]/60">
                Choose from our curated collection of premium digital products
                designed <br className="hidden md:block" /> to boost your
                productivity and creativity.
              </p>
              <div className="flex gap-2 w-fit rounded-full mx-auto">
                <div className="bg-white w-fit rounded-full">
                  <button className="bg-transparent transition-all text-sm md:text-base font-bold py-2.5 lg:py-3 px-4 text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]">
                    Explore Products
                  </button>
                </div>
                <div className="border-2 border-gray-100/60 w-fit rounded-full">
                  <button className="text-sm md:text-base font-bold py-2.5 lg:py-3 px-4 text-white">
                    View Pricing
                  </button>
                </div>
              </div>
              <span className=" text-xs md:text-sm font-normal text-[#ffffff]/60">14-day free trial • No credit card required • Cancel anytime</span>
            </div>
          </div>
    );
};

export default Workflow;