import React, { Component } from 'react';
import {FormCheck, Col, FormControl, InputGroup, Row} from 'react-bootstrap'

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
                <Col md={2}>
                   {this.state.LogbookHolderRank}
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={9}>
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
                        <Col md={3}>
                            <FormCheck
                            type='radio'
                            name='ActedAsPIC'
                            label='Acted as PIC'/>
                        </Col>
                    </Row>
                </Col>
            </>
        );
    }
}

export default OwnersLine;