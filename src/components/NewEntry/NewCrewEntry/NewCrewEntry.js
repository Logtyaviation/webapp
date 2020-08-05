import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import AddCrewButton from './SubComponents/AddCrewButton';
import Header from './SubComponents/Header';

class NewCrewEntry extends Component {

    render() {
        return (
            <Container fluid>
                Crewing informations
                <Header/>
                <AddCrewButton counter={1}/>
            </Container>
        );
    }
}

export default NewCrewEntry;