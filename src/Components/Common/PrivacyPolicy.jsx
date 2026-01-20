import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-gray-700 text-lg max-w-3xl"
          >
            At <span className="font-semibold text-black">LearnLogix</span>, we
            respect your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard your data when you use our website, mobile app, and
            services.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-16">

        {/* Section */}
        <PolicySection title="1. About LearnLogix">
          LearnLogix is a digital-first education platform designed to support
          students from school-level education to competitive and professional
          courses. We serve learners across India preparing for Commerce,
          Humanities, CUET UG/PG, and Law careers.
        </PolicySection>

        <PolicySection title="2. Information We Collect">
          We may collect the following information when you interact with our
          platform:
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Personal details such as name, email address, phone number</li>
            <li>Academic preferences and course interests</li>
            <li>Messages submitted through contact or enquiry forms</li>
            <li>Technical data such as browser type, device, and IP address</li>
          </ul>
        </PolicySection>

        <PolicySection title="3. How We Use Your Information">
          Your information is used strictly for educational and communication
          purposes, including:
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Providing access to courses and learning resources</li>
            <li>Responding to enquiries and support requests</li>
            <li>Improving our content, services, and user experience</li>
            <li>Sharing important updates related to courses or platform</li>
          </ul>
        </PolicySection>

        <PolicySection title="4. Courses & Services">
          LearnLogix offers structured learning programs for:
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Class 11 & 12 (Commerce & Humanities)</li>
            <li>CUET UG & PG preparation</li>
            <li>Law aspirants including BA LL.B foundation</li>
          </ul>
          We do not sell or rent your personal data to third parties.
        </PolicySection>

        <PolicySection title="5. Data Protection & Security">
          We implement industry-standard security measures to protect your
          personal data from unauthorized access, misuse, or disclosure.
          However, no online platform can guarantee 100% security.
        </PolicySection>

        <PolicySection title="6. Third-Party Services">
          Our platform may contain links to third-party services such as YouTube,
          WhatsApp, or payment gateways. LearnLogix is not responsible for the
          privacy practices of these external platforms.
        </PolicySection>

        <PolicySection title="7. Children’s Privacy">
          LearnLogix is intended for students and learners. We do not knowingly
          collect personal data from children under the age of 13 without
          parental consent.
        </PolicySection>

        <PolicySection title="8. Changes to This Policy">
          We may update this Privacy Policy from time to time. Any changes will
          be reflected on this page with an updated revision date.
        </PolicySection>

        <PolicySection title="9. Contact Us">
          If you have any questions about this Privacy Policy or our data
          practices, please contact us at:
          <p className="mt-3 font-medium">
            📧 learnwithlogix@gmail.com <br />
            📞 +91 90847 01476
          </p>
        </PolicySection>

        {/* Footer note */}
        <p className="text-sm text-gray-500 pt-10 border-t">
          Last updated: {new Date().toLocaleDateString("en-IN")}
        </p>
      </div>
    </section>
  );
}

/* Reusable Section Component */
function PolicySection({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-semibold text-black border-l-4 border-[#FDC700] pl-4">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed text-base">
        {children}
      </div>
    </motion.div>
  );
}
