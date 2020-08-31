import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

const SingleOrMultiEngineAircraft = (props) => {
    const { values, errors, handleChange } = props

    return(
        <>
        Single or multi engine
        <Form.Check
        type='radio'
        label='Single engine'
        name='SEorME'
        id='SEAircraft'
        onChange={e => {
            e.target.value = 'SEAircraft'
            handleChange(e)
        }}
        checked={values.SEorME === 'SEAircraft' ? true:false}
        isValid={values.SEorME && !errors.SEorME}
        isInvalid={!!errors.SEorME}
        feedback={errors.SEorME}
        />
        <Form.Check
        type='radio'
        label='Multi engine'
        name='SEorME'
        id='MEAircraft'
        onChange={e => {
            e.target.value = 'MEAircraft'
            handleChange(e)
        }}
        checked={values.SEorME === 'MEAircraft' ? true:false}
        isValid={values.SEorME && !errors.SEorME}
        isInvalid={!!errors.SEorME}
        />
        </>
    )
}

export default SingleOrMultiEngineAircraft
