import React from 'react';
import {InputGroup, Form} from 'react-bootstrap'

const FormDateTimeAirport = (props) => {
    const { name, values, errors, handleChange} = props
    return (
        <>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>Date</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
            placeholder='Ex: 05/12/2011'
            name={`DateOf${name}`}
            id={`DateOf${name}`}
            onChange={handleChange}
            value={values[`DateOf${name}`]}
            isValid={values[`DateOf${name}`] && !errors[`DateOf${name}`]}
            isInvalid={!!errors[`DateOf${name}`]}/>
            <Form.Control.Feedback type='invalid'>{errors[`DateOf${name}`]}</Form.Control.Feedback>
        </InputGroup>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>Time</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
            placeholder='Ex: 13:18'
            name={`TimeOf${name}`}
            id={`TimeOf${name}`}
            onChange={handleChange}
            value={values[`TimeOf${name}`]}
            isValid={values[`TimeOf${name}`] && !errors[`TimeOf${name}`]}
            isInvalid={!!errors[`TimeOf${name}`]}/>
            <Form.Control.Feedback type='invalid'>{errors[`TimeOf${name}`]}</Form.Control.Feedback>
        </InputGroup>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>Airport</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
            placeholder='Ex: GCTS'
            name={`AirportOf${name}`}
            id={`AirportOf${name}`}
            onChange={handleChange}
            value={values[`AirportOf${name}`]}
            isValid={values[`AirportOf${name}`] && !errors[`AirportOf${name}`]}
            isInvalid={!!errors[`AirportOf${name}`]}/>
            <Form.Control.Feedback type='invalid'>{errors[`AirportOf${name}`]}</Form.Control.Feedback>
        </InputGroup>
        </>
    );
}

export default FormDateTimeAirport;
