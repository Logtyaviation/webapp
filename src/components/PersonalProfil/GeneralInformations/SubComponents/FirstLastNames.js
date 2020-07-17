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
                                    <Form.Group>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Last name(s)</InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                        placeholder='Ex: Travolta'
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                        placeholder='Other last name(s)*'
                                        />
                                        <Form.Text className='text-muted'>*Optional</Form.Text>
                                    </Form.Group>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <Form.Group>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>First name(s)</InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                        placeholder='Ex: John'
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                        placeholder='Other first name(s)*'
                                        />
                                        <Form.Text className='text-muted'>*Optional</Form.Text>
                                    </Form.Group>
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