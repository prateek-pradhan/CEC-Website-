import React, { Component } from 'react'
import { Container, Form, Col, Row } from 'react-bootstrap'
import './css/Brackets.css';

export default class BrackForm extends Component {
    render() {
        return (
            <div className="Background" >
                <Container >
                    <h1 className="FormTitle">Create Tournament :</h1>
                    <Form>
                        <Row>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1" >
                                <Col className="d-flex justify-content-start">
                                    <Form.Label className="Form">Tournament Name :</Form.Label>
                                </Col>
                                <Col className="d-flex justify-content-start">
                                    <Form.Control type="text" placeholder="eg. Chitkara Valorant Tournament" />
                                </Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                <Col className="d-flex justify-content-start">
                                    <Form.Label className="Form">Team Names :</Form.Label>
                                </Col>
                                <Col className="d-flex justify-content-start">
                                    <Form.Control as="textarea" rows={7} placeholder="Team Names sperated by lines." />
                                </Col>
                            </Form.Group>
                        </Row>
                        <Col className="d-flex justify-content-start">
                            <Form.Check type="checkbox" id="checkbox" className="mb-4">
                                <Form.Check.Input type="checkbox" className="Form" />
                                <Form.Check.Label className="Form" style={{ paddingLeft: "10px" }}>Randomize</Form.Check.Label>
                            </Form.Check>
                        </Col>
                    </Form>
                </Container>
            </div>
        )
    }
}
