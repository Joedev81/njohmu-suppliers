import React from "react";

export default function Contact() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')", // replace with your own background image
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* overlay */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-400 mb-3">GET IN TOUCH</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Have questions or want to reach out? We’d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xqaggdnb"
            method="POST"
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-2 text-green-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-green-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-green-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-green-300">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Send Message
            </button>
          </form>
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6">
            <h3 className="text-2xl font-semibold text-green-400">Contact Info</h3>
            <p>
              <strong>Address:</strong> Yukos Kitengela, Kajiado, Kenya
            </p>
            <p>
              <strong>Phone:</strong> +254 720 839 534
            </p>
            <p>
              <strong>Email:</strong> info@njohmu.com
            </p>

            <div className="mt-6">
              <iframe
                title="Google Map"
                className="w-full h-64 rounded-xl"
                src="https://www.google.com/maps/embed?pb=!4v1761985269792!6m8!1m7!1sXTEwHG3VNpiQ3RM3dErIKw!2m2!1d-1.507995504390649!2d36.95271324636913!3f289.2033883793875!4f-23.1682524311816!5f0.7820865974627469"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
