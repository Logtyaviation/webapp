import React from 'react';
import { Form, Row, Col, InputGroup } from 'react-bootstrap';

const TypeValidityRemarks = (props) => {
    const {errors, values, handleChange} = props

    return (
        <Form.Group>
            <Form.Label>License type and remarks</Form.Label>
            <Row>
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Title</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                        name='LicenseTitle'
                        id='LicenseTitle'
                        placeholder='Ex: CPL(A)'
                        value={values.LicenseTitle}
                        onChange={handleChange}
                        isValid={values.LicenseTitle && !errors.LicenseTitle}
                        isInvalid={!!errors.LicenseTitle}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.LicenseTitle}</Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Date of init. issue</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                        name='DateOfTitleInitialIssue'
                        id='DateOfTitleInitialIssue'
                        placeholder='Ex: 12/03/1999'
                        value={values.DateOfTitleInitialIssue}
                        onChange={handleChange}
                        isValid={values.DateOfTitleInitialIssue && !errors.DateOfTitleInitialIssue}
                        isInvalid={!!errors.DateOfTitleInitialIssue}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.DateOfTitleInitialIssue}</Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Country code</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                        name='LicenseCountryCode'
                        id='LicenseCountryCode'
                        placeholder='IE'
                        value={values.LicenseCountryCode}
                        onChange={handleChange}
                        isValid={values.LicenseCountryCode && !errors.LicenseCountryCode}
                        isInvalid={!!errors.LicenseCountryCode}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.LicenseCountryCode}</Form.Control.Feedback>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>ELP</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                        name='LicenseELP'
                        id='LicenseELP'
                        placeholder='Ex: 6'
                        value={values.LicenseELP}
                        onChange={handleChange}
                        isValid={values.LicenseELP && !errors.LicenseELP}
                        isInvalid={!!errors.LicenseELP}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text>Exp. date</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                        name='LicenseELPExpirationDate'
                        id='LicenseELPExpirationDate'
                        placeholder='Ex: 15/07/2022'
                        value={values.LicenseELPExpirationDate}
                        onChange={handleChange}
                        isValid={values.LicenseELPExpirationDate && !errors.LicenseELPExpirationDate}
                        isInvalid={!!errors.LicenseELPExpirationDate}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.LicenseELP}</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>{errors.LicenseELPExpirationDate}</Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Remarks</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control 
                        name='LicenseRemarks'
                        id='LicenseRemarks'
                        as='textarea'
                        placeholder='Ex: - ATPL(A) theoritical knowledge credit
                        - Endorsement for Instrument Rating'
                        rows='1'
                        values={values.LicenseRemarks}
                        onChange={handleChange}
                        isValid={values.LicenseRemarks && !errors.LicenseRemarks}
                        isInvalid={!!errors.LicenseRemarks}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.LicenseRemarks}</Form.Control.Feedback>
                    </InputGroup>
                </Col>
            </Row>
        </Form.Group>
    );
}


export default TypeValidityRemarks;