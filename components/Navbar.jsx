"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import SearchModal from "../components/SearchModal";
const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const pathname = usePathname();

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
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SHOP", href: "/shop" },
    { name: "BLOGS", href: "/blog" },
    { name: "CONTACT", href: "/contact-us" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 backdrop-blur-xl transition-transform duration-300 ${
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
              height={150}
              className="object-contain w-34 sm:w-40"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 backdrop-blur-xl border border-white/10 rounded-full px-3 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold px-4 xl:px-8 py-1.5 rounded-full transition-all duration-300 text-sm tracking-wider ${
                  isActive(link.href)
                    ? "bg-red-300  text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Search */}
           <button
  onClick={() => setSearchOpen(true)} // ✅ 
  className="..."
>
  <Search size={22} className="text-white" />
</button>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="flex-shrink-0 bg-black/30 backdrop-blur-md border border-white/10 hover:bg-white/10 p-3.5 rounded-full transition-colors duration-200"
              aria-label="View shopping cart"
            >
              <ShoppingCart size={22} className="text-white" />
            </button>
          </div>

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
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-bold tracking-wider text-sm transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-white underline underline-offset-4 decoration-2"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* Mobile Icons */}
            <div className="flex items-center gap-3">
              {/* Search */}
             <button
  onClick={() => setSearchOpen(true)} // ✅ 
  className="..."
>
  <Search size={22} className="text-white" />
</button>

              {/* Cart */}
              <button
                onClick={() => { setCartOpen(true); setIsOpen(false); }}
                className="flex-1 flex items-center justify-center bg-black/30 border border-white/10 hover:bg-white/10 p-3 rounded-full transition-colors duration-200"
                aria-label="View shopping cart"
              >
                <ShoppingCart size={22} className="text-white" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── Cart Sidebar ── */}

      {/* Backdrop */}
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-sm bg-[#0a0a0a] border-l border-white/10 flex flex-col transition-transform duration-500 ease-in-out ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <ShoppingCart size={20} className="text-red-500" />
            <span className="text-white font-bold tracking-widest text-sm uppercase">
              Your Cart
            </span>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="text-white/50 hover:text-white transition-colors duration-200 bg-white/5 hover:bg-white/10 p-2 rounded-full"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-6">
          {/* Animated Icon */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-red-600/10 border border-red-500/20 flex items-center justify-center">
              <ShoppingCart size={32} className="text-red-500" />
            </div>
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full border border-red-500/30 animate-ping" />
          </div>

          <div className="space-y-3">
            <h2 className="text-white font-extrabold text-xl tracking-wide uppercase">
              We're Working On It
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
              Our cart experience is currently under construction. Check back soon — something powerful is coming.
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-red-600/40" />

          {/* Tag */}
          <span className="text-red-500/70 text-xs tracking-[0.2em] uppercase font-semibold">
            Coming Soon
          </span>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-white/10">
          <Link
            href="/shop"
            onClick={() => setCartOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-widest uppercase py-3.5 rounded-full transition-colors duration-200"
          >
            Browse Shop
          </Link>
        </div>
      </div>
       <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Navbar;