const ContactMap = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-50 p-10">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Visit Us</h3>
        <p className="text-gray-600">Find us on the map</p>
      </div>

      <div className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-yellow-200">
        <iframe
          title="Learnlogix HQ"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.922600629327!2d78.08601737493018!3d27.90434841677613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5d70f3e7749%3A0x41ca273bd8cefb99!2sThe%20Edu%20Excel%20%7C%20Online%20%26%20Offline%20Coaching%20in%20Aligarh!5e0!3m2!1sen!2sin!4v1768908399720!5m2!1sen!2sin"
          className="w-full h-[400px] saturate-0 hover:saturate-100 transition-all duration-700"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default ContactMap;
