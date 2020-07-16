import React, { Component } from 'react';
import {FormCheck, Col, FormControl, Button, InputGroup} from 'react-bootstrap'

class OwnersLine extends Component {

    constructor(props){
        super(props)
        this.state={
            LogbookHolderRank:props.LogbookHolderRank,
            LogbookHolderFirstName:props.LogbookHolderFirstName,
            LogbookHolderLastName:props.LogbookHolderLastName
        }
    }

    render() {
        return (
            <>
            <Col md={3}>
                <Button disabled>{this.state.LogbookHolderRank}</Button>
            </Col>
            <Col md={5}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>First</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder={this.state.LogbookHolderFirstName} readOnly/>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Last</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder={this.state.LogbookHolderLastName} readOnly/>
                </InputGroup>
            </Col>
            <Col md={2}>
                <FormCheck
                type='radio'
                name='ActedAsPIC'
                label='Acted as PIC'/>
            </Col>
            <Col md={2}>
            </Col>
            </>
        );
    }
}

export default OwnersLine;