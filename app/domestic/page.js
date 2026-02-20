import React from "react";
import { ArrowRight } from "lucide-react";
import { DollarSign, ShoppingCart, ArrowUpRight } from "lucide-react";
const DomesticDistributorHero = () => {
  return (
    <>
    <section className="relative w-full h-[300px] md:h-[400px] bg-black overflow-hidden">
      
      {/* Background Overlay (Optional gradient for depth) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4">
          
          {/* DOMESTIC */}
          <h1 className="text-red-600 text-6xl sm:text-7xl md:text-9xl creepster-regular font-extrabold tracking-wider uppercase"
      
          >
            Domestic
          </h1>

          {/* DISTRIBUTOR */}
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold creepster-regular tracking-widest uppercase"
     
          >
            Distributor
          </h2>
        </div>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-gray-300 text-xs sm:text-sm md:text-base tracking-wide uppercase">
          Login Trefoy to enjoy the personalized experience of our wholesale
          section. Get access to our wholesale cassing, tailor made wholesale
          price and wholesale checkout and much more.
        </p>

      </div>
    </section>
     
    <section className="relative w-full min-h-[350px] bg-black text-white overflow-hidden">
      
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-[url('/texture.png')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-12">
        
        {/* LEFT SIDE - LOGIN FORM */}
        <div className="space-y-6 max-w-md">
          
          {/* Email */}
          <div>
            <label className="block text-xs uppercase text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder=""
              className="w-full bg-[#111] border border-gray-800 px-4 py-3 rounded-md focus:outline-none focus:border-red-600 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs uppercase text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder=""
              className="w-full bg-[#111] border border-gray-800 px-4 py-3 rounded-md focus:outline-none focus:border-red-600 transition"
            />
          </div>

          {/* Login Button */}
          <button className="group w-full bg-red-600 hover:bg-red-700 transition-all duration-300 py-3 rounded-md flex items-center justify-center gap-2 font-semibold tracking-wider uppercase">
            Log In
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

        {/* RIGHT SIDE - TEXT CONTENT */}
        <div className="text-gray-400 text-xs md:text-sm leading-relaxed space-y-6">
          
          <p>
            Reliable wholesale distribution powered by strong logistics, vast
            inventory, and market expertise. We deliver quality products
            efficiently, ensuring seamless supply.
          </p>

          <p>
            As an authorized domestic distributor, we provide exceptional
            service, premium quality, and dependable support across all
            channels.
          </p>

        </div>

      </div>
    </section>
     
    <section className="relative w-full bg-black text-white py-20 overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/dark-texture.jpg')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* ================= TOP SECTION ================= */}

        <h2
              className="text-4xl md:text-6xl creepster-regular font-bold uppercase tracking-wider mb-4"
     
        >
          Not a Wholesale Member Yet
        </h2>

        <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wide mb-6">
          If you are registered wholesale customer, please login to access the
          wholesale catalog and other benefits
        </p>

        <button className="border border-gray-700 px-6 py-2 text-xs uppercase tracking-widest hover:border-red-600 hover:text-red-600 transition duration-300">
          Register for Wholesale
        </button>

        {/* ================= ICON SECTION ================= */}

        <div className="mt-20 space-y-16">

          {/* Prices Tailored */}
          <div>
            <DollarSign className="mx-auto text-red-600 mb-6" size={32} />

            <h3
              className="text-4xl md:text-6xl creepster-regular font-bold uppercase tracking-wider mb-4"
            >
              Prices Tailored For You.
            </h3>

            <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wide">
              Our registered partners get B2B or wholesale prices specifically
              tailored for them.
            </p>
          </div>

          {/* Bulk Ordering */}
          <div>
            <ShoppingCart className="mx-auto text-red-600 mb-6" size={32} />

            <h3
              className="text-4xl md:text-6xl creepster-regular font-bold uppercase tracking-wider mb-4"
             
            >
              Bulk Ordering Discounts
            </h3>

            <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wide">
              We offer volume discounts or tiered pricing for customers buying
              in bulk.
            </p>
          </div>

        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-gray-800 mt-20"></div>

      {/* ================= BOTTOM SECTION ================= */}

<div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 sm:px-10 md:px-20 py-8 md:py-10 bg-black gap-6">
  
  <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold creepster-regular uppercase tracking-wide leading-tight">
    <span className="text-red-600 block sm:inline">
      International,
    </span>{" "}
    <span className="block sm:inline">
      Distributor
    </span>
  </h2>

  <ArrowUpRight
    size={40}
    className="sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] text-red-600 hover:scale-110 transition-transform duration-300 cursor-pointer"
  />

</div>
    </section>
    </>
  );
};

export default DomesticDistributorHero;
