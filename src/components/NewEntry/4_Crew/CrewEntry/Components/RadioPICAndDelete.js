import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'

const RadioPICAndDelete = (props) => {
    const { index, values, hasPIC, CrewMember, hasErrors, isLogbookOwner, remove, errors, handleChange } = props

    return(
        <>
            <Col md={2}>
                <Form.Check
                    type='radio'
                    name={`PIC`}
                    label='Acted as PIC'
                    value={values.PIC}
                    isInvalid={!hasPIC(values.PIC)}
                    onChange={(e) => {
                        e.target.value = `${CrewMember.CrewFirstName} ${CrewMember.CrewLastName}`;
                        handleChange(e);
                    }}
                />
                <Form.Control.Feedback type='invalid'>
                    {hasErrors(errors, index, 'CrewIsPIC') ? errors.CrewList[index].CrewIsPIC : null}
                </Form.Control.Feedback>
            </Col>
            <Col md={1}>
                { !isLogbookOwner(index) ? <Button onClick={() => remove(index)}>Delete</Button> : null }
            </Col>
        </>
    )
}

export default RadioPICAndDelete