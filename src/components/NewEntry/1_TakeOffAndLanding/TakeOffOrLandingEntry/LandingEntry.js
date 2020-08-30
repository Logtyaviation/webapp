import React, { Component } from 'react';
import { Col, Container, Row} from 'react-bootstrap'
import FormDateTimeAirport from './SharedComponents/FormDateTimeAirport'
import RadioTimeOfDay from './SharedComponents/RadioTimeOfDay'
import NewArrivalEntryLandingAmount from './SharedComponents/FormAmountOfLandingsOrTakeOffs'

class LandingEntry extends Component {
    render() {
        return (
            <Container>
            Arrival informations
                <Row>
                    <Col md={5}>
                        <FormDateTimeAirport
                        name='Landing'
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                    </Col>
                    <Col m={3}>
                        <RadioTimeOfDay
                        name='Landing'
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                    </Col>
                    <Col md={4}>
                        <NewArrivalEntryLandingAmount
                        name='Landings'
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LandingEntry;
