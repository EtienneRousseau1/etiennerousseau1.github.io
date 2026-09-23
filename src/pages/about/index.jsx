import React from "react";
import PageHeader from "../../components/PageHeader";
import { about, education, skills } from "../../content";
import portrait from "../../images/portrait.jpg";
import "./about.css";

export const About = () => (
  <div className="container page">
    <PageHeader title="About" documentTitle="About" />

    <div className="about">
      <div className="about__bio">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <img
        className="about__portrait"
        src={portrait}
        alt="Etienne Rousseau"
        width="480"
        height="480"
        loading="lazy"
      />
    </div>

    <section className="about__section">
      <h2>Education</h2>
      <div className="about__education">
        <p className="about__school">{education.school}</p>
        <p className="about__degree">
          {education.degree} · {education.period}
        </p>
        <p className="about__courses">{education.courses.join(" · ")}</p>
      </div>
    </section>

    <section className="about__section">
      <h2>Skills</h2>
      <dl className="about__skills">
        {skills.map((group) => (
          <div className="about__skill-group" key={group.category}>
            <dt>{group.category}</dt>
            <dd>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  </div>
);
