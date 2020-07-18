import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import GeneralInformation from './GeneralInformations/GeneralInformation';
import LicenseInformations from './LicenseInformations/LicenseInformations';

class CreateNewProfil extends Component {
    render() {
        return (
            <Container fluid>
                <GeneralInformation/>
                <LicenseInformations/>
            </Container>
        );
    }
}

export default CreateNewProfil;