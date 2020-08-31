import React from 'react'
import { InputGroup, Form, Col } from 'react-bootstrap'

const FormRank = (props) => {
    const { index, isValid, isInvalid, hasErrors, errors, handleChange, CrewMember } = props

    return(
        CrewMember.CrewRank === 'Custom' ?
            <Col md={2}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Rank</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder='Ex: Captain'
                        name={`CrewList.${index}.CustomRank`}
                        id={`CrewList.${index}.CustomRank`}
                        value={CrewMember.CustomRank}
                        isValid={isValid({index, CrewMember, key: 'CustomRank', errors})}
                        isInvalid={isInvalid({index, CrewMember, key: 'CustomRank', errors})}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {hasErrors(errors, index, 'CustomRank') ? errors.CrewList[index].CustomRank : null}
                    </Form.Control.Feedback>
                </InputGroup>
            </Col>
            : 
            <Col md={2}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Rank</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder='Ex: Captain'
                        name={`CrewList.${index}.CrewRank`}
                        id={`CrewList.${index}.CrewRank`}
                        value={CrewMember.CrewRank}
                        disabled
                    />
                </InputGroup>
            </Col>
    )
}

export default FormRank