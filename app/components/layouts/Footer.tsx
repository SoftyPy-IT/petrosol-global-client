import { navLinks } from "./navlinks";

export default function Footer() {
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Partners", href: "/partners" },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "X", href: "#" },
  ];

  const contactInfo = {
    address: "Dhaka, Bangladesh",
    email: "[EMAIL_ADDRESS]",
    phone: "+880 1XXX-XXXXXX",
  };



  return (
    <footer className="bg-(--primary-dark) text-(--text-light) mt-20">

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* ================= COMPANY INFO ================= */}
        <div>
          <h2 className="text-xl font-bold mb-4">PetroSol Global</h2>
          <p className="text-sm text-[rgba(255,255,255,0.75)] leading-6">
            A global infrastructure and energy solutions company specializing in
            solar energy, port operations, terminal management, and logistics services.
          </p>
        </div>

        {/* ================= USEFUL LINKS ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-[rgba(255,255,255,0.75)]">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-(--primary-light) transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-[rgba(255,255,255,0.75)]">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-(--primary-light) transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-[rgba(255,255,255,0.75)] space-y-2 text-sm">
            <li>📍 {contactInfo.address}</li>
            <li>📧 {contactInfo.email}</li>
            <li>📞 {contactInfo.phone}</li>
          </ul>

          {/* Social */}
          <div className="flex gap-4 mt-4 text-[rgba(255,255,255,0.8)]">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="cursor-pointer hover:text-(--primary-light) transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-[rgba(255,255,255,0.15)]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between text-sm text-[rgba(255,255,255,0.6)]">

          <p>© {new Date().getFullYear()} PetroSol Global Pvt Ltd. All rights reserved.</p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-(--primary-light)">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-(--primary-light)">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
