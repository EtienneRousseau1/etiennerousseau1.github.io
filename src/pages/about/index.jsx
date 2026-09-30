import React from "react";
import PageHeader from "../../components/PageHeader";
import { about, education, skills } from "../../content";
import ucDavis from "../../images/uc-davis.jpg";
import paris from "../../images/paris.jpg";
import colosseum from "../../images/rome-colosseum.jpg";
import kyoto from "../../images/kyoto.jpg";

const photos = [
  { src: ucDavis, caption: "UC Davis", alt: "Etienne in a UC Davis graduation stole outside George Hart Hall" },
  { src: paris, caption: "Paris", alt: "Etienne and a friend in front of the Eiffel Tower at night" },
  { src: colosseum, caption: "Rome", alt: "Etienne standing in front of the Colosseum" },
  { src: kyoto, caption: "Kyoto", alt: "Etienne under the torii gates at Fushimi Inari" },
];
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

    </div>

    <ul className="gallery">
      {photos.map((photo) => (
        <li key={photo.caption}>
          <figure className="gallery__item">
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>

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
