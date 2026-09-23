import React from "react";
import { FiExternalLink } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import { projects } from "../../content";
import "./projects.css";

export const Projects = () => (
  <div className="container page">
    <PageHeader
      title="Projects"
      documentTitle="Projects"
      intro="Things I've built outside of work, from a research-lab finder to a WiFi-controlled drink machine."
    />

    <ul className="projects">
      {projects.map((project) => (
        <li className="project" key={project.name}>
          <div className="project__head">
            <h2 className="project__name">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.name}
                  <FiExternalLink aria-hidden="true" />
                </a>
              ) : (
                project.name
              )}
            </h2>
            <p className="project__period">{project.period}</p>
          </div>

          <p className="project__blurb">{project.blurb}</p>

          <ul className="project__bullets">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <ul className="project__tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);
