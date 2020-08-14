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
                id='DateOfDeparture' 
                name='DateOfDeparture'
                placeholder='Ex: 05/12/2011'
                onChange={this.props.handleChange}
                value={this.props.values.DateOfDeparture}
                isValid={this.props.values.DateOfDeparture && !this.props.errors.DateOfDeparture}
                isInvalid={this.props.errors.DateOfDeparture}/>
                <Form.Control.Feedback type='invalid'>{this.props.errors.DateOfDeparture}</Form.Control.Feedback>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Time</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                placeholder='Ex: 09:40'
                name='TimeOfDeparture'
                id='TimeOfDeparture'
                onChange={this.props.handleChange}
                value={this.props.values.TimeOfDeparture}
                isValid={this.props.values.TimeOfDeparture && !this.props.errors.TimeOfDeparture}
                isInvalid={this.props.errors.TimeOfDeparture}/>
                <Form.Control.Feedback type='invalid'>{this.props.errors.TimeOfDeparture}</Form.Control.Feedback>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Place</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                placeholder='Ex: LFPO'
                name='PlaceOfDeparture'
                id='PlaceOfDeparture'
                onChange={this.props.handleChange}
                value={this.props.values.PlaceOfDeparture}
                isValid={this.props.values.PlaceOfDeparture && !this.props.errors.PlaceOfDeparture}
                isInvalid={this.props.errors.PlaceOfDeparture}/>
                <Form.Control.Feedback type='invalid'>{this.props.errors.PlaceOfDeparture}</Form.Control.Feedback>
            </InputGroup>
            </>
        );
    }
}

export default NewDepartureEntryForm;