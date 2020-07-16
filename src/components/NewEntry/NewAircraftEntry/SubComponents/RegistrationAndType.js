import React, { Component } from 'react';
import { InputGroup, Col, FormControl, Row } from 'react-bootstrap';

class RegistrationAndType extends Component {
    render() {
        return (
                <Row>
                    <InputGroup>
                        <Col>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Registration</InputGroup.Text>
                                <FormControl
                                placeholder='Ex: EI-DAC'
                                name='AircraftRegistration'
                                />
                            </InputGroup.Prepend> 
                        </Col>
                        <Col>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Type</InputGroup.Text>
                                <FormControl
                                placeholder='Ex: B737-800'
                                name='AircraftType'
                                />
                            </InputGroup.Prepend>
                        </Col>
                    </InputGroup>
                </Row>
        );
    }
}

export default RegistrationAndType;