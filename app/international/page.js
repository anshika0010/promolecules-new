import React from "react";
import { Search } from "lucide-react";
import { ArrowRight } from "lucide-react";

const distributors = [
  { country: "Georgia", name: "Muscle Strength", city: "Tbilisi" },
  { country: "India", name: "Muscle Strength", city: "Mumbai" },
  { country: "Colombia", name: "Muscle Strength", city: "Bogotá" },
  { country: "Nepal", name: "Muscle Strength", city: "Kathmandu" },
  { country: "USA", name: "Muscle Strength", city: "New York" },
  { country: "Iran", name: "Muscle Strength", city: "Tehran" },
  { country: "Russia", name: "Muscle Strength", city: "Moscow" },
  { country: "UAE", name: "Muscle Strength", city: "Dubai" },
];

const InternationalDistributors = () => {
  return (
    <section className="relative min-h-screen pt-10  bg-black text-white overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/dark-texture.jpg')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-16">

        {/* ================= HEADING ================= */}

        <h1 className="leading-none mb-6">
          <span
            className="block text-red-600 text-7xl md:text-9xl creepster-regular font-bold uppercase"
     
          >
            International,
          </span>
          <span
            className="block text-red-600 text-7xl md:text-9xl creepster-regular font-bold uppercase"
          >
            Distributors
          </span>
        </h1>

        <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wide max-w-2xl mb-8">
          Promolecule cannot guarantee the quality of the product if not
          purchased from an authorized distributor.
        </p>

        {/* ================= FILTER BUTTONS ================= */}

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <button className="bg-red-600 px-5 py-2 text-xs uppercase font-semibold rounded">
            All
          </button>
          <button className="bg-gray-900 px-5 py-2 text-xs uppercase rounded hover:bg-red-600 transition">
            Global
          </button>
        </div>

        {/* Alphabet Filter */}
        <div className="flex flex-wrap gap-3 text-gray-400 text-sm mb-6">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
            <span
              key={letter}
              className="cursor-pointer hover:text-red-600 transition"
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Secondary Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-gray-900 px-6 py-2 text-xs uppercase rounded hover:bg-red-600 transition">
            Country
          </button>
          <button className="bg-gray-900 px-6 py-2 text-xs uppercase rounded hover:bg-red-600 transition">
            Authorised Country
          </button>
          <button className="bg-red-600 px-6 py-2 text-xs uppercase rounded">
            Unauthorised Country
          </button>
        </div>

        {/* ================= SEARCH BAR ================= */}

        <div className="relative mb-10">
          <input
            type="text"
            placeholder="Search........"
            className="w-full bg-[#111] border border-gray-800 px-4 py-3 pr-10 rounded-md focus:outline-none focus:border-red-600"
          />
          <Search
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>

        {/* ================= DISTRIBUTOR LIST ================= */}

        <div className="space-y-4">
          {distributors.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#111] border border-gray-800 px-6 py-5 rounded-md hover:border-red-600 transition"
            >
              {/* Left Content */}
              <div>
                <h3 className="text-red-600 uppercase text-sm font-semibold mb-1">
                  {item.country}
                </h3>
                <p className="text-gray-300 text-xs uppercase">
                  {item.name}
                </p>
                <p className="text-gray-500 text-xs uppercase">
                  {item.city}
                </p>
              </div>

              {/* Email Button */}
              <button className="bg-black border border-gray-700 text-red-600 px-5 py-2 text-xs uppercase rounded hover:bg-red-600 hover:text-black transition">
                E-Mail
              </button>
            </div>
          ))}
        </div>

      </div>
       <div className="flex items-center justify-between px-6 md:px-20 py-10 bg-black">
        <h2 className="text-7xl md:text-8xl font-bold creepster-regular uppercase tracking-wider">
          <span
            className="text-red-600"
         
          >
            DOMESTIC,
          </span>{" "}
          <span
           
          >
            Distributor
          </span>
        </h2>

        <ArrowRight
          size={60}
          className="text-red-600 hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default InternationalDistributors;
