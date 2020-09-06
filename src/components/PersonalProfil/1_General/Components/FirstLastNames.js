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
            id='HolderLastName'
            name='HolderLastName'
            placeholder='Ex: Travolta'
            value={values.HolderLastName}
            onChange={handleChange}
            isValid={values.HolderLastName && !errors.HolderLastName}
            isInvalid={!!errors.HolderLastName}
            />
            <Form.Control
            name='HolderLastName2'
            id='HolderLastName2'
            placeholder='Other last name(s) (Optional)'
            onChange={handleChange}
            value={values.HolderLastName2}
            isValid={values.HolderLastName2 && !errors.HolderLastName2}
            isInvalid={!!errors.HolderLastName2}
            />
            <Form.Control.Feedback type='invalid'>
                {errors.HolderLastName}
                {errors.HolderLastName2 === '' ? null:errors.HolderLastName2}
            </Form.Control.Feedback>
        </InputGroup>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>First name(s)</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
            name='HolderFirstName'
            placeholder='Ex: John'
            id='HolderFirstName'
            value={values.HolderFirstName}
            onChange={handleChange}
            isValid={values.HolderFirstName && !errors.HolderFirstName}
            isInvalid={!!errors.HolderFirstName}
            />
            <Form.Control
            name='HolderFirstName2'
            id='HolderFirstName2'
            placeholder='Other first name(s) (Optional)'
            onChange={handleChange}
            value={values.HolderFirstName2}
            isValid={values.HolderFirstName2 && !errors.HolderFirstName2}
            isInvalid={!!errors.HolderFirstName2}
            />
            <Form.Control.Feedback type='invalid'>
                {errors.HolderFirstName}
                {errors.HolderFirstName2 === '' ? null:errors.HolderFirstName2}
            </Form.Control.Feedback>            
        </InputGroup>

    </>
    );
}


export default FirstLastNames;