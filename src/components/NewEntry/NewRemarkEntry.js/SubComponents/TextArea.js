import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class TextArea extends Component {
    render() {
        return (
            <>
                <Form.Control 
                as='textarea' 
                placeholder='Ex :
                - ILS CAT III performed.
                - Annual Line check performed by Chesley Sullenberg.
                - Go around due to ATC.
                - ...' 
                rows='5'
                name='TextRemarks'
                id='TextRemarks'
                onChange={this.props.handleChange}
                value={this.props.values.TextRemarks}
                />
            </>
        );
    }
}

export default TextArea;