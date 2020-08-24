import React, { Component } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import GeneralInformation from './GeneralInformations/GeneralInformation';
import LicenseInformations from './LicenseInformations/LicenseInformations';

class CreateNewProfil extends Component {
    render() {
        return (
            <Tab.Container defaultActiveKey='LicenseInformations'>
                <Row>
                    <Col sm='2'>
                        <Nav className='flex-column' variant='pills'>
                            <Nav.Item>
                                <Nav.Link eventKey='GeneralInformations'>General informations</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='LicenseInformations'>License informations</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey='GeneralInformations'>
                                <GeneralInformation/>
                            </Tab.Pane>
                            <Tab.Pane eventKey='LicenseInformations'>
                                <LicenseInformations/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
}

export default CreateNewProfil;