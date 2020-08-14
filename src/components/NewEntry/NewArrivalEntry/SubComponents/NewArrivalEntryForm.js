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
                name='DateOfArrival'
                id='DateOfArrival'
                onChange={this.props.handleChange}
                value={this.props.values.DateOfArrival}
                isValid={this.props.values.DateOfArrival && !this.props.errors.DateOfArrival}
                isInvalid={!!this.props.errors.DateOfArrival}/>
                <Form.Control.Feedback type='invalid'>{this.props.errors.DateOfArrival}</Form.Control.Feedback>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Time</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                placeholder='Ex: 13:18'
                name='TimeOfArrival'
                id='TimeOfArrival'
                onChange={this.props.handleChange}
                value={this.props.values.TimeOfArrival}
                isValid={this.props.values.TimeOfArrival && !this.props.errors.TimeOfArrival}
                isInvalid={!!this.props.errors.TimeOfArrival}/>
                <Form.Control.Feedback type='invalid'>{this.props.errors.TimeOfArrival}</Form.Control.Feedback>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Place</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                placeholder='Ex: GCTS'
                name='PlaceOfArrival'
                id='PlaceOfArrival'
                onChange={this.props.handleChange}
                value={this.props.values.PlaceOfArrival}
                isValid={this.props.values.PlaceOfArrival && !this.props.errors.PlaceOfArrival}
                isInvalid={!!this.props.errors.PlaceOfArrival}/>
                <Form.Control.Feedback type='invalid'>{this.props.errors.PlaceOfArrival}</Form.Control.Feedback>
            </InputGroup>
            </>
        );
    }
}

export default NewArrivalEntryForm;