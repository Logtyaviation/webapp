import React, { Component } from 'react';
import AccountDetails from '../../Register/SubComponent/AccountDetails';
import DateOfBirth from './SubComponents/DateOfBirth';
import FirstLastNames from './SubComponents/FirstLastNames';
import { Container, Row } from 'react-bootstrap';

class GeneralInformation extends Component {
    render() {
        return (
            <Container fluid>
                General informations :
                <Row>
                    <FirstLastNames/>
                    <DateOfBirth/>
                    <AccountDetails/>    
                </Row>                
            </Container>
        );
    }
}

export default GeneralInformation;