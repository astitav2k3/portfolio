import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "PaperWallah",
      desc: "An AI platform where students can practice mock tests and get performance analysis.",
      tech: "MERN Stack",
      url: "https://paperwallah.com/"
    },
    {
      title: "Gym Website",
      desc: "A responsive gym website showcasing membership plans and training schedules.",
      tech: "ReactJS ,CSS ,JS ,Forms",
      url: "https://pulse-fit-demo.vercel.app/"
    },
    {
      title: "Cafe Rapture",
      desc: "A modern cafe website featuring menu display, table booking, and contact form.",
      tech: "React, Node.js, Forms",
      url: "https://cafe-rapture.vercel.app/"
    },
    {
      title: "Save Box Game",
      desc: "A fun arcade-style game inspired by Flappy Bird with obstacle dodging mechanics.",
      tech: "HTML, CSS, JS",
      url: "https://astitav2k3.github.io/save-the-box/"
    },
    {
      title: "To-Do List",
      desc: "A productivity app to manage tasks efficiently.",
      tech: "ReactJS, NodeJS, MongoDB",
      url: "#"
    },
    {
      title: "SalonPro",
      desc: "A fullstack website to book salon services with user and admin login options.",
      tech: "ReactJS, NodeJS, MongoDB",
      url: "#"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition transform"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-600 mb-3">{proj.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {proj.tech}
              </span>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
