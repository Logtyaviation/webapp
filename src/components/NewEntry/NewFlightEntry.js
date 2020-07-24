import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import NewDepartureEntry from './NewDepartureEntry/NewDepartureEntry'
import NewArrivalEntry from './NewArrivalEntry/NewArrivalEntry'
import NewCrewEntry from './NewCrewEntry/NewCrewEntry';
import NewAircraftEntry from './NewAircraftEntry/NewAircraftEntry';
import NewTimeEntry from './NewTimeEntry/NewTimeEntry';
import NewRemarkEntry from './NewRemarkEntry.js/NewRemarkEntry';

class NewFlightEntry extends Component {
    render() {
        return (
            <>
            <Container fluid>
                <Row>
                    <Col>
                        <NewDepartureEntry/>
                    </Col>
                    <Col>
                        <NewArrivalEntry/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewTimeEntry/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewAircraftEntry/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewCrewEntry/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewRemarkEntry/>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <Button>Save and add another flight</Button>
                    </Col>
                    <Col>
                        <Button>Submit entry to logbook</Button>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}

export default NewFlightEntry;