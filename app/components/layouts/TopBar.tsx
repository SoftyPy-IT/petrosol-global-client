import Container from "../shared/utils/Container";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { socialLinks } from "./social-links";
import Link from "next/link";

export default function TopBar() {

  return (
    <div className="hidden md:block w-full bg-(--primary-dark) text-(--text-light) text-xs md:text-sm">

      <Container className="flex justify-between items-center h-10">

        {/* 🔥 LEFT INFO */}
        <div className="hidden lg:flex items-center gap-6 text-white/90">

          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>petrosolgloballtd@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+880 1XXX-XXXXXX</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>42 Jabbar Tower,  (Level-6), Gulshan-1, Dhaka, Bangladesh</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>Mon - Fri: 9AM - 6PM</span>
          </div>

        </div>

        {/* 🔥 RIGHT INFO */}
        <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
          {
            socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-(--primary-light) transition text-xl">
                {link.icon}
              </Link>
            ))
          }

        </div>

      </Container>

    </div>
  );
}
