import React, { Component } from 'react';
import { Col, Container, Row} from 'react-bootstrap'
import NewArrivalEntryForm from './SubComponents/NewArrivalEntryForm'
import NewArrivalEntryTimeOfDay from './SubComponents/NewArrivalEntryTimeOfDay'
import NewArrivalEntryLandingAmount from './SubComponents/NewArrivalEntryLandingAmount'
import NewArrivalEntryLandingRemarks from './SubComponents/NewArrivalEntryLandingRemarks'

class NewArrivalEntry extends Component {
    render() {
        return (
            <Container>
            Arrival informations
                <Row>
                    <Col md={5}>
                        <NewArrivalEntryForm/>
                    </Col>
                    <Col m={3}>
                        <NewArrivalEntryTimeOfDay/>
                    </Col>                   
                    <Col md={4}>
                        <NewArrivalEntryLandingAmount/>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                    </Col>
                    <Col>
                        <NewArrivalEntryLandingRemarks/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NewArrivalEntry;