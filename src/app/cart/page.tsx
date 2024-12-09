/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { FaTrash, FaHeart } from 'react-icons/fa'; // React icons for heart and delete
import Image from 'next/image'; // Correct way to use Image in Next.js
import Link from 'next/link';

const Cart = () => {
  return (
    <div className="w-full h-auto bg-[#ffffff] py-10 px-4">
      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-16 items-center lg:items-start">
        {/* Left Section */}
        <div className="w-full max-w-[750px] text-[#111111]">
          {/* Free Delivery Info */}
          <div className="bg-[#E5E5E5] rounded-lg p-[12px] mb-6">
            <h1 className="text-[18px] font-[600]">Free Delivery</h1>
            <h2 className="text-[14px] font-[400] mt-2">
              Applies to orders of ₹ 14,000.00 or more.{' '}
              <span className="font-[700] underline mt-4 inline-block">View Details</span>
            </h2>
          </div>

          {/* Bag Section */}
          <h2 className="text-[20px] font-semibold mb-4">Bag</h2>

          {/* Product Item */}
          <div className="flex flex-col lg:flex-row gap-4 items-center mb-6 lg:mb-6">
            {/* Product Image */}
            <div className="relative w-[150px] h-[150px]">
              <Image
                src="/gear1.jpeg" 
                alt="Product Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between">
                <h3 className="text-[18px] font-[700]">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <p className="text-[16px] font-[600]">MRP: ₹ 3 895.00</p>
              </div>
              <p className="text-[15px] mt-1 text-[#757575]">
                Men's Short-Sleeve Running Top <br /> Ashen Slate/Cobalt Bliss
              </p>
              <p className="text-[15px] mt-1 text-[#757575]">
                <span>Size L</span> <span>Quantity 1</span>
              </p>

              {/* Heart and Delete Icons */}
              <div className="flex gap-4 mt-4 items-center">
                <FaHeart className="text-red-500 text-[18px] cursor-pointer" />
                <FaTrash className="text-gray-600 text-[18px] cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Another Product */}
          <div className="mt-[100px] md:mt-[50px] md:ml-[190px]">
            <div>
              <div className="flex justify-between">
                <h3 className="text-[18px] font-[700]">Nike Air Max 97 SE</h3>
                <p className="text-[16px] font-[600]">MRP: ₹ 16 995.00</p>
              </div>
              <p className="text-[15px] mt-1 text-[#757575]">
                Men's Shoes <br /> Flat Pewter/Light Bone/Black/White
              </p>
              <p className="text-[15px] mt-1 text-[#757575]">
                <span>Size 8</span> <span>Quantity 1</span>
              </p>

              {/* Heart and Delete Icons */}
              <div className="flex gap-4 mt-4 items-center">
                <FaHeart className="text-red-500 text-[18px] cursor-pointer" />
                <FaTrash className="text-gray-600 text-[18px] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full max-w-[300px] text-[#111111]">
          {/* Summary Section */}
          <h2 className="text-[20px] font-semibold mb-4">Summary</h2>

          {/* Subtotal */}
          <div className="flex justify-between text-[16px] font-[400] mb-4">
            <p>Subtotal</p>
            <p>₹ 20,890.00</p>
          </div>

          {/* Estimated Delivery & Handling */}
          <div className="flex justify-between text-[16px] font-[400] mb-4">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>

          {/* Horizontal Line */}
          <div className="border-t border-gray-300 mb-4"></div>

          {/* Total */}
          <div className="flex justify-between text-[16px] font-[600] mb-4">
            <p>Total</p>
            <p>₹ 20,890.00</p>
          </div>

          {/* Horizontal Line */}
          <div className="border-t border-gray-300 mb-6"></div>

          {/* Checkout Button */}
          <Link href="/checkout">
            <div className="flex justify-center">
              <button className="w-full py-3 bg-black text-white text-[18px] font-[500] rounded-[30px] hover:bg-gray-800 focus:outline-none">
                Member Checkout
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;




