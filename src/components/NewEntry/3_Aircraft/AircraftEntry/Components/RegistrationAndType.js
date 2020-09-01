import React from 'react';
import { InputGroup, Col, Row, Form } from 'react-bootstrap';

const RegistrationAndType = ({ errors, values, handleChange }) => {

    return (
        <Row>
            <Col>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Registration</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                    placeholder='Ex: EI-DAC'
                    name='Registration'
                    id='Registration'
                    onChange={handleChange}
                    value={values.Registration}
                    isValid={values.Registration && !errors.Registration}
                    isInvalid={!!errors.Registration}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.Registration}</Form.Control.Feedback>
                </InputGroup>
            </Col>
            <Col>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Type</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                    placeholder='Ex: B737-800'
                    name='Type'
                    id='Type'
                    onChange={handleChange}
                    value={values.Type}
                    isValid={values.Type && !errors.Type}
                    isInvalid={!!errors.Type}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.Type}</Form.Control.Feedback>
                </InputGroup>
            </Col>
        </Row>
    );
}

export default RegistrationAndType;
