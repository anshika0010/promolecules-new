"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import MoreProducts from "./MoreProducts";
import { FaWhatsapp } from "react-icons/fa";


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

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#22c55e"
    strokeWidth="2.5"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CartIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

// ── Cart Popup ─────────────────────────────────────────────────────────────────
function CartPopup({
  isOpen,
  onClose,
  product,
  flavour,
  quantity,
  mode,
  productUrl,
}) {
  const subtotal = (product.price * quantity).toFixed(2);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-[#0d0d0d] border-l border-[#222] z-[999] flex flex-col
          transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1e1e1e]">
          <div className="flex items-center gap-3">
            <CartIcon />
            <span className="font-barlowCondensed font-bold tracking-[0.2em] uppercase text-sm">
              {mode === "buynow" ? "Checkout" : "Your Cart"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 grid place-items-center text-[#555] hover:text-white transition-colors rounded border border-[#1e1e1e] hover:border-[#444]"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Added confirmation strip */}
        <div className="flex items-center gap-2 px-6 py-3 bg-green-500/10 border-b border-green-500/20">
          <CheckIcon />
          <span className="text-green-400 text-xs tracking-[0.15em] uppercase font-medium">
            {mode === "buynow" ? "Ready to checkout!" : "Item added to cart!"}
          </span>
        </div>

        {/* Product row */}
        <div className="px-6 py-6 flex gap-4 border-b border-[#1e1e1e]">
          <div className="w-24 h-24 bg-[#111] border border-[#222] rounded overflow-hidden shrink-0">
            <Image
              src={flavour?.images?.[0] || product.images[0]}
              alt={product.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between flex-1 min-w-0">
            <div>
              <h3 className="font-black uppercase tracking-wider text-red-500 text-sm leading-tight truncate creepster-regular">
                {product.name}
              </h3>
              {flavour && (
                <p className="text-[#555] text-xs tracking-widest uppercase mt-1">
                  {flavour.name}
                </p>
              )}
            </div>
            <div className="flex items-end justify-between">
              <span className="text-[#444] text-xs tracking-widest">
                Qty: {quantity}
              </span>
            </div>
          </div>
        </div>

        {/* Order summary */}

        <div className="bg-[#111] border border-neutral-800 rounded-xl px-2 py-1 flex items-center justify-between hover:border-red-600 transition">
          {product?.flipkartLink ? (
            <a
              href={product.flipkartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#111]rounded-xl px-3 py-1 hover:border-yellow-400 transition"
            >
              <h3 className="text-md font-semibold text-white">
                Buy on Flipkart
              </h3>
              <p className="text-sm text-gray-400">
                Purchase this product securely from Flipkart.
              </p>
            </a>
          ) : (
            <div className="bg-[#111] border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white">
                Launching Soon...
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                This product will be available on Flipkart soon.
              </p>

              <a
                href="https://wa.me/17867892121"
                target="_blank"
                className="inline-block mt-4 text-sm font-semibold text-green-400 hover:text-green-300 transition"
              >
                <FaWhatsapp size={15} /> WhatsApp us if you want early access
              </a>
            </div>
          )}
          {product?.flipkartLink && (
            <a
              href={product.flipkartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-3 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Buy Now
            </a>
          )}
        </div>
      </div>
    </>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [factsOpen, setFactsOpen] = useState(false);
  const [open, setOpen] = useState(0);
  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [activeImg, setActiveImg] = useState(product.images[0]);

  // Cart popup state
  const [cartOpen, setCartOpen] = useState(false);
  const [cartMode, setCartMode] = useState("cart"); // "cart" | "buynow"

  const handleAddToCart = () => {
    setCartMode("cart");
    setCartOpen(true);
  };

  const handleBuyNow = () => {
    setCartMode("buynow");
    setCartOpen(true);
  };

  // ── Replace with your actual live product URL ──────────────────────────────
  const productUrl =
    product.liveUrl || "https://www.promolecules.com/products/father-of-insane";

  const sections = [
    { title: "DESCRIPTION", content: product.description },
    { title: "KEY BENEFITS", content: product.keyBenefits },
    { title: "WHY CHOOSE US", content: product.whychooseus },
    { title: "HOW TO USE", content: product.howToUse },
    { title: "WHAT TO AVOID", content: product.whatToAvoid },
  ];

  const toggle = (index) => setOpen(open === index ? null : index);

  return (
    <>
      {/* ── Cart Drawer Popup ── */}
      <CartPopup
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        product={product}
        flavour={selectedFlavour}
        quantity={quantity}
        mode={cartMode}
        productUrl={productUrl}
      />

      {/* ── Main Product Layout ── */}
      <div className="min-h-screen bg-gradient-to-br from-black via-[#111] to-[#0d0d0d] text-white flex items-center justify-center p-5 mt-20 font-barlowCondensed">
        <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-3 sticky top-7 h-fit self-start">
            <div className="relative flex items-center justify-center h-[460px] overflow-hidden border border-gray-500 rounded">
              <div className="absolute w-[300px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(224,0,27,0.12)_0%,transparent_70%)]" />
              <Image
                src={activeImg}
                alt="product"
                width={400}
                height={400}
className="h-[540px] w-full rounded object-cover relative z-10 transition-all duration-500 ease-in-out"              />
            </div>
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
          <div className="flex flex-col top-24">
            <h2 className="text-[52px] anton-regular uppercase text-red-600 leading-none mb-3 drop-shadow-[0_0_30px_rgba(224,0,27,0.3)]">
              {product.name}
            </h2>

            <div className="h-[2px] bg-gradient-to-r from-red-600 to-transparent mb-4" />

            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} filled={i <= 4} />
              ))}
            </div>

            <p className="global-text-style mb-4">{product.title}</p>

            <div className="text-[32px] font-black mb-6 leading-none">
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
              <button
                onClick={handleAddToCart}
                className="border-2 border-white py-2 font-bold tracking-[3px] rounded-xl uppercase hover:bg-white hover:text-black transition"
              >
                Add To Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-red-600 border-2 border-red-600 py-2 font-bold tracking-[3px] rounded-xl uppercase hover:bg-red-700 transition"
              >
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

            <MoreProducts />
          </div>
        </div>
      </div>

      {/* ── Accordion Section ── */}
      <section className="w-full bg-black text-white py-16 px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          <div className="relative">
            <Image
              src={product.images[2]}
              alt="product"
              width={400}
              height={400}
              className="h-[500px] w-auto object-contain relative z-10 transition-all duration-500 ease-in-out"
            />
          </div>
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
                    className={`text-white transition-transform duration-300 ${open === index ? "rotate-90" : ""}`}
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
