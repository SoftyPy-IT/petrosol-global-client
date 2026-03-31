export type TNavLinks = {
  label: string;
  href: string;
  isExternal?: boolean;
  icon?: string;
  role?: "PUBLIC" | "ADMIN";
};


export const navLinks: TNavLinks[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
