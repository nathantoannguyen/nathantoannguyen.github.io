import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

import { scroller } from 'react-scroll';

const NavBar= () => {
  return (
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand 
          onClick={() => scroller.scrollTo('about', {
              smooth: true,
              offset: -100,
              duration: 500,
          })}>
            About
          </Navbar.Brand>
          <Navbar.Brand 
            onClick={() => scroller.scrollTo('experience', {
                smooth: true,
                offset: -100,
                duration: 500,
            })}>
          Experience</Navbar.Brand>
          <Navbar.Brand 
            onClick={() => scroller.scrollTo('projects', {
              smooth: true,
              offset: -100,
              duration: 500,
          })}>
          Projects</Navbar.Brand>
          <Navbar.Brand 
            onClick={() => scroller.scrollTo('contact', {
              smooth: true,
              offset: -100,
              duration: 500,
          })}>
          Contact</Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default NavBar;