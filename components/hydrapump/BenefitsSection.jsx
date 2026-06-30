import React from "react";
import { Capsule, Leaf } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 px-5">
      {/* Background Shape */}
      <div className="absolute left-0 top-20 w-72 h-72 bg-green-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-black uppercase">
            Benefits of Hydrapump
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
           HydraPump+™ is a scientifically formulated blend of ingredients that work synergistically to optimise hydration, endurance, blood flow and muscle pumps.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* Left Benefits */}
          <div className="space-y-12">

            <div className="flex items-center justify-end gap-5">
              <div className="text-right">
                <h4 className="font-semibold text-gray-800">
                 Reduced Fatigue
                </h4>
              </div>

              <div className="w-20 border-t-2 border-dashed border-red-500"></div>

              <div className="w-3 h-3 rounded-full bg-red-600"></div>
            </div>

            <div className="flex items-center justify-end gap-5">
              <div className="text-right">
                <h4 className="font-semibold text-gray-800">
                  Prevents Muscle Cramps
                </h4>
              </div>

              <div className="w-20 border-t-2 border-dashed border-red-500"></div>

              <div className="w-3 h-3 rounded-full bg-red-600"></div>
            </div>

            <div className="flex items-center justify-end gap-5">
              <div className="text-right">
                <h4 className="font-semibold text-gray-800">
                 Better Blood Flow
                </h4>
              
              </div>

              <div className="w-20 border-t-2 border-dashed border-red-500"></div>

              <div className="w-3 h-3 rounded-full bg-red-600"></div>
            </div>

          </div>

          {/* Center Circle */}
          <div className="flex justify-center">

           

              {/* Fruit Image */}
              <img
                src="/Promolecules/Hydrapump/hydrapump.png"
                alt="Soursop"
                className=" w-[1000px] drop-shadow-2xl"
              />
           
          </div>

          {/* Right Benefits */}
          <div className="space-y-12">

            <div className="flex items-center gap-5">

              <div className="w-3 h-3 rounded-full bg-red-600"></div>

              <div className="w-20 border-t-2 border-dashed border-red-500"></div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  Rapid Hydration
                </h4>
              
              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="w-3 h-3 rounded-full bg-red-600"></div>

              <div className="w-20 border-t-2 border-dashed border-red-500"></div>

              <div>
                <h4 className="font-semibold text-gray-800">
                Massive Muscle Pumps
                </h4>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="w-3 h-3 rounded-full bg-red-600"></div>

              <div className="w-20 border-t-2 border-dashed border-red-500"></div>

              <div>
                <h4 className="font-semibold text-gray-800">
                 Increased Endurance
                </h4>

                
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;