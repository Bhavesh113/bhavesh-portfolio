import React from "react";
import Typewriter from "typewriter-effect";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import profileImage from "../images/profile.jpg";

import { Bio } from "../data/constants";
import HeroBgAnimation from "./HeroBgAnimation";

function HeroSection() {
  return (
    <section className="hero" id="about">

      {/* Background Animation */}
      <HeroBgAnimation />

      <div className="hero-content">

        {/* LEFT SIDE */}
        <div className="hero-text">

          <p className="hero-small">
            Hi, I am
          </p>

          <h1>
            {Bio.name}
          </h1>

          <h2 className="typing-text">
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40
              }}
            />
          </h2>

          <p className="hero-description">
            {Bio.description}
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href={Bio.resume}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Check Resume
            </a>

            <a
              href="#projects"
              className="secondary-button"
            >
              View Projects
            </a>

          </div>

          {/* Social Links */}
          <div className="social-links">

            <a
              href={Bio.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href={Bio.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="hero-image-container">

          <div className="hero-profile">

            <div className="profile-glow"></div>

            <img
              src={profileImage}
              alt="Bhavesh Gangarde"
              className="profile-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;