import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

const NavLinks = () => {
  const links: NavLink[] = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "News", href: "/news" },
    { label: "Projects", href: "/projects" },
    { label: "Industries", href: "/industries" },
  ];

  return (
    <ul className="hidden lg:flex items-center">
      {links.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className="px-3 py-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-600"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
