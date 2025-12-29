"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  mobile?: boolean;
}

const navItems = [
   { label:"Home" , href: '/'} ,
  { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
];

export default function NavLinks({ mobile = false }: NavLinksProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`
              text-lg font-medium transition-all duration-300 py-2 px-4 rounded-lg
              hover:bg-gray-100 hover:translate-x-2
              ${
                isActive(item.href)
                  ? "text-[#47b8ab]  font-semibold"
                  : "text-[#47b8ab] hover:text-[#47b8ab]"
              }
            `}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`
            relative text-base font-medium transition-all duration-300 py-2
            hover:text-[#47b8ab]
            ${
              isActive(item.href)
                ? "text-[#47b8ab]  "
                  : "text-black hover:text-[#47b8ab]"
            }
            group
          `}
        >
          {item.label}
          {/* Animated underline */}
          <span
            className={`
              absolute left-0 bottom-0 h-0.5 bg-[#47b8ab] transition-all duration-300
              ${
                isActive(item.href)
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }
            `}
          />
        </Link>
      ))}
    </nav>
  );
}