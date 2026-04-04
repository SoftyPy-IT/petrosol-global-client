import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      <div className="flex items-center gap-4">
        <Mail className="text-primary" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-600">petrosolgloballtd@gmail.com</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Phone className="text-primary" />
        <div>
          <h3 className="font-semibold">Phone</h3>
          <p className="text-gray-600">+880 1XXX-XXXXXX</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <MapPin className="text-primary" />
        <div>
          <h3 className="font-semibold">Location</h3>
          <p className="text-gray-600">42 Jabbar Tower, (Level-6), Gulshan-1, Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* MAP */}
      <div className="rounded-xl overflow-hidden border mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="w-full h-64"
          loading="lazy"
        />
      </div>

    </div>
  )
}
