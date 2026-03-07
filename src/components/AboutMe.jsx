import React from "react";

const services = ["React", "Javascript", "Tailwind", "Responsive Design"];

function AboutMe() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Label */}
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-500 mb-6">
          About Me
        </p>

        {/* Main Intro */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Titus Oluwadare — Frontend Developer
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed mb-4">
          I build precise, performant web interfaces. With one year of hands-on
          development experience, I leverage React, JavaScript, and modern CSS
          architectures to deliver responsive applications that align technical
          execution with business objectives.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed mb-10">
          My approach emphasizes modular component design, clean code practices,
          and attention to user-centric details, ensuring solutions that are as
          maintainable as they are functional.
        </p>

        {/* Services */}
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4">
            Services
          </p>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <span
                key={service}
                className="border border-gray-300 rounded-full px-5 py-2 text-sm sm:text-base text-gray-700"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
