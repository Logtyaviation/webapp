import React, { Component } from 'react';
import { Form, Row, InputGroup, Col } from 'react-bootstrap';

class LicenseStateNumberDate extends Component {
    render() {
        const {handleChange, values, errors} = this.props
        return (
            <Form.Group>
                <Form.Label>License general details</Form.Label>
                <Row>
                    <Col>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>State of issue</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            name='LicenseStateOfIssue'
                            id='LicenseStateOfIssue' 
                            placeholder='Ex: Ireland'
                            onChange={handleChange}
                            value={values.LicenseStateOfIssue}
                            isValid={values.LicenseStateOfIssue && !errors.LicenseStateOfIssue}
                            isInvalid={!!errors.LicenseStateOfIssue}
                            /> 
                            <Form.Control.Feedback type='invalid'>{errors.LicenseStateOfIssue}</Form.Control.Feedback>                      
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Number</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control 
                            name='LicenseNumber'
                            id='LicenseNumber'
                            placeholder='Ex: IE.FCL.123456'
                            onChange={handleChange}
                            value={values.LicenseNumber}
                            isValid={values.LicenseNumber && !errors.LicenseNumber}
                            isInvalid={!!errors.LicenseNumber}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.LicenseNumber}</Form.Control.Feedback>                      
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Date of issue</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control 
                            name='LicenseDateOfIssue'
                            id='LicenseDateOfIssue'
                            placeholder='Ex: 06/11/1998'
                            onChange={handleChange}
                            value={values.LicenseDateOfIssue}
                            isValid={values.LicenseDateOfIssue && !errors.LicenseDateOfIssue}
                            isInvalid={!!errors.LicenseDateOfIssue}
                            />    
                            <Form.Control.Feedback type='invalid'>{errors.LicenseDateOfIssue}</Form.Control.Feedback>                      
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Expiration</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control 
                            name='LicenseExpirationDate'
                            id='LicenseExpirationDate'
                            placeholder='Ex: 06/11/2025'
                            onChange={handleChange}
                            value={values.LicenseExpirationDate}
                            isValid={values.LicenseExpirationDate && !errors.LicenseExpirationDate}
                            isInvalid={!!errors.LicenseExpirationDate}
                            />     
                            <Form.Control.Feedback type='invalid'>{errors.LicenseExpirationDate}</Form.Control.Feedback>                      
                        </InputGroup>
                    </Col>
                </Row>
            </Form.Group>
        );
    }
}

export default LicenseStateNumberDate;