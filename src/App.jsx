import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div id="home" className="section-container"><Hero /></div>
      <div id="skills" className="section-container"><SkillsSection /></div>
      <div id="projects" className="section-container"><ProjectsSection /></div>
      <div id="about-me" className="section-container"><AboutMe /></div>
      <div id="contact" className="section-container"><Contact /></div>    
      <Footer />
    </div>
  );
}
