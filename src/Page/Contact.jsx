import React from "react";
import useSEO from "../Components/Common/useSEO";
import ContactIntro from "../Components/Contact/ContactIntro";
import ContactForm from "../Components/Contact/ContactForm";
import ContactMap from "../Components/Contact/ContactMap";

const Contact = () => {
  useSEO({
    title: "Contact LearnLogix – Get Support & Academic Guidance",
    description:
      "Contact LearnLogix for course inquiries, academic guidance, and support. Reach out to us through our contact form or connect with us online.",
  });

  return (
    <main>
      <section className="grid lg:grid-cols-2 min-h-screen">
        <ContactIntro />
        <ContactForm />
      </section>

      <section>
        <ContactMap />
      </section>
    </main>
  );
};

export default Contact;
