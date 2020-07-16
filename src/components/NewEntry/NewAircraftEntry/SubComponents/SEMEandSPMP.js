import React, { Component } from 'react';
import { FormCheck, Col, Row } from 'react-bootstrap';

class SEMEandSPMP extends Component {
    render() {
        return (
            <>
            <Row>
                <Col md={4}>
                Single or multi engine
                    <FormCheck
                    type='radio'
                    label='Single engine'
                    name='SEorME'
                    />
                    <FormCheck
                    type='radio'
                    label='Multi engine'
                    name='SEorME'
                    />
                </Col>
                <Col>
                Single or multi pilot
                    <FormCheck
                    type='radio'
                    label='Single pilot'
                    name='SPorMP'
                    />
                    <FormCheck
                    type='radio'
                    label='Multi pilot'
                    name='SPorMP'
                    />
                </Col>
            </Row>
            </>
        );
    }
}

export default SEMEandSPMP;