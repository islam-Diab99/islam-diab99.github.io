import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ['home', 'skills', 'experience', 'contact'];

    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect which section is currently in view
      const scrollPosition = window.scrollY + 200;

      let currentSection = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sections[i];
          break;
        }
      }
      setActiveLink(currentSection);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="navbar-link" active={activeLink === 'home'}>Home</Nav.Link>
              <Nav.Link href="#skills" className="navbar-link" active={activeLink === 'skills'}>Skills</Nav.Link>
              <Nav.Link href="#experience" className="navbar-link" active={activeLink === 'experience'}>Experience</Nav.Link>
              <Nav.Link href="#contact" className="navbar-link" active={activeLink === 'contact'}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/islamdiab0/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/islam-Diab99"><img src={navIcon2} alt="" /></a>
              </div>

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
