import React from "react";
import useSEO from "../Components/Common/useSEO";
import ContactIntro from "../Components/Contact/ContactIntro";
import ContactForm from "../Components/Contact/ContactForm";
import ContactMap from "../Components/Contact/ContactMap";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact LearnLogix",
    "description": "Contact LearnLogix for course inquiries, academic guidance, and support",
    "url": "https://learnlogix.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "LearnLogix",
      "url": "https://learnlogix.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": {
          "@type": "Country",
          "name": "India"
        }
      },
      "sameAs": [
        "https://www.youtube.com/@learnlogix",
        "https://www.instagram.com/learnlogix",
        "https://www.facebook.com/learnlogix"
      ]
    }
  };

  useSEO({
    title: "Contact LearnLogix – Get Support & Academic Guidance",
    description:
      "Contact LearnLogix for course inquiries, academic guidance, and support. Reach out to us through our contact form or connect with us online.",
    keywords: "Contact LearnLogix, LearnLogix support, LearnLogix help, LearnLogix contact, LearnLogix inquiry",
    ogTitle: "Contact LearnLogix – Get Support & Academic Guidance",
    ogDescription: "Contact LearnLogix for course inquiries, academic guidance, and support. Reach out to us through our contact form.",
    ogImage: "https://learnlogix.com/images/logo.png",
    canonical: "https://learnlogix.com/contact",
    structuredData
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
