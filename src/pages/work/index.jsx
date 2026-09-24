import React from "react";
import { FiExternalLink } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import { roles, resumeUrl } from "../../content";
import "./work.css";

export const Work = () => (
  <div className="container page">
    <PageHeader
      title="Work"
      documentTitle="Work"
      intro="Where I've worked, most recent first."
    >
      <a
        className="btn btn--secondary work__resume"
        href={resumeUrl}
        target="_blank"
        rel="noreferrer"
      >
        Resume
        <FiExternalLink aria-hidden="true" />
      </a>
    </PageHeader>

    <ol className="work__list">
      {roles.map((role) => (
        <li className="role" key={`${role.company}-${role.period}`}>
          <div className="role__meta">
            <p className="role__period">{role.period}</p>
            <p className="role__location">{role.location}</p>
          </div>

          <div className="role__body">
            <h2 className="role__company">
              {role.company}
              {role.current && <span className="role__badge">Current</span>}
            </h2>
            <p className="role__title">{role.title}</p>
            <ul className="role__bullets">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  </div>
);
