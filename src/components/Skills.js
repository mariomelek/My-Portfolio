import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaSass } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiRedux, SiRecoil, SiNextdotjs } from 'react-icons/si';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import './Skills.css'; // Import CSS for styling

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 size={50} style={{ color: '#E34F26' }} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={50} style={{ color: '#1572B6' }} /> },
  { name: 'Sass', icon: <FaSass size={50} style={{ color: '#CC6699' }} /> },
  { name: 'Bootstrap', icon: <i className="bi bi-bootstrap" style={{ fontSize: '37px', color: '#563d7c' }}></i> }, 
  { name: 'JavaScript', icon: <FaJs size={50} style={{ color: '#F7DF1E' }} /> },
  { name: 'TypeScript', icon: <SiTypescript size={50} style={{ color: '#007ACC' }} /> },
  { name: 'React', icon: <FaReact size={50} style={{ color: '#61DAFB' }} /> },
  { name: 'Redux', icon: <SiRedux size={50} style={{ color: '#764ABC' }} /> },
  { name: 'Recoil', icon: <SiRecoil size={50} style={{ color: '#2E3A52' }} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={50} style={{ color: '#000000' }} /> },
  { name: 'Firebase', icon: <SiFirebase size={50} style={{ color: '#FFCA28' }} /> },
  { name: 'MongoDB', icon: <FaDatabase size={50} style={{ color: '#47A248' }} /> },
  { name: 'Node.js', icon: <FaNodeJs size={50} style={{ color: '#8CC84B' }} /> },
  { name: 'Git', icon: <FaGitAlt size={50} style={{ color: '#F05032' }} /> },
  { name: 'GitHub', icon: <i className="bi bi-github" style={{ fontSize: '37px', color: '#333' }}></i> }, // GitHub icon
  { name: 'Problem Solving', icon: <i className="bi bi-lightbulb" style={{ fontSize: '37px', color: '#f1c40f' }}></i> }, 
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <Container>
      <h2 className="text-center mb-4">My Skills</h2>
      <Row>
        {skillsData.map((skill, index) => (
          <Col md={3} key={index} className="mb-4 text-center">
            <div className="skill-card">
              {skill.icon}
              <h5 className="mt-2">{skill.name}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Skills;
