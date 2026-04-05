export type NavRole = "PUBLIC" | "ADMIN" | "AUTHENTICATED";

export type NavLink = {
  label: string;
  href?: string;
  children?: NavLink[];
  isExternal?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  role?: NavRole;
  badge?: string;
  description?: string;
};

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Industries",
    children: [
      {
        label: "Solar Energy Solutions",
        href: "/industries/solar-energy-solutions",
      },
      {
        label: "Infrastructure Development",
        href: "/industries/infrastructure-development",
      },
      {
        label: "Ship Handling",
        href: "/industries/ship-handling",
      },
      {
        label: "Berth Operations",
        href: "/industries/berth-operating",
      },
      {
        label: "Logistics & Supply Chain",
        href: "/industries/logistics-supply-chain",
      },
      {
        label: "Consulting & Strategy",
        href: "/industries/consulting-strategy",
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export function isNavLinkActive(link: NavLink, pathname: string): boolean {
  if (link.href && pathname === link.href) return true;
  if (link.children) return link.children.some((child) => isNavLinkActive(child, pathname));
  return false;
}


export function flattenNavLinks(links: NavLink[]): NavLink[] {
  return links.flatMap((link) =>
    link.children ? [link, ...flattenNavLinks(link.children)] : [link]
  );
}

export function getNavLinksByRole(links: NavLink[], role: NavRole): NavLink[] {
  return links.filter((link) => !link.role || link.role === role);
}
