import Container from "@/app/components/shared/utils/Container";
import SectionHeader from "@/app/components/shared/utils/SectionHeader";

export default function TermsAndConditions() {
  return (
    <Container className="py-12">

      <SectionHeader
        title="Terms & Conditions"
        description="Please read these terms carefully before using our services."
      />

      <div className="mt-10 space-y-6 text-[var(--text-dark)] leading-7">

        <TermsCard title="1. Introduction">
          By using our website, you agree to comply with these Terms and Conditions.
        </TermsCard>

        <TermsCard title="2. Nature of Services">
          We provide solar energy, supply services, ship handling, berth operations, HR management, and terminal services.
        </TermsCard>

        <TermsCard title="3. User Responsibilities">
          Users must use our services legally and avoid any harmful or unauthorized activity.
        </TermsCard>

        <TermsCard title="4. Service Changes">
          We may modify or discontinue services at any time without prior notice.
        </TermsCard>

        <TermsCard title="5. Intellectual Property">
          All website content, branding, and materials are owned by the Company.
        </TermsCard>

        <TermsCard title="6. Limitation of Liability">
          We are not responsible for any damages arising from the use of our services.
        </TermsCard>

        <TermsCard title="7. Updates to Terms">
          These terms may be updated at any time, and continued use means acceptance.
        </TermsCard>

      </div>
    </Container>
  );
}

function TermsCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white border border-[var(--border)] shadow-theme rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{children}</p>
    </section>
  );
}
