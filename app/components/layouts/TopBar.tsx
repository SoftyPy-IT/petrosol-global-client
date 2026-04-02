import Container from "../shared/utils/Container";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

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



          {/* Social Links */}
          <div className="flex items-center gap-3 text-white/80">
            <a target="_blank" href="https://www.facebook.com/petrosolgloballtd" className="hover:text-(--primary-light) transition text-xl"><FaFacebook /></a>
            <a target="_blank" href="https://www.linkedin.com/company/petrosol-global-ltd" className="hover:text-(--primary-light) transition text-xl"><FaLinkedin /></a>
            <a target="_blank" href="https://twitter.com/petrosolgloballtd" className="hover:text-(--primary-light) transition text-xl"><FaTwitter /></a>

          </div>

        </div>

      </Container>

    </div>
  );
}
