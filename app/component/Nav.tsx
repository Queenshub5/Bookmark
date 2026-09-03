"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6 md:py-10 w-full md:w-[90%] mx-auto">
          
          {/* Logo */}
          <div className="relative z-50">
            <Image
              src="/images/logo-bookmark.svg"
              alt="Bookmark Logo"
              width={150}
              height={30}
              className={`object-contain transition-all ${isOpen ? "invert brightness-0" : ""}`} 
             
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-10 items-center text-sm font-medium tracking-widest">
            <Link href="/" className="text-[#252B46] hover:text-[#FA5757] transition-colors">
              FEATURES
            </Link>
            <Link href="/#pricing" className="text-[#252B46] hover:text-[#FA5757] transition-colors">
              PRICING
            </Link>
            <Link href="/#contact" className="text-[#252B46] hover:text-[#FA5757] transition-colors">
              CONTACT
            </Link>
            <button className="bg-[#FA5757] hover:bg-white hover:text-[#FA5757] border-2 border-[#FA5757] font-semibold px-8 py-2 rounded-md text-xs text-white shadow-md shadow-[#FA5757]/20 transition-all uppercase tracking-widest">
              LOGIN
            </button>
          </div>

          {/* Hamburger Icon Button for Mobile Screens */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#252B46] hover:text-[#FA5757] transition-colors focus:outline-none relative z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Overlay Menu Drawer */}
      <div 
        className={`fixed inset-0 bg-[#252B46]/95 z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-32 px-8
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-6 text-center text-xl tracking-widest text-white font-light">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="border-t border-gray-500/40 pt-6 hover:text-[#FA5757] transition-colors"
          >
            FEATURES
          </Link>
          <Link 
            href="/pricing" 
            onClick={() => setIsOpen(false)}
            className="border-t border-gray-500/40 pt-6 hover:text-[#FA5757] transition-colors"
          >
            PRICING
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="border-y border-gray-500/40 py-6 hover:text-[#FA5757] transition-colors"
          >
            CONTACT
          </Link>
          
          <button className="border-2 border-white font-semibold w-full py-3 rounded-md text-sm mt-4 tracking-widest hover:bg-white hover:text-[#252B46] transition-all uppercase">
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
