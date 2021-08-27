import React from 'react'
import { Container, Form, Col, Row } from 'react-bootstrap'
import './css/Brackets.css';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

export default function BrackForm() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="Background" >
            <Container>
                <Form className="justify-content-start flex-wrap" >
                    <h1 className="FormTitle">Create Tournament :</h1>
                    <Col className="d-flex justify-content-start flex-wrap" >
                        <Form.Group className="space" controlId="exampleForm.ControlInput1" >
                            <Col className="d-flex justify-content-start">
                                <Form.Label className="Form">Tournament Name :</Form.Label>
                            </Col>
                            <Col className="d-flex justify-content-start">
                                <Form.Control style={{ width: "530px" }} type="text" placeholder="eg. Chitkara Valorant Tournament" />
                            </Col>
                        </Form.Group>

                        <Form.Group className="space" controlId="exampleForm.ControlInput1" >
                            <Col className="d-flex justify-content-start">
                                <Form.Label className="Form">Game :</Form.Label>
                            </Col>
                            <Col className="d-flex justify-content-start">
                                <Form.Control style={{ width: "230px" }} type="text" placeholder="eg. Valorant" />
                            </Col>
                        </Form.Group>

                    </Col>
                    <Col className="d-flex justify-content-start flex-wrap">
                        <Form.Group className="space" controlId="formGridState">
                            <Col className="d-flex">
                                <Form.Label className="Form">Date & Time :</Form.Label>
                            </Col>
                            <Col className="d-flex">

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDateTimePicker
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        className="rounded"
                                        style={{ backgroundColor: "white", paddingTop: "6px", paddingInline: "10px", textAlign: "center" }}
                                        format="dd/MMM/yyyy              HH:mm"
                                    />
                                </MuiPickersUtilsProvider>
                            </Col>
                        </Form.Group>
                        <Form.Group className="space" controlId="formGridState">
                            <Col >
                                <Form.Label className="Form">Tournament Type :</Form.Label>
                            </Col>
                            <Col className="d-flex">
                                <Form.Select defaultValue="Choose...">
                                    <option>Single Elimination</option>
                                    <option>Double Elimination</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group className="space" controlId="exampleForm.ControlInput1" >
                            <Col className="d-flex">
                                <Form.Label className="Form">Total Teams :</Form.Label>
                            </Col>
                            <Col className="d-flex">
                                <Form.Control style={{ width: "230px" }} type="text" placeholder="eg. 64" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Row>
                        <Form.Group className="space" controlId="exampleForm.ControlTextarea1">
                            <Col className="d-flex justify-content-start">
                                <Form.Label className="Form">Team Names :</Form.Label>
                            </Col>
                            <Col className="d-flex justify-content-start">
                                <Form.Control as="textarea" rows={15} placeholder="Team Names sperated by lines." />
                            </Col>
                        </Form.Group>
                        <Form.Check type="checkbox" id="checkbox" className="space">
                            <Form.Check.Input type="checkbox" className="Form" />
                            <Form.Check.Label className="Form" style={{ paddingLeft: "10px" }}>Randomize</Form.Check.Label>
                        </Form.Check>
                    </Row>
                    <Button variant="contained" color="secondary" href="#contained-buttons" className="m-5">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

