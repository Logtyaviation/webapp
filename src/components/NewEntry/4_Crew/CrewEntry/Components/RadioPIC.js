import React from 'react'
import { Form, Col } from 'react-bootstrap'
import { hasPIC } from './Helper'

const RadioPIC = (props) => {
    const { values,  CrewMember, handleChange } = props

    return(
        <>
            <Col md={2}>
                <Form.Check
                    type='radio'
                    name={'PIC'}
                    label='Acted as PIC'
                    checked={values.PIC === `${CrewMember.FirstName} ${CrewMember.LastName}`}
                    isInvalid={!hasPIC(values.PIC)}
                    onChange={(e) => {
                        e.target.value = `${CrewMember.FirstName} ${CrewMember.LastName}`;
                        handleChange(e);
                    }}
                />
            </Col>

        </>
    )
}

export default RadioPIC
