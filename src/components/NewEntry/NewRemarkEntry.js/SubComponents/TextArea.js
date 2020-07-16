import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class TextArea extends Component {
    render() {
        return (
            <Form>
                <Form.Control 
                as='textarea' 
                placeholder='Ex :
                - Annual Line check performed by Chesley Sullenberg.
                - Go around due to ATC.' 
                rows='3'
                name='RemarkText'/>
            </Form>
        );
    }
}

export default TextArea;