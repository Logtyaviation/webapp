import React from 'react' 
import { Col, InputGroup, Form } from 'react-bootstrap'

const FormLastAndFirstName = (props) => {
    const { index, CrewMember, isValid, isInvalid, hasErrors, errors, handleChange } = props
    
    return(
        <>
            <Col md ={2}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>First</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder='Ex: Neil'
                        disabled={index === 0}
                        name={`CrewList.${index}.CrewFirstName`}
                        id={`CrewList.${index}.CrewFirstName`}
                        value={CrewMember.CrewFirstName}
                        isValid={isValid({index, CrewMember, key: 'CrewFirstName', errors})}
                        isInvalid={isInvalid({index, CrewMember, key: 'CrewFirstName', errors})}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {hasErrors(errors, index, 'CrewFirstName') ? errors.CrewList[index].CrewFirstName : null}
                    </Form.Control.Feedback>
                </InputGroup>
            </Col>
            <Col md={2}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Last</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder='Ex: Armstrong'
                        disabled={index === 0}
                        name={`CrewList.${index}.CrewLastName`}
                        id={`CrewList.${index}.CrewLastName`}
                        value={CrewMember.CrewLastName}
                        isValid={isValid({index, CrewMember, key: 'CrewLastName', errors})}
                        isInvalid={isInvalid({index, CrewMember, key: 'CrewLastName', errors})}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {hasErrors(errors, index, 'CrewLastName') ? errors.CrewList[index].CrewLastName : null}
                    </Form.Control.Feedback>
                </InputGroup>
            </Col>
        </>
    )
}

export default FormLastAndFirstName