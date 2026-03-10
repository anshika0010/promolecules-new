"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import MoreProducts from "./MoreProducts";

const Star = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.176 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.98 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.37-3.955z" />
  </svg>
);

const ratingBars = [
  { label: "5 STARS", value: 42, percent: 90 },
  { label: "4 STARS", value: 32, percent: 80 },
  { label: "3 STARS", value: 17, percent: 35 },
  { label: "2 STARS", value: 4, percent: 10 },
  { label: "1 STARS", value: 2, percent: 8 },
];

const StarIcon = ({ filled }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? "#f5a623" : "none"}
    stroke="#f5a623"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  // const [activeImg, setActiveImg] = useState(0);
  // const [selectedFlavour, setSelectedFlavour] = useState("Unflavoured");
  const [factsOpen, setFactsOpen] = useState(false);
  const [open, setOpen] = useState(0);
  const [selectedFlavour, setSelectedFlavour] = useState(product.flavours[0]);
  const [activeImg, setActiveImg] = useState(product.images[0]);

  const sections = [
    {
      title: "DESCRIPTION",
      content: product.description,
    },
    {
      title: "KEY BENEFITS",
      content: product.keyBenefits,
    },
    {
      title: "WHY CHOOSE US",
      content: product.whychooseus,
    },
    {
      title: "HOW TO USE",
      content: product.howToUse,
    },
    {
      title: "WHAT TO AVOID",
      content: product.whatToAvoid,
    },
  ];

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-[#111] to-[#0d0d0d] text-white flex items-center justify-center p-5 mt-20 font-barlowCondensed">
        <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-3 sticky top-7 h-fit self-start">
            <div className="relative bg-[#111]  flex items-center justify-center h-[460px] overflow-hidden">
              <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(224,0,27,0.12)_0%,transparent_70%)]"></div>

              <Image
                src={activeImg}
                alt="product"
                width={400}
                height={400}
                className="h-[420px] w-full object-contain relative z-10 transition-all duration-500 ease-in-out"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-2">
              {product.images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  width={100}
                  height={100}
                  alt="thumbnail"
                  onClick={() => setActiveImg(src)}
                  className={`w-[100px] h-[100px] object-contain cursor-pointer border-2 bg-[#111]
    ${activeImg === src ? "border-red-600" : "border-transparent"}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col top-24 ">
            {/* TITLE */}
            <h2 className="text-[52px] creepster-regular font-black tracking-[2px] uppercase text-red-600 leading-none mb-3 drop-shadow-[0_0_30px_rgba(224,0,27,0.3)]">
              {product.name}
            </h2>

            <div className="h-[2px] bg-gradient-to-r from-red-600 to-transparent mb-4"></div>

            {/* STARS */}
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} filled={i <= 4} />
              ))}
            </div>

            {/* TAGLINE */}
            <p className="global-text-style mb-4">
              {product.title}
            </p>

            {/* PRICE */}
            <div className="text-[52px] font-black mb-6 leading-none">
              ${product.price}
            </div>

           

          <p className="text-red-600 font-bold text-sm uppercase tracking-[2px] mb-3">
                FLAVOURS
              </p>

            <div className="flex gap-2 flex-wrap pb-3">
              {product.flavours.map((f) => (
                <button
                  key={f.name}
                  onClick={() => {
                    setSelectedFlavour(f);
                    setActiveImg(f.images[0]);
                  }}
                  className={`px-4 py-1 text-sm uppercase tracking-wider border transition
      ${
        selectedFlavour.name === f.name
          ? "bg-red-600 border-red-600 text-white"
          : "bg-[#1a1a1a] border-[#333] hover:border-red-500"
      }`}
                >
                  {f.name}
                </button>
              ))}
            </div>

            {/* QUANTITY */}
            <div className="py-4 border-t border-[#2a2a2a]">
              <p className="text-red-600 font-bold text-sm uppercase tracking-[2px] mb-3">
                QUANTITY
              </p>

              <div className="flex items-center">
                <div className="flex border border-[#333]">
                  <button
                    className="w-10 h-10 bg-[#1a1a1a]"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    −
                  </button>

                  <span className="w-[52px] text-center leading-[42px] bg-[#111]">
                    {quantity}
                  </span>

                  <button
                    className="w-10 h-10 bg-[#1a1a1a]"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>

                <div className="ml-6 text-sm text-gray-400 space-y-1">
                  <div>• Free shipping over $50</div>
                  <div>• 60 Day Money Back Guarantee</div>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-3">
              <button className="border-2 border-white py-4 font-bold tracking-[3px] uppercase hover:bg-white hover:text-black transition">
                Add To Cart
              </button>

              <button className="bg-red-600 border-2 border-red-600 py-4 font-bold tracking-[3px] uppercase hover:bg-red-700 transition">
                Buy Now
              </button>
            </div>

            {/* SUPPLEMENT FACTS */}
            <div
              onClick={() => setFactsOpen(!factsOpen)}
              className="flex justify-between items-center py-4 border-t border-[#2a2a2a] cursor-pointer uppercase font-bold tracking-[2px]"
            >
              <span>Supplement Facts</span>
              <PlusIcon />
            </div>

            {factsOpen && (
              <div className="global-text-style pb-4">
                <p>Serving Size: 4 Capsules | Servings Per Container: 30</p>
                <p className="mt-2">Inosine · Ribose · B-Vitamins Complex</p>
              </div>
            )}

          <MoreProducts/>
          </div>
        </div>
      </div>

      <section className="w-full bg-black text-white py-16 px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <Image
              src={product.images[2]}
              alt="product"
              width={400}
              height={400}
              className="h-[500px] w-auto object-contain relative z-10 transition-all duration-500 ease-in-out"
            />
          </div>

          {/* RIGHT ACCORDION */}
          <div className="flex flex-col">
            {sections.map((item, index) => (
              <div key={index} className="border-b border-gray-700">
                <div
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-6 cursor-pointer"
                >
                  <h3 className="text-red-600 text-2xl tracking-widest font-semibold creepster-regular">
                    {item.title}
                  </h3>

                  <FaChevronRight
                    className={`text-white transition-transform duration-300 ${
                      open === index ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {open === index && (
                  <div className="pb-6 global-text-style max-w-xl">
                    {Array.isArray(item.content) ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {item.content.map((text, i) => (
                          <li key={i}>{text}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
