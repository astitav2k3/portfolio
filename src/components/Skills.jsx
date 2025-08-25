import React from "react";

export default function Skills() {
  const skills = [
    { name: "Java", level: 90 },
    { name: "C++", level: 70 },
    { name: "ReactJS", level: 85 },
    { name: "NodeJS", level: 75 },
    { name: "MongoDB", level: 65 },
    { name: "SQL", level: 70 },
    { name: "JavaScript", level: 80 },
    { name: "Selenium", level: 50 },
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-gray-50 flex justify-center items-center"
    >
      <div className="w-full max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          My <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((s, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">{s.name}</span>
                <span className="text-gray-600">{s.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
                  style={{ width: `${s.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
