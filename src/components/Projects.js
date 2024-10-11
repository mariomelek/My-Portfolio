import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';

// Import images from the assets folder
import ProjectOneImage from '../assets/coffee.png';
import ProjectTwoImage from '../assets/shpping.png';
import ProjectThreeImage from '../assets/party.png';
import ProjectFourImage from '../assets/Cats Care.png';
import ProjectFiveImage from '../assets/weather.png';
import ProjectSixImage from '../assets/Calculator.png';

const projects = [
  {
    title: 'Project One',
    description: 'Web application for coffee lovers.',
    image: ProjectOneImage, 
    link: 'https://mariocoffee.netlify.app/'
  },
  {
    title: 'Project Two',
    description: 'For modern e-commerce platform.',
    image: ProjectTwoImage, 
    link: 'https://happyshopping2.netlify.app/'
  },
  {
    title: 'Project Three',
    description: 'For Party Booking.',
    image: ProjectThreeImage, 
    link: 'https://party-booking.netlify.app/'
  },
  {
    title: 'Project Four',
    description: 'Your go-to resource for expert cat care.',
    image: ProjectFourImage, 
    link: 'https://cats-care.netlify.app/'
  },
  {
    title: 'Project Five',
    description: 'Up-to-date weather information easily.',
    image: ProjectFiveImage, 
    link: 'https://weatherhaven.netlify.app/'
  },
  {
    title: 'Project Six',
    description: 'Easy Calculator  .',
    image: ProjectSixImage, 
    link: 'https://easycalculatorapp.netlify.app/'
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <Container>
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <Card className="project-card">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <button className="btn btn-primary">View Project</button>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
