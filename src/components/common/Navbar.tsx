"use client";

import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLink";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="w-full py-3 min-h-[72px] md:min-h-[88px] lg:min-h-[96px] relative z-50">
        <div className="max-w-7xl mx-auto px-4 xl:px-0">
          <div className="rounded-2xl flex items-center justify-between px-5 py-2.5 shadow-lg border border-white/30 bg-white">
            
            {/* Logo */}
            <Logo />

            {/* Desktop Nav */}
            <div className="hidden lg:block">
              <NavLinks />
            </div>

            {/* Mobile / Tablet Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-3xl"
              aria-label="Open Menu"
            >
              <HiMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white p-6 shadow-xl">
            
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="text-3xl mb-6"
              aria-label="Close Menu"
            >
              <HiX />
            </button>

            {/* Mobile Navigation */}
            <NavLinks mobile />
          </div>
        </div>
      )}
    </>
  );
}
