import React, { Component } from 'react';
import {InputGroup, Form} from 'react-bootstrap'

class NewArrivalEntryForm extends Component {
    render() {
        return (
            <>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Date</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                placeholder='Ex: 05/12/2011'
                name='DateOfArrival'/>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Time</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                placeholder='Ex: 13:18'
                name='TimeOfArrival'/>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Place</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                placeholder='Ex: GCTS'
                name='PlaceOfArrival'/>
            </InputGroup>
            </>
        );
    }
}

export default NewArrivalEntryForm;