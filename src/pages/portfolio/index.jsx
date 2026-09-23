import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, roles, projects, resumeUrl } from "../../content";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Experience | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Experience</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ac_btn btn"
            >
              Resume
            </a>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            {roles.map((role) => (
              <div className="service_ py-4" key={`${role.company}-${role.period}`}>
                <h5 className="service__title">
                  {role.title} — {role.company}
                </h5>
                <p className="service_desc">
                  {role.period} · {role.location}
                </p>
                {role.bullets.map((bullet, i) => (
                  <p className="service_desc" key={i}>
                    {bullet}
                  </p>
                ))}
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Projects</h3>
          </Col>
          <Col lg="7">
            {projects.map((project) => (
              <div className="service_ py-4" key={project.name}>
                <h5 className="service__title">{project.name}</h5>
                <p className="service_desc">
                  {project.period} · {project.tags.join(", ")}
                </p>
                {project.bullets.map((bullet, i) => (
                  <p className="service_desc" key={i}>
                    {bullet}
                  </p>
                ))}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.link}
                  </a>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
