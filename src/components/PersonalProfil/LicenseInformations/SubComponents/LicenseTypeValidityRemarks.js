import React, { Component } from 'react';
import { Container, Form, Row, Col, InputGroup } from 'react-bootstrap';

class LicenseTypeValidityRemarks extends Component {
    render() {
        return (
            <Container fluid>
                <Form>
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
                                    placeholder='Ex: CPL(A)'
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Date of init. issue</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                    name='DateOfTitleInitialIssue'
                                    placeholder='Ex: 12/03/1999'
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Country code</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                    name='LicenseCountryCode'
                                    placeholder='IE'
                                    />
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
                                    placeholder='Ex: 6'
                                    />
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Exp. date</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                    placeholder='Ex: 15/07/2022'
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Remarks</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control 
                                    name='LicenseRemarks'
                                    as='textarea'
                                    placeholder='Ex: - ATPL(A) theoritical knowledge credit
                                    - Endorsement for Instrument Rating'
                                    rows='1'
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default LicenseTypeValidityRemarks;