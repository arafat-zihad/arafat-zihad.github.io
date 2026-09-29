import React, { useState, useEffect } from 'react';
import data from "../assets/data.json";
import Logo from '../assets/logo/logo.png'; // Adjust path as necessary for the react app

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = ['home', 'skills', 'projects', 'about-me', 'contact'];
  const { navtext, email } = data.data;

  const path = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar-wrapper">
      <div id="nav" className={`navbar-container ${isScrolled ? 'shadow-glow' : ''}`}>
        <a href="/" className="navbar-logo-link">
          <img src={Logo} height={25} width={25} alt="Arafat Zihad - Logo" loading="eager" />
          <span className="navbar-logo-text">
            {navtext}
          </span>
        </a>

        {/* Hamburger Button for Mobile */}
        <label className="hamburger-btn">
          <input
            type="checkbox"
            checked={isMobileMenuOpen}
            onChange={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="navbar-default"
          />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path className="line" d="M7 16 27 16" />
          </svg>
        </label>

        {/* Navbar Links */}
        <div className={`navbar-menu ${isMobileMenuOpen ? 'menu-open' : 'menu-closed'}`} id="navbar-default">
          <ul className="navbar-list">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`navbar-link ${path === '/projects' ? '' : activeSection === section ? 'active' : ''}`}
                >
                  <span className="navbar-hash">#</span>
                  {section}
                </a>
              </li>
            ))}
            <li className="navbar-hire-item">
              <a href={'mailto:' + email} className="navbar-hire-btn">
                HIRE ME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
