import React  from 'react';
import {Form} from 'react-bootstrap'

const FormAmountOfLandingsOrTakeOffs = (props) => {
    const { name, values, errors, handleChange } = props

    return (
        <>
            { name === 'Landings' ? 'Landing(s)' : 'Take off(s)' } performed
            <Form.Control
            id={`AmountOf${name}`}
            name={`AmountOf${name}`}
            placeholder='Ex: 1'
            onChange={handleChange}
            value={values[`AmountOf${name}`]}
            isValid={values[`AmountOf${name}`] && !errors[`AmountOf${name}`]}
            isInvalid={!!errors[`AmountOf${name}`]}
            />
            <Form.Control.Feedback type='invalid'>{errors[`AmountOf${name}`]}</Form.Control.Feedback>
        </>
    );
}

export default FormAmountOfLandingsOrTakeOffs;
