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
        id='SingleEngine'
        onChange={e => {
            e.target.value = 'SingleEngine'
            handleChange(e)
        }}
        checked={values.SEorME === 'SingleEngine'}
        isValid={values.SEorME && !errors.SEorME}
        isInvalid={!!errors.SEorME}
        feedback={errors.SEorME}
        />
        <Form.Check
        type='radio'
        label='Multi engine'
        name='SEorME'
        id='MultiEngine'
        onChange={e => {
            e.target.value = 'MultiEngine'
            handleChange(e)
        }}
        checked={values.SEorME === 'MultiEngine'}
        isValid={values.SEorME && !errors.SEorME}
        isInvalid={!!errors.SEorME}
        />
        </>
    )
}

export default SingleOrMultiEngine
