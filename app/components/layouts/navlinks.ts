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
  { label: "Gallery", href: "/gallery" },
  { label: "Activities", href: "/activities" },
  { label: "Blog", href: "/blog" },
];
