"use client";

import React, { useState } from "react";

export default function ContactHero() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
    if (name === "phone" && !/^\d{0,10}$/.test(value)) return;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.subject) {
      alert("Please fill all fields");
      return;
    }

    console.log(formData);

    setShowPopup(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
    });

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen w-full bg-cover bg-center flex items-center py-16 md:py-0"
        style={{ backgroundImage: "url('/candle.webp')" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">

          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl creepster-regular uppercase leading-tight">
            <span className="text-gray-200">Get In </span>
            <span className="text-red-600">Touch</span>
          </h1>

          <div className="mt-6">
            <h2 className="text-gray-300 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold anton-regular break-all">
              CONTACT@PROMOLECULES.COM
            </h2>
          </div>

          {/* LOWER INFO */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start pt-16 text-white">

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl creepster-regular uppercase leading-snug text-gray-200">
                Let’s Make Something <br /> Amazing, Together
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-xs uppercase tracking-wider">

              <div>
                <h4 className="text-red-600 mb-3 text-sm font-semibold">Strength</h4>
                <p className="text-gray-400 leading-relaxed">
                  Engineered to amplify neurological drive and muscular output.
                </p>
              </div>

              <div>
                <h4 className="text-red-600 mb-3 text-sm font-semibold">Design</h4>
                <p className="text-gray-400 leading-relaxed">
                  Structured ingredient architecture balancing stimulation and endurance.
                </p>
              </div>

              <div>
                <h4 className="text-red-600 mb-3 text-sm font-semibold">Development</h4>
                <p className="text-gray-400 leading-relaxed">
                  Built through performance-first research and athlete testing.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* CONTACT FORM SECTION */}
      <section className="w-full min-h-screen bg-black text-white py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            <div>
              <h1 className="text-6xl md:text-8xl anton-regular font-bold uppercase">
                JUST
              </h1>
              <h1 className="text-6xl md:text-8xl anton-regular font-bold uppercase">
                SEND IT.
              </h1>
            </div>

            <div className="w-24 h-[2px] bg-gray-500"></div>

            <div className="grid grid-cols-2 gap-8 text-xs text-gray-400 uppercase tracking-wider">
              <p>
                Connect with Promolecules™ for product guidance and collaboration inquiries.
              </p>

              <p>
                Reach us via email or official social platforms.
              </p>
            </div>

          </div>


          {/* RIGHT SIDE FORM */}
          <div className="max-w-xl w-full">

            <h2 className="text-4xl mb-10 creepster-regular text-red-600">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <InputField
                label="FULL NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />

              <InputField
                label="PHONE NO."
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                type="tel"
              />

              <InputField
                label="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                type="email"
              />

              <div>
                <label className="block text-xs text-gray-400 mb-2 tracking-widest">
                  SUBJECT
                </label>

                <textarea
                  rows="5"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/60 border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-600"
                />
              </div>

              <button
                type="submit"
                className="bg-red-600 w-full hover:bg-red-700 transition px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>


        {/* SUCCESS POPUP */}
        {showPopup && (
          <div className="fixed top-10 right-10 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            Message Submitted Successfully ✅
          </div>
        )}

      </section>


      {/* CTA SECTION */}
      <section className="bg-black py-16 px-7 border-t border-gray-800">

        <div className="max-w-7xl mx-auto creepster-regular">
          <h2 className="text-7xl md:text-9xl uppercase tracking-wider">
            <span className="text-gray-200">Lets Start To </span>
            <span className="text-red-600">Work</span>
          </h2>
        </div>

      </section>

    </>
  );
}


function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="block text-xs text-gray-400 mb-2 tracking-widest">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full bg-black/60 border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-600"
      />
    </div>
  );
}