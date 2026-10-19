
import React from "react";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaGlobe
} from "react-icons/fa6";

import { projects } from "../data/constants";

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-container">
        <h2 className="section-title">
          Featured Projects
        </h2>

        <p className="section-description">
          Real-world projects focused on backend development, secure APIs,
          full-stack applications, and scalable software solutions.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const hasGithub =
              project.github &&
              project.github.startsWith("http");

            const hasFrontendGithub =
              project.frontendGithub &&
              project.frontendGithub.startsWith("http");

            const hasDemo =
              project.demo &&
              project.demo.startsWith("http");

            return (
              <article
                className="project-card"
                key={project.title || index}
              >
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="project-tech"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {hasDemo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-button"
                        aria-label={`Open live demo of ${project.title}`}
                      >
                        <FaGlobe />
                        <span>Live Demo</span>
                        <FaArrowUpRightFromSquare
                          className="project-link-icon"
                        />
                      </a>
                    )}

                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-button"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub />
                        <span>
                          {hasFrontendGithub
                            ? "Backend GitHub"
                            : "View on GitHub"}
                        </span>
                        <FaArrowUpRightFromSquare
                          className="project-link-icon"
                        />
                      </a>
                    )}

                    {hasFrontendGithub && (
                      <a
                        href={project.frontendGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-button"
                        aria-label={`View ${project.title} frontend on GitHub`}
                      >
                        <FaGithub />
                        <span>Frontend GitHub</span>
                        <FaArrowUpRightFromSquare
                          className="project-link-icon"
                        />
                      </a>
                    )}

                    {!hasGithub && !hasDemo && (
                      <span className="project-button project-button-disabled">
                        <FaGithub />
                        <span>Links Coming Soon</span>
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
