import React from 'react'
import { InputGroup, Form, Col } from 'react-bootstrap'
import { isValid, isInvalid, hasErrors } from './Helper'

const FormRank = (props) => {
    const { index, errors, handleChange, CrewMember } = props

    return(
            <Col md={2}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Rank</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder='Ex: Captain'
                        name={`Crew.${index}.CustomRank`}
                        id={`Crew.${index}.CustomRank`}
                        value={CrewMember.CustomRank}
                        isValid={isValid({index, CrewMember, key: 'CustomRank', errors})}
                        isInvalid={isInvalid({index, CrewMember, key: 'CustomRank', errors})}
                        onChange={handleChange}
                        disabled={CrewMember.Rank !== 'Custom'}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {hasErrors(errors, index, 'CustomRank') ? errors.Crew[index].CustomRank : null}
                    </Form.Control.Feedback>
                </InputGroup>
            </Col>

    )
}

export default FormRank
