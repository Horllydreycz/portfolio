import React from "react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Zap } from "lucide-react";

function Header() {
  return (
    <div className="border-b border-gray-200">
      {/* Banner */}
      <div className="h-64 sm:h-72 md:h-80 relative overflow-hidden">
        <div className="bg-[url('src/assets/3.png')] bg-cover bg-center h-full w-full"></div>
      </div>

      {/* Profile Photo */}
      <div className="relative px-8 sm:px-12 md:px-16">
        <div className="absolute -top-20 z-10">
          <div className="relative">
            <img
              src="src/assets/profile.png"
              alt="Pfp"
              className="w-40 h-40 border-4 border-white object-cover rounded-full shadow-lg"
            />
            <span className="absolute bottom-3 right-3 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-8 sm:px-12 md:px-16 pt-24 pb-6 gap-6">
        {/* Left: Name & Details */}
        <div className="w-full sm:w-1/4 flex flex-col gap-1 font-roboto">
          <h1 className="text-3xl font-black text-black">Titus Oluwadare</h1>
          <h2 className="text-lg font-bold text-purple-600">
            Junior Front-End Developer
          </h2>
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Lagos, Nigeria</span>
          </div>
        </div>

        {/* Right: Social Icons + CTA */}
        <div className="flex items-center gap-4 font-roboto">
          <div className="flex gap-3">
            <a
              href="https://x.com/Horllydreycz"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=oluwadaretitus3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/titus-oluwadare"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <a
            href="mailto:oluwadaretitus3@gmail.com"
            className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full border-2 border-yellow-400 hover:bg-gray-800 transition-colors cursor-pointer font-medium"
          >
            <Zap className="h-4 w-4 text-yellow-400" />
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
