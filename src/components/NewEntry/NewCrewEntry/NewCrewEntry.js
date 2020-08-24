import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Header from './SubComponents/Header';
import AddCrew from './SubComponents/AddCrew';

class NewCrewEntry extends Component {

    render() {
        return (
            <Container fluid>
                Crewing informations
                <Header/>
                <AddCrew
                handleChange={this.props.handleChange}
                values={this.props.values}
                errors={this.props.errors}
                />
            </Container>
        );
    }
}

export default NewCrewEntry;