import React from 'react';
import { Col, Row, Container} from 'react-bootstrap'
import FormDateTimeAirport from './SharedComponents/FormDateTimeAirport'
import RadioTimeOfDay from './SharedComponents/RadioTimeOfDay'
import FormLandingsOrTakeOffsAmount from './SharedComponents/FormAmountOfLandingsOrTakeOffs'

const TakeOffEntry = ({ values, errors, handleChange } ) => {

    return (
        <Container>
            Departure informations
            <Row>
                <Col md={5}>
                    <FormDateTimeAirport
                        name='TakeOff'
                        handleChange={handleChange}
                        values={values}
                        errors={errors}/>
                </Col>
                <Col m={3}>
                    <RadioTimeOfDay
                        name='TakeOff'
                        handleChange={handleChange}
                        values={values}
                        errors={errors}/>
                </Col>
                <Col md={4}>
                    <FormLandingsOrTakeOffsAmount
                        name='TakeOffs'
                        handleChange={handleChange}
                        values={values}
                        errors={errors}/>
                </Col>
            </Row>
        </Container>
    );
}

export default TakeOffEntry;
