import Logo from "./Logo";
import NavLinks from "./NavLink";


const Navbar = () => {
  return (
    <>
      

      <header className="py-3">
        <div className="max-w-7xl mx-auto px-4 xl:px-0">
          <div className="bg-white rounded-2xl shadow flex items-center justify-between px-5 py-2.5">
            
            {/* Logo */}
            <Logo/>

            {/* Links */}
            <NavLinks />

            {/* Actions */}
            <div className="flex items-center gap-3">
              <a className="hidden text-black lg:block text-sm px-3 py-2 border rounded-md">
                Log in
              </a>
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
