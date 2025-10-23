import React from 'react';
import { motion } from 'framer-motion';
import { FaMicroscope, FaBrain, FaLayerGroup, FaXRay, FaClock, FaCheckCircle, FaFileAlt, FaExternalLinkAlt, FaBlog } from 'react-icons/fa';
import researchProject1Image from '../assets/images/researchproject1.jpg';
import researchProject2Image from '../assets/images/researchproject2.png';
import aquaDroneAnimation from '../assets/images/aqua-drone-animation.gif';
import './Research.css';

interface ResearchProject {
  id: string;
  title: string;
  description: string;
  status?: 'completed' | 'ongoing' | 'planned';
  technologies: string[];
  startDate?: string;
  endDate?: string;
}

const Research: React.FC = () => {
  const researchProjects: ResearchProject[] = [
    {
      id: '1',
      title: 'Artificial Intelligence for Medicine: Prediction of Disease Trajectories in Pancreatic Diseases',
      description: 'This project involves utilizing deep learning methodologies to analyze medical imaging and multimodal clinical data for predicting disease trajectories in patients with pancreatic diseases. By applying deep learning algorithms, the project aims to enhance the accuracy of diagnostic and prognostic models, contributing to improved patient outcomes and personalized management.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Medical Imaging', 'Deep Learning']
    },
    {
      id: '2',
      title: 'Artificial Intelligence for Medicine: Machine Learning-Based Post-PCI Risk Prediction',
      description: 'This project involves developing machine learning models to predict post-procedural complications following percutaneous coronary intervention (PCI). The framework integrates pre-interventional data (demographics, laboratory values, imaging), intra-interventional variables (procedural details, intravascular imaging), and clinical outcomes to provide comprehensive risk stratification and dynamic risk management for improved patient care.',
      technologies: ['Python', 'Machine Learning', 'Cardiovascular Imaging', 'Risk Prediction']
    },
    {
      id: '3',
      title: 'Machine Learning for Environmental Monitoring: Intelligent Water Quality Assessment System',
      description: 'Designed a small unmanned surface vehicle (USV) capable of measuring physicochemical parameters of water along with GPS coordinates to monitor water quality in real-time. The system features wireless data transmission to a web portal with interactive visualizations and a neural network-based classification system using oversampling techniques for water quality categorization.',
      status: 'completed',
      technologies: ['Python', 'Machine Learning', 'IoT', 'Environmental Monitoring', 'Neural Networks'],
      startDate: '2022-01',
      endDate: '2023-06'
    }
  ];

  const researchAreas = [
    {
      icon: <FaMicroscope />,
      title: 'Artificial Intelligence for Medicine',
      description: 'Deep learning models for medical image analysis, pre-operative diagnosis and treatment planning.'
    },
    {
      icon: <FaBrain />,
      title: 'Multimodal Artificial Intelligence',
      description: 'Integrating multiple modalities i.e., EHR, imaging sequences for comprehensive predictions.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Regulatory Sciences',
      description: 'Analyzing regulatory guidelines across the globe.'
    },
    {
      icon: <FaXRay />,
      title: 'Medical Physics',
      description: 'How image acquisition parameters affect the deep learning model performance.'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <FaCheckCircle className="status-icon completed" />;
      case 'ongoing':
        return <FaClock className="status-icon ongoing" />;
      case 'planned':
        return <FaClock className="status-icon planned" />;
      default:
        return <FaClock className="status-icon" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'ongoing':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return status;
    }
  };

  return (
    <section id="research" className="research">
      <div className="research-container">
        <motion.div
          className="research-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Research</h2>
        </motion.div>

        <div className="research-areas">
          <motion.div
            className="areas-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                className="research-area"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="area-icon">{area.icon}</div>
                <div className="area-content">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="projects-section">
          <motion.h3
            className="projects-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h3>

          <div className="projects-grid">
            {researchProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {project.id === '1' ? (
                  <>
                    <div className="project-content">
                      <div className="project-header">
                        {project.status && (
                          <div className="project-status">
                            {getStatusIcon(project.status)}
                            <span className={`status-text ${project.status}`}>
                              {getStatusText(project.status)}
                            </span>
                          </div>
                        )}
                        <h3 className="project-main-title">Artificial Intelligence for Medicine</h3>
                        <h4 className="project-subtitle">Prediction of Disease Trajectories in Pancreatic Diseases</h4>
                      </div>

                      <p className="project-description">{project.description}</p>

                      <div className="project-buttons">
                        <button 
                          className="project-btn"
                          onClick={() => window.open('https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0000920', '_blank')}
                        >
                          <FaFileAlt />
                          Systematic Review: AI in IPMN
                        </button>
                        <button 
                          className="project-btn"
                          onClick={() => window.open('https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.e16461', '_blank')}
                        >
                          <FaExternalLinkAlt />
                          Abstract: ASCO Annual Meeting 2025
                        </button>
                      </div>

                      {project.startDate && (
                        <div className="project-timeline">
                          <span className="timeline-text">
                            {project.status === 'completed' 
                              ? `${new Date(project.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${new Date(project.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`
                              : `Started ${new Date(project.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`
                            }
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="project-image-container">
                      <div className="project-image">
                        <img src={researchProject1Image} alt="Research Project 1" />
                      </div>
                      <p className="image-caption">Landscape of Artificial Intelligence in IPMN Imaging</p>
                    </div>
                  </>
                ) : project.id === '2' ? (
                  <>
                    <div className="project-content">
                      <div className="project-header">
                        {project.status && (
                          <div className="project-status">
                            {getStatusIcon(project.status)}
                            <span className={`status-text ${project.status}`}>
                              {getStatusText(project.status)}
                            </span>
                          </div>
                        )}
                        <h3 className="project-main-title">Artificial Intelligence for Medicine</h3>
                        <h4 className="project-subtitle">Machine Learning-Based Post-PCI Risk Prediction</h4>
                      </div>

                      <p className="project-description">{project.description}</p>

                      <div className="project-buttons">
                        <button 
                          className="project-btn"
                          onClick={() => window.open('https://academic.oup.com/ehjdh/article/6/2/159/7958779?login=false', '_blank')}
                        >
                          <FaFileAlt />
                          Letter to Editor
                        </button>
                      </div>

                      {project.startDate && (
                        <div className="project-timeline">
                          <span className="timeline-text">
                            {project.status === 'completed' 
                              ? `${new Date(project.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${new Date(project.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`
                              : `Started ${new Date(project.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`
                            }
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="project-image-container">
                      <div className="project-image">
                        <img src={researchProject2Image} alt="Research Project 2" />
                      </div>
                      <p className="image-caption">Machine learning-based percutaneous coronary intervention risk prediction</p>
                    </div>
                  </>
                ) : project.id === '3' ? (
                  <>
                    <div className="project-content">
                      <div className="project-header">
                        <div className="project-status">
                          {getStatusIcon(project.status)}
                          <span className={`status-text ${project.status}`}>
                            {getStatusText(project.status)}
                          </span>
                        </div>
                        <h3 className="project-main-title">Machine Learning for Environmental Monitoring</h3>
                        <h4 className="project-subtitle">Intelligent Water Quality Assessment System</h4>
                      </div>

                      <p className="project-description">{project.description}</p>

                      <div className="project-buttons">
                        <button 
                          className="project-btn"
                          onClick={() => window.open('https://doi.org/10.2166/ws.2024.141', '_blank')}
                        >
                          <FaFileAlt />
                          Research Paper
                        </button>
                        <button 
                          className="project-btn"
                          onClick={() => window.open('https://researchblog.nust.edu.pk/aqua-drone-the-aquatic-avenger-with-a-vision-for-blue-and-healthy-planet/', '_blank')}
                        >
                          <FaBlog />
                          Project Blog
                        </button>
                      </div>

                      {project.startDate && (
                        <div className="project-timeline">
                          <span className="timeline-text">
                            {project.status === 'completed' 
                              ? `${new Date(project.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${new Date(project.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`
                              : `Started ${new Date(project.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`
                            }
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="project-image-container">
                      <div className="project-image">
                        <img src={aquaDroneAnimation} alt="Aqua Drone Animation" />
                      </div>
                      <p className="image-caption">Real-time water quality monitoring system operation</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="project-header">
                      <div className="project-status">
                        {getStatusIcon(project.status)}
                        <span className={`status-text ${project.status}`}>
                          {getStatusText(project.status)}
                        </span>
                      </div>
                      <h4 className="project-title">{project.title}</h4>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-technologies">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-timeline">
                      <span className="timeline-text">
                        {project.status === 'completed' 
                          ? `${new Date(project.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${new Date(project.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`
                          : `Started ${new Date(project.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`
                        }
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
