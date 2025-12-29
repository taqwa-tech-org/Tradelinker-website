import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

type NavLinksProps = {
  mobile?: boolean;
};

export default function NavLinks({ mobile = false }: NavLinksProps) {
  const links: NavLink[] = [
    {label: "Home", href: "/"},
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    ];

  return (
    <nav
      className={`${
        mobile
          ? "flex flex-col space-y-6"
          : "flex items-center space-x-8"
      }`}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-800 font-medium hover:text-green-700 transition"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
