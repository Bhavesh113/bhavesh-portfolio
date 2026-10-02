import React from "react";
import {
  FaBriefcase,
  FaJava,
  FaDatabase,
  FaCode,
  FaServer
} from "react-icons/fa";

import {
  SiSpringboot,
  SiHibernate
} from "react-icons/si";

import { experiences } from "../data/constants";

function getExperienceIcon(skill) {
  const text = skill.toLowerCase();

  if (text.includes("java")) {
    return <FaJava />;
  }

  if (text.includes("spring")) {
    return <SiSpringboot />;
  }

  if (text.includes("hibernate")) {
    return <SiHibernate />;
  }

  if (text.includes("sql")) {
    return <FaDatabase />;
  }

  if (
    text.includes("api") ||
    text.includes("backend") ||
    text.includes("rest")
  ) {
    return <FaServer />;
  }

  return <FaCode />;
}

function Experience() {
  return (
    <section
      className="section experience-section"
      id="experience"
    >

      <div className="section-container">

        <h2 className="section-title">
          Experience & Training
        </h2>

        <p className="section-description">
          My professional learning and development journey.
        </p>

        <div className="experience-timeline">

          {experiences.map((item, index) => (

            <div
              className="experience-item"
              key={index}
            >

              {/* Timeline Icon */}
              <div className="experience-icon">
                <FaBriefcase />
              </div>


              {/* Experience Card */}
              <div className="experience-card">

                <div className="experience-top">

                  <div className="experience-heading">

                    <h3>
                      {item.role}
                    </h3>

                    <h4>
                      {item.company}
                    </h4>

                  </div>

                  <span className="experience-date">
                    {item.date}
                  </span>

                </div>


                <p className="experience-description">
                  {item.description}
                </p>


                {/* Technologies */}
                <div className="experience-technologies">

                  {[
                    "Core Java",
                    "Advanced Java",
                    "Spring Boot",
                    "Hibernate",
                    "JPA",
                    "SQL",
                    "REST APIs"
                  ].map((technology, techIndex) => (

                    <span
                      className="experience-tech"
                      key={techIndex}
                    >

                      <span className="experience-tech-icon">
                        {getExperienceIcon(technology)}
                      </span>

                      {technology}

                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;