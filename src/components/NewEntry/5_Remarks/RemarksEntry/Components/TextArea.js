import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

const TextArea = (props) => {
    const { handleChange, values } = props

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
            onChange={handleChange}
            value={values.TextRemarks}
            />
        </>
    );
}

export default TextArea;