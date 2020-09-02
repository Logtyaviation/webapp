import React from 'react';
import { Form } from 'react-bootstrap';

const SingleOrMultiEngine = ({ values, errors, handleChange }) => {

    return(
        <>
        Single or multi engine
        <Form.Check
        type='radio'
        label='Single engine'
        name='SEorME'
        id='SE'
        onChange={e => {
            e.target.value = 'SE'
            handleChange(e)
        }}
        checked={values.SEorME === 'SE'}
        isValid={values.SEorME && !errors.SEorME}
        isInvalid={!!errors.SEorME}
        feedback={errors.SEorME}
        />
        <Form.Check
        type='radio'
        label='Multi engine'
        name='SEorME'
        id='ME'
        onChange={e => {
            e.target.value = 'ME'
            handleChange(e)
        }}
        checked={values.SEorME === 'ME'}
        isValid={values.SEorME && !errors.SEorME}
        isInvalid={!!errors.SEorME}
        />
        </>
    )
}

export default SingleOrMultiEngine
