import React, { Component } from 'react';
import {Form} from 'react-bootstrap'

class NewDepartureEntryTakeOff extends Component {

    render() {
        return (
            <>
            Take Off(s) performed
            <Form.Control
            id='NumberOfTO'
            name='NumberOfTO'
            placeholder='Ex: 1'
            onChange={this.props.handleChange}
            value={this.props.values.NumberOfTO}
            isValid={this.props.values.NumberOfTO && !this.props.errors.NumberOfTO}
            isInvalid={!!this.props.errors.NumberOfTO}
            />
            <Form.Control.Feedback type='invalid'>{this.props.errors.NumberOfTO}</Form.Control.Feedback>
            </>
        );
    }
}

export default NewDepartureEntryTakeOff;