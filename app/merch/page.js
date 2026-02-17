import React from "react";
import { ArrowRight } from "lucide-react";
const PowerYouCanWear = () => {
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
    <section className="relative w-full h-screen overflow-hidden text-white">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/product5.png')", // replace with your bg image
        }}
      />



      {/* Content Wrapper */}
      <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-16">

        {/* LEFT SIDE TEXT */}
        <div className="max-w-lg">

          <h1 className="leading-none mb-6">
            <span
              className="block text-red-600 text-4xl md:text-6xl creepster-regular uppercase tracking-widest"
             
            >
              Power You Can
            </span>
            <span
              className="block text-white text-5xl md:text-7xl  creepster-regular uppercase"
            >
              Wear
            </span>
          </h1>

          <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wide">
            Premium fitness apparel crafted for strength and durability.
            Designed for those who push limits and demand performance.
          </p>
        </div>

       
      </div>
    </section>

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
     
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black/90"></div>

      <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-16">

        {/* ================= LEFT MODELS ================= */}
        <div className=" hidden md:flex items-end justify-center">
          
          <img
            src="/merchboy.png"   // replace with first model image
            alt="Model 1"
            className=" left-0 bottom-0 object-contain"
          />

        
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="w-full md:w-1/2 max-w-xl ml-auto">

          <p
            className="text-white text-xl md:text-2xl creepster-regular uppercase tracking-widest mb-2"
         
          >
            Dark Gothic
          </p>

          <h1
            className="text-red-600 text-5xl md:text-7xl creepster-regular font-bold uppercase leading-none drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]"
          >
            Collection
          </h1>

          <p className="mt-6 text-gray-400 text-sm uppercase tracking-wide leading-relaxed max-w-md">
            Dark gothic collection is not fashion — it's rebellion in fabric.
            Born from shadows, inspired by chaos, and designed for those who
            rule their own darkness.
          </p>

          {/* Explore Button */}
          <button className="group mt-8 flex items-center gap-4 border border-gray-600 rounded-full px-6 py-3 hover:border-red-600 transition duration-300">
            <span className="uppercase text-sm tracking-widest">
              Explore Now
            </span>

            <span className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 group-hover:border-red-600 transition">
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>

        </div>
      </div>
    </section>

     

    </>
  );
};

export default PowerYouCanWear;
