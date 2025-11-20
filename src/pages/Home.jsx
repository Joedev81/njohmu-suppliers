import React, { useState, useEffect } from "react";
import machine1 from "../../public/assets/machine1.jpg";
import machine2 from "../../public/assets/machine2.jpg";
import machine3 from "../../public/assets/machine3.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const slides = [machine1, machine2, machine3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Slideshow */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={'Slide ${index}'}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-4 drop-shadow-lg">
            Njohmu Machinery Suppliers
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Powering Kenya’s industries with reliable and efficient machinery for
            every sector — construction, farming, and manufacturing.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
            Explore Our Machines
          </button>
        </div>
      </div>

      {/* Trusted Brands Strip */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-green-700 mb-8">
            Our Trusted Machinery Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <img src="/assets/logos/cat.png" alt="CAT" className="w-32 mx-auto" />
            <img src="/assets/logos/hyundai.png" alt="Hyundai" className="w-32 mx-auto" />
            <img src="/assets/logos/komatsu.png" alt="Komatsu" className="w-32 mx-auto" />
            <img src="/assets/logos/shantui.png" alt="Shantui" className="w-32 mx-auto" />
            <img src="/assets/logos/sany.png" alt="Sany" className="w-32 mx-auto" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-20 text-center bg-white">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Our Mission & Vision
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Our mission is to deliver durable, efficient, and affordable machinery
          solutions that help businesses thrive. We envision becoming Kenya’s
          most trusted supplier by maintaining top quality, innovation, and
          customer satisfaction in every delivery.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-12 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Power Your Next Project?
        </h3>
        <Link to="/contact" className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-green-100 transition duration-300">
          Contact Us Today
        </Link>

      </section>
    </div>
  );
};

export default Home; 