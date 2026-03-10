"use client";
import Image from "next/image";

export default function MoreProducts() {

  const products = [
    {
      name: "WARFLEX",
      image: "/warflex.png",
      oldPrice: "$24.35",
      price: "$22.45",
    },
    {
      name: "FATHER OF INSANE",
      image: "/fatherof.png",
      oldPrice: "$30.47",
      price: "$28.45",
    },
    {
      name: "THERMO NUKE XT",
      image: "/thermonuke.png",
      oldPrice: "$30.47",
      price: "$28.45",
    },
  ];

  return (
    <section className="bg-black text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-red-600 creepster-regular text-4xl mb-6 ">
          Don’t Miss Out – Rod & Save
        </h2>

        {/* Product List */}
        <div className="border border-white/20 divide-y divide-white/20">

          {products.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 hover:bg-white/5 transition"
            >
              
              {/* Left Side */}
              <div className="flex items-center gap-4">

                <div className="relative w-16 h-16">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-sm tracking-wide">
                    {item.name}
                  </h3>

                  <p className="text-xs text-white/70">
                    <span className="line-through mr-2">{item.oldPrice}</span>
                    <span className="font-semibold text-white">
                      {item.price}
                    </span>
                  </p>
                </div>

              </div>

              {/* Button */}
              <button className="border border-white px-5 py-2 text-xs tracking-wider uppercase hover:bg-white hover:text-black transition">
                Add To Cart
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}