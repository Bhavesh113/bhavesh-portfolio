import React from "react";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

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

            return (
              <article
                className="project-card"
                key={index}
              >

                {/* Project Number */}
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="project-content">

                  {/* Project Title */}
                  <h3>
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="project-technologies">

                    {project.technologies.map(
                      (technology, techIndex) => (
                        <span
                          key={techIndex}
                          className="project-tech"
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                  {/* Project Links */}
                  <div className="project-links">

                    {hasGithub ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-button"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub />
                        <span>View on GitHub</span>
                        <FaArrowUpRightFromSquare
                          className="project-link-icon"
                        />
                      </a>
                    ) : (
                      <span className="project-button project-button-disabled">
                        <FaGithub />
                        <span>GitHub Coming Soon</span>
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