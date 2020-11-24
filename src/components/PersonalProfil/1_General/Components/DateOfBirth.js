import React from 'react';
import {Form, Row, Col, InputGroup } from 'react-bootstrap';

const DateOfBirth = (props) => {
    const {values, errors, handleChange} = props

    return (
        <>
        <Form.Label>Date of birth</Form.Label>
        <Row>
            <Col md='3'>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Date</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control 
                    name='HolderDOB'
                    id='HolderDOB'
                    placeholder='Ex: 20/06/1992'
                    value={values.HolderDOB}
                    onChange={handleChange}
                    isValid={values.HolderDOB && !errors.HolderDOB}
                    isInvalid={errors.HolderDOB}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.HolderDayDOB}</Form.Control.Feedback>
                </InputGroup>
            </Col>
        </Row>
        </>
    );
}


export default DateOfBirth;