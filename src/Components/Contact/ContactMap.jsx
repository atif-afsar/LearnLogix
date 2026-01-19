import React from "react";

const ContactMap = () => {
  return (
    <section className="bg-gray-100 p-6">
      <div className="overflow-hidden rounded-2xl border">
        <iframe
          title="Learnlogix HQ"
          src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[300px] grayscale"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ContactMap;
