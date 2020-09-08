import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import License from './2_License/License';
import General from './1_General/General';
import Medical from './3_Medical/Medical';

const PersonalProfil = () => {

    return (
        <Tab.Container defaultActiveKey='GeneralInformations'>
            <Row>
                <Col sm='2'>
                    <Nav className='flex-column' variant='pills'>
                        <Nav.Item>
                            <Nav.Link eventKey='GeneralInformations'>General informations</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='LicenseInformations'>License informations</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='MedicalInformations'>Medical informations</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col>
                    <Tab.Content>
                        <Tab.Pane eventKey='GeneralInformations'>
                            <General/>
                        </Tab.Pane>
                        <Tab.Pane eventKey='LicenseInformations'>
                            <License/>
                        </Tab.Pane>
                        <Tab.Pane eventKey='MedicalInformations'>
                            <Medical/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default PersonalProfil;