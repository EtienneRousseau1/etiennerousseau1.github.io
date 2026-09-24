import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { intro, meta, resumeUrl, resumeFileName, roles } from "../../content";
import portrait from "../../images/portrait.jpg";
import "./home.css";

export const Home = () => {
  const current = roles.find((role) => role.current);

  return (
    <div className="container page hero">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <div className="hero__text">
        {current && (
          <p className="eyebrow">
            {current.title} · {current.company}
          </p>
        )}
        <h1 className="hero__name">{intro.name}</h1>
        <p className="hero__tagline">{intro.tagline}</p>
        <p className="hero__description">{intro.description}</p>

        <div className="hero__actions">
          <Link className="btn btn--primary" to="/work">
            View my work
            <FiArrowRight aria-hidden="true" />
          </Link>
          <a
            className="btn btn--secondary"
            href={resumeUrl}
            download={resumeFileName}
          >
            Resume
            <FiDownload aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero__portrait">
        <img src={portrait} alt="Etienne Rousseau" width="640" height="640" />
      </div>
    </div>
  );
};
