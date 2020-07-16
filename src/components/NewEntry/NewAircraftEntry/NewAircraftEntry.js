import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import RegistrationAndType from './SubComponents/RegistrationAndType';
import SEMEandSPMP from './SubComponents/SEMEandSPMP';

class NewAircraftEntry extends Component {
    render() {
        return (
            <Container fluid>
            Aircraft informations
                <Row>
                    <Col md={5}>
                        <RegistrationAndType/>
                    </Col>
                    <Col>
                        <SEMEandSPMP/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NewAircraftEntry;