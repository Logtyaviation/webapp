import React  from 'react';
import {Form} from 'react-bootstrap'

const RadioTimeOfDay = ({ name, values, errors, handleChange } ) => {

    return (
        <>
        Time of the day
        <Form.Check
        type='radio'
        label='Day'
        name={`${name}DayOrNight`}
        onChange={e => {
            e.target.value = `${name}ByDay`
            handleChange(e)
        }}
        checked={values[`${name}DayOrNight`] === `${name}ByDay`}
        isValid={values[`${name}DayOrNight`] && !errors[`${name}DayOrNight`]}
        isInvalid={!!errors[`${name}DayOrNight`]}
        feedback={errors[`${name}DayOrNight`]}
        />
        <Form.Check
        type='radio'
        label='Night'
        name={`${name}DayOrNight`}
        onChange={e => {
            e.target.value = `${name}ByNight`
            handleChange(e)
        }}
        checked={values[`${name}DayOrNight`] === `${name}ByNight`}
        isValid={values[`${name}DayOrNight`] && !errors[`${name}DayOrNight`]}
        isInvalid={!!errors[`${name}DayOrNight`]}
        />
        </>
    );

}

export default RadioTimeOfDay;
