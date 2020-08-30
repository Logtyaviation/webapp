import React  from 'react';
import {Form} from 'react-bootstrap'

const RadioTimeOfDay = (props) => {
    const { name, values, errors, handleChange } = props

    return (
        <>
        Time of the day
        <Form.Check
        type='radio'
        label='Day'
        name={`TimeOfDay${name}`}
        onChange={e => {
            e.target.value = `${name}ByDay`
            handleChange(e)
        }}
        checked={values[`TimeOfDay${name}`] === `${name}ByDay`}
        isValid={values[`TimeOfDay${name}`] && !errors[`TimeOfDay${name}`]}
        isInvalid={!!errors[`TimeOfDay${name}`]}
        feedback={errors[`TimeOfDay${name}`]}
        />
        <Form.Check
        type='radio'
        label='Night'
        name={`TimeOfDay${name}`}
        onChange={e => {
            e.target.value = `${name}ByNight`
            handleChange(e)
        }}
        checked={values[`TimeOfDay${name}`] === `${name}ByNight`}
        isValid={values[`TimeOfDay${name}`] && !errors[`TimeOfDay${name}`]}
        isInvalid={!!errors[`TimeOfDay${name}`]}
        />
        </>
    );

}

export default RadioTimeOfDay;
