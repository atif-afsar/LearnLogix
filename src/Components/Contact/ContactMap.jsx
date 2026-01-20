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
          src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[400px] saturate-0 hover:saturate-100 transition-all duration-700"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ContactMap;