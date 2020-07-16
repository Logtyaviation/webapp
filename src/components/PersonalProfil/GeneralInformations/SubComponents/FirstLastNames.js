import React, { Component } from 'react';
import {Form, Row, Col, Container, InputGroup } from 'react-bootstrap';

class FirstLastNames extends Component {
    render() {
        return (
            <Container fluid>
                <Form>
                    <Form.Group>
                        <Form.Label>Name(s)</Form.Label>
                        <Row>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Last name(s)</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                    placeholder='Ex: Travolta'
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>First name(s)</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                    placeholder='Ex: John'
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

export default FirstLastNames;