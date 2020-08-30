import React, { Component } from 'react';
import { InputGroup, Col, Row, Form } from 'react-bootstrap';

class RegistrationAndType extends Component {
    render() {
        return (
                <Row>
                    <Col>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Registration</InputGroup.Text>
                            </InputGroup.Prepend> 
                            <Form.Control
                            placeholder='Ex: EI-DAC'
                            name='AircraftRegistration'
                            id='AircraftRegistration'
                            onChange={this.props.handleChange}
                            value={this.props.values.AircraftRegistration}
                            isValid={this.props.values.AircraftRegistration && !this.props.errors.AircraftRegistration}
                            isInvalid={!!this.props.errors.AircraftRegistration}
                            />
                            <Form.Control.Feedback type='invalid'>{this.props.errors.AircraftRegistration}</Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Type</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            placeholder='Ex: B737-800'
                            name='AircraftType'
                            id='AircraftType'
                            onChange={this.props.handleChange}
                            value={this.props.values.AircraftType}
                            isValid={this.props.values.AircraftType && !this.props.errors.AircraftType}
                            isInvalid={!!this.props.errors.AircraftType}
                            />
                            <Form.Control.Feedback type='invalid'>{this.props.errors.AircraftType}</Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                </Row>
        );
    }
}

export default RegistrationAndType;