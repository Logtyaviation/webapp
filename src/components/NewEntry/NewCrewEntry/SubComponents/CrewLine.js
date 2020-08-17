import React, { Component } from 'react';
import {Col, Form, Row, InputGroup} from 'react-bootstrap'

class NewCrewLine extends Component {

    render() {
        return (
            <>
            <Row>
                <Col md={9}>
                    <Row>
                        <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>First</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control 
                        placeholder='Ex: Neil'
                        name='CrewFirstName'
                        id='CrewFirstName'
                        onChange={this.props.handleChange}
                        isValid={this.props.values.CrewFirstName && !this.props.errors.CrewFirstName}
                        isInvalid={!!this.props.errors.CrewFirstName}
                        />
                        <Form.Control.Feedback type='invalid'>{this.props.errors.CrewFirstName}</Form.Control.Feedback>
                    </InputGroup>
                        </Col>
                        <Col>
                    <InputGroup>    
                        <InputGroup.Prepend>
                            <InputGroup.Text>Last</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control 
                        placeholder='Ex: Armstrong'
                        name='CrewLastName'
                        id='CrewLasttName'
                        onChange={this.props.handleChange}
                        isValid={this.props.values.CrewLastName && !this.props.errors.CrewLastName}
                        isInvalid={!!this.props.errors.CrewLastName}
                        />
                        <Form.Control.Feedback type='invalid'>{this.props.errors.CrewLastName}</Form.Control.Feedback>
                    </InputGroup>
                        </Col>
                    </Row>                        
                </Col>
                <Col md={3}>
                    <Form.Check
                    type='radio'
                    name='ActedAsPIC'
                    label='Acted as PIC'/>
                </Col>
            </Row>
            </>
        );
    }
}

export default NewCrewLine;