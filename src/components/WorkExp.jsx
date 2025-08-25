import React, { useEffect, useState } from "react";

export default function WorkExp() {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const startDate = new Date("2025-08-01");
    const now = new Date();
    const months =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());
    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    setDuration(`${years} years ${remMonths} months`);
  }, []);

  return (
    <section id="work" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Work Experience</h2>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-left border-l-4 border-blue-500 hover:shadow-xl transition">
          {/* Header Row */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Verizon
              </h3>
              <p className="text-gray-600 font-medium">Software Development Engineer - I</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Aug 2025 – Present</p>
              <p className="text-sm text-blue-600">({duration})</p>
            </div>
          </div>

          {/* Description */}
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>Developing scalable microservices with Spring Boot & Java.</li>
            <li>Integrated React frontend with backend APIs hosted on AWS.</li>
            <li>Worked on CI/CD pipelines using GitLab & Docker for deployments.</li>
            <li>Collaborated with cross-functional teams to deliver features on time.</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-left border-l-4 border-green-500 hover:shadow-xl transition">
          {/* Header Row */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Freelancer
              </h3>
              <p className="text-gray-600 font-medium">Web Designer & Developer</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Feb 2025 – Jul 2025</p>
              <p className="text-sm text-green-600">(6 months)</p>
            </div>
          </div>

          {/* Description */}
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>Designed and developed responsive websites for small businesses.</li>
            <li>Worked with React, Node, CSS, JS for Frontend & FullStack projects.</li>
            <li>Delivered SEO-friendly and optimized web pages improving performance.</li>
            <li>Collaborated with clients to understand requirements and deliver on time.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
