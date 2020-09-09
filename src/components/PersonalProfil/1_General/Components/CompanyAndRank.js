import React from 'react'
import { Form, Row, Col, InputGroup } from 'react-bootstrap'

const CompanyAndRank = (props) => {
    const { values, errors, handleChange } = props

    return(
        <>
        <Form.Label>Company</Form.Label>
        <Row>
            <Col>
                <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Company</InputGroup.Text>
                </InputGroup.Prepend>
                    <Form.Control
                    name='HolderCompany'
                    id='HolderCompany'
                    placeholder='Ex: Lufthansa'
                    value={values.HolderCompany}
                    onChange={handleChange}
                    isValid={values.HolderCompany && !errors.HolderCompany}
                    isInvalid={!!errors.HolderCompany}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.HolderCompany}</Form.Control.Feedback>
                </InputGroup>
            </Col>
            <Col>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Date of entry</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                    name='DateOfEntry'
                    id='DateOfEntry'
                    placeholder='Ex: 20/10/2016'
                    value={values.DateOfEntry}
                    onChange={handleChange}
                    isValid={values.DateOfEntry && !errors.DateOfEntry}
                    isInvalid={!!errors.DateOfEntry}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.DateOfEntry}</Form.Control.Feedback>
                </InputGroup>
            </Col>
            <Col>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Rank</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                    name='HolderRank'
                    id='HolderRank'
                    placeholder='Ex: First Officer'
                    value={values.HolderRank}
                    onChange={handleChange}
                    isValid={values.HolderRank && !errors.HolderRank}
                    isInvalid={!!errors.HolderRank}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.HolderRank}</Form.Control.Feedback>
                </InputGroup>
            </Col>
        </Row>
        </>
    )
}

export default CompanyAndRank