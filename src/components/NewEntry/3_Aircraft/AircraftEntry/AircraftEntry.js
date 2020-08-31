import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import RegistrationAndType from './Components/RegistrationAndType';
import SingleOrMultiEngineAircraft from './Components/SingleOrMultiEngineAircraft';
import SingleOrMultiPilotAircraft from './Components/SingleOrMultiPilotAircraft';

const AircraftEntry = (props) => {
    const { values, errors, handleChange } = props
    
        return (
            <Container fluid>
            Aircraft informations
                <Row>
                    <Col md={5}>
                        <RegistrationAndType
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        />
                    </Col>
                    <Col>
                        <Row>
                            <Col md={4}>
                                <SingleOrMultiEngineAircraft
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                />
                            </Col>
                            <Col>
                                <SingleOrMultiPilotAircraft
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }


export default AircraftEntry;