import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css'; // Custom CSS for additional styling

// Import images from the assets folder
import ProjectOneImage from '../assets/party.png';
import ProjectTwoImage from '../assets/shpping.png';
import ProjectThreeImage from '../assets/coffee.png';
import ProjectFourImage from '../assets/weather.png';

const projects = [
  {
    title: 'Project One',
    description: 'For Party Booking.',
    image: ProjectOneImage, // Use imported image
    link: 'https://party-booking.netlify.app/'
  },
  {
    title: 'Project Two',
    description: 'For modern e-commerce platform.',
    image: ProjectTwoImage, // Use imported image
    link: 'https://happyshopping2.netlify.app/'
  },
  {
    title: 'Project Three',
    description: 'Web application for coffee lovers.',
    image: ProjectThreeImage, // Use imported image
    link: 'https://mariocoffee.netlify.app/'
  },
  {
    title: 'Project Four',
    description: 'Up-to-date weather information easily.',
    image: ProjectFourImage, // Use imported image
    link: 'https://weatherhaven.netlify.app/'
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <Container>
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
