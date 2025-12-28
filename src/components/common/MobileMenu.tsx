"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavLinks from "./NavLink";

export default function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden text-3xl text-neutral-800 relative z-50"
        aria-label="Open menu"
      >
        <HiMenu />
      </button>

      {/* Overlay + Drawer */}
      {open && (
        <div className="fixed inset-0 z-40">
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Slide drawer */}
          <aside className="absolute right-0 top-0 h-full w-72 bg-white text-black p-6 shadow-xl z-50">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="text-3xl mb-8"
              aria-label="Close menu"
            >
              <HiX />
            </button>

            {/* Mobile links */}
            <NavLinks mobile />
          </aside>
        </div>
      )}
    </>
  );
}
