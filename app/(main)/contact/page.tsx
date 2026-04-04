"use client"
import Container from "@/app/components/shared/utils/Container"
import SectionHeader from "@/app/components/shared/utils/SectionHeader"
import ContactForm from "@/app/components/shared/form/ContactForm"
import ContactInfo from "./__component/ContactInfo"

export default function ContactPage() {
  return (
    <Container className="py-10">

      {/* HEADER */}
      <SectionHeader
        title="Contact Us"
        description="We’d love to hear from you. Send us a message!"
      />

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

        {/* LEFT SIDE */}
        <ContactInfo />

        {/* RIGHT SIDE */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-theme ">
          <ContactForm />
        </div>

      </div>

    </Container>
  )
}
