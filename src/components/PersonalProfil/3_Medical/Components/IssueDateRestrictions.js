import React from 'react'
import { Row, Col, InputGroup, Form } from 'react-bootstrap'

const IssueDateRestrictions = (props) => {
    const { handleChange, values, errors } = props
    
    return(
        <>
       <div>Issue date and restrictions</div>
       <Row>
           <Col md = '4'>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Issue date</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                    name='MedicalIssueDate'
                    id='MedicalIssueDate'
                    placeholder='Ex: 09/09/2020'
                    onChange={handleChange}
                    value={values.MedicalIssueDate}
                    isValid={values.MedicalIssueDate && !errors.MedicalIssueDate}
                    isInvalid={!!errors.MedicalIssueDate}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.MedicalIssueDate}</Form.Control.Feedback>
                </InputGroup>
            </Col>
            <Col md = '8'>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Restrictions/Remarks</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                    name='MedicalRestrictions'
                    id='MedicalRestrictions'
                    as='textarea'
                    rows='1'
                    placeholder='Ex: Shall wear corrective lenses'
                    onChange={handleChange}
                    value={values.MedicalRestrictions}
                    isValid={values.MedicalRestrictions && !errors.MedicalRestrictions}
                    isInvalid={!!errors.MedicalRestrictions}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.MedicalRestrictions}</Form.Control.Feedback>
                </InputGroup>
            </Col>
       </Row> 
       </>
    )
}

export default IssueDateRestrictions