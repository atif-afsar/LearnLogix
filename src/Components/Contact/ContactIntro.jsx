import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, Facebook } from "lucide-react";
import { Instagram, Youtube, Linkedin } from "lucide-react";


const ContactIntro = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-10 lg:p-14 flex flex-col justify-between h-full relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400 opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10">
        <span className="inline-block mb-6 px-5 py-2 text-xs font-bold tracking-widest bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
          CONTACT US
        </span>

        <h1 className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Get in Touch with <br /> the Experts
        </h1>

        <p className="mt-6 text-gray-400 max-w-md text-lg leading-relaxed">
          Whether you're preparing for Boards, CUET, or Law Entrance, we're here
          to guide you every step of the way.
        </p>

        <div className="mt-12 space-y-6">
          {[
            { icon: MapPin, title: "Head Office", info: "Gate No.2, Noor Manzil, Dodhpur Rd, opposite Shah ji Dairy, Aligarh, Uttar Pradesh 202001" },
            { icon: Mail, title: "Support Email", info: "learnwithlogix@gmail.com" },
            { icon: Phone, title: "Admissions Helpline", info: "+919084701476" }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex gap-4 p-4 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 hover:bg-opacity-10 hover:border-yellow-400 hover:border-opacity-50 transition-all duration-300 transform hover:translate-x-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-black" size={20} />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-gray-800 text-sm">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-5 mt-12 relative z-10">
  {[
    {
      icon: Instagram,
      href: "https://www.instagram.com/learn__logix/",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@Learn_logix",
      label: "YouTube",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/17MSd7MRVR/",
      label: "Facebook",
    },
  ].map(({ icon: Icon, href, label }, index) => (
    <a
      key={index}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        group relative
        w-12 h-12 rounded-full
        flex items-center justify-center
        border border-white/10
        bg-white/5 backdrop-blur-md
        text-gray-400
        hover:text-yellow-400
        hover:border-yellow-400/50
        hover:bg-yellow-400/10
        transition-all duration-300
        hover:scale-110
        hover:-translate-y-1
      "
    >
      <Icon size={20} />

      {/* Glow */}
      <span className="absolute inset-0 rounded-full bg-yellow-400 opacity-0 blur-xl group-hover:opacity-30 transition-opacity"></span>
    </a>
  ))}
</div>
    </section>
  );
};
export default ContactIntro;