import React from "react";
import { motion } from "framer-motion";

export default function Achievements() {
  const timeline = [
    { date: "August 2025", text: "Got Job at Verizon as SDE-1 🎉" },
    { date: "Feb 2024", text: "Published Patent at Indian Patent Council", extra: "Application No: 202411010479 | Date: 15 Feb 2024" },
    { date: "Dec 2023", text: "Conference Paper Published in IEEE Xplore", extra: "Document No: 10.1109/CISCT57197.2023.10351464" },
    { date: "April 2019", text: "In Merit List - 10th" }
  ];

  return (
    <section className="flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-10 text-blue-600">
        🎯 Achievements
      </h2>
      <div className="relative border-l-4 border-blue-500">
        {timeline.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="mb-8 ml-6 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-8 w-5 h-5 bg-blue-500 border-4 border-white rounded-full shadow-lg"></div>
            
            {/* Card */}
            <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition">
              <p className="text-lg font-semibold text-gray-800">{a.date}</p>
              <p className="text-gray-700">{a.text}</p>
              {a.extra && (
                <p className="text-sm text-gray-500 mt-1">{a.extra}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
