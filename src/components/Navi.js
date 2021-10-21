import React from 'react';
import { Navbar, Container, Nav, Col } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import './Navi.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import EventPage from './Events/EventPage';
import Brack from './Brackets/Brack';
import { Home } from './HomePage/Home'
import NewBrackets from './Brackets/NewBrackets';
import { Coinflip } from './Coinflip/Coinflip';


export default function Navi() {
  return (
    <div >
      <>
        <Router>
          <Navbar bg="light" variant="light" expand="lg">
            <Container >
              <Col className="d-inline-flex" >
                <Navbar.Brand href="/"><img
                  src={Logo}
                  width="65"
                  height="65"
                  alt="CEC logo"
                /></Navbar.Brand>
              </Col>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="justify-content-end ">
                  <Nav.Link href="/" className="NavButton ">Home</Nav.Link>
                  <Nav.Link href="/events" className="NavButton">Events</Nav.Link>
                  <Nav.Link href="/brack" className="NavButton">Brackets</Nav.Link>
                  <Nav.Link href="/coinflip" className="NavButton">CoinFlip</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route path="/coinflip">
              <Coinflip />
            </Route>
            <Route path="/events">
              <EventPage />
            </Route>
            <Route path="/brack">
              <Brack />
            </Route>
            <Route path="/brackets">
              <NewBrackets />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>

      </>
    </div>
  )
}
