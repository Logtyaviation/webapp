import React, { Component } from 'react';
import {Accordion, Card} from 'react-bootstrap'
import GenericForm from './GenericForm';

class GenericCard extends Component {
    constructor(props){
        super(props)
        this.state=({
            label:props.label,
            thekey:props.thekey,
            hourtype:props.hourtype
        })
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <Accordion.Toggle eventKey={this.props.thekey}>{this.props.label}</Accordion.Toggle>
                    &nbsp; Value is : {this.props.values[this.props.label + 'Time']}
                </Card.Header>
                <Accordion.Collapse eventKey={this.props.thekey}>
                    <Card.Body>
                        <GenericForm 
                        example1='Ex: 04:38' 
                        example2='Ex: 02:56' 
                        label={this.props.label}
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default GenericCard;