import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { socialprofils, contact, logotext } from "../content";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} {logotext.charAt(0)}
          {logotext.slice(1).toLowerCase()} Rousseau
        </p>

        <ul className="footer__links">
          <li>
            <a
              href={socialprofils.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={socialprofils.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} aria-label="Email">
              <MdMailOutline aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
