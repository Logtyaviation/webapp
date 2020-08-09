import React, { Component } from 'react';

import {Form, Row, Col, InputGroup } from 'react-bootstrap';

class AccountDetails extends Component {
    render() {
        return (
            <Form.Group>
                <Form.Label>Account details</Form.Label>
                <Row>
                    <Col>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Email</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            id="email"
                            name="email"
                            type="email"
                            onChange={this.props.handleChange}
                            value={this.props.values.email}
                            isValid={this.props.values.email && !this.props.errors.email}
                            isInvalid={!!this.props.errors.email}
                            placeholder='Ex: john.travolta@hotmail.com'
                            />
                            <Form.Control.Feedback type='invalid'>{this.props.errors.email}</Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Password</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            id="password"
                            name="password"
                            type="password"
                            onChange={this.props.handleChange}
                            value={this.props.values.password}
                            isValid={this.props.values.password && !this.props.errors.password}
                            isInvalid={!!this.props.errors.password}
                            placeholder='Choose a password'
                            />
                            <Form.Control.Feedback type='invalid'>{this.props.errors.password}</Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup>
                            <Form.Control
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            onChange={this.props.handleChange}
                            value={this.props.values.confirmPassword}
                            isValid={this.props.values.confirmPassword && !this.props.errors.confirmPassword}
                            isInvalid={!!this.props.errors.confirmPassword}
                            placeholder='Confirm password'
                            />
                            <Form.Control.Feedback type='invalid'>{this.props.errors.confirmPassword}</Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                </Row>
            </Form.Group>
        );
    }
}

export default AccountDetails;