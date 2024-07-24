import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

import { scroller } from 'react-scroll';

const NavBar= () => {
  return (
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand 
          href="#about"
          onClick={() => scroller.scrollTo('about', {
              smooth: true,
              offset: -100,
              duration: 500,
          })}>
            About
          </Navbar.Brand>
          <Navbar.Brand href="#experience">Experience</Navbar.Brand>
          <Navbar.Brand href="#projects">Projects</Navbar.Brand>
          <Navbar.Brand href="#contact">Contact</Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default NavBar;