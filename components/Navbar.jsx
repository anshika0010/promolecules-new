"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ added

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SHOP", href: "/shop" },
    { name: "BLOGS", href: "/blog" },
    { name: "CONTACT", href: "/contact-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 backdrop-blur-xl transition-transform duration-300  ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/promolecules-logo.webp"
            alt="Logo"
            width={150}
            height={80}
            className="object-contain w-28 sm:w-36"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 backdrop-blur-xl border border-white/10 rounded-full px-3 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-bold px-6 xl:px-8 py-2.5 rounded-full transition-all duration-300 text-sm tracking-wider text-white hover:bg-white/10"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Cart */}
 <button 
  className="hidden md:flex flex-shrink-0 bg-black/30 backdrop-blur-md border border-white/10 hover:bg-white/10 p-3.5 rounded-full transition-colors duration-200"
  aria-label="View shopping cart"
>
  <ShoppingCart size={22} className="text-white" />
</button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
       aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-6">
          {/* Mobile Links */}
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-bold text-white tracking-wider text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

    

          {/* Mobile Cart */}
       <button 
  className="w-full flex items-center justify-center bg-black/30 border border-white/10 hover:bg-white/10 p-3 rounded-full transition-colors duration-200"
  aria-label="Add to cart"
>
  <ShoppingCart size={22} className="text-white" />
</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;