import Container from "@/app/components/shared/utils/Container";
import SectionHeader from "@/app/components/shared/utils/SectionHeader";

export default function PrivacyPolicy() {
  return (
    <Container className="py-10">

      <SectionHeader
        title="Privacy Policy"
        description="We respect your privacy and are committed to protecting your personal data."
      />

      <div className="mt-10 space-y-6 text-[var(--text-dark)] leading-7">

        <PolicyCard title="1. Introduction">
          The Company is committed to protecting the privacy of users and ensuring safe handling of personal data.
        </PolicyCard>

        <PolicyCard title="2. Information We Collect">
          We may collect name, email, phone number, and any details provided through contact forms.
        </PolicyCard>

        <PolicyCard title="3. How We Use Information">
          We use your data to provide services, respond to inquiries, and improve user experience.
        </PolicyCard>

        <PolicyCard title="4. Data Protection">
          We apply appropriate security measures to protect your personal information.
        </PolicyCard>

        <PolicyCard title="5. Cookies">
          Cookies may be used to enhance functionality and analyze website traffic.
        </PolicyCard>

        <PolicyCard title="6. Third-Party Services">
          We may use trusted third-party tools for analytics and service improvement.
        </PolicyCard>

        <PolicyCard title="7. Your Rights">
          You may request access, correction, or deletion of your personal data.
        </PolicyCard>

      </div>
    </Container>
  );
}

function PolicyCard({
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
