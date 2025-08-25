import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const edu = [
    {
      school: "Chitkara University",
      years: "2021 - 2025",
      degree: "B.E CSE",
      score: "8.68 CGPA"
    },
    {
      school: "Delhi Public School",
      years: "2020 - 2021",
      degree: "12th (CBSE)",
      score: "87.20%"
    },
    {
      school: "Kaintal School",
      years: "2018 - 2019",
      degree: "10th (ICSE)",
      score: "91.80%"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500">
          {edu.map((e, i) => (
            <motion.div
              key={i}
              className="mb-12 ml-6 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Circle marker */}
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full ring-4 ring-white text-white font-bold">
                {edu.length - i}
              </span>

              {/* Card */}
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{e.school}</h3>
                  <p className="text-sm text-gray-500">{e.years}</p>
                </div>
                <p className="text-gray-600">{e.degree}</p>
                <p className="mt-2 text-blue-600 font-bold">{e.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
