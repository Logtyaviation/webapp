import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import RegistrationAndType from './Components/RegistrationAndType';
import SingleOrMultiEngine from './Components/SingleOrMultiEngine';
import SingleOrMultiPilot from './Components/SingleOrMultiPilot';

const AircraftEntry = ({ values, errors, handleChange }) => {

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
                                <SingleOrMultiEngine
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                />
                            </Col>
                            <Col>
                                <SingleOrMultiPilot
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
