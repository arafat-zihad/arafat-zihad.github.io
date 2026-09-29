import React from 'react';
import data from "../assets/data.json";
import headshot from "../assets/images/arafat-zihad-headshot.png";
import SectionHeader from './SectionHeader';

const AboutMe = () => {
    const { about } = data.data;

    return (
        <section id="about-me" className="about-section">
            <div className="about-container">
                <SectionHeader title="about-me" description="" linkText="read-more" link="/about" />

                <div className="about-content">
                    <div className="about-image-wrapper">
                        <img
                            src={headshot}
                            className="about-image"
                            alt="Arafat Zihad - Full-Stack Web Developer Headshot"
                        />
                    </div>
                    <div className="about-text-wrapper">
                        <div className="about-text-stack">

                            {/* Intro Card */}
                            <div className="about-card">
                                <p className="about-intro-text">
                                    <span className="about-accent-text">Hello! </span>
                                    {about.main}
                                </p>
                            </div>

                            {/* Skills and Journey */}
                            <div className="about-grid">
                                <div className="about-card">
                                    <h3 className="about-card-title">
                                        #skills
                                    </h3>
                                    <ul className="about-list">
                                        {about.skills.map((skill, index) => (
                                            <li className="about-list-item" key={index}>
                                                <span className="about-list-icon">▸</span>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="about-card">
                                    <h3 className="about-card-title">
                                        #journey
                                    </h3>
                                    <p className="about-paragraph">
                                        {about.journey}
                                    </p>
                                </div>
                            </div>

                            {/* Projects and Passion */}
                            <div className="about-card">
                                <h3 className="about-card-title">
                                    #passion
                                </h3>
                                <p className="about-paragraph">
                                    {about.passion}
                                </p>
                            </div>

                            {/* Call to Action */}
                            <div className="about-card about-action-card">
                                <p className="about-paragraph">
                                    {about.connect}
                                </p>
                                <a
                                    href="#contact"
                                    className="about-action-button"
                                >
                                    ↓
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
