import React  from 'react';
import {Form} from 'react-bootstrap'

const FormLandingsOrTakeOffsAmount = ({ name, values, errors, handleChange }) => {

    return (
        <>
            { name === 'Landings' ? 'Landing(s)' : 'Take off(s)' } performed
            <Form.Control
            id={`${name}Amount`}
            name={`${name}Amount`}
            placeholder='Ex: 1'
            onChange={handleChange}
            value={values[`${name}Amount`]}
            isValid={values[`${name}Amount`] && !errors[`${name}Amount`]}
            isInvalid={!!errors[`${name}Amount`]}
            />
            <Form.Control.Feedback type='invalid'>{errors[`${name}Amount`]}</Form.Control.Feedback>
        </>
    );
}

export default FormLandingsOrTakeOffsAmount;
