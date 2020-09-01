import React, { Component } from 'react';
import {Form, Col, Row, Button} from 'react-bootstrap';
import ModalNightTimeCalculator from './ModalNightTimeCalculator';

class FormLabelTotalOrPartTimeGeneric extends Component {
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
        const {label, handleChange, values, errors, example2} = this.props
        const isPartTime = values[`TotalOrPart${label}Time`] === `Part${label}Time`;
        return (
            <>
                <Row>
                    <Col>
                        <Form.Check
                        type='radio'
                        label='Equal to total time'
                        name={`TotalOrPart${label}Time`}
                        onChange={async (e) => {
                            e.target.value = `Total${label}Time`
                            await handleChange(e)
                            handleChange({
                                target:{
                                    name:`${label}Time`,
                                    value:values.TotalBlockTime
                                }
                            })
                        }}
                        />
                    </Col>
                    <Col>
                        <Form.Check
                        type='radio'
                        label='Part only of total time'
                        name={`TotalOrPart${label}Time`}
                        onChange={async (e) => {
                            e.target.value = `Part${label}Time`
                            await handleChange(e)
                            handleChange({
                                target: {
                                    name:`${label}Time`,
                                    value:''
                                }
                            })
                        }}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                        placeholder={example2}
                        disabled={!isPartTime}
                        id={`${label}Time`}
                        name={`${label}Time`}
                        value={isPartTime ? values[`${label}Time`] : ''}
                        onChange={handleChange}
                        isValid={isPartTime ? values[label+'Time'] && !errors[label+'Time'] : false}
                        isInvalid={isPartTime ? !!errors[label+'Time'] : false}
                        />
                        <Form.Control.Feedback type='invalid'>{errors[label+'Time']}</Form.Control.Feedback>
                    </Col>
                    {label === 'PIC' ? <Form.Check
                        type='checkbox'
                        label='PICUS'
                        name='PICUSTime'
                        id='PICUSTime'
                        onChange={handleChange}/>:null}
                    {label === 'Night' ? <Button size='sm' onClick={this.handleShow}>Calculate</Button>:null}
                </Row>
                <ModalNightTimeCalculator setShow={this.state.setShow} handleClose={this.handleClose} timeOfTheDay={'day'}/>
            </>
        );
    }
}

export default FormLabelTotalOrPartTimeGeneric;
