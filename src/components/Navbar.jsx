import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // all sections with <section id="...">

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible = active
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const linkClass = (id) =>
    activeSection === id
      ? "text-blue-500 font-bold border-b-2 border-blue-500" // highlighted style
      : "hover:text-blue-500";

  return (
    <nav className="fixed w-full top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">
            <a href="#home"> Astitav</a>
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className={linkClass("home")}>Home</a></li>
          <li><a href="#skills" className={linkClass("skills")}>Skills</a></li>
          <li><a href="#projects" className={linkClass("projects")}>Projects</a></li>
          <li><a href="#education" className={linkClass("education")}>Education</a></li>
          <li><a href="#workexp" className={linkClass("workexp")}>Work Experience</a></li>
          <li><a href="#achievements" className={linkClass("achievements")}>Achievements</a></li>
        </ul>

        {/* Burger button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-100">
          <li><a href="#home" className={linkClass("home")} onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#skills" className={linkClass("skills")} onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" className={linkClass("projects")} onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#education" className={linkClass("education")} onClick={() => setOpen(false)}>Education</a></li>
          <li><a href="#workexp" className={linkClass("workexp")} onClick={() => setOpen(false)}>Work Experience</a></li>
          <li><a href="#achievements" className={linkClass("achievements")} onClick={() => setOpen(false)}>Achievements</a></li>
        </ul>
      )}
    </nav>
  );
}
