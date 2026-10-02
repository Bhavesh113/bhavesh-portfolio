import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { education } from "../data/constants";

function Education() {
  return (
    <section className="section" id="education">
      <div className="section-container">

        <h2 className="section-title">
          Education
        </h2>

        <p className="section-description">
          My academic journey and educational background.
        </p>

        <div className="education-timeline">

          {education.map((item, index) => {

            const isDegree = index === 0;

            return (
              <div className="education-item" key={index}>

                <div className="education-icon">
                  {isDegree ? (
                    <FaGraduationCap />
                  ) : (
                    <FaSchool />
                  )}
                </div>

                <div className="education-card">

                  <div className="education-header">

                    <div>
                      <h3>{item.degree}</h3>

                      <h4>{item.college}</h4>
                    </div>

                    <span className="education-date">
                      {item.date}
                    </span>

                  </div>

                  <div className="education-grade">
                    {item.grade}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Education;