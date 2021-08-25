import React from 'react';
import { Navbar, Container, Nav, Col} from 'react-bootstrap';
import Logo from '../assets/logo.png';
import './Navi.css';


export default function Navi() {
  return (
    <div >
      <>
        <Navbar bg="light" variant="light" expand="lg" fluid className="shadow bg-body rounded">
          <Container >
            <Col className="d-inline-flex" >
              <Navbar.Brand href="#home"><img
                src={Logo}
                width="65"
                height="65"
                alt="CEC logo"
              /></Navbar.Brand>
            </Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="justify-content-end">
                <Nav.Link href="#events" className="NavButton">Events</Nav.Link>
                <Nav.Link href="#gallery" className="NavButton">Gallery</Nav.Link>
                <Nav.Link href="#login" className="NavButton">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  )
}
