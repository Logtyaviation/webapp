import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import FieldArrayCrew from './Components/FieldArrayCrew';

const CrewEntry = ({ values, errors, handleChange }) => {

    return (
        <Container fluid>
            Crewing informations
            <Header/>
            <FieldArrayCrew
            handleChange={handleChange}
            values={values}
            errors={errors}
            />
        </Container>
    );
}

export default CrewEntry;
