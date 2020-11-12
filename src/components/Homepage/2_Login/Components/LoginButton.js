import React from 'react'
import { Col, Button } from 'react-bootstrap'

const LoginButton = (props) => {
    
    return(
        <>
            <Col md='4'/>
            <Col md='4'>
                <Button block onClick={props.handleSubmit}>Login</Button>
            </Col>
            <Col md='4'/>
        </>
    )
}

export default LoginButton