import React from 'react';
import { Col, Container, Row} from 'react-bootstrap'
import FormDateTimeAirport from './SharedComponents/FormDateTimeAirport'
import RadioTimeOfDay from './SharedComponents/RadioTimeOfDay'
import NewArrivalEntryLandingAmount from './SharedComponents/FormAmountOfLandingsOrTakeOffs'

const LandingEntry = ({ values, errors, handleChange }) => {

    return (
        <Container>
        Arrival informations
            <Row>
                <Col md={5}>
                    <FormDateTimeAirport
                    name='Landing'
                    handleChange={handleChange}
                    values={values}
                    errors={errors}/>
                </Col>
                <Col m={3}>
                    <RadioTimeOfDay
                    name='Landing'
                    handleChange={handleChange}
                    values={values}
                    errors={errors}/>
                </Col>
                <Col md={4}>
                    <NewArrivalEntryLandingAmount
                    name='Landings'
                    handleChange={handleChange}
                    values={values}
                    errors={errors}/>
                </Col>
            </Row>
        </Container>
    );
}

export default LandingEntry;
