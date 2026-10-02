import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";

import { Bio } from "../data/constants";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <h3>Bhavesh Gangarde</h3>

            <p>
              Java Backend Developer focused on building
              scalable and reliable applications.
            </p>
          </div>

          <div className="footer-socials">

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

            <a
              href={`mailto:${Bio.email}`}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Bhavesh Gangarde.
            All rights reserved.
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;