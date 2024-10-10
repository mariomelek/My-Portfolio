// src/components/About.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css'; // Custom CSS for additional styling

const About = () => (
  <section id="about" className="about-section">
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="about-card shadow-lg">
            <Card.Body>
              <Card.Title as="h2" className="card-title">About Me</Card.Title>
              <Card.Text className="card-text">
                I graduated from Eelu University with a degree in Computer & Information Technology. I specialize in front-end web development and have experience with React, Bootstrap, and other modern web technologies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
