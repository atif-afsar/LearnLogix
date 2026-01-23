import React, { useState } from "react";
import { Send, User, Mail, BookOpen, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    program: "",
    message: ""
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.fullName || !formData.email || !formData.message) {
    alert("Please fill all required fields");
    return;
  }

  try {
    const response = await fetch("https://learn-logix-backend-l5jz.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        program: formData.program,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    setIsSubmitted(true);
setShowSuccessModal(true);


   setTimeout(() => {
  setIsSubmitted(false);
  setShowSuccessModal(false);
  setFormData({
    fullName: "",
    email: "",
    program: "",
    message: "",
  });
}, 3000);


  } catch (error) {
    console.error("Frontend error:", error);
    alert(error.message || "Something went wrong");
  }
}; 


  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 p-8 lg:p-16 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-2xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
            <Sparkles size={16} />
            Let's Connect
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-black to-gray-700 bg-clip-text text-transparent">
            Send us a message
          </h2>
          <p className="text-gray-600 text-lg">
            We're here to help you succeed. Drop us a line and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 lg:p-10 border border-gray-100">
          <div className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-sm font-bold mb-3 text-gray-800 flex items-center gap-2">
                  <User size={16} className="text-yellow-500" />
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full border-2 rounded-xl px-4 py-3.5 transition-all duration-300 bg-gray-50 ${
                      focusedField === 'fullName'
                        ? 'border-yellow-400 bg-white shadow-lg shadow-yellow-100 scale-105 -translate-y-1'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-white'
                    } focus:outline-none`}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-bold mb-3 text-gray-800 flex items-center gap-2">
                  <Mail size={16} className="text-yellow-500" />
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full border-2 rounded-xl px-4 py-3.5 transition-all duration-300 bg-gray-50 ${
                      focusedField === 'email'
                        ? 'border-yellow-400 bg-white shadow-lg shadow-yellow-100 scale-105 -translate-y-1'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-white'
                    } focus:outline-none`}
                  />
                </div>
              </div>
            </div>

            {/* Program Selection */}
            <div className="relative">
              <label className="block text-sm font-bold mb-3 text-gray-800 flex items-center gap-2">
                <BookOpen size={16} className="text-yellow-500" />
                Interested Program
              </label>
              <div className="relative">
                <select
                  value={formData.program}
                  onChange={(e) => handleChange('program', e.target.value)}
                  onFocus={() => setFocusedField('program')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full border-2 rounded-xl px-4 py-3.5 transition-all duration-300 bg-gray-50 appearance-none cursor-pointer ${
                    focusedField === 'program'
                      ? 'border-yellow-400 bg-white shadow-lg shadow-yellow-100 scale-105 -translate-y-1'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-white'
                  } focus:outline-none ${formData.program ? 'text-gray-900' : 'text-gray-500'}`}
                >
                  <option value="">Select a category</option>
                  <option value="boards">Boards Preparation</option>
                  <option value="cuet">CUET</option>
                  <option value="law">Law Entrance</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <label className="block text-sm font-bold mb-3 text-gray-800 flex items-center gap-2">
                <MessageSquare size={16} className="text-yellow-500" />
                Message
              </label>
              <div className="relative">
                <textarea
                  rows="5"
                  placeholder="Tell us how we can help you achieve your academic goals..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full border-2 rounded-xl px-4 py-3.5 transition-all duration-300 bg-gray-50 resize-none ${
                    focusedField === 'message'
                      ? 'border-yellow-400 bg-white shadow-lg shadow-yellow-100 scale-105 -translate-y-1'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-white'
                  } focus:outline-none`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className={`group w-full font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-500 transform relative overflow-hidden ${
                  isSubmitted
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white scale-105'
                    : 'bg-gradient-to-r from-gray-900 to-black text-yellow-400 hover:from-yellow-400 hover:to-yellow-500 hover:text-black hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-yellow-200'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center gap-3">
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 size={22} className="animate-bounce" />
                      MESSAGE SENT SUCCESSFULLY
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      SEND MESSAGE
                    </>
                  )}
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-gray-100 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Quick Response
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                100% Secure
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            By submitting this form, you agree to our{" "}
            <Link to="/terms-of-service">
            <span className="text-yellow-600 hover:text-yellow-700 cursor-pointer font-semibold">Terms of Service</span>
            </Link>
            {" "}and{" "}
            <Link to="/privacy-policy">
            <span className="text-yellow-600 hover:text-yellow-700 cursor-pointer font-semibold">Privacy Policy</span>
            </Link>
          </p>
        </div>
      </div>

      {showSuccessModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Backdrop */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

    {/* Modal */}
    <div className="relative bg-white rounded-3xl p-10 w-[90%] max-w-md shadow-2xl animate-[scaleIn_0.4s_ease-out]">
      
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle2 size={42} className="text-green-600 animate-bounce" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Message Sent 🎉
        </h3>

        <p className="text-gray-600">
          Thanks for reaching out!  
          Our team will contact you within <span className="font-semibold">24 hours</span>.
        </p>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default ContactForm;