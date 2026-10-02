import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import { Bio } from "../data/constants";

function Contact() {
  const gmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${Bio.email}`;

  return (
    <section
      className="section contact-section"
      id="contact"
    >

      <div className="section-container">

        <h2 className="section-title">
          Contact Me
        </h2>

        <p className="section-description">
          Interested in working together or have an opportunity for me?
          Feel free to connect with me.
        </p>

        <div className="contact-buttons">

          {/* Gmail */}
          <a
            href={gmailLink}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            <FaEnvelope />
            <span>Email Me</span>
          </a>

          {/* LinkedIn */}
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href={Bio.github}
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;