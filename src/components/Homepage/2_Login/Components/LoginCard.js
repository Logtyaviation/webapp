import React from 'react'
import { Col, Button, Card, Row} from 'react-bootstrap'
import LoginButton from './LoginButton'
import LoginForm from './LoginForm'

const LoginCard = (props) => {
    
    return(
        <Card>
            <Card.Header className='text-center'>Welcome to Logty</Card.Header>
            <Card.Body >
                <Card.Title className='text-center'>Please connect to your account to continue to log entries</Card.Title>
                <Row>
                    <Col md='2'/>
                    <Col>
                        <LoginForm
                        handleSubmit={props.handleSubmit}
                        handleChange={props.handleChange}
                        values={props.values}
                        errors={props.errors}/>
                    </Col>
                    <Col md='2'/>
                </Row>
                <Row>
                    <LoginButton
                    handleSubmit={props.handleSubmit}
                    handleChange={props.handleChange}
                    values={props.values}
                    errors={props.errors}
                    />
                </Row>
                <Card.Text className='text-center'>Or register now</Card.Text>
                <Row>
                    <Col md='5'/>
                    <Col md='2'>
                        <Button block variant='outline-info' href='/Register'>Register</Button>
                    </Col>
                    <Col md='5'/>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default LoginCard