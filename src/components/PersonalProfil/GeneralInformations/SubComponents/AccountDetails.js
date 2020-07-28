import React, { Component } from 'react';
import {Form, Row, Col, Container, InputGroup } from 'react-bootstrap';

class AccountDetails extends Component {
    render() {
        return (
            <Container fluid>
                <Form>
                    <Form.Group>
                        <Form.Label>Account details</Form.Label>
                        <Row>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Email</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                    name='LogbookHolderEmail'
                                    placeholder='Ex: john.travolta@hotmail.com'
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Password</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                    type='password'
                                    name='AccountPassword'
                                    placeholder='Choose a password'
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <Form.Control
                                type='password'
                                name='ConfirmPassword'
                                placeholder='Confirm password'
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default AccountDetails;