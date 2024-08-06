import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import './NavBar.css';

import { scroller } from 'react-scroll';

const NavBar= () => {
  return (
    <Container>
      <Navbar expand="lg" className="nav">
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
        Experience
        </Navbar.Brand>
        <Navbar.Brand 
          onClick={() => scroller.scrollTo('projects', {
            smooth: true,
            offset: -100,
            duration: 500,
        })}>
        Projects
        </Navbar.Brand>
        <Navbar.Brand 
          onClick={() => scroller.scrollTo('contact', {
            smooth: true,
            offset: -100,
            duration: 500,
        })}>
        Contact
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default NavBar;