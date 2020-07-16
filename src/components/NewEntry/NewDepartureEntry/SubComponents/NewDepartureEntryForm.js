import React, { Component } from 'react';
import {InputGroup, Form} from 'react-bootstrap'

class NewDepartureEntryForm extends Component {
    render() {
        return (
            <>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Date</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                placeholder='Ex: 05/12/2011'
                name='DateOfDeparture'/>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Time</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                placeholder='Ex: 09:40'
                name='TimeOfDeparture'/>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Place</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                placeholder='Ex: LFPO'
                name='PlaceOfDeparture'/>
            </InputGroup>
            </>
        );
    }
}

export default NewDepartureEntryForm;