import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Footer.css'; // Custom CSS for additional styling

const Footer = () => (
  <footer className="footer-section">
    <Container>
      <Row className="text-center">
        <Col>
          <Button variant="light" className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Scroll to Top
          </Button>
        </Col>
      </Row>
      <Row className="text-center mt-4">
        <Col>
          <p className="mb-0">&copy; {new Date().getFullYear()} Mario Maher. All rights reserved.</p>
          <p className="footer-navigation">
            <a href="#home" className="footer-link">Home</a> | 
            <a href="#about" className="footer-link">About</a> | 
            <a href="#contact" className="footer-link">Contact</a>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
