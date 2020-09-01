import React from 'react'
import { Form } from 'react-bootstrap'

const SingleOrMultiPilot = ({ values, errors, handleChange }) => {

    return(
        <>
        Single or multi pilot
        <Form.Check
        type='radio'
        label='Single pilot'
        name='SPorMP'
        id='SinglePilot'
        onChange={e => {
            e.target.value = 'SinglePilot'
            handleChange(e)
        }}
        checked={values.SPorMP === 'SinglePilot'}
        isValid={values.SPorMP && !errors.SPorMP}
        isInvalid={!!errors.SPorMP}
        feedback={errors.SPorMP}
        />
        <Form.Check
        type='radio'
        label='Multi pilot'
        name='SPorMP'
        id='MultiPilot'
        onChange={e => {
            e.target.value = 'MultiPilot'
            handleChange(e)
        }}
        checked={values.SPorMP === 'MultiPilot'}
        isValid={values.SPorMP && !errors.SPorMP}
        isInvalid={!!errors.SPorMP}
        />
        </>
    )
}

export default SingleOrMultiPilot
