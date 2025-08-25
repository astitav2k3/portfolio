import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-50 px-6"
    >
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full gap-10">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Hi, I'm 
            <span className="text-indigo-600"><br/>Astitav Mittal</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A passionate Software Engineer skilled in React, Java, and Full Stack Development.  
            I love building clean UIs and scalable backend systems. 🚀
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-600 mb-6">
            <a href="https://linkedin.com/in/astitav2k3" target="_blank" rel="noreferrer"
              className="hover:text-indigo-600 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/astitav2k3" target="_blank" rel="noreferrer"
              className="hover:text-indigo-600 transition">
              <FaGithub />
            </a>
            <a href="https://twitter.com/astitav_mittal" target="_blank" rel="noreferrer"
              className="hover:text-indigo-600 transition">
              <FaTwitter />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="photos/resume.pdf"
            download
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition"
          >
            📄 Download My Resume
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="photos/profile.jpeg"
            alt="Profile"
            className="w-80 h-64 object-cover rounded-full shadow-lg border-4 border-indigo-100 hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
}
