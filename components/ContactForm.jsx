"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Phone, Mail } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function ContactForm() {
  const { t, lang, country, displayFont } = useLocale();
  const f = t.ui.form;
  const E = f.errors;
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });

  const [errors, setErrors] = useState({});

  // 🔥 VALIDATION FUNCTION
  const validate = () => {
    let newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = E.name_required;
    } else if (!/^[\p{L}\s.'-]+$/u.test(formData.name)) {
      newErrors.name = E.name_letters;
    }

    // Phone
    if (!formData.phone) {
      newErrors.phone = E.phone_required;
    } else if (formData.phone.replace(/\D/g, "").length < 8) {
      newErrors.phone = E.phone_invalid;
    }

    // Email
    if (!formData.email) {
      newErrors.email = E.email_required;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = E.email_invalid;
    }

    // Subject
    if (!formData.subject.trim()) {
      newErrors.subject = E.msg_required;
    } else if (formData.subject.length < 10) {
      newErrors.subject = E.msg_short;
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // remove error on typing
    setErrors({ ...errors, [name]: "" });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
  const response = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.subject,
  }),
});

    if (!response.ok) {
      throw new Error("Server error: " + response.status);
    }

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      setFormData({ name: "", phone: "", email: "", subject: "" });
    }, 3000);

  } catch (error) {
    console.error("Form submission failed:", error);
    alert(f.fail);
  }
};

  return (
    <section className="max-w-7xl mx-auto min-h-[280px] sm:min-h-[350px] lg:min-h-[530px]  bg-black text-white py-1 sm:py-2 md:py-10 relative">
      <div
        className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 transition-all duration-300 ${
          showPopup ? "blur-md pointer-events-none" : ""
        }`}
      >
      

        {/* RIGHT FORM */}
        <div className="max-w-xl w-full">
          <h1 className={`text-4xl mb-10 text-red-600 ${displayFont}`}>
            {f.title}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME */}
            <InputField
              label={f.name_label}
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder={f.name_ph}
            />

            {/* PHONE */}
            <div>
              <label className="block text-xs text-gray-400 mb-2 tracking-widest">
                {f.phone_label} <span className="text-red-500">*</span>
              </label>

              {/* Phone numbers are always written left-to-right, also on Arabic pages */}
              <div dir="ltr">
              <PhoneInput
                country={country?.code || "in"}
                key={country?.code || "in"}
                enableSearch
                value={formData.phone}
                onChange={(phone) => {
                  setFormData({ ...formData, phone });
                  setErrors({ ...errors, phone: "" });
                }}
                inputStyle={{
                  width: "100%",
                  background: "#000",
                  border: errors.phone ? "1px solid red" : "1px solid #1f2937",
                  color: "white",
                  height: "48px",
                }}
              />
              </div>

              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* EMAIL */}
            <InputField
              label={f.email_label}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder={f.email_ph}
            />

            {/* SUBJECT */}
            <div>
              <label className="block text-xs text-gray-400 mb-2 tracking-widest">
                {f.subject_label} <span className="text-red-500">*</span>
              </label>

              <textarea
                rows="5"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={f.subject_ph}
                className={`w-full bg-black/60 border ${
                  errors.subject ? "border-red-500" : "border-gray-800"
                } rounded-md px-4 py-3 text-white focus:outline-none`}
              />

              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-red-600 w-full hover:bg-red-700 transition px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider"
            >
              {f.send}
            </button>
          </form>

        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="bg-black border border-green-500 px-10 py-8 rounded-xl shadow-2xl text-center">
            <h3 className="text-2xl font-semibold text-green-400 mb-2">
              {f.sent_title}
            </h3>
            <p className="text-gray-300">
              {f.sent_text}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

/* INPUT COMPONENT */
function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
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
        placeholder={placeholder}
        className={`w-full bg-black/60 border ${
          error ? "border-red-500" : "border-gray-800"
        } rounded-md px-4 py-3 text-white focus:outline-none`}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
