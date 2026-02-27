import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

function AboutMe() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            About Me
          </h1>
        </div>

        <div className="bg-slate-700 bg-opacity-40 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-md border border-slate-600 shadow-2xl">
          {/* Bio Section */}
          <div className="mb-10 md:mb-12">
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                Titus Oluwadare
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-300 font-medium">
                Frontend Developer
              </p>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed space-y-4">
              I build precise, performant web interfaces. With one year of
              hands-on development experience, I leverage React, JavaScript, and
              modern CSS architectures to deliver responsive applications that
              align technical execution with business objectives. My approach
              emphasizes modular component design, clean code practices, and
              attention to user-centric details, ensuring solutions that are as
              maintainable as they are functional. Currently available for
              full-time roles and contract projects Building
            </p>
          </div>

          {/* Key Strengths Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-10">
              Key Strengths
            </h2>

            {/* Skills Grid - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Frontend Card */}
              <div className="bg-slate-600 bg-opacity-30 rounded-lg p-6 border border-slate-500 hover:border-blue-400 transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-300 mb-3">
                  Frontend
                </h3>
                <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
                  React.js, HTML, JavaScript and CSS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 md:mt-16 text-center">
          <div className="text-gray-400 text-sm sm:text-base">
            <div className="flex justify-center gap-8 sm:gap-12">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=oluwadaretitus3@gmail.com"
                className="text-gray-300 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} />
              </a>
              <a
                href="www.linkedin.com/in/titus-oluwadare"
                className="text-gray-300 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Horllydreycz"
                className="text-gray-300 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 sm:pt-8 border-t border-slate-600">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              © {new Date().getFullYear()} Titus Oluwadare. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default AboutMe;
