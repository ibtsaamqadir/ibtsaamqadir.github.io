import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.jpeg';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Muhammad Ibtsaam Qadir
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ph.D. Student in Biomedical Engineering
          </motion.p>

          <motion.div
            className="hero-affiliation"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="https://fionakolbinger.github.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="affiliation-link"
            >
              Translational Medical Image Computing (TMIC) Lab
            </a>
            <div className="affiliation-line">Weldon School of Biomedical Engineering, Purdue University</div>
          </motion.div>

          <motion.div
            className="hero-research-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="research-interests-heading">Research Interests</h3>
            <div className="hero-tags">
              <span className="hero-tag">Artificial Intelligence for Medicine</span>
              <span className="hero-tag">Multimodal Artificial intelligence</span>
              <span className="hero-tag">Medical Image Analysis</span>
              <span className="hero-tag">Regulatory Sciences</span>
            </div>
          </motion.div>

        
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              className="btn btn-primary"
              onClick={scrollToAbout}
            >
             More About Me
            </button>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('publications');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Publications
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-image">
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt="Dr. Ibtisam" 
                className="profile-image"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <button
          className="scroll-btn"
          onClick={scrollDown}
          aria-label="Scroll down"
        >
          ↓
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;

