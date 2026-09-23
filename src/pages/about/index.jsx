import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { about, education, skills, meta } from "../../content";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me!</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{about.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              {about.paragraphs.map((paragraph, i) => (
                <p key={i} style={{ fontSize: "20px" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <h5>{education.school}</h5>
            <p>
              {education.degree} — {education.period}
            </p>
            <p>{education.courses.join(", ")}</p>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((group) => (
              <p key={group.category}>
                <strong>{group.category}:</strong> {group.items.join(", ")}
              </p>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
