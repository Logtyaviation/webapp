import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

class SEMEandSPMP extends Component {
    render() {
        return (
            <>
            <Row>
                <Col md={4}>
                Single or multi engine
                    <Form.Check
                    type='radio'
                    label='Single engine'
                    name='SEorME'
                    id='SEAircraft'
                    onChange={e => {
                        e.target.value = 'SEAircraft'
                        this.props.handleChange(e)
                    }}
                    checked={this.props.values.SEorME === 'SEAircraft' ? true:false}
                    isValid={this.props.values.SEorME && !this.props.errors.SEorME}
                    isInvalid={!!this.props.errors.SEorME}
                    feedback={this.props.errors.SEorME}
                    />
                    <Form.Check
                    type='radio'
                    label='Multi engine'
                    name='SEorME'
                    id='MEAircraft'
                    onChange={e => {
                        e.target.value = 'MEAircraft'
                        this.props.handleChange(e)
                    }}
                    checked={this.props.values.SEorME === 'MEAircraft' ? true:false}
                    isValid={this.props.values.SEorME && !this.props.errors.SEorME}
                    isInvalid={!!this.props.errors.SEorME}
                    />
                </Col>
                <Col>
                Single or multi pilot
                    <Form.Check
                    type='radio'
                    label='Single pilot'
                    name='SPorMP'
                    id='SPAircraft'
                    onChange={e => {
                        e.target.value = 'SPAircraft'
                        this.props.handleChange(e)
                    }}
                    checked={this.props.values.SPorMP === 'SPAircraft' ? true:false}
                    isValid={this.props.values.SPorMP && !this.props.errors.SPorMP}
                    isInvalid={!!this.props.errors.SPorMP}
                    feedback={this.props.errors.SPorMP}
                    />
                    <Form.Check
                    type='radio'
                    label='Multi pilot'
                    name='SPorMP'
                    id='MPAircraft'
                    onChange={e => {
                        e.target.value = 'MPAircraft'
                        this.props.handleChange(e)
                    }}
                    checked={this.props.values.SPorMP === 'MPAircraft' ? true:false}
                    isValid={this.props.values.SPorMP && !this.props.errors.SPorMP}
                    isInvalid={!!this.props.errors.SPorMP}
                    />
                </Col>
            </Row>
            </>
        );
    }
}

export default SEMEandSPMP;