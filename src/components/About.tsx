import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaAward, FaBriefcase } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <motion.div
          className="about-main-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bio-section">
            <h3>Research Focus</h3>
            <p>
            As a Ph.D. student in Biomedical Engineering at Purdue University, I specialize in the intersection of medical imaging and artificial intelligence. My research develops novel deep learning methodologies that integrate multimodal clinical data to map disease trajectories in pancreatic pathologies, creating a more comprehensive understanding of disease progression and potential treatment pathways.
            </p>
          </div>

          <div className="education-section">
            <h3>Education</h3>
            <div className="education-item">
              <FaGraduationCap className="education-icon" />
              <div>
                <h4>Ph.D., Biomedical Engineering</h4>
                <p style={{marginTop:'5px'}}>Purdue University, West Lafayette, IN</p>
              </div>
              <span className="education-date">2024-Present</span>
            </div>
            <div className="education-item">
              <FaUniversity className="education-icon" />
              <div>
                <h4>BS, Electrical Engineering</h4>
                <p style={{marginTop:'5px'}}>National University of Sciences and Technology (NUST), Islamabad</p>
              </div>
              <span className="education-date" >2019-2023</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="experience-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Work Experience</h3>
          <div className="experience-item">
            <FaBriefcase className="experience-icon" />
            <div>
              <h4>Graduate Research Assistant</h4>
              <p>TMIC Lab, Weldon School of Biomedical Engineering, Purdue University</p>
              <p>May 2024 - Present</p>
            </div>
          </div>
          <div className="experience-item">
            <FaBriefcase className="experience-icon" />
            <div>
              <h4>Research Assistant</h4>
              <p>NCIL, School of Electrical Engineering and Computer Science, NUST</p>
              <p>Jul 2023 - Apr 2024</p>
            </div>
          </div>
          <div className="experience-item">
            <FaBriefcase className="experience-icon" />
            <div>
              <h4>Technology Intern</h4>
              <p>Synaptic Delver, Singapore</p>
              <p>Oct 2022 - Mar 2023</p>
            </div>
          </div>
          <div className="experience-item">
            <FaBriefcase className="experience-icon" />
            <div>
              <h4>Undergraduate Teaching Assistant</h4>
              <p>CS-114, School of Electrical Engineering and Computer Science, NUST</p>
              <p>Sep 2022 - Jan 2023</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="awards-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Awards & Honors</h3>
          <div className="award-item">
            <FaAward className="award-icon" />
            <div>
              <h4>Leslie Botorff Fellowship</h4>
              <p>Purdue University</p>
            </div>
            <span className="award-date">2025</span>
          </div>
          <div className="award-item">
            <FaAward className="award-icon" />
            <div>
              <h4>2nd Best Poster</h4>
              <p>IUSCCC Cancer Research Day</p>
            </div>
            <span className="award-date">2025</span>
          </div>
          <div className="award-item">
            <FaAward className="award-icon" />
            <div>
              <h4>Prototype Development Grant</h4>
              <p>Finding Innovation & Creative Solutions (FICS) Competition</p>
            </div>
            <span className="award-date">2024</span>
          </div>
          <div className="award-item">
            <FaAward className="award-icon" />
            <div>
              <h4>Winner</h4>
              <p>COMMPEC 20th Edition</p>
            </div>
            <span className="award-date">2023</span>
          </div>
          <div className="award-item">
            <FaAward className="award-icon" />
            <div>
              <h4>2nd Best Adjudged Industry Project</h4>
              <p>SEECS Open House</p>
            </div>
            <span className="award-date">2023</span>
          </div>
          <div className="award-item">
            <FaAward className="award-icon" />
            <div>
              <h4>Merit Scholarship</h4>
              <p>Fazaia Educational Welfare Scheme, Pakistan</p>
            </div>
            <span className="award-date">2019-2023</span>
          </div>
          <div className="award-item">
            <FaAward className="award-icon" />
            <div>
              <h4>High Achiever Award</h4>
              <p>School of Electrical Engineering and Computer Science, NUST, Pakistan</p>
            </div>
            <span className="award-date">2021</span>
          </div>
          <div className="award-item">
            <FaAward className="award-icon" />
            <div>
              <h4>Merit Award</h4>
              <p>Federal Board of Intermediate and Secondary Education, Pakistan</p>
            </div>
            <span className="award-date">2017-2019, 2019-2023</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
