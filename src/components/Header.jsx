import React from "react";
import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa";

const Header = () => {
  return (
      <div className="header-container">
        <div className="main-section">
          <div className="text-section">
            <h1>Ignacio Rodriguez</h1>
            <h2>/ Game Developer</h2>
          </div>
          <div className="social-icons">
          <a href="https://github.com/eneaceo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ignaciorodriguezpereira/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://millelire.itch.io/" target="_blank" rel="noopener noreferrer" aria-label="Itch.io">
            <FaItchIo />
          </a>
          </div>
        </div>
        <hr class="horizontal-line" />
        <nav class="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
  );
};

export default Header;
