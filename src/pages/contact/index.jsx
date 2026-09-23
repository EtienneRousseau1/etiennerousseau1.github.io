import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import PageHeader from "../../components/PageHeader";
import { contact, socialprofils } from "../../content";
import "./contact.css";

const channels = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: MdMailOutline,
  },
  {
    label: "LinkedIn",
    value: "in/etiennerousseau1",
    href: socialprofils.linkedin,
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "EtienneRousseau1",
    href: socialprofils.github,
    icon: FaGithub,
    external: true,
  },
];

export const Contact = () => (
  <div className="container page">
    <PageHeader
      title="Get in touch"
      documentTitle="Contact"
      intro={contact.description}
    />

    <ul className="channels">
      {channels.map(({ label, value, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            className="channel"
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <span className="channel__icon" aria-hidden="true">
              <Icon />
            </span>
            <span className="channel__text">
              <span className="channel__label">{label}</span>
              <span className="channel__value">{value}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);
