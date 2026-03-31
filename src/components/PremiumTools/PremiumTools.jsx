import React from "react";
import Cards from "../Cards/Cards";
import Carts from "../Carts/Carts";

const PremiumTools = ({ productsData, productBtn, toggleCard }) => {
  return (
    <div className="max-w-300 mx-auto px-4 lg:px-0 py-15">
      <div className="text-center space-y-5 mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101727]">
          Premium Digital Tools
        </h2>

        <p className="text-sm md:text-base font-normal text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br className="hidden md:block" /> to boost your productivity
          and creativity.
        </p>

        {/* Smooth Toggle Button */}
        <div className="relative flex w-fit rounded-full border-2 border-gray-100 mx-auto p-1 bg-gray-50 overflow-hidden">

          {/* Sliding Background */}
          <div
            className={`absolute top-0 bottom-0 w-1/2 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] transition-all duration-300 ease-in-out ${
              toggleCard ? "left-0" : "left-1/2"
            }`}
          ></div>

          {/* Products Button */}
          <button
            onClick={() => productBtn(true)}
            className={`relative z-10 text-sm md:text-base font-bold py-2.5 lg:py-3 px-6 transition-colors duration-300 ${
              toggleCard ? "text-white" : "text-gray-600"
            }`}
          >
            Products
          </button>

          {/* Cart Button */}
          <button
            onClick={() => productBtn(false)}
            className={`relative z-10 text-sm md:text-base font-bold py-2.5 lg:py-3 px-6 transition-colors duration-300 ${
              !toggleCard ? "text-white" : "text-gray-600"
            }`}
          >
            Cart (2)
          </button>
        </div>
      </div>

      {/* cards */}
      <section>
        {toggleCard ? (
          <Cards productBtn={productBtn} productsData={productsData} />
        ) : (
          <Carts />
        )}
      </section>
    </div>
  );
};

export default PremiumTools;