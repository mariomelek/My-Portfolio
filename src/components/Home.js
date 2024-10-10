// import React from 'react';
// import { Container, Row, Col, Image, Button } from 'react-bootstrap';
// import profilePhoto from '../assets/1.jpg';
// import cvFile from '../assets/Mario Maher CV .pdf'; 
// import './Home.css'; 

// const Home = () => (
//   <section id="home" className="home-section">
//     <Container className="home-content">
//       <Row className="align-items-center justify-content-center text-center">
//         <Col md={6} lg={4}>
//           <div className="profile-photo-wrapper">
//             <Image src={profilePhoto} roundedCircle className="profile-photo" />
//           </div>
//         </Col>
//         <Col md={12} lg={8}>
//           <h1 className="welcome-text">Hello, I'm Mario Maher</h1>
//           <p className="lead">
//             Welcome to my portfolio! I am a front-end developer with a passion for creating beautiful and functional websites.
//           </p>
//           <Button 
//             variant="primary" 
//             href={cvFile} 
//             download 
//             className="mt-3"
//           >
//             Download My CV
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   </section>
// );

// export default Home;









import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import profilePhoto from '../assets/1.jpg';
import cvFile from '../assets/Mario Maher CV .pdf'; 
import './Home.css'; 

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
          <Button 
            variant="primary" 
            href={cvFile} 
            download 
            className="mt-3"
          >
            Download My CV
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Home;
