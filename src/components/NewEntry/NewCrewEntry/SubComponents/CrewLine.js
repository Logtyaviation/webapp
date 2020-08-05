import React, { Component } from 'react';
import CrewRankDropdown from './CrewRankDropdown';
import {Col, FormCheck, FormControl, Row, InputGroup} from 'react-bootstrap'

class NewCrewLine extends Component {

    render() {
        return (
            <Row>
                <Col md={9} style={{background:''}}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>First</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                        placeholder='Ex: Neil'
                        name='CrewFirstName'
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text>Last</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                        placeholder='Ex: Armstrong'
                        name='CrewLastName'
                        />
                    </InputGroup>
                </Col>
                <Col md={3} style={{background:''}}>
                    <FormCheck
                    type='radio'
                    name='ActedAsPIC'
                    label='Acted as PIC'/>
                </Col>
            </Row>
        );
    }
}

export default NewCrewLine;