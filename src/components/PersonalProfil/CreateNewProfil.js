import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import GeneralInformation from './GeneralInformations/GeneralInformation';

class CreateNewProfil extends Component {
    render() {
        return (
            <Container fluid>
                <GeneralInformation/>
            </Container>
        );
    }
}

export default CreateNewProfil;