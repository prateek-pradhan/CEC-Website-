import React, { Component } from 'react'
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import './css/Brackets.css';

export default class InfoBar extends Component {
    render() {
        return (
            <div >
                <Row xs="auto" md="auto" className="InfoBar" >
                    <Container style={{ backgroundColor: "#1C1C1C", minWidth: "100%" }} className="d-flex justify-content-center align-content-around flex-wrap">
                        <Row>
                            <Col xs="auto" md="auto" >
                                <i class="bi bi-trophy-fill grad" style={{ fontSize: '48px', paddingLeft: "20px" }}></i>
                            </Col>
                            <Col>
                                <Row>
                                    <h1 className="InfoBarTitle" >{this.props.tourInfo.name}</h1>
                                </Row>
                                <Row>
                                    <Col xs="auto" md="auto" className="align-self-start">
                                        <i class="bi bi-people" style={{ color: '#62FF8E', fontSize: '15px', paddingLeft: '3px', paddingRight: "3px" }}></i>
                                        <Navbar.Text className="Subtitle">{this.props.tourInfo.teams} Teams</Navbar.Text>
                                    </Col>
                                    <Col xs="auto" md="auto" className="align-self-center">
                                        <i class="bi bi-joystick" style={{ color: '#62FF8E', fontSize: '15px', paddingLeft: '3px', paddingRight: "3px" }}></i>
                                        <Navbar.Text className="Subtitle">{this.props.tourInfo.game}</Navbar.Text>
                                    </Col>
                                    <Col xs="auto" md="auto" className="align-self-center">
                                        <i class="bi bi-trophy" style={{ color: '#62FF8E', fontSize: '15px', paddingLeft: '3px', paddingRight: "3px" }}></i>
                                        <Navbar.Text className="Subtitle">{this.props.tourInfo.tourny_type}</Navbar.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ paddingLeft: "20px" }}>
                            <Col xs="auto" md="auto" >
                                <i class="bi bi-calendar-event" style={{ color: 'white', fontSize: '48px' }}></i>
                            </Col>
                            <Col>
                                <Row className="When d-flex align-content-center">
                                    {this.props.tourInfo.date}
                                    <br />
                                    {this.props.tourInfo.time}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </div>
        )
    }
}
