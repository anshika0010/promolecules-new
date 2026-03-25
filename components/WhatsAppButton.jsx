"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "17867892121"; 
const message = "Hello! I'm interested in your products and would love to learn more about their benefits and availability.";  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
       aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-6 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg z-50 transition duration-300"
    >
      <FaWhatsapp size={35} />
    </a>
  );
}