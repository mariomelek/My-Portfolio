import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePhoto from '../assets/1.jpg'; // Correct way to import image
import './Home.css'; // Custom CSS for additional styling

const Home = () => (
  <section id="home" className="home-section">
    <Container className="home-content">
      <Row className="align-items-center justify-content-center text-center">
        <Col md={6} lg={4}>
          <div className="profile-photo-wrapper">
            <Image src={profilePhoto} roundedCircle className="profile-photo" />
          </div>
        </Col>
        <Col md={12} lg={8}>
          <h1 className="welcome-text">Hello, I'm Mario Maher</h1>
          <p className="lead">
            Welcome to my portfolio! I am a front-end developer with a passion for creating beautiful and functional websites.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Home;
