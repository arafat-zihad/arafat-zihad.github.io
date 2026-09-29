import React from "react";
import data from "../assets/data.json";
import SectionHeader from "./SectionHeader";
import githubIcon from "../assets/icons/Github.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import mediumIcon from "../assets/icons/medium.png";

const Contact = () => {
  const { email, socialLinks } = data.data;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <SectionHeader
          title={"contact"}
          description={""}
          linkText={""}
          link={""}
        />

        <div className="contact-text-wrapper">
          <p className="contact-desc">
            I'm currently open to work and get involved in new projects, so get
            in touch if you'd like to Hire me or work together.
          </p>
          <p>
            Email me at{" "}
            <a href={"mailto:" + email} className="contact-email-link">
              {email}
            </a>{" "}
            and let's connect!
          </p>
        </div>
        <div className="contact-socials-wrapper">
          <div className="contact-socials">
            <a href={socialLinks.github} target="_blank" rel="noreferrer">
              <img
                src={githubIcon}
                alt="GitHub icon"
                height={40}
                width={40}
                className="social-icon"
              />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <img
                src={linkedinIcon}
                alt="Linkedin Icon with Arafat Zihad's Linkedin Link"
                height={40}
                width={40}
                className="social-icon"
              />
            </a>
            <a href={socialLinks.medium} target="_blank" rel="noreferrer">
              <img
                src={mediumIcon}
                alt="Medium Icon with Arafat Zihad's Medium Link"
                height={40}
                width={40}
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
