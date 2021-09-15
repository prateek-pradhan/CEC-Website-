import React, { useState } from 'react'
import { Container, Col, Row, Form } from 'react-bootstrap'
import './css/Brackets.css';
import { DateTimePicker, Textarea, Input, Select, Button } from 'react-rainbow-components';
import { useHistory } from "react-router-dom";

export default function BrackForm() {
    let [selectedDate, setSelectedDate] = useState(new Date());
    let [val, setRandombool] = useState();

    const options = [
        { value: 'Single Elimination', label: 'Single Elimination' },
        { value: 'Double Elimination', label: 'Double Elimination' },
    ];

    const handleOnChange = (value) => {
        setRandombool(value);
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    let history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault()
        const tournyDetails = {
            name: event.target.tournyName.value,
            date: event.target.date.value,
            game: event.target.game.value,
            tournyType: event.target.tournyType.value,
            totalTeams: event.target.totalTeams.value,
            teams: event.target.teams.value.split(/\n/),
            random: event.target.random.value,
        };
        console.log(tournyDetails);
        history.push({
            pathname: '/brackets',
            state: { tournyDetails }
        }
        );
    }

    return (
        <Container className="p-3 justify-content-center">
            <h1 className="FormTitle">Create Tournament :</h1>
            <Form onSubmit={handleSubmit} className="justify-content-center">
                <Row className="d-flex flex-wrap justify-content-center">
                    <Col lg={8}>
                        <Input
                            id="input-component-1"
                            label={<div className="Form" style={{ color: "white" }}>Tournament Name :</div>}
                            name="tournyName"
                            labelAlignment="left"
                            placeholder="eg. Chitkara Valorant Tournament"
                            className="space"
                        />
                    </Col>
                    <Col >
                        <Input
                            id="input-component-1"
                            label={<div className="Form" style={{ color: "white" }}>Game :</div>}
                            name="game"
                            labelAlignment="left"
                            placeholder="eg. Valorant"
                            className="space"
                        />
                    </Col>
                </Row>
                <Row className="d-flex flex-wrap justify-content-center">
                    <Col lg={4}>
                        <DateTimePicker
                            label={<div className="Form" style={{ color: "white" }}>Date & Time :</div>}
                            name="date"
                            labelAlignment="left"
                            id="datetimepicker-1"
                            value={selectedDate}
                            onChange={handleDateChange}
                            formatStyle="large"
                            className="space"
                        />
                    </Col>
                    <Col lg={4}>
                        <Select
                            label={<div className="Form" style={{ color: "white" }}>Tournament Type :</div>}
                            name="tournyType"
                            labelAlignment="left"
                            options={options}
                            id="example-select-1"
                            className="space"
                        />
                    </Col>
                    <Col lg={4}>
                        <Input
                            id="input-component-1"
                            label={<div className="Form" style={{ color: "white" }}>Total Teams :</div>}
                            name="totalTeams"
                            labelAlignment="left"
                            placeholder="eg. 64"
                            className="space"
                        />
                    </Col>
                </Row>
                <Row className="d-flex flex-wrap justify-content-center">
                    <Col>
                        <Textarea
                            id="example-textarea-1"
                            label={<div className="Form" style={{ color: "white" }}>Team Names :</div>}
                            name="teams"
                            labelAlignment="left"
                            rows={8}
                            placeholder="Team names separated by lines."
                            className="space"
                        />
                    </Col>
                </Row>
                <Row className="d-flex flex-wrap">
                    <Col className="d-flex justify-content-center flex-wrap">
                        <Form.Check
                            type='checkbox'
                            id='default-checkbox'
                            label={<div className="Form" style={{ color: "white" }}>Randomize Seeds</div>}
                            name="random"
                            value={val}
                            onChange={handleOnChange}
                            className="space Form"
                        />
                    </Col>
                </Row>
                <Button
                    label="Submit"
                    type="submit"
                    variant="success"
                    className="m-5"
                    size='large'
                />
            </Form>
        </Container>
    )
}

