import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StartPage.css';

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="container">
        <h1 className="name">Etienne Rousseau</h1>
        <p className="introduction">Developer</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/etienne-rousseau" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/etienne-rousseau" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/etienne_rousseau" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
