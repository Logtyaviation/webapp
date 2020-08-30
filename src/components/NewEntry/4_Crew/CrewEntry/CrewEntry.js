import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import AddCrew from './Components/AddCrew';

const CrewEntry = (props) => {
    const { values, errors, handleChange } = props

    return (
        <Container fluid>
            Crewing informations
            <Header/>
            <AddCrew
            handleChange={handleChange}
            values={values}
            errors={errors}
            />
        </Container>
    );
}

export default CrewEntry;