"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavLinks from "./NavLink";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden text-3xl text-neutral-800"
        aria-label="Open menu"
      >
        <HiMenu />
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          {/* Drawer */}
          <div className="fixed right-0 top-0 h-full w-72 bg-white p-6 shadow-lg">
            <button
              onClick={() => setOpen(false)}
              className="text-3xl mb-6"
              aria-label="Close menu"
            >
              <HiX />
            </button>

            {/* Mobile Nav */}
            <NavLinks mobile />
          </div>
        </div>
      )}
    </>
  );
}
