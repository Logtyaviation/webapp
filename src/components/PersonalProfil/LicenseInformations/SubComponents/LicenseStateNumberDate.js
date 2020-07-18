import React, { Component } from 'react';
import { Container, Form, Row, InputGroup, Col } from 'react-bootstrap';

class LicenseStateNumberDate extends Component {
    render() {
        return (
            <Container fluid>
                <Form>
                    <Form.Group>
                        <Form.Label>License general details</Form.Label>
                        <Row>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>State of issue</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control 
                                    placeholder='Ex: Ireland'
                                    />                       
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Number</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control 
                                    placeholder='Ex: IE.FCL.123456'
                                    />                       
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Date of issue</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control 
                                    placeholder='Ex: 06/11/1998'
                                    />                       
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Expiration</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control 
                                    placeholder='Ex: 06/11/2025'
                                    />                       
                                </InputGroup>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default LicenseStateNumberDate;