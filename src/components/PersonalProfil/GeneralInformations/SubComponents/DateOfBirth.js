import React, { Component } from 'react';
import {Form, Row, Col, InputGroup } from 'react-bootstrap';

class DateOfBirth extends Component {

    render() {
        const {values, errors, handleChange} = this.props
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
                        name='LogbookHolderDayDOB'
                        id='LogbookHolderDayDOB'
                        placeholder='Ex: 20'
                        value={values.LogbookHolderDayDOB}
                        onChange={handleChange}
                        isValid={values.LogbookHolderDayDOB && !errors.LogbookHolderDayDOB}
                        isInvalid={errors.LogbookHolderDayDOB}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.LogbookHolderDayDOB}</Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col>    
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Month</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control 
                        name='LogbookHolderMonthDOB'
                        id='LogbookHolderMonthDOB'
                        placeholder='Ex: 08'
                        value={values.LogbookHolderMonthDOB}
                        onChange={handleChange}
                        isValid={values.LogbookHolderMonthDOB && !errors.LogbookHolderMonthDOB}
                        isInvalid={errors.LogbookHolderMonthDOB}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.LogbookHolderMonthDOB}</Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col>    
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Year</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control 
                        name='LogbookHolderYearDOB'
                        id='LogbookHolderYearDOB'
                        placeholder='Ex: 1991'
                        value={values.LogbookHolderYearDOB}
                        onChange={handleChange}
                        isValid={values.LogbookHolderYearDOB && !errors.LogbookHolderYearDOB}
                        isInvalid={errors.LogbookHolderYearDOB}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.LogbookHolderYearDOB}</Form.Control.Feedback>
                    </InputGroup>
                </Col>
            </Row>
            </>
        );
    }
}

export default DateOfBirth;