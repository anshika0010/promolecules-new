import React from "react";

export default function ContactSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-black bg-center text-white"

    >
    

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div className="space-y-10">
            <div>
              <h1 className="text-6xl md:text-8xl anton-regular  font-bold  uppercase">
                JUST
              </h1>
              <h1 className="text-6xl md:text-8xl anton-regular font-bold uppercase">
                SEND IT.
              </h1>
            </div>

            <div className="w-24 h-[2px] bg-gray-500"></div>

            <div className="grid grid-cols-2 gap-8 text-xs text-gray-400 uppercase tracking-wider">
              <p>
                You don’t live form <br />
                formulated with hydrolysed <br />
                beef peptides, it fuels faster <br />
                recovery, i.
              </p>
              <p>
                You don’t live form <br />
                formulated with hydrolysed <br />
                beef peptides, it fuels faster <br />
                recovery, i.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="space-y-6">
            <InputField label="FULL NAME" />
            <InputField label="LAST NAME" />
            <InputField label="GMAIL" />

            <div>
              <label className="block text-xs text-gray-400 mb-2 tracking-widest">
                SEND MESSAGE
              </label>
              <textarea
                rows="5"
                className="w-full bg-black/60 border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-600"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-red-600 w-full flex items-center justify-center hover:bg-red-700 transition-all px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider flex items-center gap-3">
                Send Message
                <span className="text-lg">➤</span>
              </button>
            </div>

            <p className="text-xs text-gray-500 uppercase tracking-wide">
              By submitting this form, you agree to our{" "}
              <span className="text-white underline cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="relative z-10 border-t border-gray-800"></div>

      {/* Bottom CTA Section */}
      <div className="relative z-10 bg-black py-16 px-7">
        <div className="max-w-9xl creepster-regular mx-auto flex items-center">
          <h2 className="text-7xl md:text-9xl font-gothic uppercase tracking-wider">
            <span className="text-gray-200">Lets Start To </span>
            <span className="text-red-600">Work</span>
          </h2>

          <span className="text-red-600 text-7xl md:text-9xl  transition-transform cursor-pointer">
            ↗
          </span>
        </div>
      </div>
    </section>
  );
}

function InputField({ label }) {
  return (
    <div>
      <label className="block text-xs text-gray-400 mb-2 tracking-widest">
        {label}
      </label>
      <input
        type="text"
        className="w-full bg-black/60 border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-600"
      />
    </div>
  );
}
