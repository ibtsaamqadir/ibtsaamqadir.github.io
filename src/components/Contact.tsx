import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import orcidImage from '../assets/images/ORCID.png';
import './Contact.css';

interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  orcid?: string;
  university: string;
  department: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo: ContactInfo = {
    email: 'mqadir@purdue.edu',
    linkedin: 'https://www.linkedin.com/in/muhammad-ibtsaam-qadir-b530641a0/',
    github: 'https://github.com/ibtsaamqadir',
    orcid: '0009-0002-5521-2855',
    university: 'Weldon School of Biomedical Engineering, Purdue University',
    department: 'Weldon School of Biomedical Engineering'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
      color: '#1b263b'
    },
    {
      icon: <img src={orcidImage} alt="ORCID" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />,
      title: 'ORCID iD',
      value: contactInfo.orcid,
      link: `https://orcid.org/${contactInfo.orcid}`,
      color: '#10b981'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: contactInfo.linkedin,
      color: '#0077b5'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: contactInfo.github,
      color: '#333'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title" style={{color : "#415a77 !important"}}>Get in Touch</h2>
          <p className="section-subtitle">
          I am always eager to connect with fellow researchers, professionals, and students. Whether you have a question about my work, a potential collaboration, or just want to discuss ideas in the field of biomedical engineering, medical image analysis, or AI, feel free to reach out.          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <p>
              I'm always interested in discussing new research opportunities, 
              academic collaborations, and innovative projects. Feel free to reach out!
            </p>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  className="contact-method"
                  target={method.link === '#' ? '_self' : '_blank'}
                  rel={method.link === '#' ? '' : 'noopener noreferrer'}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="method-icon" style={{ color: method.color }}>
                    {method.icon}
                  </div>
                  <div className="method-content">
                    <h4>{method.title}</h4>
                    <p>{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              <h4>Connect with me</h4>
              <div className="social-buttons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-button ${social.name.toLowerCase()}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Send me a message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, research interests, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  className="submit-status success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="submit-status error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Something went wrong. Please try again or contact me directly via email.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
