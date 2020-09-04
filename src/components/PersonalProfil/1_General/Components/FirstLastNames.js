import React from 'react';
import {Form, InputGroup } from 'react-bootstrap';

const FirstLastNames = (props) => {
    const {handleChange, errors, values} = props

    return (
    <>
    <Form.Label>Name(s)</Form.Label>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>Last name(s)</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
            id='LogbookHolderLastName'
            name='LogbookHolderLastName'
            placeholder='Ex: Travolta'
            value={values.LogbookHolderLastName}
            onChange={handleChange}
            isValid={values.LogbookHolderLastName && !errors.LogbookHolderLastName}
            isInvalid={!!errors.LogbookHolderLastName}
            />
            <Form.Control
            name='CTDLogbookHolderLastName'
            id='CTDLogbookHolderLastName'
            placeholder='Other last name(s) (Optional)'
            onChange={handleChange}
            value={values.CTDLogbookHolderLastName}
            isValid={values.CTDLogbookHolderLastName && !errors.CTDLogbookHolderLastName}
            isInvalid={!!errors.CTDLogbookHolderLastName}
            />
            <Form.Control.Feedback type='invalid'>
                {errors.LogbookHolderLastName}
                {errors.CTDLogbookHolderLastName === '' ? null:errors.CTDLogbookHolderLastName}
            </Form.Control.Feedback>
        </InputGroup>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>First name(s)</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
            name='LogbookHolderFirstName'
            placeholder='Ex: John'
            id='LogbookHolderFirstName'
            value={values.LogbookHolderFirstName}
            onChange={handleChange}
            isValid={values.LogbookHolderFirstName && !errors.LogbookHolderFirstName}
            isInvalid={!!errors.LogbookHolderFirstName}
            />
            <Form.Control
            name='CTDLogbookHolderFirstName'
            id='CTDLogbookHolderFirstName'
            placeholder='Other first name(s) (Optional)'
            onChange={handleChange}
            value={values.CTDLogbookHolderFirstName}
            isValid={values.CTDLogbookHolderFirstName && !errors.CTDLogbookHolderFirstName}
            isInvalid={!!errors.CTDLogbookHolderFirstName}
            />
            <Form.Control.Feedback type='invalid'>
                {errors.LogbookHolderFirstName}
                {errors.CTDLogbookHolderFirstName === '' ? null:errors.CTDLogbookHolderFirstName}
            </Form.Control.Feedback>            
        </InputGroup>

    </>
    );
}


export default FirstLastNames;