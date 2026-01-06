// import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  const industries = [
    { name: "Cold Storage", href: "/industries" },
    { name: "Dairy & Ice Cream Plants", href: "/industries" },
    { name: "Seafood Processing", href: "/industries" },
    { name: "Meat Processing", href: "/industries" },
    { name: "Grain Handling & Silos", href: "/industries" },
  ];

  const services = [
    { name: "HVAC Systems", href: "/services" },
    { name: "Refrigeration Systems", href: "/services" },
    { name: "Industrial Construction", href: "/services" },
    { name: "Turnkey Project Management", href: "/services" },
    { name: "Machinery & Equipment Supply", href: "/services" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Projects", href: "/projects" },
    { name: "Clients", href: "/clients" },
    { name: "Partners", href: "/partners" },
  ];

  return (
    <footer className="bg-gradient-to-b from-pearl-aqua-500 to-pearl-aqua-800 text-white">
      <div className="container px-6 md:px-10 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* <div className="mb-4 text-center flex">
              <Logo />
            </div> */}
            <h3 className="text-xl font-bold mb-3">Tradelinkers Engineering Ltd</h3>
            <p className="text-pearl-aqua-200 text-sm leading-relaxed mb-6">
              Full-service multidisciplinary engineering and contracting company with over 40 years of expertise.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-pearl-aqua-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-pearl-aqua-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium">House 11, Apt B4, Road 14</p>
                  <p>Gulshan 1, Dhaka 1212, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-pearl-aqua-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>+88 017 1152 3638</p>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-pearl-aqua-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>tlc@tlcbd.com</p>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="hidden md:block">
            <h4 className="text-lg font-bold mb-4 text-pearl-aqua-100">Industries</h4>
            <ul className="space-y-2">
              {industries.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-pearl-aqua-200 hover:text-pearl-aqua-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
           
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-pearl-aqua-100">Services</h4>
            <ul className="space-y-2">
              {services.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-pearl-aqua-200 hover:text-pearl-aqua-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-pearl-aqua-100">Company</h4>
            <ul className="space-y-2 mb-6">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-pearl-aqua-200 hover:text-pearl-aqua-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-pearl-aqua-100">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="mailto:tlc@tlcbd.com"
                  className="w-10 h-10 rounded-full bg-pearl-aqua-700 hover:bg-pearl-aqua-600 flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <Link
                  href="https://bd.linkedin.com/company/tradelinkers"
                  className="w-10 h-10 rounded-full bg-pearl-aqua-700 hover:bg-pearl-aqua-600 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/tlebd"
                  className="w-10 h-10 rounded-full bg-pearl-aqua-700 hover:bg-pearl-aqua-600 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

           
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-pearl-aqua-800">
          <div className="text-center flex-col md:flex-row  gap-4 text-sm text-pearl-aqua-300">
            <p>© 2025 Tradelinkers Engineering Ltd. All rights reserved.</p>
            {/* <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-pearl-aqua-100 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-pearl-aqua-100 transition-colors">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}