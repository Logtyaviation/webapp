import React, { Component } from 'react';
import { Col, Row, Container} from 'react-bootstrap'
import FormDateTimeAirport from './SharedComponents/FormDateTimeAirport'
import RadioTimeOfDay from './SharedComponents/RadioTimeOfDay'
import FormAmountOfLandingsOrTakeOffs from './SharedComponents/FormAmountOfLandingsOrTakeOffs'

class TakeOffEntry extends Component {

    render() {
        return (
            <Container>
                Departure informations
                <Row>
                    <Col md={5}>
                        <FormDateTimeAirport
                            name='TakeOff'
                            handleChange={this.props.handleChange}
                            values={this.props.values}
                            errors={this.props.errors}/>
                    </Col>
                    <Col m={3}>
                        <RadioTimeOfDay
                            name='TakeOff'
                            handleChange={this.props.handleChange}
                            values={this.props.values}
                            errors={this.props.errors}/>
                    </Col>
                    <Col md={4}>
                        <FormAmountOfLandingsOrTakeOffs
                            name='TakeOffs'
                            handleChange={this.props.handleChange}
                            values={this.props.values}
                            errors={this.props.errors}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TakeOffEntry;
