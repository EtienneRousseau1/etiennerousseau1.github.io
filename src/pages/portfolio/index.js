import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, services, projects } from "../../content_option";
import resumeFile from "../../images/EtienneRousseauFinalResumecopy.pdf"
export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Experience | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Experience </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
            <a href={resumeFile} target="_blank" className="ac_btn btn">
              Resume
            </a>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4"> Work Experience</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description1}</p>
                  <p className="service_desc">{data.description2}</p>
                  <p className="service_desc">{data.description3}</p>
                  <p className="service_desc">{data.description4}</p>
                  <p className="service_desc">{data.description5}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4"> Projects</h3>
          </Col>
          <Col lg="7">
            {projects.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description1}</p>
                  <p className="service_desc">{data.description2}</p>
                  <p className="service_desc">{data.description3}</p>     
                  <p className="service_desc">{data.description4}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
