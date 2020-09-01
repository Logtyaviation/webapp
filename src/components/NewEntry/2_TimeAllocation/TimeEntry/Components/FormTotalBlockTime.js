import React from 'react';
import {InputGroup, FormControl, Form } from 'react-bootstrap'

const FormTotalBlockTime = ({ label, example, values, errors, handleChange }) => {

    return (
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>{label}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            placeholder={example}
            name='TotalBlockTime'
            id='TotalBlockTime'
            onChange={handleChange}
            value={values.TotalBlockTime}
            isValid={values.TotalBlockTime && !errors.TotalBlockTime}
            isInvalid={!!errors.TotalBlockTime}
            />
            <Form.Control.Feedback type='invalid'>{errors.TotalBlockTime}</Form.Control.Feedback>
        </InputGroup>
    );
}

export default FormTotalBlockTime;
