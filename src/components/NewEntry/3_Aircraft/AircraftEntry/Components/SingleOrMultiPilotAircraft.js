import React from 'react'
import { Form } from 'react-bootstrap'

const SingleOrMultiPilotAircraft = (props) => {
    const { values, errors, handleChange } = props
    
    return(
        <>
        Single or multi pilot
        <Form.Check
        type='radio'
        label='Single pilot'
        name='SPorMP'
        id='SPAircraft'
        onChange={e => {
            e.target.value = 'SPAircraft'
            handleChange(e)
        }}
        checked={values.SPorMP === 'SPAircraft' ? true:false}
        isValid={values.SPorMP && !errors.SPorMP}
        isInvalid={!!errors.SPorMP}
        feedback={errors.SPorMP}
        />
        <Form.Check
        type='radio'
        label='Multi pilot'
        name='SPorMP'
        id='MPAircraft'
        onChange={e => {
            e.target.value = 'MPAircraft'
            handleChange(e)
        }}
        checked={values.SPorMP === 'MPAircraft' ? true:false}
        isValid={values.SPorMP && !errors.SPorMP}
        isInvalid={!!errors.SPorMP}
        />
        </>
    )
}

export default SingleOrMultiPilotAircraft