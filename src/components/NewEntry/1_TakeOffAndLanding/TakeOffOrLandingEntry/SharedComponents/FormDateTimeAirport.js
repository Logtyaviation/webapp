import React from 'react';
import {InputGroup, Form} from 'react-bootstrap'

const FormDateTimeAirport = ({ name, values, errors, handleChange }) => {

    return (
        <>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>Date</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
            placeholder='Ex: 05/12/2011'
            name={`${name}Date`}
            id={`${name}Date`}
            onChange={handleChange}
            value={values[`${name}Date`]}
            isValid={values[`${name}Date`] && !errors[`${name}Date`]}
            isInvalid={!!errors[`${name}Date`]}/>
            <Form.Control.Feedback type='invalid'>{errors[`${name}Date`]}</Form.Control.Feedback>
        </InputGroup>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>Time</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
            placeholder='Ex: 13:18'
            name={`${name}Time`}
            id={`${name}Time`}
            onChange={handleChange}
            value={values[`${name}Time`]}
            isValid={values[`${name}Time`] && !errors[`${name}Time`]}
            isInvalid={!!errors[`${name}Time`]}/>
            <Form.Control.Feedback type='invalid'>{errors[`${name}Time`]}</Form.Control.Feedback>
        </InputGroup>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>Airport</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
            placeholder='Ex: GCTS'
            name={`${name}Airport`}
            id={`${name}Airport`}
            onChange={handleChange}
            value={values[`${name}Airport`]}
            isValid={values[`${name}Airport`] && !errors[`${name}Airport`]}
            isInvalid={!!errors[`${name}Airport`]}/>
            <Form.Control.Feedback type='invalid'>{errors[`${name}Airport`]}</Form.Control.Feedback>
        </InputGroup>
        </>
    );
}

export default FormDateTimeAirport;
