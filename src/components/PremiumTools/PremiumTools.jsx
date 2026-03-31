import React from "react";
import Cards from "../Cards/Cards";
import Carts from "../Carts/Carts";

const PremiumTools = ({productsData, productBtn, toggleCard}) => {
    // console.log(productsData);
  return (
    <div className="max-w-300 mx-auto px-4 lg:px-0 py-15">
      <div className="text-center space-y-4 mb-10">
        <h2 className=" text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101727]">
          Premium Digital Tools
        </h2>
        <p className=" text-sm md:text-base font-normal text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br className="hidden md:block" /> to boost your productivity and creativity.
        </p>
        <div className="flex w-fit rounded-full border-2 border-gray-100 mx-auto">
          <div className={`${toggleCard ? 
            ''
            :
            'bg-white w-fit rounded-full'
          }`}>
            <button onClick={() => productBtn(true)} className={`${toggleCard ?
              'text-sm md:text-base transition-all font-bold py-2.5 lg:py-3 px-4 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6] text-white'
              :
              'bg-transparent transition-all text-sm md:text-base font-bold py-2.5 lg:py-3 px-4 text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]'
            } `}>
            Products
          </button>
          </div>
          <div className={`${toggleCard ?
            'bg-white w-fit rounded-full'
            :
            ''
          }`}>
            <button onClick={() => productBtn(false)} className={`${toggleCard ?
              'bg-transparent transition-all text-sm md:text-base font-bold py-2.5 lg:py-3 px-4 text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]'
              :
              'text-sm md:text-base transition-all font-bold py-2.5 lg:py-3 px-4 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6] text-white'
            }`}>
              Cart (2)
            </button>
          </div>
        </div>
      </div>
      {/* cards */}
      <section>
        {
          toggleCard ?
          <Cards productBtn={productBtn} productsData={productsData} />
          
          :
          <Carts />
        }
      </section>
    </div>
  );
};

export default PremiumTools;
