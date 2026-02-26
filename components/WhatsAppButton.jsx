"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "17867892121"; // US number (country code + number, no symbols)
  const message = "Hello, I am interested in your products.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-5 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg z-50 transition duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}