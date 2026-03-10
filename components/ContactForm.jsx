"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Phone, Mail } from "lucide-react";
export default function ContactForm() {

  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, subject } = formData;

    if (!name || !phone || !email || !subject) {
      alert("Please fill all fields");
      return;
    }

    console.log(formData);

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
      });
    }, 3000);
  };

  return (
    <section className="w-full min-h-screen bg-black text-white py-24 relative">

      {/* FORM BLUR WRAPPER */}

      <div
        className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 transition-all duration-300 ${
          showPopup ? "blur-md pointer-events-none" : ""
        }`}
      >

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

          <div className="grid grid-cols-2 gap-8 global-text-style uppercase tracking-wider">
            <p>
              Connect with Promolecules™ for product guidance and collaboration inquiries.
            </p>

            <p>
              Reach us via email or official social platforms.
            </p>
          </div>
<div className="flex flex-col sm:flex-row items-center gap-4 text-white text-sm">

      {/* Phone */}
      <div className="flex items-center gap-2">
        <Phone size={16} className="text-red-500" />
        <span>+1 (786) 789-2121</span>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2">
        <Mail size={16} className="text-red-500" />
        <span>info@promolecules.com</span>
      </div>

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

            {/* PHONE INPUT */}

            <div>
              <label className="block text-xs text-gray-400 mb-2 tracking-widest">
                PHONE NO. <span className="text-red-500">*</span>
              </label>

              <PhoneInput
                country={"in"}
                enableSearch
                value={formData.phone}
                onChange={(phone) =>
                  setFormData({ ...formData, phone })
                }
                inputStyle={{
                  width: "100%",
                  background: "#000",
                  border: "1px solid #1f2937",
                  color: "white",
                  height: "48px",
                }}
                buttonStyle={{
                  background: "#000",
                  border: "1px solid #1f2937",
                }}
              />
            </div>

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
                SUBJECT <span className="text-red-500">*</span>
              </label>

              <textarea
                rows="5"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter message"
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


      {/* CENTER SUCCESS POPUP */}

      {showPopup && (
        <div className="absolute inset-0 flex items-center justify-center z-50">

          <div className="bg-black border border-green-500 px-10 py-8 rounded-xl shadow-2xl text-center animate-fadeIn">

            <h3 className="text-2xl font-semibold text-green-400 mb-2">
              ✅ Message Sent
            </h3>

            <p className="text-gray-300">
              Thank you! We will contact you soon.
            </p>

          </div>

        </div>
      )}

    </section>
  );
}


/* REUSABLE INPUT */

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
        {label} <span className="text-red-500">*</span>
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full bg-black/60 border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-600"
      />
    </div>
  );
}