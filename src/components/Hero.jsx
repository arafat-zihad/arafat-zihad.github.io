import React from 'react';
import data from "../assets/data.json";
import Typewriter from './Typewriter';
import DynamicButton from './DynamicButton';
import VideoBG from './VideoBG';

const Hero = () => {
    const { fullName, titleArray, resumeLink, socialLinks } = data.data;

    return (
        <section id="home" className="hero-section">
            <div className="hero-bg">
                <VideoBG />
            </div>

            <div className="hero-content">
                <h1 className="hero-hidden-title">{fullName} - Full Stack Web Developer</h1>

                <div className="hero-title-container">
                    <h2 className="hero-name">
                        {fullName}
                    </h2>
                    <h2 className="hero-greeting">
                        Hello 👋 My Name is
                    </h2>
                </div>

                <Typewriter titleArray={titleArray} />

                <div className="hero-buttons">
                    <DynamicButton bgcolor="white" textcolor="black" text="Resume" link={resumeLink} />
                    <DynamicButton bgcolor="black" textcolor="white" text="Github" link={socialLinks.github} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
