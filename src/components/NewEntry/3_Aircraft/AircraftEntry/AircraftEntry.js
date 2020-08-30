import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import RegistrationAndType from './Components/RegistrationAndType';
import SEMEandSPMP from './Components/SEMEandSPMP';

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
                        <SEMEandSPMP
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }


export default AircraftEntry;