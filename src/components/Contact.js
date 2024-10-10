import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaWhatsapp, FaFacebook } from 'react-icons/fa'; // Importing social icons
import './Contact.css'; // Custom CSS for additional styling

const Contact = () => (
  <section id="contact" className="contact-section">
    <Container>
      <h2 className="text-center mb-4">Get in Touch</h2>
      <p className="text-center lead mb-5">
        Let's connect! Feel free to reach out through any of my social channels below.
      </p>
      <div className="social-icons text-center">
        <a href="https://wa.me/201277459232" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaWhatsapp />
        </a>
        <a href="mailto:mario.melek6@gmail.com" className="social-icon">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/mario-maher-7a071223a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="https://github.com/mariomelek" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://x.com/MarioMaher0?t=XGqz31vHfjG51N8RTkTGrw&s=09" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/share/UnFp6JwzLvcKkABS/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
      </div>
    </Container>
  </section>
);

export default Contact;