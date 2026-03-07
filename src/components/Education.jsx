import React from "react";

function Education() {
  return (
    <section className="border border-gray-200 m-4 sm:m-6 md:m-8 rounded-lg">
      {/* Header */}
      <div className="border-t border-gray-200 pt-8 pb-4 mb-2">
        <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-500">
          Education
        </h2>
      </div>

      {/* Timeline */}
      <div className="border-t border-b border-gray-200 py-10">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-200"></div>

          {/* Education Entry 1 */}
          <div className="flex items-start py-8">
            {/* Date */}
            <div className="w-1/3 pr-8 text-right">
              <span className="text-sm text-gray-400">
                Nov 2021 - June 2025
              </span>
            </div>

            {/* Dot */}
            <div className="relative z-10 flex items-center justify-center">
              <span className="w-3.5 h-3.5 bg-gray-800 rounded-full border-2 border-white shadow"></span>
            </div>

            {/* Details */}
            <div className="w-2/3 pl-8">
              <h3 className="text-lg font-bold text-gray-900">B.Sc Physics</h3>
              <p className="text-sm text-gray-500 mt-1">
                Federal University of Agriculture Abeokuta — Ogun, Nigeria
              </p>
            </div>
          </div>

          {/* Education Entry 2 */}
          <div className="flex items-start py-8">
            {/* Date */}
            <div className="w-1/3 pr-8 text-right">
              <span className="text-sm text-gray-400">
                July 2025 - Jan 2026
              </span>
            </div>

            {/* Dot */}
            <div className="relative z-10 flex items-center justify-center">
              <span className="w-3.5 h-3.5 bg-gray-800 rounded-full border-2 border-white shadow"></span>
            </div>

            {/* Details */}
            <div className="w-2/3 pl-8">
              <h3 className="text-lg font-bold text-gray-900">
                Front-End Web Development
              </h3>
              <p className="text-sm text-gray-500 mt-1">ALX Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
