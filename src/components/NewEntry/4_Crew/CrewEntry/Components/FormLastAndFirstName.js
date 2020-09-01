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
                        name={`Crew.${index}.FirstName`}
                        id={`Crew.${index}.FirstName`}
                        value={CrewMember.FirstName}
                        isValid={isValid({index, CrewMember, key: 'FirstName', errors})}
                        isInvalid={isInvalid({index, CrewMember, key: 'FirstName', errors})}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {hasErrors(errors, index, 'FirstName') ? errors.Crew[index].FirstName : null}
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
                        name={`Crew.${index}.LastName`}
                        id={`Crew.${index}.LastName`}
                        value={CrewMember.LastName}
                        isValid={isValid({index, CrewMember, key: 'LastName', errors})}
                        isInvalid={isInvalid({index, CrewMember, key: 'LastName', errors})}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {hasErrors(errors, index, 'LastName') ? errors.Crew[index].LastName : null}
                    </Form.Control.Feedback>
                </InputGroup>
            </Col>
        </>
    )
}

export default FormLastAndFirstName