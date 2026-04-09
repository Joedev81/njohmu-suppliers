import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          {/* Mission Section */}
          <div className="bg-gray-50 dark:bg-green-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a
              href="#"
              className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-400 mb-2"
            >
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
              </svg>
              Our Mission
            </a>

            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
              Delivering Durable, Efficient, and Affordable Machinery Solutions
            </h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              Our mission is to provide reliable, high-performance machinery that
              empowers businesses to grow and succeed. We focus on delivering lasting
              value through innovation, affordability, and exceptional service.
            </p>
          </div>

          {/* Vision & Values */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gray-50 dark:bg-green-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Our Vision
              </a>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Kenya’s Most Trusted Machinery Supplier
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                We envision becoming the leading and most trusted supplier of machinery in
                Kenya by setting the benchmark for quality, dependability, and customer
                satisfaction in every delivery.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-green-50 dark:bg-green-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Our Values
              </a>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Quality • Innovation • Integrity
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                We uphold strong values in every aspect of our work — maintaining the
                highest quality standards, embracing innovation, and building lasting
                relationships through honesty and respect.
              </p>
            </div>
          </div>

          {/* Executive Team Section */}
          <section className="mt-20 text-center">
            <h2 className="text-4xl font-bold text-black-200 dark:text-black mb-6">
              Meet The Njohmu's Family
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-black-300 mb-12">
              Behind every great company is a dedicated team of professionals who bring
              passion, expertise, and vision to life. Our leadership team works together
              to drive growth, uphold our values, and ensure we deliver excellence in all we do.
            </p>

            {/* CEO centered */}
            <div className="flex justify-center mb-16">
              <div className="bg-gray-50 dark:bg-green-800 p-8 rounded-2xl shadow-md flex flex-col items-center max-w-sm">
                <img
                  src="/public/team/ceo.jpg"
                  alt="CEO"
                  className="w-40 h-40 rounded-full object-cover mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Francis Njonge
                </h3>
                <p className="text-green-700 dark:text-green-400 font-medium mb-2">
                  Founder & CEO
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Francis leads the company with 15+ years of experience in strategic growth,
                  innovation, leadership excellence and most of all God Fearing Man.
                </p>
              </div>
            </div>

            {/* Other executives below */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
              <div className="bg-gray-50 dark:bg-green-800 p-6 rounded-2xl shadow-md flex flex-col items-center">
                <img
                  src="team/sd.jpg"
                  alt="SD"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Joe Mucheru
                </h3>
                <p className="text-green-700 dark:text-green-400 font-medium mb-2">
                  System Developer
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Joe designs and maintains efficient, secure and reliable digital systems that supports daily operations and business growth.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-green-800 p-6 rounded-2xl shadow-md flex flex-col items-center">
                <img
                  src="/team/sec.jpg"
                  alt="SEC"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Mary Wanjiku
                </h3>
                <p className="text-green-700 dark:text-green-400 font-medium mb-2">
                  The Secretary
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Mary responsible for handling official documentation, correspondence, and meeting records.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-green-800 p-6 rounded-2xl shadow-md flex flex-col items-center">
                <img
                  src="/images/team/cfo.jpg"
                  alt="CFO"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Philip Maitei
                </h3>
                <p className="text-green-700 dark:text-green-400 font-medium mb-2">
                  Machine Operator(Excavator)
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Philip oversees financial planning and ensures the company’s fiscal health.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-green-800 p-6 rounded-2xl shadowmd flex flex-col items-center">
                <img
                  src="/images/team/mr.jpg"
                  alt="MR"
                  className="w-23 h-32 rounded-full object-cover mb4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  James Ngaruhya
                </h3>
                <p className="text-green-700 dark:text-green-400 font-medium mb-2">
                  Marketing Representative
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  James promotes Njohmu Suppliers' products, engages customers, and supports brand growth through effective marketing efforts.
                </p>
              </div>
            </div>
          </section>

           {/* Testimonials Section */}
          <section className="mt-24 bg-green-50 dark:bg-green-900 py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
                We’re proud to have earned the trust of our clients through
                quality products, timely service, and lasting partnerships.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-green-800 p-8 rounded-2xl shadow-md">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    “Their machinery quality is unmatched. It’s durable, efficient,
                    and perfect for our business needs.”
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src="/public/testimonials/cli1.jpg"
                      alt="Client 1"
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Michael Otieno
                      </h4>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        Operations Manager, AgriWorks Ltd.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-green-800 p-8 rounded-2xl shadow-md">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    “Exceptional customer support! They guided us from purchase to
                    installation and training.”
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src="/public/testimonials/cli2.jpg"
                      alt="Client 2"
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Grace Njeri
                      </h4>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        CEO, GreenHarvest Co.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-green-800 p-8 rounded-2xl shadow-md">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    “Reliable, affordable, and professional. I’d highly recommend
                    them to anyone in the construction sector.”
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src="/public/testimonials/cli3.jpg"
                      alt="Client 3"
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Peter Mwangi
                      </h4>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        Managing Director, BuildTech Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}






