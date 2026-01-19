import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-white p-10 lg:p-14">
    <div>
        <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
    </div>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Interested Program
          </label>
          <select className="w-full border rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>Select a category</option>
            <option>Boards Preparation</option>
            <option>CUET</option>
            <option>Law Entrance</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="How can we help you?"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-yellow-400 font-semibold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 hover:text-black transition"
        >
          SEND MESSAGE →
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
