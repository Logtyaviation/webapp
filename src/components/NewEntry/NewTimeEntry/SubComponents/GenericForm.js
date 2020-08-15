import React, { Component } from 'react';
import {Form, Col, Row, Button} from 'react-bootstrap';
import NightTimeModal from './NightTimeModal';

class GenericForm extends Component {
    constructor(props){
        super(props)
        this.state=({
            setShow:false,
        })
        this.handleShow=this.handleShow.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }

    handleShow(){
        this.setState({
            setShow:true
        })
    }

    handleClose(){
        this.setState({
            setShow:false
        })
    }

    render() {
        const {label}=this.props
        return (
            <>
                <Row>
                    <Col>
                        <Form.Check
                        type='radio'
                        label='Equal to total time'
                        name={'TotalOrPart'+label+'Time'}
                        onChange={e => {
                            e.target.value = 'Total'+label+'Time'
                            this.props.handleChange(e)
                            const fakeEvent = {
                                target:{
                                    name:label+'Time',
                                    value:this.props.values.TotalBlockTime
                                }
                            }
                            this.props.handleChange(fakeEvent)
                            console.log(this.props.values)
                        }}                     
                        />
                    </Col>
                    <Col>
                        <Form.Check
                        type='radio'
                        label='Part only of total time'
                        name={'TotalOrPart'+label+'Time'}
                        onChange={e => {
                            e.target.value = 'Part'+label+'Time'
                            this.props.handleChange(e)
                            const fakeEvent = {
                                target:{
                                    name:label+'Time',
                                    value:''
                                }
                            }
                            this.props.handleChange(fakeEvent)
                            console.log(this.props.values)
                            console.log(this.props.errors)
                        }}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                        placeholder={this.props.example2}
                        disabled={this.props.values['TotalOrPart'+label+'Time'] !== 'Part'+label+'Time'}
                        id={label+'Time'}
                        name={label+'Time'}
                        value={
                            this.props.values['TotalOrPart'+label+'Time'] !== 'Part'+label+'Time' ? 
                            '':this.props.values[`${label}Time`]}
                        onChange={this.props.handleChange}
                        isValid={
                            this.props.values['TotalOrPart'+label+'Time'] === 'Part'+label+'Time' ? 
                            this.props.values[label+'Time'] && !this.props.errors[label+'Time']:false}
                        isInvalid={
                            this.props.values['TotalOrPart'+label+'Time'] !== 'Part'+label+'Time' ? 
                            false:!!this.props.errors[label+'Time']}
                        />
                        <Form.Control.Feedback type='invalid'>{this.props.errors[label+'Time']}</Form.Control.Feedback>
                    </Col>
                    {label === 'PIC' ? <Form.Check type='checkbox' label='PICUS'/>:null}
                    {label === 'Night time' ? <Button size='sm' onClick={this.handleShow}>Calculate</Button>:null}
                </Row>
                <NightTimeModal setShow={this.state.setShow} handleClose={this.handleClose} timeOfTheDay={'day'}/>
            </>
        );
    }
}

export default GenericForm;