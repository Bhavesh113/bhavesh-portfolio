import React from "react";

import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTools,
  FaCode,
  FaServer
} from "react-icons/fa";

import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostman,
  SiJquery
} from "react-icons/si";

import { skills } from "../data/constants";


function getSkillIcon(skill) {

  switch (skill) {

    /* ---------- Frontend ---------- */

    case "HTML":
      return <FaHtml5 />;

    case "CSS":
      return <FaCss3Alt />;

    case "Bootstrap":
      return <FaBootstrap />;

    case "JavaScript":
      return <FaJs />;

    case "React.js":
      return <FaReact />;


    /* ---------- Backend ---------- */

    case "Spring Boot":
      return <SiSpringboot />;

    case "Spring":
      return <FaServer />;

    case "Hibernate":
      return <SiHibernate />;

    case "JPA":
      return <FaDatabase />;

    case "REST API":
      return <FaServer />;

    case "Microservices":
      return <FaServer />;


    /* ---------- Programming ---------- */

    case "Java":
      return <FaJava />;

    case "C":
      return <FaCode />;

    case "C++":
      return <FaCode />;

    case "SQL":
      return <FaDatabase />;


    /* ---------- Others ---------- */

    case "MySQL":
      return <SiMysql />;

    case "Git":
      return <FaGitAlt />;

    case "GitHub":
      return <FaGithub />;

    case "Postman":
      return <SiPostman />;

    case "Eclipse":
      return <FaCode />;

    case "VS Code":
      return <FaCode />;

    default:
      return <FaTools />;
  }
}


function Skills() {
  return (
    <section
      className="section skills-section"
      id="skills"
    >

      <div className="section-container">

        <h2 className="section-title">
          Technical Skills
        </h2>

        <p className="section-description">
          Technologies and tools I use to build reliable
          and scalable applications.
        </p>


        <div className="skills-grid">

          {skills.map((category, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <h3 className="skill-card-title">
                {category.title}
              </h3>


              <div className="skill-list">

                {category.skills.map(
                  (skill, skillIndex) => (

                    <div
                      className="skill-item"
                      key={skillIndex}
                    >

                      <span className="skill-icon">
                        {getSkillIcon(skill)}
                      </span>

                      <span className="skill-name">
                        {skill}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;