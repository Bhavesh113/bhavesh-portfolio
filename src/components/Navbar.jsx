import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub
} from "react-icons/fa";

import { Bio } from "../data/constants";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* Logo */}
        <a
          href="#about"
          className="nav-logo"
          onClick={closeMenu}
        >

          <span className="portfolio-logo">
            <span className="logo-inner"></span>
          </span>

          <span className="portfolio-text">
            Portfolio
          </span>

        </a>


        {/* Navigation Links */}
        <div
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </div>


        {/* GitHub Button */}
        <a
          href={Bio.github}
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>


        {/* Mobile Menu */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;