import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './css/Brackets.css';
import { DateTimePicker, Textarea, Input, Select, CheckboxToggle, Button } from 'react-rainbow-components';

export default function BrackForm() {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [value, setSelectedValue] = React.useState();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const options = [
        { value: 'single', label: 'Single Elimination' },
        { value: 'double', label: 'Double Elimination' },

    ];
    const handleValueChange = (value) => {
        setSelectedValue(value);
    };

    return (
        <Container className="p-3">
            <h1 className="FormTitle">Create Tournament :</h1>
            <Row className="d-flex flex-wrap">
                <Col lg={8}>
                    <Input
                        id="input-component-1"
                        label={<div className="Form" style={{ color: "white" }}>Tournament Name :</div>}
                        labelAlignment="left"
                        placeholder="eg. Chitkara Valorant Tournament"
                        className="space"
                    />
                </Col>
                <Col >
                    <Input
                        id="input-component-1"
                        label={<div className="Form" style={{ color: "white" }}>Game :</div>}
                        labelAlignment="left"
                        placeholder="eg. Valorant"
                        className="space"
                    />
                </Col>
            </Row>
            <Row className="d-flex flex-wrap">
                <Col lg={4}>
                    <DateTimePicker
                        label={<div className="Form" style={{ color: "white" }}>Date & Time :</div>}
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
                        labelAlignment="left"
                        placeholder="eg. 64"
                        className="space"
                    />
                </Col>
            </Row>
            <Row className="d-flex flex-wrap">
                <Col>
                    <Textarea
                        id="example-textarea-1"
                        label={<div className="Form" style={{ color: "white" }}>Team Names :</div>}
                        labelAlignment="left"
                        rows={8}
                        placeholder="Team names separated by lines."
                        className="space"
                    />
                </Col>
            </Row>
            <Row className="d-flex flex-wrap">
                <Col>
                    <CheckboxToggle
                        id="checkbox-toggle-component-1"
                        label={<div className="Form" style={{ color: "white" }}>Randomize Seeds</div>}
                        labelAlignment="left"
                        value={value}
                        onChange={handleValueChange}
                        className="space"
                    />
                </Col>
            </Row>
            <Button
                label="Submit"
                onClick={() => alert('Submitted!')}
                variant="success"
                className="space m-5"
                size='large'
            />
        </Container>
    )
}

