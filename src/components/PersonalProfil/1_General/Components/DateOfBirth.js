import React from 'react';
import {Form, Row, Col, InputGroup } from 'react-bootstrap';

const DateOfBirth = (props) => {
    const {values, errors, handleChange} = props

    return (
        <>
        <Form.Label>Date of birth</Form.Label>
        <Row>
            <Col>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Day</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control 
                    name='HolderDayDOB'
                    id='HolderDayDOB'
                    placeholder='Ex: 20'
                    value={values.HolderDayDOB}
                    onChange={handleChange}
                    isValid={values.HolderDayDOB && !errors.HolderDayDOB}
                    isInvalid={errors.HolderDayDOB}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.HolderDayDOB}</Form.Control.Feedback>
                </InputGroup>
            </Col>
            <Col>    
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Month</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control 
                    name='HolderMonthDOB'
                    id='HolderMonthDOB'
                    placeholder='Ex: 08'
                    value={values.HolderMonthDOB}
                    onChange={handleChange}
                    isValid={values.HolderMonthDOB && !errors.HolderMonthDOB}
                    isInvalid={errors.HolderMonthDOB}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.HolderMonthDOB}</Form.Control.Feedback>
                </InputGroup>
            </Col>
            <Col>    
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Year</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control 
                    name='HolderYearDOB'
                    id='HolderYearDOB'
                    placeholder='Ex: 1991'
                    value={values.HolderYearDOB}
                    onChange={handleChange}
                    isValid={values.HolderYearDOB && !errors.HolderYearDOB}
                    isInvalid={errors.HolderYearDOB}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.HolderYearDOB}</Form.Control.Feedback>
                </InputGroup>
            </Col>
        </Row>
        </>
    );
}


export default DateOfBirth;