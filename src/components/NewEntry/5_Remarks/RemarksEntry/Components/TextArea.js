import React from 'react';
import { Form } from 'react-bootstrap';

const TextArea = (props) => {
    const { handleChange, values, errors } = props

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
            isInvalid={!!errors.TextRemarks}
            />
            <Form.Control.Feedback type='invalid'>{errors.TextRemarks}</Form.Control.Feedback>
        </>
    );
}

export default TextArea;