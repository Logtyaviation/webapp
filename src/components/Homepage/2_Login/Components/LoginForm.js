import React from 'react'
import { Form, Col } from 'react-bootstrap'

const LoginForm = (props) => {

    return(
        <Form noValidate onSubmit={props.handleSubmit}>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    id='LoginEmail'
                    name='LoginEmail' 
                    type='email' 
                    placeholder='Please enter your email'
                    value={props.values.LoginEmail}
                    onChange={props.handleChange}/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    id='LoginPassword'
                    name='LoginPassword' 
                    type='password' 
                    placeholder='Please enter your password'
                    value={props.values.LoginPassword}
                    onChange={props.handleChange}/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Check label='Remember me'/>
            </Form.Row>
        </Form>
    )
}

export default LoginForm