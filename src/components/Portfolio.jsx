import React from "react";

function Portfolio() {
  return (
    <section className="py-12 px-8 sm:px-12 md:px-16">
      {/* Header */}
      <div className="border-t border-gray-200 pt-8 pb-4 mb-2">
        <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-500">
          Experience
        </h2>
      </div>

      {/* Experience List */}
      <div className="border-t border-gray-200">
        {/* Experience 1 */}
        <div className="py-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h3 className="text-xl font-bold text-black">
              Frontend Developer, Weather Dashboard
            </h3>
            <span className="border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 mt-2 sm:mt-0 flex items-center gap-2">
              <span className="w-3 h-3 bg-gray-800 rounded-full inline-block"></span>
              2025 – Present · Remote
            </span>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base">
            <li>
              Built a responsive weather dashboard using React and Tailwind CSS
            </li>
            <li>
              Collaborated with design team to deliver a polished user
              experience
            </li>
            <li>
              Integrated weather API for real-time data fetching and display
            </li>
          </ul>
        </div>

        <div className="border-t border-dashed border-gray-200"></div>

        {/* Experience 2 
        <div className="py-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h3 className="text-xl font-bold text-black">
              Frontend Developer, Personal Projects
            </h3>
            <span className="border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 mt-2 sm:mt-0 flex items-center gap-2">
              <span className="w-3 h-3 bg-gray-400 rounded-full inline-block"></span>
              2023 – 2024 · Lagos, Nigeria
            </span>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base">
            <li>
              Developed responsive web applications with React and JavaScript
            </li>
            <li>
              Practiced clean code principles and modular component design
            </li>
            <li>Built portfolio projects to sharpen frontend skills</li>
          </ul>
        </div>*/}
      </div>
    </section>
  );
}

export default Portfolio;
