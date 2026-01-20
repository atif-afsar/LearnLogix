import { motion } from "framer-motion";

/* Reusable Section */
function TermsSection({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-semibold text-black">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </motion.div>
  );
}

export default function TermsOfService() {
  return (
    <section className="bg-white text-black min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-[#FDC700]/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-32 w-[360px] h-[360px] bg-[#FDC700]/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Terms of Service
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-gray-700 text-lg max-w-3xl"
          >
            These Terms of Service govern your access to and use of the
            <span className="font-semibold text-black"> LearnLogix </span>
            platform, including our website, mobile applications, courses,
            and educational services.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-16">

        <TermsSection title="1. About LearnLogix">
          LearnLogix is a digital-first education platform designed to support
          students across India in school education, competitive exams, and
          professional pathways including Commerce, Humanities, CUET, and Law.
        </TermsSection>

        <TermsSection title="2. Acceptance of Terms">
          By accessing or using LearnLogix, you confirm that you have read,
          understood, and agreed to be bound by these Terms of Service.
          If you do not agree, you must discontinue use of the platform.
        </TermsSection>

        <TermsSection title="3. User Eligibility">
          Our services are intended for students, educators, and learners.
          Users under the age of 18 may use the platform only with the
          consent and supervision of a parent or legal guardian.
        </TermsSection>

        <TermsSection title="4. Courses & Educational Content">
          LearnLogix provides structured educational resources including:
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Class 11 & 12 (Commerce & Humanities)</li>
            <li>CUET UG & CUET PG preparation</li>
            <li>Law entrance and foundation courses</li>
          </ul>
          All content is provided for personal, non-commercial educational
          use only and may not be reproduced, redistributed, or resold.
        </TermsSection>

        <TermsSection title="5. User Responsibilities">
          You agree to:
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Provide accurate and up-to-date information</li>
            <li>Use the platform for lawful educational purposes only</li>
            <li>Not copy, share, or distribute course materials</li>
            <li>Respect instructors, staff, and other learners</li>
            <li>Not engage in disruptive or harmful behavior</li>
          </ul>
        </TermsSection>

        <TermsSection title="6. Account Security">
          You are responsible for maintaining the confidentiality of your
          account credentials. LearnLogix is not liable for any loss or damage
          arising from unauthorized access to your account.
        </TermsSection>

        <TermsSection title="7. Payments, Fees & Subscriptions">
          Some LearnLogix services may require payment. All fees are clearly
          communicated at the time of purchase. Payments are non-transferable
          and subject to our refund policy where applicable.
        </TermsSection>

        <TermsSection title="8. Intellectual Property">
          All content, branding, logos, videos, text, and materials on
          LearnLogix are the intellectual property of LearnLogix and its
          partners. Unauthorized use is strictly prohibited.
        </TermsSection>

        <TermsSection title="9. Third-Party Links & Services">
          Our platform may contain links to third-party websites or services.
          LearnLogix is not responsible for the content, policies, or practices
          of these third parties.
        </TermsSection>

        <TermsSection title="10. Limitation of Liability">
          LearnLogix shall not be liable for any indirect, incidental, or
          consequential damages arising from the use or inability to use
          our services, including loss of data or academic outcomes.
        </TermsSection>

        <TermsSection title="11. Termination of Access">
          We reserve the right to suspend or terminate user access if these
          Terms are violated or if misuse of the platform is detected.
        </TermsSection>

        <TermsSection title="12. Modifications to Terms">
          LearnLogix may update these Terms of Service from time to time.
          Continued use of the platform after changes constitutes acceptance
          of the revised terms.
        </TermsSection>

        <TermsSection title="13. Governing Law">
          These Terms are governed by and interpreted in accordance with the
          laws of India. Any disputes shall be subject to the jurisdiction
          of Indian courts.
        </TermsSection>

        <TermsSection title="14. Contact Information">
          If you have questions or concerns regarding these Terms, you may
          contact us through the official LearnLogix support channels.
        </TermsSection>

      </div>
    </section>
  );
}
