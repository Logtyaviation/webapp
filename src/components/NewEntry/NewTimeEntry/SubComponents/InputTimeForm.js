import React, { Component } from 'react';
import {InputGroup, FormControl } from 'react-bootstrap'

class InputTimeForm extends Component {
    constructor(props){
        super(props)
        this.state=({
            label:props.label,
            example:props.example
        })
    }

    render() {
        return (
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>{this.props.label}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder={this.props.example}
                />
            </InputGroup>
        );
    }
}

export default InputTimeForm;