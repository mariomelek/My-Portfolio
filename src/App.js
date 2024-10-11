import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton'; // Import the ScrollToTopButton
import Skills from './components/Skills';

const App = () => (
  <Router>
    <AppNavbar />
    <div className="main-content">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    <Footer />
    <ScrollToTopButton /> {/* Add the ScrollToTopButton */}
  </Router>
);

export default App;
