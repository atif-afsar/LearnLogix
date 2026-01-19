import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactIntro = () => {
  return (
    <section className="bg-black text-white p-10 lg:p-14 flex flex-col justify-between h-full">
      <div>
        <span className="inline-block mb-6 px-4 py-1 text-xs font-semibold tracking-widest bg-yellow-400 text-black rounded-full">
          CONTACT US
        </span>

        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Get in Touch with <br /> the Experts
        </h1>

        <p className="mt-6 text-gray-300 max-w-md">
          Whether you're preparing for Boards, CUET, or Law Entrance, we’re here
          to guide you every step of the way.
        </p>

        <div className="mt-10 space-y-6">
          <div className="flex gap-4">
            <MapPin className="text-yellow-400" />
            <div>
              <h4 className="font-semibold">Head Office</h4>
              <p className="text-gray-400 text-sm">
                123 EdTech Plaza, South Extension II, New Delhi
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail className="text-yellow-400" />
            <div>
              <h4 className="font-semibold">Support Email</h4>
              <p className="text-gray-400 text-sm">support@learnlogix.edu</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="text-yellow-400" />
            <div>
              <h4 className="font-semibold">Admissions Helpline</h4>
              <p className="text-gray-400 text-sm">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-10 text-gray-400 text-sm">
        <span className="hover:text-yellow-400 cursor-pointer">Instagram</span>
        <span className="hover:text-yellow-400 cursor-pointer">LinkedIn</span>
        <span className="hover:text-yellow-400 cursor-pointer">YouTube</span>
      </div>
    </section>
  );
};

export default ContactIntro;
