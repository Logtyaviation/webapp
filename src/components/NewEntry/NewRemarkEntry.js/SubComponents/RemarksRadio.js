import React, { Component } from 'react';
import { Form, Row } from 'react-bootstrap';

class RemarksRadio extends Component {
    render() {
        return (
            <Form>
                <Row>
                    <Form.Check
                    type='checkbox'
                    label='Line-check'
                    name='RemarkLineCheck'
                    id='RemarkLineCheck'
                    onChange={this.props.handleChange}
                    />    
                </Row>
                <Row>
                    <Form.Check
                    type='checkbox'
                    label='Autoland'
                    name='RemarkAutoland'
                    id='RemarkAutoland'
                    onChange={this.props.handleChange}
                    />    
                </Row>
                <Row>
                    <Form.Check
                    type='checkbox'
                    label='Monitored approach'
                    name='RemarkMonitoredApproach'
                    id='RemarkMonitoredApproach'
                    onChange={this.props.handleChange}
                    />    
                </Row>
                <Row>
                    <Form.Check
                    type='checkbox'
                    label='Go-around'
                    name='RemarkGoAround'
                    onChange={this.props.handleChange}
                    />    
                </Row>
                <Row>
                    <Form.Check
                    type='checkbox'
                    label='Diversion'
                    name='RemarkDiversion'
                    onChange={this.props.handleChange}
                    />    
                </Row>
            </Form>
        );
    }
}

export default RemarksRadio;