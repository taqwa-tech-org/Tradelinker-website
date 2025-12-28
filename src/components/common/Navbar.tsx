import Logo from "./Logo";
import NavLinks from "./NavLink";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="w-full py-3 min-h-[72px] md:min-h-[88px] lg:min-h-[96px]">
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        <div className="rounded-2xl flex items-center justify-between px-5 py-2.5
                        backdrop-blur-md bg- shadow-lg border border-white/30 ">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavLinks />

          {/* Mobile Hamburger */}
          <MobileMenu />

        </div>
      </div>
    </header>
  );
}
