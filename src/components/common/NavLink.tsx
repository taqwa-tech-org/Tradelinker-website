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
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Projects", href: "/projects" },
    { label: "Industries", href: "/industries" },
  ];

  return (
    <ul
      className={
        mobile
          ? "flex flex-col gap-5"
          : "hidden lg:flex items-center"
      }
    >
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
}
