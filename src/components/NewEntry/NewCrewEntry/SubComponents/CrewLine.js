import React, { Component } from 'react';
import CrewRankDropdown from './CrewRankDropdown';
import {Col, FormCheck, FormControl, Button, InputGroup} from 'react-bootstrap'

class NewCrewLine extends Component {

    returnBonjour(){
        return(
            <div>bonjour</div>
        )
    }

    render() {
        return (
            <>
            <Col md={3} style={{background:''}}>
                <CrewRankDropdown/>
            </Col>
            <Col md={5} style={{background:''}}>
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
            <Col md={2} style={{background:''}}>
                <FormCheck
                type='radio'
                name='ActedAsPIC'
                label='Acted as PIC'/>
            </Col>
            <Col md={2} style={{background:''}}>
                <Button 
                variant='danger'
                onClick={this.returnBonjour}
                >Delete</Button> 
            </Col>
            </>
        );
    }
}

export default NewCrewLine;