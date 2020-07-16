import React, { Component } from 'react';
import { Form, Row } from 'react-bootstrap';

class RemarksRadio extends Component {
    render() {
        return (
            <Form>
                <Row>
                    <Form.Check
                    type='checkbox'
                    label='General remark'
                    name='RemarkGeneral'
                    />    
                </Row>
                <Row>
                    <Form.Check
                    type='checkbox'
                    label='Line-check'
                    name='RemarkLineCheck'
                    />    
                </Row>
                <Row>
                    <Form.Check
                    type='checkbox'
                    label='Go-around'
                    name='RemarkGoAround'
                    />    
                </Row>
                <Row>
                    <Form.Check
                    type='checkbox'
                    label='Diversion'
                    name='RemarkDiversion'
                    />    
                </Row>
            </Form>
        );
    }
}

export default RemarksRadio;