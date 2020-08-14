import React, { Component } from 'react';
import {InputGroup, FormControl, Form } from 'react-bootstrap'

class InputTimeForm extends Component {

    render() {
        return (
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>{this.props.label}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder={this.props.example}
                name='TotalBlockTime'
                id='TotalBlockTime'
                onChange={this.props.handleChange}
                value={this.props.values.TotalBlockTime}
                isValid={this.props.values.TotalBlockTime && !this.props.errors.TotalBlockTime}
                isInvalid={!!this.props.errors.TotalBlockTime}
                />
                <Form.Control.Feedback type='invalid'>{this.props.errors.TotalBlockTime}</Form.Control.Feedback>
            </InputGroup>
        );
    }
}

export default InputTimeForm;