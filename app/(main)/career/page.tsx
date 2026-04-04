"use client"
import Career from "@/app/components/career/Career";
import Container from "@/app/components/shared/utils/Container";
import SectionHeader from "@/app/components/shared/utils/SectionHeader";

export default function CareerPage() {
  return (
    <Container className="py-12">

      {/* HEADER */}
      <SectionHeader
        title="Careers"
        description="Join our team and build your career with a company that values growth, innovation, and excellence."
      />

      {/* INTRO */}
      <div className="mt-10 bg-white border border-[var(--border)] shadow-theme rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-2">Why Work With Us?</h2>
        <p className="text-[var(--text-dark)] leading-7">
          We believe in creating a positive work environment where talent is nurtured,
          innovation is encouraged, and employees grow both professionally and personally.
          Join us to be part of a dynamic and forward-thinking organization.
        </p>
      </div>
      <Career />
    </Container>
  );
}
