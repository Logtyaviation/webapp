import React from 'react';
import { InputGroup, Col, Row, Form } from 'react-bootstrap';

const RegistrationAndType = (props) => {
    const { errors, values, handleChange } = props

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
                    onChange={handleChange}
                    value={values.AircraftRegistration}
                    isValid={values.AircraftRegistration && !errors.AircraftRegistration}
                    isInvalid={!!errors.AircraftRegistration}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.AircraftRegistration}</Form.Control.Feedback>
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
                    onChange={handleChange}
                    value={values.AircraftType}
                    isValid={values.AircraftType && !errors.AircraftType}
                    isInvalid={!!errors.AircraftType}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.AircraftType}</Form.Control.Feedback>
                </InputGroup>
            </Col>
        </Row>
    );
}

export default RegistrationAndType;