import React, { Component } from 'react';
import {Form} from 'react-bootstrap'

class NewArrivalEntryLanding extends Component {

    render() {
        return (
            <>
            Landing(s) performed
            <Form.Control
            id='NumberOfLDG'
            name='NumberOfLDG'
            placeholder='Ex: 1'
            onChange={this.props.handleChange}
            value={this.props.values.NumberOfLDG}
            isValid={this.props.values.NumberOfLDG && !this.props.errors.NumberOfLDG}
            isInvalid={!!this.props.errors.NumberOfLDG}
            />
            <Form.Control.Feedback type='invalid'>{this.props.errors.NumberOfLDG}</Form.Control.Feedback>
            </>
        );
    }
}

export default NewArrivalEntryLanding;