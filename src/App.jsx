import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import WorkExp from "./components/WorkExp";
import Achievements from "./components/Achievements";

export default function App() {
  return (
    <div className="font-sans">
      {/* Navbar always visible */}
      <Navbar />

      {/* Sections - give IDs for scrolling */}
      <section id="home">
        <Home />
      </section>
      <section id="skills" className="py-16">
        <Skills />
      </section>
      <section id="projects" className="py-16">
        <Projects />
      </section>
      <section id="education" className="py-16">
        <Education />
      </section>
      <section id="workexp" className="py-16">
        <WorkExp />
      </section>
      <section id="achievements" className="py-16">
        <Achievements />
      </section>
    </div>
  );
}
