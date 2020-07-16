import React, { Component } from 'react';
import {Form, FormControl, Col, Row, FormCheck, Button} from 'react-bootstrap';
import NightTimeModal from './NightTimeModal';

class GenericForm extends Component {
    constructor(props){
        super(props)
        this.state=({
            example1:props.example1,
            example2:props.example2,
            label:props.label,
            checked:false,
            disabled1:true,
            disabled2:true,
            setShow:false
        })
        this.handleCheck=this.handleCheck.bind(this)
        this.handleShow=this.handleShow.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }

    handleCheck(checked){
        if(this.state.checked === false){
            this.setState({
                checked:true,
                disabled1:false,
                disabled2:true
            })
        }
        else{
            this.setState({
                checked:false,
                disabled1:true,
                disabled2:false
            })
        }
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
        return (
            <Form>
                <Row>
                    <Col>
                        <FormCheck
                        type='radio'
                        label='Equal to total time'
                        name={'TotalOrPart'+this.props.label}
                        onChange={this.handleCheck}
                        />
                    </Col>
                    <Col>
                        <FormControl
                        placeholder={this.props.example1}
                        disabled={this.state.disabled1}
                        />
                    </Col>
                    <Col>
                        <FormCheck
                        type='radio'
                        label='Part only of total time'
                        name={'TotalOrPart'+this.props.label}
                        onChange={this.handleCheck}
                        />
                    </Col>
                    <Col>
                        <FormControl
                        placeholder={this.props.example2}
                        disabled={this.state.disabled2}
                        />
                    </Col>
                    {this.props.label === 'PIC' ? <FormCheck type='checkbox' label='PICUS'/>:null}
                    {this.props.label === 'Night time' ? <Button size='sm' onClick={this.handleShow}>Calculate</Button>:null}
                </Row>
                <NightTimeModal setShow={this.state.setShow} handleClose={this.handleClose} timeOfTheDay={'day'}/>
            </Form>
        );
    }
}

export default GenericForm;