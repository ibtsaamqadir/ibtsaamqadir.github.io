import React from 'react';
import { FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Muhammad Ibtsaam Qadir            </h3>
            <p>Ph.D. Student in Biomedical Engineering</p>
            <p>Passionate about advancing knowledge through innovative research</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#research">Research</a></li>
                <li><a href="#publications">Publications</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Research Areas</h4>
              <ul>
                <li>Artificial Intelligence for Medicine</li>
                <li>Deep Learning Based Medical Image Analysis</li>
                <li>Multimodal Artificial Intelligence</li>
                <li>Translational Clinical Research</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="mailto:ibtisam.ahmed@university.edu">Email</a></li>
                <li><a href="https://linkedin.com/in/ibtisam-ahmed" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/ibtisam-ahmed" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://orcid.org/0000-0000-0000-0000" target="_blank" rel="noopener noreferrer">ORCID</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Muhammad Ibtsaam Qadir.
            </p>
            <button
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </
    footer>
  );
};

export default Footer;

