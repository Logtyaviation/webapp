import React from 'react'
import { InputGroup, Form, Col, Row } from 'react-bootstrap'

const ExpirationDates = (props) => {
    const {handleChange, errors, values } = props

    return(
        <>
        <div>Expiration dates</div>
        <Row>
            <Col>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Class 1</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                    name='Class1Expiration'
                    id='Class1Expiration'
                    placeholder='Ex: 08/09/2021'
                    onChange={handleChange}
                    value={values.Class1Expiration}
                    isValid={values.Class1Expiration && !errors.Class1Expiration}
                    isInvalid={!!errors.Class1Expiration}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.Class1Expiration}</Form.Control.Feedback>
                </InputGroup>
            </Col>
            <Col>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Class 2</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                    name='Class2Expiration'
                    id='Class2Expiration'
                    placeholder='Ex: 08/09/2025'
                    onChange={handleChange}
                    value={values.Class2Expiration}
                    isValid={values.Class2Expiration && !errors.Class2Expiration}
                    isInvalid={!!errors.Class2Expiration}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.Class2Expiration}</Form.Control.Feedback>
                </InputGroup>
            </Col>
            <Col>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>LAPL</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                    name='LAPLExpiration'
                    id='LAPLExpiration'
                    placeholder='Ex: 08/09/2025'
                    onChange={handleChange}
                    value={values.LAPLExpiration}
                    isValid={values.LAPLExpiration && !errors.LAPLExpiration}
                    isInvalid={!!errors.LAPLExpiration}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.LAPLExpiration}</Form.Control.Feedback>
                </InputGroup>
            </Col>
        </Row>
        </>
    )
}

export default ExpirationDates