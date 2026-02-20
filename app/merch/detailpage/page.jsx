"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiMinus, FiPlus, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ProductInformation from "@/components/ProductInformation";
import { ArrowRight } from "lucide-react";

export default function ProductDetail() {
  const [qty, setQty] = useState(1);

  const decreaseQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const increaseQty = () => {3
    setQty(qty + 1);
  };

 const products = [
  {
    id: 1,
    name: "Father Of Insane Skell",
    price: "Rs 699.00",
    oldPrice: "Rs 799.00",
    image: "/tshirt1.png",
  },
  {
    id: 2,
    name: "Father Of Insane Fusion",
    price: "Rs 899.00",
    oldPrice: "Rs 999.00",
    image: "/tshirt2.png",
  },
  {
    id: 3,
    name: "Father Of Insane Nitro",
    price: "Rs 899.00",
    oldPrice: "Rs 999.00",
    image: "/tshirt3.png",
  },
];


  return (
    <>
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/bg.jpg"   // put inside public/images
        alt="background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl w-full px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - TSHIRT */}
        <div className="flex flex-col items-center justify-center relative">
          <div className="relative w-[80%] md:w-[70%] h-[430px] md:h-[530px]">
            <Image
              src="/tshirt1.png"
              alt="Tshirt"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Arrow Buttons */}
          <div className="flex gap-6 mt-8">
            <button className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white text-2xl hover:bg-red-600 transition">
              <FiArrowLeft />
            </button>
            <button className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white text-2xl hover:bg-red-600 transition">
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-black/60 backdrop-blur-xl p-8 rounded-xl text-white shadow-2xl">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold creepster-regular text-red-600 tracking-wider mb-3">
            RETURN OF INSANE SKULL
          </h1>

          {/* Rating */}
          <div className="flex gap-1 mb-4 text-red-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">RS 699.00</span>
            <span className="line-through text-gray-400 text-xl">
              RS 799.00
            </span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-red-500 font-bold mb-2">DESCRIPTION</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafted for those who lead, not follow. This premium cotton
              T-shirt delivers unmatched comfort with a bold, confident design.
            </p>
          </div>

          {/* Color */}
          <div className="mb-6">
            <h3 className="text-gray-300 mb-2 font-semibold">
              COLOUR - BLACK
            </h3>
            <div className="w-full h-12 bg-black border border-gray-600 rounded-lg flex items-center justify-between px-4">
              <span>Black</span>
              <span className="text-xl">+</span>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="text-gray-300 mb-2 font-semibold">QUANTITY</h3>

            <div className="flex items-center bg-red-600 rounded-full w-fit px-4 py-2 gap-6">
              <button onClick={decreaseQty} className="text-white text-xl">
                <FiMinus />
              </button>

              <span className="text-lg font-bold">{qty}</span>

              <button onClick={increaseQty} className="text-white text-xl">
                <FiPlus />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <button className="w-full py-4 bg-black border border-gray-700 rounded-lg font-bold hover:bg-gray-900 transition">
              ADD TO CART
            </button>

            <button className="w-full py-4 bg-red-600 rounded-lg font-bold hover:bg-red-700 transition">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>

    <section className="relative w-full bg-black text-white py-20 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/candle.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

        {/* ================= TOP CONTENT ================= */}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          
          {/* Left Small Text */}
          <p className="text-gray-400 text-xs uppercase tracking-wider max-w-sm">
            Stay ahead of the trend with bold designs, premium comfort, and
            statement styles. Made for those who don't follow fashion — they create it.
          </p>

          {/* Right Heading */}
          <div className="text-right">
            <h2
              className="text-red-600 text-4xl md:text-6xl creepster-regular uppercase drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]"
         
            >
              Trending T-Shirts
            </h2>
            <h3
              className="text-white text-3xl md:text-5xl creepster-regular uppercase"
              
            >
              Collection
            </h3>

            <p className="text-gray-400 text-xs uppercase tracking-wider mt-4 max-w-md ml-auto">
              Stay ahead of the trend with bold designs, premium comfort, and
              statement styles. Made for those who don't follow fashion — they create it.
            </p>
          </div>
        </div>

        {/* ================= PRODUCTS GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {products.map((product) => (
            <div
              key={product.id}
              className="group text-center transition duration-500"
            >
              
              {/* Product Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[400px] object-contain group-hover:scale-105 transition duration-500 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Product Info */}
              <h4 className="uppercase text-lg anton-regular font-extrabold tracking-wider mb-2">
                {product.name}
              </h4>

              <div className="flex justify-center anton-regular  gap-3 text-md">
                <span className="text-white font-bold">
                  {product.price}
                </span>
                <span className="text-gray-500 line-through">
                  {product.oldPrice}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>

    <ProductInformation/>

    <section className="w-full min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        
        {/* Heading */}
        <h1
          className="text-red-600 text-5xl md:text-7xl creepster-regular font-extrabold uppercase leading-tight tracking-wide"

        >
          Empower Every Move <br /> With Style
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-base mt-6 uppercase tracking-widest">
          Designed for confidence. Built for performance. <br />
          Wear the attitude. Own the moment.
        </p>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button className="group flex items-center gap-4 border border-gray-600 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            
            <span className="uppercase text-sm tracking-wider">
              Explore Now
            </span>

            <span className="bg-gray-700 group-hover:bg-black p-2 rounded-full transition-all duration-300">
              <ArrowRight size={16} />
            </span>

          </button>
        </div>

      </div>
    </section>

    </>
  );
}
