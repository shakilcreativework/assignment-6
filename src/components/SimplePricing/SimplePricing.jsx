import React from 'react';
import { FaCheck } from "react-icons/fa6";

const SimplePricing = () => {
    return (
        <>
            <div className="max-w-300 mx-auto px-4 lg:px-0">
            <div className="text-center space-y-4">
              <h2 className=" text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101727]">
                Simple, Transparent Pricing
              </h2>
              <p className=" text-sm md:text-base font-normal text-[#627382]">
                Choose the plan that fits your needs. Upgrade or downgrade
                anytime.
              </p>
            </div>
          </div>
          <div className="max-w-300 mx-auto px-4 lg:px-0">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

    {/* card */}
    <div className="flex flex-col border-2 rounded-lg border-[#f2f2f2] p-4 space-y-4">
      <h3 className="text-[#101727] font-bold text-lg">Starter</h3>
      <p className="text-sm text-[#627382]">Perfect for getting started</p>

      <h3 className="text-[24px] font-bold">
        $<span className="text-[#101727]">0</span>
        <span className="text-sm font-normal text-[#627382]">/month</span>
      </h3>

      
      <div className="flex flex-col flex-1 space-y-4">
        <p className="space-y-2">
          <span className="flex gap-2 text-sm text-[#627382] items-center">
            <FaCheck className="text-[#30b868]" /> Access to 10 free tools
          </span>
          <span className="flex gap-2 text-sm text-[#627382] items-center">
            <FaCheck className="text-[#30b868]" /> Basic templates
          </span>
          <span className="flex gap-2 text-sm text-[#627382] items-center">
            <FaCheck className="text-[#30b868]" /> Community support
          </span>
          <span className="flex gap-2 text-sm text-[#627382] items-center">
            <FaCheck className="text-[#30b868]" /> 1 project per month
          </span>
        </p>

        
        <button className="mt-auto w-full text-sm md:text-base font-bold text-white py-2.5 lg:py-3 px-4 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]">
          Get Started Free
        </button>
      </div>
    </div>

    {/* card */}
    <div className="flex flex-col text-white rounded-lg bg-linear-to-r from-[#4f39f6] to-[#9514fa] p-4 space-y-4 relative">
        <span className='text-sm capitalize text-[#bb4d00] bg-[#fef3c6] py-1 px-4 rounded-full font-medium absolute left-1/2 -translate-x-1/2 -top-4'>Most Popular</span>
      <h3 className="font-bold text-lg">Pro</h3>
      <p className="text-sm">Best for professionals</p>

      <h3 className="text-[24px] font-bold">
        $29 <span className="text-sm font-normal">/month</span>
      </h3>

      <div className="flex flex-col flex-1 space-y-4">
        <p className="space-y-2">
          <span className="flex gap-2 text-sm items-center"><FaCheck /> Access to all premium tools</span>
          <span className="flex gap-2 text-sm items-center"><FaCheck /> Unlimited templates</span>
          <span className="flex gap-2 text-sm items-center"><FaCheck /> Priority support</span>
          <span className="flex gap-2 text-sm items-center"><FaCheck /> Unlimited projects</span>
          <span className="flex gap-2 text-sm items-center"><FaCheck /> Cloud sync</span>
          <span className="flex gap-2 text-sm items-center"><FaCheck /> Advanced analytics</span>
        </p>

        
        <button className="mt-auto w-full text-sm md:text-base font-bold py-2.5 lg:py-3 px-4 rounded-full bg-white">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]">
            Start Pro Trial
          </span>
        </button>
      </div>
    </div>

    {/* card */}
    <div className="flex flex-col border-2 rounded-lg border-[#f2f2f2] p-4 space-y-4">
      <h3 className="text-[#101727] font-bold text-lg">Enterprise</h3>
      <p className="text-sm text-[#627382]">For teams and businesses</p>

      <h3 className="text-[24px] font-bold">
        $<span className="text-[#101727]">99</span>
        <span className="text-sm font-normal text-[#627382]">/month</span>
      </h3>

      
      <div className="flex flex-col flex-1 space-y-4">
        <p className="space-y-2">
          <span className="flex gap-2 text-sm text-[#627382] items-center"><FaCheck className="text-[#30b868]" /> Everything in Pro</span>
          <span className="flex gap-2 text-sm text-[#627382] items-center"><FaCheck className="text-[#30b868]" /> Team collaboration</span>
          <span className="flex gap-2 text-sm text-[#627382] items-center"><FaCheck className="text-[#30b868]" /> Custom integrations</span>
          <span className="flex gap-2 text-sm text-[#627382] items-center"><FaCheck className="text-[#30b868]" /> Dedicated support</span>
          <span className="flex gap-2 text-sm text-[#627382] items-center"><FaCheck className="text-[#30b868]" /> SLA guarantee</span>
          <span className="flex gap-2 text-sm text-[#627382] items-center"><FaCheck className="text-[#30b868]" /> Custom branding</span>
        </p>

        
        <button className="mt-auto w-full text-sm md:text-base font-bold text-white py-2.5 lg:py-3 px-4 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]">
          Contact Sales
        </button>
      </div>
    </div>

  </div>
</div>
        </>
    );
};

export default SimplePricing;